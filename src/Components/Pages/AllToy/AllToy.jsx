import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import AllToyTable from './AllToyTable';

const AllToy = () => {
    
    const [allToy, setAlltoy] = useState([])
    const url = 'http://localhost:5000/addtoy'
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data =>{
            setAlltoy(data)
        })
    },[])
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
                     {
                        allToy.map(toyData => <AllToyTable 
                            key={toyData._id}
                            allToy={allToy}></AllToyTable>)
                     }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;

/* 
 
*/