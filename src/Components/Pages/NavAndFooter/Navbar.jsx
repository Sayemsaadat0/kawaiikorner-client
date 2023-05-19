import React, { useContext } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handlelogout = ()=>{
        logout()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* dropdown */}
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='addtoy'>add a toy</NavLink>
                            <NavLink to='/mytoy'>My Toy</NavLink>
                            <NavLink to='/alltoy'>All Toy</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                        </ul>
                    </div>
                    <img className='w-36 rounded-md' src="https://i.ibb.co/M86pxhv/ss.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='addtoy'>add a toy</NavLink>
                        <NavLink to='/mytoy'>My Toy</NavLink>
                        <NavLink to='/alltoy'>All Toy</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <div className='tooltip tooltip-error' data-tip={user.displayName}>

                            <img className='mr-5 h-10 rounded-full' src={user.photoURL} alt="a" />
                        </div>
                            <button onClick={handlelogout}>logout</button>
                        </> :    <NavLink to='/login'>Login</NavLink>
                 }
                </div>
            </div>



        </div>
    );
};

export default Navbar;