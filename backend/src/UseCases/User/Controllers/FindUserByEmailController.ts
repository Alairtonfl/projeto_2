import FindUserByEmailService from '@User/Services/FindUserByEmailService';
import { Request, Response } from 'express';

export default new class FindUserByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;
    const result = await FindUserByEmailService.execute(email);
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('Usuario não encontrado.'); }

    return res.send(result);
  }
}();
