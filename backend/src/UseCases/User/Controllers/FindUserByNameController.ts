import FindUserByNameService from '@User/Services/FindUserByNameService';
import { Request, Response } from 'express';

export default new class FindUserByNameController {
  async handle(req: Request, res: Response) {
    const { name } = req.params;
    const result = await FindUserByNameService.execute(name);
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('User not found.'); }

    return res.send(result);
  }
}();
