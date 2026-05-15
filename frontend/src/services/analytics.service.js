import api from './api';

export const getDashboardAnalytics =
  async () => {
    const response = await api.get(
      '/analytics/dashboard'
    );

    return response.data;
  };

export const getCampaignAnalytics =
  async (campaignId) => {
    const response = await api.get(
      `/analytics/campaign/${campaignId}`
    );

    return response.data;
  };

export const exportAnalyticsReport =
  async () => {
    const response = await api.get(
      '/analytics/export'
    );

    return response.data;
  };