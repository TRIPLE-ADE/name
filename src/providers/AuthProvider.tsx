// src/providers/AuthProvider.tsx

import { useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authUtils";
import { LoginResponse } from "@/types/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    return storedStatus === "true";
  });
  const [user, setUser] = useState<LoginResponse | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedStatus = localStorage.getItem("isLoggedIn");

      if (storedUser && storedStatus === "true") {
        try {
          const parsedUser = JSON.parse(storedUser) as LoginResponse;
          setUser(parsedUser);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Failed to parse user data from localStorage", error);
          // Optionally clear corrupted data
          localStorage.removeItem("user");
          localStorage.removeItem("isLoggedIn");
          setUser(null);
          setIsLoggedIn(false);
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    }
  }, []);

  const login = (user: LoginResponse) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true"); // Persist login status
    setUser(user);
    setIsLoggedIn(true);
  };

  const userLogout = () => {
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
    navigate("/auth/signin");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
