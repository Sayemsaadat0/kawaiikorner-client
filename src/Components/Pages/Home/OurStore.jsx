import React from 'react';
import { FaGreaterThan ,FaLessThan } from 'react-icons/fa';

const OurStore = () => {
    return (
        <div>
           <h3 className='text-3xl text-fuchsia-500 font-bold mb-5 text-center uppercase'>have a tout in our store</h3> 
           <p className='w-[50%] mx-auto text-center mb-10'>
           Step into our shop and discover a world of uniqueness with exquisite handcrafted treasures and personalized service
           </p>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/LpB5MwY/2.png" className="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle"><FaLessThan></FaLessThan> </a>
                            <a href="#slide2" className="btn btn-circle"><FaGreaterThan></FaGreaterThan></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/ZWwKZ03/3.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle"><FaLessThan></FaLessThan></a>
                            <a href="#slide3" className="btn btn-circle"><FaGreaterThan></FaGreaterThan></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/6HRp8fK/4.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle"><FaLessThan></FaLessThan></a>
                            <a href="#slide4" className="btn btn-circle"><FaGreaterThan></FaGreaterThan></a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/WttN60N/5.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle"><FaLessThan></FaLessThan></a>
                            <a href="#slide1" className="btn btn-circle"><FaGreaterThan></FaGreaterThan></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStore;