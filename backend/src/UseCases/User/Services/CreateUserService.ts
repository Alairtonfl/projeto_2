import CreateUserStatsRepository from '@UserStats/Repositories/CreateUserStatsRepository';
import User from '@User/Entity/User';
import CreateUserRepository from '@User/Repositories/CreateUserRepository';
import UserValidation from '@User/Validations/UserValidation';

interface IUserRequest {
    name: string;
    password: string;
    avatar: string;
    email: string;
}

export default new class CreateUserService {
  async execute({ name, email, password, avatar }: IUserRequest): Promise<User | Error> {
    const user = new User();
    Object.assign(user, {
      name, email, password, avatar,
    });

    
    
    const validate = UserValidation.validate(user);
    if(validate instanceof Error) { return validate; }

    const model = await CreateUserRepository.run(user);
    const stats = await CreateUserStatsRepository.run(model.id);
    model.stats = stats;
    return model;
  }
}();
