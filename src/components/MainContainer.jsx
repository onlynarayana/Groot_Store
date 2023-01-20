import React, { useEffect, useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue} from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';

const MainContainer = () => {

  const [{foodItems, cartShow}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue,cartShow]);
  

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <MenuContainer />
      {cartShow && (<CartContainer />)}
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg 
           before:content before:w-24 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 
           to-orange-700 transition-all ease-in-out duration-100'>
            Our fresh & healthy fruits
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-200)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(200)}>
              <MdChevronRight className='text-lg text-white'/>
             </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter((n) => n.category === 'fruits')}/>
      </section>
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg 
           before:content before:w-24 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 
           to-orange-700 transition-all ease-in-out duration-100'>
            Imported High Quality Fruits
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-200)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(200)}>
              <MdChevronRight className='text-lg text-white'/>
             </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter((n) => n.category === 'imported fruits')}/>
      </section>
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg 
           before:content before:w-24 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 
           to-orange-700 transition-all ease-in-out duration-100'>
            Our fresh & healthy Vegetables
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-200)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(200)}>
              <MdChevronRight className='text-lg text-white'/>
             </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter((n) => n.category === 'vegetables')}/>
      </section>
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg 
           before:content before:w-24 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 
           to-orange-700 transition-all ease-in-out duration-100'>
            Our Imported Classic Vegetables
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-200)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(200)}>
              <MdChevronRight className='text-lg text-white'/>
             </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter((n) => n.category === 'imported vegetables')}/>
      </section>
    </div>
  );
};

export default MainContainer;