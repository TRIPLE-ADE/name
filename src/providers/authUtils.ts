// src/providers/authUtils.ts

import { createContext, useContext } from "react";
import { AuthContextData } from "@/types/auth";

export const defaultAuthData: AuthContextData = {
  isLoggedIn: false,
  login: () => {},
  userLogout: () => {},
  user: null,
  token: null,
};

export const AuthContext = createContext<AuthContextData>(defaultAuthData);

export const useAuthContext = () => useContext(AuthContext);
