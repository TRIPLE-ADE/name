export interface LoginResponse {
  message: string;
  user: User;
}

export interface User {
  username: string;
  email: string;
  profile: Profile;
}

export interface Profile {
  role: string;
  location: string;
  zone: unknown;
  state: unknown;
  area: unknown;
  unit: unknown;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthContextData {
  isLoggedIn: boolean;
  login: (user: LoginResponse) => void;
  userLogout: () => void;
  user: LoginResponse | null;
}
