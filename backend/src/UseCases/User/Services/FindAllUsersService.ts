import User from '@User/Entity/User';
import FindAllUsersRepository from '@User/Repositories/FindAllUsersRepository';

export default new class FindAllUsersService {
  async execute(): Promise<User[] | Error> {
    return FindAllUsersRepository.run();
  }
}();
