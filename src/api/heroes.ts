import { Hero } from '../types/hero';

export const fetchHeroesByLetter = async (letter: string): Promise<Hero[]> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=^${letter}`);
  return response.json();
};

export const getHeroById = async (id: string): Promise<Hero> => {
  const response = await fetch(`http://localhost:4000/heroes/${id}`);
  return response.json();
};

type SearchHeroesParams = {
  heroName: string;
  combat: string;
  intelligence: string;
  durability: string;
  power: string;
  speed: string;
  strength: string;
};

export const searchHeroes = async ({
  heroName,
  combat,
  intelligence,
  durability,
  power,
  speed,
  strength,
}: SearchHeroesParams): Promise<Hero[] | null> => {
  const filters: Record<string, string> = {
    name_like: heroName,
    'powerstats.intelligence_gte': intelligence,
    'powerstats.combat_gte': combat,
    'powerstats.durability_gte': durability,
    'powerstats.power_gte': power,
    'powerstats.speed_gte': speed,
    'powerstats.strength_gte': strength,
  };

  Object.entries(filters).forEach(([key, value]) => {
    if (!value) {
      delete filters[key];
    }
  });
  if (Object.keys(filters).length === 0) return null;

  const params = new URLSearchParams(filters);
  const response = await fetch(`http://localhost:4000/heroes?${params}`);
  return response.json();
};
