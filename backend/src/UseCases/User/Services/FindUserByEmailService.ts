import User from '@User/Entity/User';
import FindUserByEmailRepository from '@User/Repositories/FindUserByEmailRepository';

export default new class FindUserByEmailService {
  async execute(email: string): Promise<User | Error> {
    return FindUserByEmailRepository.run(email);
  }
}();
