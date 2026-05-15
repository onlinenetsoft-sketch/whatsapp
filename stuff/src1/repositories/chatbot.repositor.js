import prisma from '../config/db.js';
  export class ChatbotRepository {
    async create(data) {
      return prisma.chatbot.create({ data });
    }
       
      async findByWorkspace(workspaceId) {
      return prisma.chatbot.findMany({
        where: { workspaceId }
      });
}
    async update(id, data) {
      return prisma.chatbot.update({
where: { id },
data });
 } 
}