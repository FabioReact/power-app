import { useState } from 'react';
import SelectHero from './SelectHero';
import { Hero } from '../../types/hero';
import { fight } from '../../utils/fight';

const Battle = () => {
  const [first, setFirst] = useState<Hero | null>(null);
  const [second, setSecond] = useState<Hero | null>(null);
  const [winnerId, setWinnerId] = useState<number | null>();

  const onBattle = () => {
    if (!first || !second) return;
    const winner = fight(first, second);
    setWinnerId(winner.id);
  };

  return (
    <section className='flex flex-col items-center'>
      <h1>Battle</h1>
      <div className='flex justify-around'>
        <SelectHero
          label='First'
          onSelectHero={(hero: Hero) => setFirst(hero)}
          selected={first}
          onReset={() => setFirst(null)}
        />
        {first && second && !winnerId && <button onClick={onBattle}>Battle</button>}
        {winnerId && (
          <p>
            {first?.name} vs {second?.name} - Winner:{' '}
            {first?.id === winnerId ? first.name : second?.name}
          </p>
        )}
        <SelectHero
          label='Second'
          onSelectHero={(hero: Hero) => setSecond(hero)}
          selected={second}
          onReset={() => setSecond(null)}
        />
      </div>
    </section>
  );
};

export default Battle;
