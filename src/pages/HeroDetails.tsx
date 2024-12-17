import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getHeroById } from '../api/heroes';
import HeroCard from '../components/HeroCard';
import HeroSkeletonCard from '../components/HeroSkeletonCard';

const HeroDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['heroById', id],
    queryFn: () => getHeroById(id!),
  });

  return (
    <section>
      {isLoading && <HeroSkeletonCard />}
      {isError && <p>Error while fetching Hero {id}</p>}
      {isSuccess && <HeroCard hero={data} />}
    </section>
  );
};

export default HeroDetails;
