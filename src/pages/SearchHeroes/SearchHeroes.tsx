import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { searchHeroes } from '../../api/heroes';
import HeroCard from '../../components/HeroCard';

const schema = z.object({
  heroName: z.string(),
  intelligence: z.string(),
  combat: z.string(),
  durability: z.string(),
  power: z.string(),
  speed: z.string(),
  strength: z.string(),
});

export type Inputs = z.infer<typeof schema>;

const stats: (keyof Inputs)[] = [
  'intelligence',
  'combat',
  'durability',
  'power',
  'speed',
  'strength',
];

const SearchHeroes = () => {
  const { register, handleSubmit, getValues } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const {
    data: heroes,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['search-heroes'],
    queryFn: () => searchHeroes(getValues()),
    enabled: false,
    staleTime: 0,
  });

  // console.log(heroes, isSuccess)

  const onSubmitHandler: SubmitHandler<Inputs> = () => {
    refetch();
  };

  return (
    <section>
      <h1>Search Heroes</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='heroName'>Hero name:</label>
          <input type='text' id='heroName' {...register('heroName')} />
        </fieldset>
        {stats.map((stat) => (
          <fieldset key={stat}>
            <label htmlFor={stat}>{stat}</label>
            <input type='range' id={stat} min={1} max={100} defaultValue='1' {...register(stat)} />
          </fieldset>
        ))}
        <button>Search</button>
      </form>
      <div className='flex flex-wrap justify-center gap-8'>
        {isSuccess && heroes && heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </section>
  );
};

export default SearchHeroes;
