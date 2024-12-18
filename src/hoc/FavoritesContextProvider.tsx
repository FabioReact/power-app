import { useState } from 'react';
import FavoritesContext from '../contexts/favorites-context';

const FavoritesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites((f) => f.filter((fId) => fId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
