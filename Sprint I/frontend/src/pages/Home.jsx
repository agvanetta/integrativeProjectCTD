import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import ListImageCard from '../components/ListImageCard';


const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Categories />
      <ListImageCard/>
      <Footer />
    </>
  );
};

export default Home;
