import { getRepository } from 'typeorm';
import Question from '@Question/Entity/Question';

export default new class CreateQuestionRepository {
  async run(entity: Question): Promise<Question> {
    const repository = getRepository(Question);
    const question: Question = await repository.save(entity);
    return question;
  }
}();
