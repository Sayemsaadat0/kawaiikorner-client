import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ShopByCategoryDetails = ({ subcatagoryData }) => {

    const [subCategoryDetails, setSubCategoryDetails] = useState([])
    const { subcatname } = subcatagoryData
    // console.log(subcatname);
    useEffect(() => {
        fetch(`https://kawaiikorner-server.vercel.app/category?sub_category=${subcatname}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSubCategoryDetails(data)
            })
    }, [subcatname])
    return (
        <div className='mx-auto md:flex justify-around mt-10'>
            {
                subCategoryDetails.map(category => <div key={category?._id}>
                    <div className='md:flex justify-evenly gap-10'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl 
                                hover:bg-gradient-to-tr
                                from-emerald-200
                                 to-fuchsia-300 ">
                            <figure><img src={category.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category?.name}</h2>
                                <p>price :{category.price} </p>
                                <p className='flex'>ratings :
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </p>

                                  <button
                                    className="btn flex items-center gap-2 ">
                                    View Details
                                 </button>
                    
                            </div>
                        </div>
                    </div>
                </div>
                )}
        </div>
    );
};

export default ShopByCategoryDetails;