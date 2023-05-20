import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShopByCategory = () => {

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
                <div className='flex justify-around mt-10'>
                    {/* first  */}
                    <TabPanel classname='mx-auto'>
                        <div className='md:flex justify-evenly gap-10'>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl 
                            hover:bg-gradient-to-tr
                            from-emerald-200
                             to-fuchsia-300 ">
                                <figure><img src="https://i.ibb.co/LZfT7sF/7-prev-ui.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">title!</h2>
                                    <p>price : </p>
                                    <p>ratings : </p>


                                    <button className="btn flex items-center gap-2 
                                        ">    
                                       
                                        View Details
                                    
                                       
                                    </button>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10
                            
                            hover:bg-gradient-to-tr from-emerald-200 to-fuchsia-300 ">
                                <figure><img src="https://i.ibb.co/LZfT7sF/7-prev-ui.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">title!</h2>
                                    <p>price : </p>
                                    <p>ratings : </p>

                                    <button className="btn flex items-center gap-2 
                                        ">    
                                       
                                        View Details
                                       
                                      
                                    </button>

                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    {/* second pannel */}
                    <TabPanel>
                        <div className='md:flex gap-10'>

                        <div className='md:flex justify-evenly gap-10'>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl 
                            hover:bg-gradient-to-tr
                            from-emerald-200
                             to-fuchsia-300 ">
                                <figure><img src="https://i.ibb.co/LZfT7sF/7-prev-ui.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">title!</h2>
                                    <p>price : </p>
                                    <p>ratings : </p>


                                    <button className="btn flex items-center gap-2 
                                        ">    
                                     
                                        View Details
                                       
                                   
                                    </button>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10
                            
                            hover:bg-gradient-to-tr from-emerald-200 to-fuchsia-300 ">
                                <figure><img src="https://i.ibb.co/LZfT7sF/7-prev-ui.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">title!</h2>
                                    <p>price : </p>
                                    <p>ratings : </p>

                                    <button className="btn flex items-center gap-2 
                                        ">   
                                        View Details
                                      
                                 
                                    </button>

                                </div>
                            </div>
                        </div>

                        </div>
                    </TabPanel>
                    {/* 3rd pannel */}
                    <TabPanel>
                        <div className='md:flex gap-10'>

                         
                        <div className='md:flex justify-evenly gap-10'>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl 
                            hover:bg-gradient-to-tr
                            from-emerald-200
                             to-fuchsia-300 ">
                                <figure><img src="https://i.ibb.co/LZfT7sF/7-prev-ui.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">title!</h2>
                                    <p>price : </p>
                                    <p>ratings : </p>


                                    <button className="btn flex items-center gap-2 
                                        ">   
                                        View Details
                                      
                                
                                    </button>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10
                            
                            hover:bg-gradient-to-tr from-emerald-200 to-fuchsia-300 ">
                                <figure><img src="https://i.ibb.co/LZfT7sF/7-prev-ui.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">title!</h2>
                                    <p>price : </p>
                                    <p>ratings : </p>

                                    <button className="btn flex items-center gap-2">
                                       
                                        View Details
                                        
                                     
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