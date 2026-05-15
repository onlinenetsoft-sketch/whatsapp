import { Navigate } from 'react-router-dom';

function AdminRoutes({ children }) {
  const user = JSON.parse(
    localStorage.getItem('user')
  );

  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default AdminRoutes;