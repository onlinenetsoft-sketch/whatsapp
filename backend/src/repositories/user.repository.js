import prisma from '../config/db.js';
  export class UserRepository {
    async create(data) {
      return prisma.user.create({ data });
    }
    async findById(id) {
      return prisma.user.findUnique({
        where: { id },
        include: {
          role: true,
          subscription: true,
          workspace: true
     
  } });
}
    async findByEmail(email) {
      return prisma.user.findUnique({
        where: { email }
      });
}
    async update(id, data) {
      return prisma.user.update({
where: { id },
data });
}
    async delete(id) {
      return prisma.user.delete({
        where: { id }
      });
} }