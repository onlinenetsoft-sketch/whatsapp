export class TypingSimulator {
  async simulate(socket, jid, duration = 3000) {
    await socket.sendPresenceUpdate('composing', jid);

    await new Promise(resolve => setTimeout(resolve, duration));

    await socket.sendPresenceUpdate('paused', jid);
  }
}