function usePermissions() {
  const user = JSON.parse(
    localStorage.getItem('user')
  );

  const hasRole = (role) => {
    return user?.role === role;
  };

  const isAdmin =
    user?.role === 'ADMIN';

  return {
    user,
    hasRole,
    isAdmin,
  };
}

export default usePermissions;