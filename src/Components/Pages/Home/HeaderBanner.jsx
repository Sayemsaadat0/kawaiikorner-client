import React from 'react';
import LazyLoad from 'react-lazy-load';
// import { FiArrowLeftCircle } from 'react-icons/fa';

const HeaderBanner = () => {
    return (
        <div className='md:flex bg-fuchsia-200    mb-20 py-10'>
            <img
                className='w-[60%]'
                src="https://i.ibb.co/n6StGgy/lost-soul-unscreen.gif" alt="" />
            <div>
                <div className='flex justify-center flex-col items-center h-full  text-center'>
                    <h2
                        className=' md:text-5xl w-[80%] font-bold'
                    >Joyful Jamboree: Delightful Toys for Hours of <span className='text-fuchsia-600'>Entertainment</span></h2>

                    <p className='w-[60%] mx-auto mt-5'>
                        Welcome to our toy wonderland, where joy and imagination come alive! Explore a vast collection of delightful toys that spark creativity, bring laughter.
                    </p>
                    <div className=' flex gap-10 mt-5 w-60'>
                    <button className='btn btn-outline border-black w-1/2 hover:bg-fuchsia-500 hover:border-none'>Become a member</button>
                    <button className='btn btn-outline border-black w-1/2 hover:bg-fuchsia-500 hover:border-none'>More about us</button>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;