import prisma from '../config/db.js';
  export class ContactRepository {
    async create(data) {
      return prisma.contact.create({ data });
    }
    async findAll(workspaceId) {
      return prisma.contact.findMany({
        where: { workspaceId }
      });
}
    async bulkCreate(data) {
      return prisma.contact.createMany({
data,
        skipDuplicates: true
      });
    }
    async delete(id) {
      return prisma.contact.delete({
     10
          where: { id }
      });
   } 
}