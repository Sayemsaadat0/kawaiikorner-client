import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBanner from './HeaderBanner';
import Gallary from './Gallary';
import OurStore from './OurStore';


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

        </div>
    );
};

export default Home;