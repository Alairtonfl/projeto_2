import Question from '@Question/Entity/Question';
import FindRandomQuestionRepository from '@Question/Repositories/FindRandomQuestionRepository';

export default new class FindAllQuestionsService {
  async execute(): Promise<Question | Error> {
    return FindRandomQuestionRepository.run();
  }
}();
