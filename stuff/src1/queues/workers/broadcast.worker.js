import { broadcastQueue } from '../broadcast.queue.js';
import { SessionManager } from '../../whatsapp/sessionManager.js';
import { AntiBanSystem } from '../../whatsapp/antiBanSystem.js';

const sessionManager = new SessionManager();
const antiBanSystem = new AntiBanSystem();

broadcastQueue.process(async job => {
  const { sessionId, contacts, message } = job.data;

  const socket = sessionManager.getSession(sessionId);

  for (const contact of contacts) {
    await antiBanSystem.applyDelay();

    await socket.sendMessage(contact, {
      text: message
    });
  }

  return true;
});