import FindRamdomQuestionService from '@Question/Services/FindRamdomQuestionService';
import { Request, Response } from 'express';

export default new class FindAllQuestionsController {
  async handle(req: Request, res: Response) {
    const result = await FindRamdomQuestionService.execute();

    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('Questions not found.'); }

    return res.send(result);
  }
}();
