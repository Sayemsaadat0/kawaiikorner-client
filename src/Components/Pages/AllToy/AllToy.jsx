import React, { useContext, useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [allToy, setAlltoy] = useState([])
    const url = 'https://kawaiikorner-server.vercel.app/addtoy'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAlltoy(data)
            })
    }, [])
    /*  const hadnleDelete = id => {
         const proceed = confirm('are you sure you want to delete?')
         if (proceed) {
             fetch(`https://kawaiikorner-server.vercel.app/addtoy/${id}`)
                 .then(res => res.json())
                 .then(data => {
                     // console.log(data)
                     if (data.deletedCount > 0) {
                         alert('fuckoff')
                         const remaiining = bookings.filter(b => b._id !== id)
                         setBookings(remaiining)
                     }
                 })
 
         }
     } */

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.search.value;
        const url = `https://kawaiikorner-server.vercel.app/search?toyName=${toyName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchResults(data))
    }

    /*  const hadnleUpdate = id =>{
         fetch(`https://kawaiikorner-server.vercel.app/addtoy/${id}`,{
             method: 'PATCH',
             headers : {
                 'content-type' : 'application/json'
             },
             body : JSON.stringify({status : 'confirm'})
 
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if (data.modifiedCount > 0){
                 const remaining = allToy.filter(b => b._id !== id )
                 const updated = allToy.find(b => b._id === id)
                 updated.status = 'confirm'
                 const newUpdated =  [updated, ...remaining];
 
                 setAlltoy(newUpdated)
             }
         })
     } */
    return (
        <div>
            <h2 className='text-center text-3xl font-bold underline
           mt-10'>
                All toy
            </h2>
            <form onSubmit={handleSearch} className='flex justify-center mt-10'>
                <input type="text" name='search' placeholder="" className="input input-bordered 
            w-[25%] " />
                <button type='submit' className='  relative right-20  px-4'>
                    search
                </button>
            </form>
            <div className="overflow-x-auto w-full mb-20 mt-20">
                <table className="table  w-full">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Seller Name</th>
                            <th> Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {/* ...................  */}
                    {
                        searchResults.length ?
                            <tbody>
                                {
                                    searchResults.sort((a, b) => a.time > b.time ? -1 : 1).map((toyData, i) => <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{toyData.Seller_Name}</td>
                                        <td>{toyData.toyName}</td>
                                        <td>{toyData.sub_category}</td>
                                        <td>{toyData.price}</td>
                                        <td>{toyData.Available_Quantity}</td>
                                        <td><Link to={`/toy/${toyData?._id}`}><button className='btn btn-sm'> view details</button></Link></td>
                                    </tr>
                                    )
                                }

                            </tbody>

                            :
                            <tbody>
                                {
                                    allToy.sort((a, b) => a.time > b.time ? -1 : 1).map((toyData, i) => <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{toyData.Seller_Name}</td>
                                        <td>{toyData.toyName}</td>
                                        <td>{toyData.sub_category}</td>
                                        <td>{toyData.price}</td>
                                        <td>{toyData.Available_Quantity}</td>
                                        <td><Link to={`/toy/${toyData?._id}`}><button className='btn btn-sm'> view details</button></Link></td>
                                    </tr>
                                    )
                                }

                            </tbody>
                    }

                </table>
            </div>
        </div>
    );
};

export default AllToy;


{/* head */ }
{/*<thead className=''>
                        <tr>
                        <th className='mx-0'>
                        <label>
                                    
                                </label>
                            </th> 
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>sub-category</th>
                            <th>Price & Quantity</th>
                            <th></th>
                        </tr>
                    </thead> */}