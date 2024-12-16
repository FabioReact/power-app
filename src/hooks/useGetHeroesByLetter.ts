import { useEffect, useState } from 'react';
import { Hero } from '../types/hero';
import { fetchHeroesByLetter } from '../api/heroes';

export const useGetHeroesByLetter = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchHeroesByLetter('A')
      .then((data) => {
        setHeroes(data);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const refetch = (letter: string) => {
    setIsLoading(true);
    setIsError(false);
    fetchHeroesByLetter(letter)
      .then((data) => {
        setHeroes(data);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    refetch,
    heroes,
    isLoading,
    isError,
  };
};
