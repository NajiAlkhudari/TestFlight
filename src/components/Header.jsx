'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <div className='flex w-full h-20 bg-white  items-center justify-around'>
      <h1 className='text-white font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
      <Image
        src="/testfligh-logo.png"
        alt="Optimized Image"
        width={70} // Optional: Set width for responsive resizing
        height={60} // Optional: Set height for responsive resizing
      />
      </h1>
      <nav>
        <ul className="flex space-x-4 justify-around text-xl font-semibold">
          <li><a href="#" className="text-black hover:underline">Home</a></li>
          <li><a href="#" className="text-black hover:underline">Start</a></li>
          <li className="group relative">
            <a href="#" className=" text-black hover:underline ">Installation</a>
            <ul className="absolute left-0  space-y-2 bg-white text-black p-2 hidden group-hover:block transition duration-200 ease-in-out">              <li><a href="#" className="hover:underline">Link 1</a></li>
              <li><a href="#" className="hover:underline">Link 2</a></li>
              <li><a href="#" className="hover:underline">Link 3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className='flex space-x-2'>
        <button className='text-black font-medium bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-2xl' onClick={() => setLoginOpen(true)}>Download</button>
     
        
      </div>
    </div>
  )
}

export default Header;

