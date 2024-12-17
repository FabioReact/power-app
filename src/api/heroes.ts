import { Hero } from '../types/hero';

export const fetchHeroesByLetter = async (letter: string): Promise<Hero[]> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=^${letter}`);
  return response.json();
};

export const getHeroById = async (id: string): Promise<Hero> => {
  const response = await fetch(`http://localhost:4000/heroes/${id}`);
  return response.json();
};
