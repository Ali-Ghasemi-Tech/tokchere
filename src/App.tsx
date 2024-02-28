import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecialOffers from './components/SpecialOffers';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <Navbar/>
      <div className='sm:w-[70%] w-full flex flex-col'>
        <Hero/>
        <SpecialOffers/>
      </div>
      
    </div>
    
  );
}

export default App;
