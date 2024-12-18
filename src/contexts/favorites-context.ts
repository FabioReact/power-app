import { createContext, useContext } from 'react';

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType>(null!);

const useFavoritesContext = () => useContext(FavoritesContext);

export { FavoritesContext as default, useFavoritesContext };
