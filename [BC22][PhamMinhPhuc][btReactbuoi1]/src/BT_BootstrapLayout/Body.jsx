import React from 'react';
import Promotopn from './Promotopn';
import Navbar from './Navbar';
import Smartphone from './Smartphone';
import Laptop from './Laptop';
import Carousel from './Carousel';
export default function Body() {
  return (
    <div> 
      {/* Begin Navbar */}
      <Navbar/>
      {/* End Navbar */}
      {/* Begin Carousel */}
      <Carousel/>
      {/* End Carousel */}
      {/* Begin Smartphone */}
      <Smartphone/>
      {/* End Smartphone */}
      {/* Begin Laptop */}
      <Laptop/>
      {/* End Laptop */}
      {/* Begin Promotopn */}
      <Promotopn/>
      {/* End Promotopn */} 
    </div>
  )
}
