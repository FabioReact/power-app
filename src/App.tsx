import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from './hoc/AuthContextProvider.tsx';
import FavoritesContextProvider from './hoc/FavoritesContextProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const queryClient = new QueryClient();

// Reduce Provider "hell": https://dev.to/alfredosalzillo/the-react-context-hell-7p4

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthContextProvider>
          <FavoritesContextProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </FavoritesContextProvider>
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
