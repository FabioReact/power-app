import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from './hoc/AuthContextProvider.tsx';

const queryClient = new QueryClient();

// Reduce Provider "hell": https://dev.to/alfredosalzillo/the-react-context-hell-7p4

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
