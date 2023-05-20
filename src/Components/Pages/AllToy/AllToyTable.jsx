import React from 'react';




const AllToyTable = ({ allToy, hadnleDelete }) => {
    const { 
        Available_Quantity, 
        Picture, 
        Seller_Name, 
        Seller_email, 
        details, 
        price, 
        sub_category, 
        toyName, _id } = allToy[0]

 
    // console.log(allToy)

    return (
        <div className='w-full'>
            <tr>
                <th>
                    <button
                        onClick={() => hadnleDelete(_id)}
                        className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
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
                        <button
                            className='hover:bg-fuchsia-200 rounded-md px-5'>
                            Update Details</button>
                    </div>
                </th>
            </tr>
        </div>
    );
};

export default AllToyTable;