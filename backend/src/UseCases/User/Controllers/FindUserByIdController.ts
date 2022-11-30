import FindUserByIdService from '@User/Services/FindUserByIdService';
import { Request, Response } from 'express';

export default new class FindUserByIdController {
  async handle(req: Request, res: Response) {
    const id = req.userId;
    const result = await FindUserByIdService.execute(id);
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('User not found.'); }

    return res.send(result);
  }
}();
