import UserStats from '@UserStats/Entity/UserStats';
import { getRepository } from 'typeorm';

export default new class CreateUserStatsRepository {
  async run(id: number): Promise<UserStats> {
    const repository = getRepository(UserStats);
    const userStats = new UserStats();
    userStats.userId = id;
    const model = await repository.save(userStats);
    return model;
  }
}();
