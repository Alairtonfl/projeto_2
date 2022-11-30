import { getRepository } from 'typeorm';
import User from '../Entity/User';

export default new class CreateUserRepository {
  async run(entity: User): Promise<User> {
    const repository = getRepository(User);
    const user: User = await repository.save(entity);
    return user;
  }
}();
