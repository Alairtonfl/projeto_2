import User from '@User/Entity/User';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import CreateUserService from '../Services/CreateUserService';

export default new class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, avatar } = req.body;
    const result = await CreateUserService.execute({
      name, email, password, avatar,
    });

    if(result instanceof User){
      const token = jwt.sign({
        id: result.id,
      }, process.env.SECRET_KEY , {
        expiresIn: '1d',
      });
      delete result.password;
      return res.json({
        result,
        token,
      });
    }
    
    if (result instanceof Error) { return res.status(400).json(result.message); }
  }
}();
