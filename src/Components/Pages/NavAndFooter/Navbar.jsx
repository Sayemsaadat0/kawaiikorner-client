import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = null
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='/'>Add A Toy</Link>
                            <Link to='/'>My Toy</Link>
                            <Link to='/'>All Toy</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                   <img className='w-36 rounded-md' src="https://i.ibb.co/M86pxhv/ss.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Add A Toy</Link>
                        <Link to='/'>My Toy</Link>
                        <Link to='/'>All Toy</Link>
                        <Link to='/blog'>Blog</Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'>Login</Link>
                </div>
            </div>



        </div>
    );
};

export default Navbar;