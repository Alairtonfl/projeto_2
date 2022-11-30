import Question from '@Question/Entity/Question';
import { getRepository } from 'typeorm';

export default new class FindQuestionsByUserIdRepository {
  async run(userId: number) : Promise<Question[]> {
    const repository = getRepository(Question);
    const model = await repository.find({
      relations: ['answers'],
      where: {
        userId,
      },
    });
    return model;
  }
}();
