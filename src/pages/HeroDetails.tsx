import { useParams } from 'react-router';
import HeroCard from '../components/HeroCard';
import HeroSkeletonCard from '../components/HeroSkeletonCard';
import { useGetHeroByIdQuery } from '../redux/services/heroesApi';

const HeroDetails = () => {
  const { id } = useParams();

  // const { data, isLoading, isError, isSuccess } = useQuery({
  //   queryKey: ['heroById', id],
  //   queryFn: () => getHeroById(id!),
  // });
  const { data, isLoading, isError, isSuccess } = useGetHeroByIdQuery(id!);

  return (
    <section>
      {isLoading && <HeroSkeletonCard />}
      {isError && <p>Error while fetching Hero {id}</p>}
      {isSuccess && <HeroCard hero={data} />}
    </section>
  );
};

export default HeroDetails;
