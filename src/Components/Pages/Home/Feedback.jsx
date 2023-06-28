import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feedback = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div>
            <h3 className='text-center text-3xl text-fuchsia-600 font-bold w-[50%] mx-auto'>Praise Parade: Feedback and Testimonials from Satisfied Customers</h3>
            <h3  className='w-[50%] mx-auto text-center mb-10'>
            Discover the inspiring stories and positive experiences shared by our valued customers in their testimonials.
            </h3>
            <div className='md:grid grid-cols-2 p-10 gap-5'>
                <div
                data-aos="zoom-in-right"
                className='shadow-lg             
                hover:bg-gradient-to-tr
                 from-emerald-200
                  to-fuchsia-300 
                   hover:shadow-teal-300
                   mb-10'>
                    <div
                   
                        className="block 
                        rounded-lg 
                         text-center">
                        <div >
                            <img className='
                            mt-5
                            mx-auto
                            rounded-full h-16' src="https://i.ibb.co/D57Mtck/1.png" alt="sm" />
                        </div>
                        <div className="px-6 ">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Emma Thompson
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                "Amazing toy with vibrant colors, interactive features, and durable build. It provides endless fun and educational value for kids, making it a perfect choice!"
                            </p>
                        </div>
                        <div className="rating rating-md mb-5">
                            <input type="radio" 

                            name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
                {/*  */}
                <div
                data-aos="zoom-in-left"
                className='shadow-lg 
               hover:bg-gradient-to-tr
                from-emerald-200 to-fuchsia-300   hover:shadow-teal-300 mb-5'>
                    <div
                        className="block rounded-lg  text-center ">
                        <div>
                            <img className='
                        mt-5
                            mx-auto
                            rounded-full h-16' src="https://i.ibb.co/nwvN0QZ/2.png" alt="sm" />
                        </div>
                        <div className="px-6 ">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Sophia Rodriguez
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                "This toy is a game-changer! Its innovative design and engaging activities keep children entertained for hours. It's a must-have for any playtime!"
                            </p>
                        </div>
                        <div className="rating rating-md">
                            <input type="radio" 

                            name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
                {/*  */}
                <div
                data-aos="zoom-in-left"
                className='
            shadow-lg 
             
               hover:bg-gradient-to-tr from-emerald-200 to-fuchsia-300          hover:shadow-teal-300'>
                    <div
                        className="block rounded-lg  text-center ">
                        <div>
                            <img className='
                        mt-5
                            mx-auto
                            rounded-full h-16' src="https://i.ibb.co/xgFQr3R/3.png" alt="sm" />
                        </div>
                        <div className="px-6 ">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Ava Johnson
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                "An adorable and cuddly toy that brings joy to kids. Its softness and charming appearance make it an instant favorite. Highly recommended for little ones!"
                            </p>
                        </div>
                        <div className="rating rating-md">
                            <input type="radio" 

                            name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                {/*  */}
                <div 
                data-aos="zoom-in-right"
                className='
            shadow-lg 

               hover:bg-gradient-to-tr from-emerald-200 to-fuchsia-300          hover:shadow-teal-300'>
                    <div
                        className="block rounded-lg
                       
                        text-center ">
                        <div>
                            <img className='
                        mt-5
                            mx-auto
                            rounded-full h-16' src="https://i.ibb.co/qWqBS0g/4.png" alt="sm" />
                        </div>
                        <div className="px-6 ">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Isabella Garcia
                            </h5>
                            <p className="mb-4 
                            text-base
                             text-neutral-600 dark:text-neutral-200">
                                "A fantastic toy that promotes creativity and imagination. Its versatile features and high-quality materials ensure long-lasting play. A fantastic addition to any toy collection!"
                            </p>
                        </div>
                        <div className="rating rating-md
                        mb-5">
                            <input type="radio" 

                            name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;







/* 
https://i.ibb.co/XSvB0xB/1.png


https://i.ibb.co/5cXbvxF/4.png
*/