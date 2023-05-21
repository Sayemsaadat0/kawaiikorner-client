import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyData=useLoaderData();
    const {toyName,Picture,Seller_Name,sub_category,price,Available_Quantity,details}=toyData;
    
    
    return (
        <div className='h-screen 
        bg-gradient-to-tr from-emerald-200 to-fuchsia-400
        flex 
        flex-col 
        justify-center 
        items-center'>
          <h2 className='text-white text-3xl font-bold underline'> Toy details</h2>
            <div className="card
             card-compact
              w-[60%] mt-10
              ron
              mb-20 
             shadow-xl 
             mx-auto
             hover:bg-gradient-to-tr from-emerald-500 to-fuchsia-400
              hover:shadow-fuchsia-400
              hover:scale-110
              duration-700 
              ">
                <img
                    className='w-[75%] mx-auto'
                    src={Picture} alt="s" />
                <div className="card-body font-semibold ">
                    <h2 className="card-title text-3xl text-fuchsia-600">{toyName}</h2>
                  <div className=' text-xl'>
                  <p>Seller Name: {Seller_Name}</p>
                    <p>Sub Category: {sub_category}</p>
                    <p>Available_Quantity: {Available_Quantity}</p>
                    <p>Price:{price}</p>
                    <p className='w-96 
                '>Description: {details}</p>
                  </div>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;