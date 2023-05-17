import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
             <div className='flex justify-center'>
                <h2 className='text-2xl font-semibold mt-10'>
                    Time to go 
                     <Link 
                     to='/'
                     className='text-4xl btn-outline btn-accent rounded-lg px-2 '>
                     Home
                    </Link> and put your feet up on the coffee table of relaxation
                </h2>
            </div>
            <img className=' mx-auto' src="https://i.ibb.co/M65jHF3/woops.png" alt="" />
           
        </div>
    );
};

export default ErrorPage;