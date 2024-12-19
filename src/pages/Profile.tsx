import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeFavorite } from '../redux/slices/favoritesHeroes';

const Profile = () => {
  const { email, id } = useAppSelector((state) => state.auth);
  const favorites = useAppSelector((state) => state.heroes.favorites);
  const dispatch = useAppDispatch();
  return (
    <section>
      <h1>Profile</h1>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((id) => (
          <li key={id}>
            {id} - <button onClick={() => dispatch(removeFavorite(id))}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Profile;
