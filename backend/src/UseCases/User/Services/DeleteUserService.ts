import User from '@User/Entity/User';
import DeleteUserRepository from '@User/Repositories/DeleteUserRepository';
import FindUserByIdRepository from '@User/Repositories/FindUserByIdRepository';

export default new class CreateUserService {
  async execute(id: number): Promise<User | Error> {
    const user = await FindUserByIdRepository.run(id);
    const model = await DeleteUserRepository.run(user);
    return model;
  }
}();
