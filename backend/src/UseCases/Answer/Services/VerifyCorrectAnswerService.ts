import Answer from "@Answer/Entity/Answer";
import VerifyCorrectAnswerRepository from "@Answer/Repositories/VerifyCorrectAnswerRepository";

export default new class VerifyCorrectAnswerService {
  async execute(id: number): Promise<Answer | Error> {
    const model = await VerifyCorrectAnswerRepository.run(id);
    
    if(model.correct)
        return model;

    return new Error("Answer incorrect")
  }
}();