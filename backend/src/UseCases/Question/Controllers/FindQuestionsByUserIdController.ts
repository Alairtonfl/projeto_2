import FindQuestionsByUserIdService from '@Question/Services/FindQuestionsByUserIdService';
import { Request, Response } from 'express';

export default new class FindQuestionsByUserIdController {
  async handle(req: Request, res: Response) {
    const { userId } = req;
    const result = await FindQuestionsByUserIdService.execute(userId);
    if (result == null) { return res.send('Questions not found.'); }

    return res.send(result);
  }
}();
