export class ReconnectHandler {
  async reconnect(socket, sessionId) {
    console.log(`Reconnecting session: ${sessionId}`);

    try {
      await socket.ws.close();
    } catch (error) {
      console.error(error.message);
    }
  }
}