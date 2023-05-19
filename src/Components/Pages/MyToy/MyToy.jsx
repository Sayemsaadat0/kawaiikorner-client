import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToy = () => {
    const { user,  } = useContext(AuthContext)
    return (
        <div>
            my toy
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
                                          <img src="s" alt="s" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            <p>
                                            {user ? user.displayName : 'name'}
                                            </p>
                                            <p className='font-extralight'>
                                                user email
                                            </p>
                                            </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Humanoid robot Toy</td>
                            <td>

                                <div>

                                    <span>price : 54545$ </span> <br />
                                    <span>Quantity : 20 </span> <br />
                                    <span>ratings : 5 </span>
                                </div>
                            </td>
                            <th>
                                <div>
                                    <button className='hover:bg-fuchsia-200 rounded-md px-5'>edit</button>
                                </div>

                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;