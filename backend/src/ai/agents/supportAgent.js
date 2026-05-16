import { AIService } from '../aiService.js';

const aiService = new AIService();

export class SupportAgent {
  async reply(message) {
    return aiService.generateReply(message);
  }
}