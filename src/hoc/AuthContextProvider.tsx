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
  const onLogin = (email: string, id: number) => {
    setConnected(true);
    setEmail(email);
    setId(id);
  };
  const onLogout = () => {
    setConnected(false);
  };
  return (
    <AuthContext.Provider value={{ accessToken: 'toto', connected, email, id, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
