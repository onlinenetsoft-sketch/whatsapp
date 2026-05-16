export class SubscriptionService {
    async checkLimit(usage, limit) {
      return usage < limit;
    }
    async calculateUsagePercentage(usage, limit) {
      return (usage / limit) * 100;
 }
}