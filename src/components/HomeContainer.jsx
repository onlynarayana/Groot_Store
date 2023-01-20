import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { Data } from '../utils/data';


function HomeContainer() {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Fresh Delivery</p> 
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} alt="delivery" className='w-full h-full object-contain'
           />
          </div>
        </div>

        <p className='text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in  
          <span className='text-orange-600 text-[3rem] md:text-[3.5rem] lg:text-[4.5rem]'>Your City</span></p>

        <p className='text-base text-textColor text-center md:text-left md:w-[85%]'>Hi here you can find and get the Icecreams and fresh fruits ans vegies at sitting back in your home.</p>
        <button type='button' className='bg-gradient-to-br from-orange-300 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt='hero-bg' />
        <div className='w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center py-4 gap-4'>
          {Data && Data.map(n =>(
            <div key={n.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
            <img src={n.imagesrc} className='w-20  lg:w-40 -mt-10 lg:-mt-20 ' alt='I1' />
            <p className='text-base lg:text-xl font-semibold text text-textColor mt-2 lg:mt-4'>{n.name}</p>
            <p className='text-[12px] lg:text-sm font-semibold text text-lighttextGray my-1 lg:my-3'>{n.decp}</p>
            <p className='text-sm font-semibold text-headingColor'>{n.price}<span className='text-[12px] lg:text-sm font-bold text text-red-600'> - rs./kg</span></p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;