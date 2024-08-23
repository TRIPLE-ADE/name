import { useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authUtils";
import { LoginResponse } from "@/types/auth";
import { useLogout } from "@/api/auth";

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
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken;
  });
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedStatus = localStorage.getItem("isLoggedIn");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedStatus === "true" && storedToken) {
        try {
          const parsedUser = JSON.parse(storedUser) as LoginResponse;
          setUser(parsedUser);
          setIsLoggedIn(true);
          setToken(storedToken);
        } catch (error) {
          console.error("Failed to parse user data from localStorage", error);
          localStorage.clear();
          setUser(null);
          setToken(null);
          setIsLoggedIn(false);
        }
      } else {
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
      }
    }
  }, []);

  const login = (user: LoginResponse) => {
    const token = user.token; // Extract the token from the login response

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("token", token); // Save the token to local storage

    setUser(user);
    setToken(token);
    setIsLoggedIn(true);
  };

  const userLogout = () => {
    logout();
    localStorage.clear();
    setUser(null);
    setToken(null); // Clear the token from the state
    setIsLoggedIn(false);
    navigate("/auth/signin");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, token, login, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
