import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import HeroSkeletonCard from '../components/HeroSkeletonCard';
import { useGetHeroesByLetter } from '../hooks/useGetHeroesByLetter';
import { Link } from 'react-router';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const { heroes, isLoading, isError, refetch } = useGetHeroesByLetter();

  useEffect(() => {
    console.log('New selected letter:', selectedLetter);
    return () => {
      console.log('Unmount letter:', selectedLetter);
    };
  }, [selectedLetter]);

  const onSelectLetter = (l: string) => {
    setSelectedLetter(l);
    refetch(l);
  };

  return (
    <section>
      <h1 className='text-center'>List of heroes</h1>
      <ul className='flex justify-center gap-2 my-6'>
        {alphabet.map((letter) => (
          <li
            key={letter}
            className={`cursor-pointer font-semibold ${letter === selectedLetter && 'text-red-600'}`}
            onClick={() => onSelectLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <div className='flex flex-wrap justify-center gap-4'>
        {isError && <p>Something went wrong</p>}
        {!isLoading &&
          !isError &&
          heroes.map((hero) => (
            <Link key={hero.id} to={hero.id.toString()}>
              <HeroCard hero={hero} />
            </Link>
          ))}
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => <HeroSkeletonCard key={index} />)}
      </div>
    </section>
  );
};

export default HeroesList;
