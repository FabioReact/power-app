import Loader from '../Loader/Loader';

type WaitingProps = {
  children: React.ReactNode;
  loading: boolean;
};

const Waiting = ({ loading, children }: WaitingProps) => {
  if (loading) return <Loader />;

  return children;
};

export default Waiting;
