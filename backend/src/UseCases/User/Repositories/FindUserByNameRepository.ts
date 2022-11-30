import User from '@User/Entity/User';
import { getRepository } from 'typeorm';

export default new class FindUserByNameRepository {
  async run(name: string): Promise<User> {
    const repository = getRepository(User);
    const model: User = await repository.findOne({
      name,
    }, {
      relations: ['stats', 'questions'],
    });
    return model;
  }
}();
