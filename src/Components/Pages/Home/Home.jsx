import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBanner from './HeaderBanner';
import Gallary from './Gallary';
import OurStore from './OurStore';
import Feedback from './Feedback';
import ShopByCategory from './ShopByCategory';


const Home = () => {
    return (
        <div>
            <section>
                <HeaderBanner></HeaderBanner>
            </section>
            <section>
                <Gallary></Gallary>
            </section>
            <section className='mb-20 mt-24'>
                <OurStore></OurStore>
            </section>
            <section className='mb-48 mt-48 '>
              <ShopByCategory></ShopByCategory>
            </section>
            <section className='mb-20 mt-24 '>
                <Feedback></Feedback>
            </section>

        </div>
    );
};

export default Home;