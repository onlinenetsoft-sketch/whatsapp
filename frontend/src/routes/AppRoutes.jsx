import { Routes, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import AuthLayout from '@/layouts/AuthLayout';

import PrivateRoutes from './PrivateRoutes';
import AdminRoutes from './AdminRoutes';

import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';

const Dashboard = () => (
  <div className="p-6 text-2xl font-bold">
    Dashboard Home
  </div>
);

const AdminPanel = () => (
  <div className="p-6 text-2xl font-bold">
    Admin Panel
  </div>
);

const HomePage = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold mb-4">
      WhatsApp Automation Platform
    </h1>

    <p className="text-gray-600">
      Manage campaigns, chats, analytics and automation.
    </p>
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      {/* Auth Routes */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <AuthLayout>
            <ForgotPassword />
          </AuthLayout>
        }
      />

      <Route
        path="/reset-password"
        element={
          <AuthLayout>
            <ResetPassword />
          </AuthLayout>
        }
      />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </PrivateRoutes>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <AdminRoutes>
            <DashboardLayout>
              <AdminPanel />
            </DashboardLayout>
          </AdminRoutes>
        }
      />
    </Routes>
  );
}

export default AppRoutes;