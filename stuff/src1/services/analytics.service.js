import { AnalyticsRepository } from '../repositories/
  analytics.repository.js';
  const analyticsRepository = new AnalyticsRepository();
  export class AnalyticsService {
    async trackEvent(data) {
      return analyticsRepository.createEvent(data);
    }
    async getDashboard(workspaceId) {
      return analyticsRepository.getDashboardStats(workspaceId);
   }
}