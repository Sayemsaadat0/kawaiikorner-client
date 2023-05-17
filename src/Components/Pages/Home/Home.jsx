import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            home 
             <Link 
             className='btn'
             to='/login'>login</Link>
             <Link 
             className='btn'
             to='/register'>register</Link>
        </div>
    );
};

export default Home;