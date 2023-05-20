import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllToyTable = ({ allToy }) => {
    const{Available_Quantity,Picture,Seller_Name,Seller_email,details,price,sub_category,toyName} = allToy[0]
    // const { user } = useContext(AuthContext)
    console.log(allToy)
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
                                       {Seller_Name}
                                       </p> 
                                       <p className='font-extralight'>
                                       {Seller_email}
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

export default AllToyTable;