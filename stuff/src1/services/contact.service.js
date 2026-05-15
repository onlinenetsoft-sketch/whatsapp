import { ContactRepository } from '../repositories/contact.repository.js';
  const contactRepository = new ContactRepository();
  export class ContactService {
    async createContact(data) {
      return contactRepository.create(data);
    }
    async importContacts(data) {
      return contactRepository.bulkCreate(data);
}
    async getContacts(workspaceId) {
      return contactRepository.findAll(workspaceId);
  }
}