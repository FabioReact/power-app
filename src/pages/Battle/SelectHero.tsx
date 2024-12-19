import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { searchHeroes } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard';

type Props = {
  label: string;
  onSelectHero: (hero: Hero) => void;
  selected: Hero | null;
  onReset: () => void;
};

const SelectHero = ({ onSelectHero, selected, onReset, label }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { data: heroes, refetch } = useQuery({
    queryKey: ['heroes', inputRef.current?.value, label],
    queryFn: () => searchHeroes({ heroName: inputRef.current?.value }),
    enabled: !!inputRef.current?.value,
  });

  const onSubmitHanler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    refetch();
  };

  const onSelectHandler = (hero: Hero) => {
    onSelectHero(hero);
  };

  return (
    <div>
      {!selected && (
        <form onSubmit={onSubmitHanler}>
          <fieldset>
            <label htmlFor={`hero${label}`}>Select {label} Hero</label>
            <input type='text' id={`hero${label}`} name={`hero${label}`} ref={inputRef} />
          </fieldset>
          <button>Select</button>
        </form>
      )}
      {heroes && !selected && (
        <ul>
          {heroes.map((hero) => (
            <li
              onClick={() => onSelectHandler(hero)}
              key={hero.id}
              className='cursor-pointer border border-black rounded px-2 py-1 my-1 hover:bg-slate-100'
            >
              <span className='text-gray-700'>#{hero.id}</span> - {hero.name}
            </li>
          ))}
        </ul>
      )}
      {selected && (
        <>
          <button onClick={onReset}>Reset</button>
          <HeroCard hero={selected} />
        </>
      )}
    </div>
  );
};

export default SelectHero;
