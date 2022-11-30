import UpdateUserService from '@User/Services/UpdateUserService';
import { Request, Response } from 'express';

export default new class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, avatar } = req.body;
    const id = req.userId;

    const result = UpdateUserService.execute({
      name, email, password, avatar, id,
    });

    if (result instanceof Error) { return res.status(400).json(result.message); }

    return res.send(result);
  }
}();
