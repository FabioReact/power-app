// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hero } from '../../types/hero';

type SearchHeroesParams = {
  heroName?: string;
  combat?: string;
  intelligence?: string;
  durability?: string;
  power?: string;
  speed?: string;
  strength?: string;
};

// Define a service using a base URL and expected endpoints
export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/heroes' }),
  endpoints: (builder) => ({
    getHeroById: builder.query<Hero, string>({
      query: (id) => `/${id}`,
    }),
    // getHeroesByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getHeroesByLetter: builder.query<Hero[], string>({
      query: (letter) => `?name_like=^${letter}`,
    }),
    searchHeroes: builder.query<Hero[], SearchHeroesParams>({
      query: ({ heroName, combat, intelligence, durability, power, speed, strength }) => {
        const filters: Record<string, string | undefined> = {
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

        const params = new URLSearchParams(filters as Record<string, string>).toString();
        return `?${params}` as any;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHeroesByLetterQuery,
  useLazyGetHeroesByLetterQuery,
  useGetHeroByIdQuery,
  useLazyGetHeroByIdQuery,
  useLazySearchHeroesQuery,
} = heroesApi;
