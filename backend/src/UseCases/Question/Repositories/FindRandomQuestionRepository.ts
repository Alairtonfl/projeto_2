import Question from '@Question/Entity/Question';
import { getRepository, createQueryBuilder } from 'typeorm';

export default new class FindRandomQuestionRepository {
  async run(): Promise<Question> {
    const repository = getRepository(Question);

    const model = await repository.findOne({
      relations: ['answers'],
      order:{
        id: "DESC"
      }
    },
    );
    return model;
  }
}();
