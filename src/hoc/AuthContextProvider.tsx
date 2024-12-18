import { useState } from 'react';
import AuthContext from '../contexts/auth-context';

// interface Props extends React.PropsWithChildren {}

// type Props = {
//   children: React.ReactNode;
// };

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const onLogin = (email: string, id: number, accessToken: string) => {
    setConnected(true);
    setEmail(email);
    setId(id);
    setAccessToken(accessToken);
  };
  const onLogout = () => {
    setConnected(false);
    setEmail(null);
    setId(null);
    setAccessToken(null);
  };
  return (
    <AuthContext.Provider value={{ accessToken, connected, email, id, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
