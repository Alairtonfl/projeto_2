import User from '@User/Entity/User';
import { getRepository } from 'typeorm';

export default new class FindUserByEmailRepository {
  async run(email: string): Promise<User> {
    const repository = getRepository(User);
    const model: User = await repository.findOne({
      where: {
        email,
      },
      relations: ['stats'],
    });
    return model;
  }
}();
