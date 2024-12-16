import { useEffect, useState } from "react";
import { fetchHeroesByLetter } from "../api/heroes";
import { Hero } from "../types/hero";
import HeroCard from "../components/HeroCard";
import HeroSkeletonCard from "../components/HeroSkeletonCard";

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchHeroesByLetter('A').then(data => {
      setHeroes(data);
    }).catch(() => setIsError(true)).finally(() => {
      setIsLoading(false);
    });
  }, [])

  useEffect(() => {
    console.log('New selected letter:', selectedLetter);
    return () => {
        console.log('Unmount letter:', selectedLetter)
    }
  }, [selectedLetter])

  const onSelectLetter = (l: string) => {
    setSelectedLetter(l);
    setIsLoading(true);
    setIsError(false);
    fetchHeroesByLetter(l).then(data => {
      setHeroes(data);
    }).catch(() => setIsError(true)).finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <section>
      <h1 className="text-center">List of heroes</h1>
      <ul className="flex justify-center gap-2 my-6">
        {alphabet.map((letter) => (
          <li key={letter} className={`cursor-pointer font-semibold ${letter === selectedLetter && 'text-red-600'}`} onClick={() => onSelectLetter(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-4">
      {isError && <p>Something went wrong</p>}
      {!isLoading && !isError && 
        heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)
      }
      {isLoading && Array.from({ length: 10 }).map((_, index) => <HeroSkeletonCard key={index} />)}
      </div>
    </section>
  )
}

export default HeroesList