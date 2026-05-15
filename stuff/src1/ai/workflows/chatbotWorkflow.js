import { IntentClassifier } from '../classifiers/intentClassifier.js';
import { SupportAgent } from '../agents/supportAgent.js';

const classifier = new IntentClassifier();
const supportAgent = new SupportAgent();

export class ChatbotWorkflow {
  async process(message) {
    const intent = classifier.classify(message);

    switch (intent) {
      case 'SUPPORT':
        return supportAgent.reply(message);

      default:
        return supportAgent.reply(message);
    }
  }
}