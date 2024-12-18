import { Route, Routes } from 'react-router';
import Layout from './hoc/Layout';
import Home from './pages/Home';
import HeroesList from './pages/HeroesList';
import HeroDetails from './pages/HeroDetails';
import LearnUseRef from './learning/LearnUseRef';
import LearnUseCounter from './learning/LearnUseCounter';
import { LearnUseEffect } from './learning/LearnUseEffect';
import { Register } from './pages/Register/Register';
import LoginPage from './pages/Login/Login';
import PrivateRoute from './hoc/PrivateRoute';
import Profile from './pages/Profile';
import Logout from './components/Logout';
import LearnUseLayoutEffect from './learning/LearnUseLayoutEffect';
import SearchHeroes from './pages/SearchHeroes/SearchHeroes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search-heroes' element={<SearchHeroes />} />
        <Route path='/learning'>
          <Route path='useref' element={<LearnUseRef />} />
          <Route path='usecounter' element={<LearnUseCounter />} />
          <Route path='useeffect' element={<LearnUseEffect />} />
          <Route path='uselayouteffect' element={<LearnUseLayoutEffect />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/logout' element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
