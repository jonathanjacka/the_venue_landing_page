import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Footer from './components/header_footer/Footer';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing/Pricing'; 

const App = () => {
  return (
    <div className='App'>
      <Header />
      
      <>
        <Featured />
      </>

      <>
        <VenueInfo />
      </>

      <>
        <Highlights />
      </>

      <>
        <Pricing />
      </>

      <div style={ { backgroundColor: 'yellow', height: '800px' } }></div>
        <Footer />
    </div>
  );
};

export default App;
