import { Route, Routes } from 'react-router';
import Layout from './hoc/Layout';
import Home from './pages/Home';
import HeroesList from './pages/HeroesList';
import HeroDetails from './pages/HeroDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
