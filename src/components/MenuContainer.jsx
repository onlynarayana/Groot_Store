import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {categories} from '../utils/data';
import { SiFranprix } from "react-icons/si";


const MenuContainer = () => {
    const [filter, setFilter] = useState("");
    
  return (
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
                        <SiFranprix className={` ${filter === category.urlParamName ? 'text-textColor' : 'text-primary'}  group-hover:text-textColor text-4xl`}/>
                    </div>
                    <p className='text-xl font-sans font-bold text-center text-textColor group-hover:text-white'>{category.name}</p>
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default MenuContainer;