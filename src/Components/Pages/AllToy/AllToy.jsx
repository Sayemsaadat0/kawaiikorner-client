import React, { useContext, useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';

const AllToy = () => {
    const [allToy, setAlltoy] = useState([])
    const url = 'http://localhost:5000/addtoy'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAlltoy(data)
            })
    }, [])
    const hadnleDelete = id => {
        const proceed = confirm('are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/addtoy/${id}`)
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
    }

    /*  const hadnleUpdate = id =>{
         fetch(`http://localhost:5000/addtoy/${id}`,{
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
            <div className='flex justify-center mt-10'>
                <input type="text" placeholder="" className="input input-bordered 
            w-[25%] " />
                <button className='  relative right-20  px-4'>
                    search
                </button>
            </div>
            <div className="overflow-x-auto w-full mb-20 mt-20">
                <table className="table  w-full">
                   {/* ...................  */}
                    <tbody>
                        {
                            allToy.map(toyData => 
                            <AllToyTable
                                hadnleDelete={hadnleDelete}
                                hadnleUpdate={hadnleUpdate}
                                key={toyData._id}
                                allToy={allToy}>
                            </AllToyTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;


 {/* head */}
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