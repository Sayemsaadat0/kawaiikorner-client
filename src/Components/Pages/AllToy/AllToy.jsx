import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
           <h2 className='text-center text-3xl font-bold underline
           mt-10'>
           All toy
           </h2>
           <div className='flex justify-center mt-10'>
           <input type="text" placeholder="" className="input input-bordered 
            w-[25%] " />
           <button className='  relative right-20  px-4'>
            search
           </button>
           </div>
            <div className="overflow-x-auto w-full mb-20 mt-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>sub-category</th>
                            <th>Price & Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user? 
                                            
                                            user.photoURL : 'n'} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user ? user.displayName : 'name'}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Humanoid robot Toy</td>
                            <td>

                                <div>
                                    <p>20$</p> <br />
                                    <span>Quantity: 20 </span>
                                </div>
                            </td>
                            <th>
                                
                                <Link to='/toydetails'>
                                <button 
                                className="btn btn-ghost btn-xs">View details</button>
                                </Link>
                               
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;