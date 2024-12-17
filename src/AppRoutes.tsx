import { Route, Routes } from 'react-router';
import Layout from './hoc/Layout';
import Home from './pages/Home';
import HeroesList from './pages/HeroesList';
import HeroDetails from './pages/HeroDetails';
import LearnUseRef from './learning/LearnUseRef';
import LearnUseCounter from './learning/LearnUseCounter';
import { LearnUseEffect } from './learning/LearnUseEffect';
import { Register } from './pages/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/learning'>
          <Route path='useref' element={<LearnUseRef />} />
          <Route path='usecounter' element={<LearnUseCounter />} />
          <Route path='useeffect' element={<LearnUseEffect />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
