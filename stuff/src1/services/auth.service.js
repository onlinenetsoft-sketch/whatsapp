import bcrypt from 'bcryptjs';
  import jwt from 'jsonwebtoken';
  import { UserRepository } from '../repositories/user.repository.js';
  const userRepository = new UserRepository();
  export class AuthService {
    async register(data) {
      const existingUser = await userRepository.findByEmail(data.email);
      if (existingUser) {
        throw new Error('Email already registered');
}
      const hashedPassword = await bcrypt.hash(data.password, 12);
      const user = await userRepository.create({
        ...data,
        password: hashedPassword
      });
return user;
      }
    async login(email, password) {
      const user = await userRepository.findByEmail(email);
      if (!user) {
        throw new Error('Invalid credentials');
}
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
}
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
);
      return {
        user,
        token
}; }
}