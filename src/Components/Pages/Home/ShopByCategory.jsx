import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className=''>
            <h2 className='text-center text-3xl font-bold mb-20'>shop by category</h2>


            <Tabs classname=''>
                <TabList className='md:flex justify-center gap-10 text-2xl bg-gradient-to-tr from-cyan-100 to-fuchsia-100 p-4'>
                    <Tab className='hover:bg-fuchsia-200'>
                        <button>
                            Transforming Robots
                        </button>
                    </Tab>

                    <Tab className='hover:bg-fuchsia-200'>
                        <button>
                            Robotic Astronauts
                        </button>
                    </Tab>

                    <Tab className='hover:bg-fuchsia-200'>
                        <button>
                            Robo Pets
                        </button>
                    </Tab>
                </TabList>


                <div className='flex justify-center mt-10'>
                    <TabPanel>
                        <div className='md:flex gap-10'>
                        <div
                                className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 ">
                                        RoboMorphs
                                    </h5>
                                    <p className="mb-4">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </p>
                                    <p className="">
                                        Last updated 3 mins ago
                                    </p>
                                    <div 
                                    className='mt-10'>
                                        <button 
                                        className='btn
                                        btn-outline 
                                        border-none
                                        hover:bg-fuchsia-400 hover:border-none'>View details
                                            <FaArrowRight className='mx-2'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div
                                className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 ">
                                        MechMorphers
                                    </h5>
                                   <p className='mb-2'>
                                    price : 111
                                   </p>
                                   <p>
                                    ratings : 5star
                                   </p>
                                    <div 
                                    className='mt-10 p-0'>
                                        <button 
                                        className='btn
                                        btn-outline 
                                        border-none
                                        hover:bg-fuchsia-400 hover:border-none'>View details
                                            <FaArrowRight className='mx-2'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className='md:flex gap-10'>
                        <div
                                className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 ">
                                        RoboMorphs
                                    </h5>
                                    <p className="mb-4">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </p>
                                    <p className="">
                                        Last updated 3 mins ago
                                    </p>
                                    <div 
                                    className='mt-10'>
                                        <button 
                                        className='btn
                                        btn-outline 
                                        border-none
                                        hover:bg-fuchsia-400 hover:border-none'>View details
                                            <FaArrowRight className='mx-2'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div
                                className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 ">
                                        MechMorphers
                                    </h5>
                                   <p className='mb-2'>
                                    price : 111
                                   </p>
                                   <p>
                                    ratings : 5star
                                   </p>
                                    <div 
                                    className='mt-10 p-0'>
                                        <button 
                                        className='btn
                                        btn-outline 
                                        border-none
                                        hover:bg-fuchsia-400 hover:border-none'>View details
                                            <FaArrowRight className='mx-2'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className='md:flex gap-10'>
                        <div
                                className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 ">
                                        RoboMorphs
                                    </h5>
                                    <p className="mb-4">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </p>
                                    <p className="">
                                        Last updated 3 mins ago
                                    </p>
                                    <div 
                                    className='mt-10'>
                                        <button 
                                        className='btn
                                        btn-outline 
                                        border-none
                                        hover:bg-fuchsia-400 hover:border-none'>View details
                                            <FaArrowRight className='mx-2'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div
                                className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 ">
                                        MechMorphers
                                    </h5>
                                   <p className='mb-2'>
                                    price : 111
                                   </p>
                                   <p>
                                    ratings : 5star
                                   </p>
                                    <div 
                                    className='mt-10 p-0'>
                                        <button 
                                        className='btn
                                        btn-outline 
                                        border-none
                                        hover:bg-fuchsia-400 hover:border-none'>View details
                                            <FaArrowRight className='mx-2'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;