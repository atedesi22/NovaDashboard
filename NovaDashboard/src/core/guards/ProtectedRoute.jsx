// src/core/guards/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // À connecter à Laravel plus tard

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}