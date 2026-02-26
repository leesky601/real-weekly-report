"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

interface AuthContextValue {
  accessToken: string | null;
  isReady: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("google_access_token");
    if (saved) setAccessToken(saved);
    setIsReady(true);
  }, []);

  const login = useCallback((token: string) => {
    setAccessToken(token);
    sessionStorage.setItem("google_access_token", token);
  }, []);

  const logout = useCallback(() => {
    setAccessToken(null);
    sessionStorage.removeItem("google_access_token");
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, isReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
