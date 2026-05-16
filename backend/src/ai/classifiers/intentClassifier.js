export class IntentClassifier {
  classify(text) {
    if (text.includes('price')) {
      return 'PRICING';
    }

    if (text.includes('support')) {
      return 'SUPPORT';
    }

    return 'GENERAL';
  }
}