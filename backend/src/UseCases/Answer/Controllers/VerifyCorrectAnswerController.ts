import VerifyCorrectAnswerService from '@Answer/Services/VerifyCorrectAnswerService';
import { Request, Response } from 'express';

export default new class VerifyCorrectAnswerController {
  async handle(req: Request, res: Response) {
    const {id} = req.body;
    const result = await VerifyCorrectAnswerService.execute(id);
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('User not found.'); }

    return res.send(result);
  }
}();
