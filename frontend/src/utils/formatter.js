export const formatCurrency = (
  amount
) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString(
    'en-IN'
  );
};

export const formatPhone = (phone) => {
  return `+91 ${phone}`;
};