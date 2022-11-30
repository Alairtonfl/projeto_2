import { getRepository } from 'typeorm';
import User from '../Entity/User';

export default new class DeleteUserRepository {
  async run(entity: User): Promise<User> {
    const repository = getRepository(User);
    return repository.remove(entity);
  }
}();
