import { Request, Response } from 'express';
import FindUserByEmailRepository from '@User/Repositories/FindUserByEmailRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default new class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await FindUserByEmailRepository.run(email);

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({
      id: user.id,
    }, process.env.SECRET_KEY , {
      expiresIn: '1d',
    });
    delete user.password;
    return res.json({
      user,
      token,
    });
  }
}();
