import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { OpenCarouselProvider } from '../context/OpenCarouselContext';
import { OpenToggleProvider } from '../context/OpenToggleContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import SignUp from '../pages/SignUp';

const ProjectRoutes = () => {
  return (
    <OpenToggleProvider>
      <OpenCarouselProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </OpenCarouselProvider>
    </OpenToggleProvider>
  );
};

export default ProjectRoutes;
