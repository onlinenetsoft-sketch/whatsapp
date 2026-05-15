export class StatusHandler {
  async handleAck(update) {
    console.log('Message ACK:', update);

    return true;
  }
}