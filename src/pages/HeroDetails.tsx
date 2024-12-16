import { useParams } from 'react-router';

const HeroDetails = () => {
  const { id } = useParams();
  return <div>Hero with ID: {id}</div>;
};

export default HeroDetails;
