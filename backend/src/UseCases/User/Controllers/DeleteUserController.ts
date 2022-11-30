import DeleteUserService from '@User/Services/DeleteUserService';
import { Request, Response } from 'express';

export default new class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.userId;
    
    const result = DeleteUserService.execute(id);
    if (result instanceof Error) { return res.status(400).json(result.message); }

    return res.send(result);
  }
}();
