import User from '@User/Entity/User';
import FindUserByNameRepository from '@User/Repositories/FindUserByNameRepository';

export default new class FindUserByNameService {
  async execute(name: string): Promise<User | Error> {
    return FindUserByNameRepository.run(name);
  }
}();
