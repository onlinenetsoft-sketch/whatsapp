export const validateEmail = (
  email
) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

export const validatePassword = (
  password
) => {
  return password.length >= 6;
};

export const validatePhone = (
  phone
) => {
  const regex = /^[6-9]\d{9}$/;

  return regex.test(phone);
};