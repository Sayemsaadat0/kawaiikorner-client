import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShopByCategoryDetails from './ShopByCategoryDetails';

const ShopByCategory = () => {
    const [subcatagoryData, setSubcategoryData] = useState(null);
    console.log(subcatagoryData);
    const [categoryName, setCategoryName] = useState([])

    useEffect(() => {
        fetch('https://kawaiikorner-server.vercel.app/subToy')
            .then(res => res.json())
            .then(data => {
                setCategoryName(data)
            })
    }, [])
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <h2 className='text-center text-3xl font-bold mb-20'>shop by category</h2>

            <div className='md:flex justify-center gap-10 text-2xl bg-gradient-to-tr from-cyan-100 to-fuchsia-100 p-4'>
                {
                    categoryName.map(n => <div key={n._id}>
                        <button onClick={() => setSubcategoryData(n)} className='hover:bg-fuchsia-200'>
                            {n.subcatname}
                        </button>
                    </div>)
                }
            </div>

            <div>
                {
                    subcatagoryData && <ShopByCategoryDetails
                        subcatagoryData={subcatagoryData}
                    ></ShopByCategoryDetails>
                }
            </div>


        </div>
    );
};

export default ShopByCategory;