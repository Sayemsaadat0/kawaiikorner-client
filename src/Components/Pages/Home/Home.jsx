import React, { useState } from 'react';
import HeaderBanner from './HeaderBanner';
import Gallary from './Gallary';
import OurStore from './OurStore';
import Feedback from './Feedback';
import ShopByCategory from './ShopByCategory';
import ShopByCategoryDetails from './ShopByCategoryDetails';


const Home = () => {
    const [subcatagoryData, setSubcategoryData] = useState(null);
    console.log(subcatagoryData);
    return (
        <div>
            <section>
                <HeaderBanner></HeaderBanner>
            </section>

            <section>
                <Gallary></Gallary>
            </section>

            <section className='mb-48 mt-48 '>
                <ShopByCategory
                    setSubcategoryData={setSubcategoryData}
                ></ShopByCategory>
                {
                    subcatagoryData && <ShopByCategoryDetails
                        subcatagoryData={subcatagoryData}
                    ></ShopByCategoryDetails>
                }
            </section>


            <section className='mb-20 mt-24'>
                <OurStore></OurStore>
            </section>



            <section className='mb-20 mt-24 '>
                <Feedback></Feedback>
            </section>

        </div>
    );
};

export default Home;