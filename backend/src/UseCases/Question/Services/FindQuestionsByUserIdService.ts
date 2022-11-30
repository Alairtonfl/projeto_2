import Question from '@Question/Entity/Question';
import FindQuestionsByUserIdRepository from '@Question/Repositories/FindQuestionsByUserIdRepository';

export default new class FindQuestionsByUserIdService {
  async execute(userId: number): Promise<Question[] | Error> {
    return FindQuestionsByUserIdRepository.run(userId);
  }
}();
