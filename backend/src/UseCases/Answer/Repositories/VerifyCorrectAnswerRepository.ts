import Answer from '@Answer/Entity/Answer';
import { getRepository } from 'typeorm';

export default new class VerifyCorrectAnswerRepository {
  async run(id: number): Promise<Answer> {
    const repository = getRepository(Answer);
    const model = await repository.findOne({where: {
        id
    }});
    return model;
  }
}();
