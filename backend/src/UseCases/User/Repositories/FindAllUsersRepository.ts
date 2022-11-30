import User from '@User/Entity/User';
import { getRepository } from 'typeorm';

export default new class FindAllUsersRepository {
  async run(): Promise<User[]> {
    const repository = getRepository(User);
    const model = await repository.find({
      relations: ['stats'],
    });
    return model;
  }
}();
