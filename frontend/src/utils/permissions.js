export const hasPermission = (
  user,
  role
) => {
  return user?.role === role;
};

export const isAdmin = (user) => {
  return user?.role === 'ADMIN';
};