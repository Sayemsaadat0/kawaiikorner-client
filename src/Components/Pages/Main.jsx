import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavAndFooter/Navbar';
import Footer from './NavAndFooter/Footer';

const Main = () => {
    return (
        <div className='container mx-auto mt-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;