import api from './api';

export const getPlans = async () => {
  const response = await api.get(
    '/billing/plans'
  );

  return response.data;
};

export const createSubscription =
  async (payload) => {
    const response = await api.post(
      '/billing/subscribe',
      payload
    );

    return response.data;
  };

export const getInvoices = async () => {
  const response = await api.get(
    '/billing/invoices'
  );

  return response.data;
};