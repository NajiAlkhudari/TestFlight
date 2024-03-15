import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer flex  flex-col items-center   '>
      <div className='flex'>  <span className="text-white">@2024 </span>
        <span className="text-sky-700">TestFlight</span></div>
      
        <p className='text-white'>All Rights Reserved</p>
    </div>
  );
};

export default Footer;
