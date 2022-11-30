import { getRepository } from 'typeorm';
import User from '../Entity/User';

export default new class UpdateUserRepository {
  async run(entity: User): Promise<User> {
    const repository = getRepository(User);
    const update: User = await repository.findOne(entity.id);
    update.avatar = entity.avatar;
    update.email = entity.email;
    update.name = entity.name;
    const model = await repository.save(update);
    return model;
  }
}();
