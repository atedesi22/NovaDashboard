// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../core/layout/DashboardLayout";
import ProtectedRoute from "../core/guards/ProtectedRoute";

import Login from "../pages/auth/Login";
import Overview from "../pages/dashboard/Overview";
import Modules from "../pages/modules/Modules";
import Users from "../pages/users/Users";
import Finance from "../pages/finance/Finance";
import Logs from "../pages/logs/Logs";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Dashboard Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="modules" element={<Modules />} />
        <Route path="users" element={<Users />} />
        <Route path="finance" element={<Finance />} />
        <Route path="logs" element={<Logs />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}