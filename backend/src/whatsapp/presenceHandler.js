export class PresenceHandler {
  async setTyping(socket, jid) {
    return socket.sendPresenceUpdate('composing', jid);
  }

  async setOnline(socket, jid) {
    return socket.sendPresenceUpdate('available', jid);
  }
}