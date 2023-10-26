import React from 'react';
import CoordinatePage from '../components/coordinatePage/CoordinatePage';
import HeroPage from '../components/heroPage/HeroPage';
import Navbar from '../components/navbar/Navbar';

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <HeroPage/>
        <CoordinatePage/>
    </>
  );
};

export default LandingPage;