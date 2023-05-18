import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = null
    return (
        <div>
         <nav className=''>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <img className='w-[15%]' src="https://i.ibb.co/M86pxhv/ss.png" alt="" />
                        <div className="ml-10 flex items-baseline space-x-4">
                         <Link
                         className="hover:bg-fuchsia-400 duration-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                         to='/'>Home</Link>
                         <Link
                         className="hover:bg-fuchsia-400 duration-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                         to='/'>All Toy</Link>
                         <Link
                         className="hover:bg-fuchsia-400 duration-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                         to='/'>Add A Toy</Link>
                         <Link
                         className="hover:bg-fuchsia-400 duration-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                         to='/'>My Toy</Link>
                         <Link
                         className="hover:bg-fuchsia-400 duration-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                         to='/'>Blogs</Link>
                       {
                        user ? <button>logout</button> :   <Link
                        className="hover:bg-fuchsia-400 duration-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        to='/login'>login</Link>
                       }
                         <div>
                            <img src="" alt="s" />
                         </div>
                        </div>
                    </div>
                </div>
            </nav> 

          

        </div>
    );
};

export default Navbar;