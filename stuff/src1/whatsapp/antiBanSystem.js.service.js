export class AntiBanSystem {
  async applyDelay(min = 2000, max = 5000) {
    const delay = Math.floor(
      Math.random() * (max - min + 1) + min
    );

    return new Promise(resolve => setTimeout(resolve, delay));
  }

  async validateMessageLimit(count, limit) {
    if (count > limit) {
      throw new Error('Daily sending limit exceeded');
    }

    return true;
  }
}