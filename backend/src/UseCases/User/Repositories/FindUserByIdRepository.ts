import User from '@User/Entity/User';
import { getRepository } from 'typeorm';

export default new class FindUserByIdRepository {
  async run(id: number): Promise<User> {
    const repository = getRepository(User);
    const model: User = await repository.findOne({
      id,
    }, {
      relations: ['stats', 'questions'],
    });
    return model;
  }
}();
