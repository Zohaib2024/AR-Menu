import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TiSocialFacebookCircular, TiSocialYoutubeCircular, TiSocialTwitterCircular } from "react-icons/ti";

const Hero = () => {
  return (
    //<div className='grid lg:grid-cols-2  grid-cols-1  items-center mt-20  lg:ml-72 lg:mr-52 lg:items-center  md:mr-20 md:ml-20 sm:mr-20 sm:ml-20'>
      <div className='flex  w-full  items-center mt-4 justify-center flex-col  lg:flex-row '>
   <div className='w-1/12'></div>
       <div className='block mb-10 lg:hidden w-12/12  '>
       <div className=' flex justify-center md:items-center'>
        <div className='text-center  lg:m-auto  '> 
        <Image
          src="/Food-hero.png"
          width={500}
          height={500}
          alt="Picture of delicious food"
        />
        </div>
        </div>
      </div>
      <div className=' sm:flex sm:flex-col justify-center sm:justify-center w-6/12 '>
      <div className=''>
        <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-center lg:text-center '>We provide the </h1>
        </div>
        <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-center lg:text-center '> best food for you</h1>
        <div className='flex justify-center'>
        <p className='mt-4 text-gray-700 text-center '>
          Teasty, Delicious & Quality.
        </p>
        </div>

        <div className='flex space-x-4 mt-10 justify-center  '>
          <button aria-label="View Menu" className='w-36 h-10 hover:bg-red-300 hover:text-black bg-red-600 shadow-lg rounded-xl text-white '>
            Menu
          </button>
          <button aria-label="Book Table" className='w-36 h-10 hover:bg-red-300 hover:text-black bg-red-600 shadow-lg rounded-xl text-white'>
            Book Table
          </button>
        </div>

        <div className='flex gap-10 items-center mt-10 justify-center '>
         <Link href="/" > <TiSocialFacebookCircular aria-label="Facebook" size={40} /> </Link>
         <Link href="/" >  <TiSocialYoutubeCircular aria-label="YouTube" size={40} /></Link>
         <Link href="/" >   <TiSocialTwitterCircular aria-label="Twitter" size={40} /></Link>
        </div>
      </div>

      <div className='text-center mt-10 hidden  md:hidden lg:block w-6/12'>
      <div className='flex justify-center'>
        <Image
          src="/Food-hero.png"
          width={500}
          height={500}
          alt="Picture of delicious food"
          className='w-[500px]'
        />
        </div>
      </div>
      <div className='w-1/12'></div>
    </div>
  );
}

export default Hero;
