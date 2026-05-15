export class ContactSync {
  async sync(contacts) {
    return contacts.map(contact => ({
      id: contact.id,
      name: contact.name,
      phone: contact.notify
    }));
  }
}