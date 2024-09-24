'use client';

import React, { useState } from 'react';
import useSmoothScroll from 'next-scroll-to-id';
import { GoMoveToTop } from "react-icons/go";

const LandingPage = () => {
  const [scrollToId, setScrollToId] = useState(null);

  // Get the triggerScrollToTop method from the hook
  const { triggerScrollToTop } = useSmoothScroll({ scrollToId, offset: -50 });

  return (
    <div className='relative w-[100%]'>
      <nav className='flex sticky top-0 z-[10] gap-[1rem] justify-center items-center w-full h-[4rem] bg-black text-white'>
        <li
          onClick={() => setScrollToId('div-1')}
          className='capitalize list-none cursor-pointer'
        >
          div-1
        </li>
        <li
          onClick={() => setScrollToId('div-2')}
          className='capitalize list-none cursor-pointer'
        >
          div-2
        </li>
        <li
          onClick={() => setScrollToId('div-3')}
          className='capitalize list-none cursor-pointer'
        >
          div-3
        </li>
        <li
          onClick={() => setScrollToId('div-4')}
          className='capitalize list-none cursor-pointer'
        >
          div-4
        </li>
        <li
          onClick={() => setScrollToId('div-5')}
          className='capitalize list-none cursor-pointer'
        >
          div-5
        </li>
      </nav>

      <div id='div-1' className='flex justify-center items-center text-white text-[3rem] bg-gray-500 w-full h-[50vh]'>
        <h2>Div -1</h2>
      </div>
      <div id='div-2' className='flex justify-center items-center text-white text-[3rem] bg-green-500 w-full h-[50vh]'>
        <h2>Div -2</h2>
      </div>
      <div id='div-3' className='flex justify-center items-center text-white text-[3rem] bg-pink-500 w-full h-[50vh]'>
        <h2>Div -3</h2>
      </div>
      <div id='div-4' className='flex justify-center items-center text-white text-[3rem] bg-yellow-500 w-full h-[50vh]'>
        <h2>Div -4</h2>
      </div>
      <div id='div-5' className='flex justify-center items-center text-white text-[3rem] bg-orange-500 w-full h-[50vh]'>
        <h2>Div -5</h2>
      </div>

      {/* Button to scroll to the top */}
      <div
        onClick={triggerScrollToTop}  // Trigger scroll to top via the hook directly
        title='Go to top'
        className='cursor-pointer fixed flex justify-center items-center text-[1.5rem] bottom-[2rem] right-[2rem] text-black bg-white size-[3rem] rounded-full'
      >
        <GoMoveToTop />
      </div>
    </div>
  );
};

export default LandingPage;
