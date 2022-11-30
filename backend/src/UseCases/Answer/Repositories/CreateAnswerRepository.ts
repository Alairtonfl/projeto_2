import { getRepository } from 'typeorm';
import Answer from '@Answer/Entity/Answer';

export default new class CreateAnswerRepository {
  async run(entity: Answer): Promise<Answer> {
    const repository = getRepository(Answer);
    const answer: Answer = await repository.save(entity);
    return answer;
  }
}();
