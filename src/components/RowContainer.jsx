import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({flag, data, scrollValue}) => {
    const rowContainer = useRef();
    const [items, setItems] = useState([]);
    const [{cartItems}, dispatch] = useStateValue();

    const addtoCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue]);

    useEffect(() => {
        addtoCart();
    },[items]);

  return (
    <div ref={rowContainer} className={`w-full my-12 flex items-center gap-3 scroll-smooth ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden"}`}
    >
        {data && data.length > 0 ? (data.map((item) => (
            <div key={item?.id} className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px] lg:w-350 lg:min-w-[350px] my-12
             bg-cardOverlay rounded-lg p-2 shadow-md backdrop-blur-lg hover:drop-shadow-xl flex flex-col items-center justify-between'>
            <div className='w-full flex items-center justify-between'>
                <motion.img whileHover={{scale: 1.2}} className='w-40 h-40 -mt-8 drop-shadow-2xl' src={item?.imageURL} alt='image'/>
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full flex items-center justify-center bg-red-600 cursor-pointer hover:shadow-lg'>
                <MdShoppingBasket className='text-white' onClick={() => setItems([...cartItems, item])}/>
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
                <p className='text-textColor font-semibold text-base md:text-lg'>{item?.title}</p>
                <p className='mt-1 text-sm text-gray-500'>{item?.description}</p>
                <div className='flex items-center gap-8'>
                    <p className='text-sm text-headingColor font-semibold'>{item?.price}<span className='text-sm text-red-500 ml-2'>rs./kg</span></p>
                </div>
            </div>
        </div>
        ))) : (<div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} className='h-340'/>
                <p className='text-xl text-headingColor font-semibold my-2'>Ohh ho! Currently Items Not Available</p>
            </div>) 
        }
    </div>
  );
};

export default RowContainer;