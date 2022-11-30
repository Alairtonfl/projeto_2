import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: number;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const { id } = data as TokenPayload;
    req.userId = id;
    return next();
  } catch (e) {
    return res.sendStatus(401);
  }
}
