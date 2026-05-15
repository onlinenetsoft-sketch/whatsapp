import { useEffect, useState } from 'react';

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      'user'
    );

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');

    localStorage.removeItem('user');

    window.location.href = '/login';
  };

  return {
    user,
    isAuthenticated: !!user,
    logout,
  };
}

export default useAuth;