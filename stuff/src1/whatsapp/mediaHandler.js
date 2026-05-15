import fs from 'fs';

export class MediaHandler {
  async sendImage(socket, jid, path, caption = '') {
    return socket.sendMessage(jid, {
      image: fs.readFileSync(path),
      caption
    });
  }

  async sendDocument(socket, jid, path, fileName) {
    return socket.sendMessage(jid, {
      document: fs.readFileSync(path),
      fileName
    });
  }
}