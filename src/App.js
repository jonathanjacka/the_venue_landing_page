import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Footer from './components/header_footer/Footer';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing/Pricing'; 
import Location from './components/location/Location';

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

      <>
        <Location />
      </>
        <Footer />
    </div>
  );
};

export default App;
