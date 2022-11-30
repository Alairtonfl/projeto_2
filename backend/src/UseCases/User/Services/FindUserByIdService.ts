import User from '@User/Entity/User';
import FindUserByIdRepository from '@User/Repositories/FindUserByIdRepository';

export default new class FindUserByIdService {
  async execute(id: number): Promise<User | Error> {
    return FindUserByIdRepository.run(id);
  }
}();
