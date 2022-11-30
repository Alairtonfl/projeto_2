import User from '@User/Entity/User';
import FindUserByIdRepository from '@User/Repositories/FindUserByIdRepository';
import UpdateUserRepository from '@User/Repositories/UpdateUserRepository';
import UserValidation from '@User/Validations/UserValidation';

interface IUserRequest {
    id: number;
    name: string;
    password: string;
    avatar: string;
    email: string;
}

export default new class CreateUserService {
  async execute({ name, email, password, avatar, id }: IUserRequest): Promise<User | Error> {
    const user = await FindUserByIdRepository.run(id);

    const validate = UserValidation.validate(user);
    if(validate instanceof Error) { return validate; }
    
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    user.avatar = avatar || user.avatar;
    const model = await UpdateUserRepository.run(user);
    return model;
  }
}();
