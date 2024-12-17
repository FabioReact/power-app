import { createContext, useContext } from 'react';

type AuthContextType = {
  accessToken: string;
  connected: boolean;
  email: string | null;
  id: number | null;
  onLogin: (email: string, id: number) => void;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

const useAuthContext = () => useContext(AuthContext);

export { AuthContext as default, useAuthContext };
