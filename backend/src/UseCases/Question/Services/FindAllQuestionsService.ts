import Question from '@Question/Entity/Question';
import FindAllQuestionsRepository from '@Question/Repositories/FindAllQuestionsRepository';

export default new class FindAllQuestionsService {
  async execute(): Promise<Question[] | Error> {
    return FindAllQuestionsRepository.run();
  }
}();
