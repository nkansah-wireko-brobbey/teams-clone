"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getToken, setToken, clearToken } from "@/lib/auth";
import { decodeToken } from "@/lib/decodeToken";

type AuthContextType = {
  token: string | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setAuthToken] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const stored = getToken();
    if (stored) {
      setAuthToken(stored)
      const decodedToken = decodeToken(stored)

      if (decodedToken?.sub)
        setUserProfile({ email: decodedToken?.sub })
    };
  }, []);

  const login = (jwt: string) => {
    setToken(jwt);
    setAuthToken(jwt);
  };

  const logout = () => {
    clearToken();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, userProfile, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
