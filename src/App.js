import React from 'react';
import Nav from './homePage/Nav';
import CategoriesSec from './homePage/CategoriesSec';
import './styles/main.scss';
import Home from './homePage/Home';
import SmartWatch from './recomended/SmartWatch';
import Ads from './ads/Ads';
import NewCollec from './newcollection/NewCollec';
import Trending from './trend/Trending';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatch />
      <Ads />
      <NewCollec />
      <Ads />
      <Trending />
      <Ads />
      <Footer />
    </>

  );
}

export default App;
