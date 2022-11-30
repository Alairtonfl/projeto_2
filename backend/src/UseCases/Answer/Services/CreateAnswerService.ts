import CreateAnswerRepository from '@Answer/Repositories/CreateAnswerRepository';
import Answer from '@Answer/Entity/Answer';

interface IAnswerRequest {
    answer: string;
    questionId: number;
    correct: boolean;
}

export default new class CreateQuestionService {
  async execute({ answer, questionId, correct }: IAnswerRequest): Promise<Answer | Error> {
    const questions = new Answer();
    Object.assign(questions, {
      answer, questionId, correct,
    });
    const model = await CreateAnswerRepository.run(questions);
    return model;
  }
}();
