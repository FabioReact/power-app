import { useAuthContext } from '../contexts/auth-context';

const Profile = () => {
  const { email, id } = useAuthContext();
  return (
    <section>
      <h1>Profile</h1>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
    </section>
  );
};

export default Profile;
