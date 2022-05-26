import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { OpenToggleProvider } from '../context/OpenToggleContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const ProjectRoutes = () => {
  return (
    <OpenToggleProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </OpenToggleProvider>
  );
};

export default ProjectRoutes;
