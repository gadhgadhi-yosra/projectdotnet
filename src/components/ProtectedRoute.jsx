// src/components/ProtectedRoute.jsx
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex items-center justify-center min-h-screen text-muted-foreground">Chargement...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute; // CORRIGÉ : default