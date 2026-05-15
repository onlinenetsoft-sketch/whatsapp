export class MessageHandler {
  async handleIncoming(message) {
    console.log('Incoming message:', message);

    return {
      success: true
    };
  }

  async sendText(socket, jid, text) {
    return socket.sendMessage(jid, {
      text
    });
  }
}