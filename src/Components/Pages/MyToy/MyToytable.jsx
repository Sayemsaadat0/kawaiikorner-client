import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToytable = ({info}) => {
    const{Available_Quantity,Picture,Seller_Name,Seller_email,details,price,sub_category,toyName} = info[0]
    const { user, } = useContext(AuthContext)
    console.log(info)
    return (
        <div className='w-full'>
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
                                            {user?user.email : 'name'}
                                            </p>
                                            </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {toyName}
                            </td>
                            <td>{sub_category}</td>
                            <td>

                                <div>

                                    <span>price : {price} </span> <br />
                                    <span>Quantity : {Available_Quantity} </span> <br />
                                    <span>ratings : 5 </span>
                                </div>
                            </td>
                            <th>
                                <div>
                                    <Link to='/updatetoy'>
                                    <button className='hover:bg-fuchsia-200 rounded-md px-5'>Update Details</button>
                                    </Link>
                                </div>

                            </th>
                        </tr>
        </div>
    );
};

export default MyToytable;