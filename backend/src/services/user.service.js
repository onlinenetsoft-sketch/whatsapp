import { UserRepository } from '../repositories/user.repository.js';
  const userRepository = new UserRepository();
  export class UserService {
    async getProfile(userId) {
      return userRepository.findById(userId);
    }
    async updateProfile(userId, data) {
      return userRepository.update(userId, data);
  }
}