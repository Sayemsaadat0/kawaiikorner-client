import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallary = () => {
    const [picture, setPicture] = useState([])
    useEffect(() => {
        fetch('https://kawaiikorner-server.vercel.app/gallary')
            .then(res => res.json())
            .then(data => setPicture(data))
    }, [])
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className='mt-20 mb-20'>
            <div   className=' text-center mb-10'>
                <h3 className='text-3xl font-bold mb-3'>photo gallary </h3>
                <p className='w-[40%] mx-auto'> An object designed for play, amusement, or learning purposes, often used by children for entertainment and development</p>
            </div>
            <div  x className='md:grid grid-cols-4 gap-10 shadow-emerald-300'>
                {
                    picture.map(p => <div
                    key={p._id}>
                    <img 
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className='hover:scale-125 duration-500 w-[100%]'
                    src={p.picture}  alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallary;