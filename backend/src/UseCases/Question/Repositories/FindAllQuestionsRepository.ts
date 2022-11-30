import Question from '@Question/Entity/Question';
import { getRepository } from 'typeorm';

export default new class FindAllQuestionsRepository {
  async run(): Promise<Question[]> {
    const repository = getRepository(Question);
    const model = await repository.find({
      relations: ['answers'],
    });
    return model;
  }
}();
