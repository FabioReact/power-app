import { createContext, useContext } from 'react';

type AuthContextType = {
  accessToken: string | null;
  connected: boolean;
  email: string | null;
  id: number | null;
  onLogin: (email: string, id: number, accessToken: string) => void;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

const useAuthContext = () => useContext(AuthContext);

export { AuthContext as default, useAuthContext };
