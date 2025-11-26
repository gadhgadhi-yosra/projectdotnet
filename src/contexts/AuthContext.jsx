// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("taskflow_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    if (email && password) {
      const fakeUser = { email, name: email.split("@")[0] };
      localStorage.setItem("taskflow_user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return { success: true };
    }
    throw new Error("Identifiants incorrects");
  };

  const signUp = async (email, password, name) => {
    const fakeUser = { email, name: name || email.split("@")[0] };
    localStorage.setItem("taskflow_user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    return { success: true };
  };

  const signOut = async () => {
    localStorage.removeItem("taskflow_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);