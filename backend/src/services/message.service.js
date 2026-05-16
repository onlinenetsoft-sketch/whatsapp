import { MessageRepository } from '../repositories/message.repository.js';
  const messageRepository = new MessageRepository();
  export class MessageService {
    async saveMessage(data) {
      return messageRepository.create(data);
    }
    async getChat(contactId) {
      return messageRepository.getConversation(contactId);
  }
}
