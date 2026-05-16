import prisma from '../config/db.js';
  export class MessageRepository {
    async create(data) {
      return prisma.message.create({ data });
    }
    async getConversation(contactId) {
      return prisma.message.findMany({
        where: { contactId },
        orderBy: {
          createdAt: 'asc'
        }
}); }
    async markAsRead(contactId) {
      return prisma.message.updateMany({
        where: {
          contactId,
          status: 'DELIVERED'
}, data: {
          status: 'READ'
        }
}); }
}
