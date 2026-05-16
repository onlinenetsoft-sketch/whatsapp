import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState
} from '@whiskeysockets/baileys';

import { Boom } from '@hapi/boom';

const sessions = new Map();

export class SessionManager {
  async createSession(sessionId) {
    const { state, saveCreds } = await useMultiFileAuthState(
      `sessions/${sessionId}`
    );

    const socket = makeWASocket({
      auth: state,
      printQRInTerminal: false,
      browser: ['OnlineNetSoft', 'Chrome', '1.0.0']
    });

    socket.ev.on('creds.update', saveCreds);

    socket.ev.on('connection.update', update => {
      const { connection, lastDisconnect } = update;

      if (connection === 'close') {
        const shouldReconnect =
          new Boom(lastDisconnect?.error)?.output?.statusCode !==
          DisconnectReason.loggedOut;

        if (shouldReconnect) {
          this.createSession(sessionId);
        }
      }
    });

    sessions.set(sessionId, socket);

    return socket;
  }

  getSession(sessionId) {
    return sessions.get(sessionId);
  }

  removeSession(sessionId) {
    sessions.delete(sessionId);
  }
}