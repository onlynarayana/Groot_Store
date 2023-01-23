import React, { useEffect, useState, useRef } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue} from '../context/StateProvider';
import {categories} from '../utils/data';
import { SiFranprix } from "react-icons/si";
import CartContainer from './CartContainer';

const MainContainer = () => {

  const [{foodItems, cartShow}] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [filter, setFilter] = useState("");
  const fruitsRef = useRef(null);
  const impFruitsRef = useRef(null);
  const vegetablesRef = useRef(null);
  const impVegetablesRef = useRef(null);

  useEffect(() => {}, [scrollValue,cartShow]);

  const goTo = (id) => {
    switch(id) {
      case 1:
        return fruitsRef.current.scrollIntoView({behavior: 'smooth'});
      case 2:
        return impFruitsRef.current.scrollIntoView({behavior: 'smooth'});
      case 3:
        return vegetablesRef.current.scrollIntoView({behavior: 'smooth'});
      case 4:
        return impVegetablesRef.current.scrollIntoView({behavior: 'smooth'});
      default :
        return null;
    }
  };

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      {cartShow && (<CartContainer />)}
      {/* <MenuContainer /> */}
      <section className='w-full my-6' id='menu'>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-lg font-semibold text-headingColor relative before:absolute before:rounded-lg 
                before:content before:w-full before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 
                to-orange-700 transition-all ease-in-out duration-100'
            > 
                Click Here <span className='text-red-500'>to</span> Select Category
            </p>
            <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'> 
                {categories && categories.map(category => (
                <motion.div whileTap={{scale: 0.6}} key={category.id} className={`group ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-card'}
                    hover:bg-cartNumBg w-36 min-w-[140px] md:min-w-[130px] h-40 cursor-pointer rounded-lg
                    drop-shadow-xl flex flex-col items-center justify-center gap-3 duration-150 transition-all ease-in-out`}
                    onClick={() => setFilter(category.urlParamName)}
                >
                    <div className={`w-16 h-16 rounded-full shadow-2xl ${filter === category.urlParamName ? 'bg-primary' : 'bg-cartNumBg'}
                    group-hover:bg-primary flex flex-col items-center justify-center`}>
                        <SiFranprix className={` ${filter === category.urlParamName ? 'text-textColor' : 'text-primary'}  group-hover:text-textColor text-4xl`}
                         onClick={() => goTo(category.id)}
                        />
                    </div>
                    <p className='text-xl font-sans font-bold text-center text-textColor group-hover:text-white' 
                    onClick={() => goTo(category.id)}
                    >{category.name}</p>
                </motion.div>
                ))}
            </div>
        </div>
      </section>
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg 
           before:content before:w-24 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 
           to-orange-700 transition-all ease-in-out duration-100' ref={fruitsRef}>
            Our fresh & healthy fruits
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-1000)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(1000)}>
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
           to-orange-700 transition-all ease-in-out duration-100' ref={impFruitsRef}>
            Imported High Quality Fruits
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-300)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(300)}>
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
           to-orange-700 transition-all ease-in-out duration-100' ref={vegetablesRef}>
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
           to-orange-700 transition-all ease-in-out duration-100' ref={impVegetablesRef}>
            Our Imported Classic Vegetables
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out 
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-100)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.50}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out  
             cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(100)}>
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