import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
// import MyToytable from './MyToytable';

const MyToy = () => {
    const { user, } = useContext(AuthContext)
    const [info, setInfo] = useState([])
    const url = `http://localhost:5000/addtoy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, []);

    const handleDelete=(id)=>{
        const url=``
        fetch(`url`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('Data Deleted successFully')
            }
        })
    }
    return (
        <div>
            my toy
            <div className="overflow-x-auto w-full mb-20 mt-20">
                <table className="table w-full">
                    <tr>
                        <th>Delete</th>
                        <th>Seller Name</th>
                        <th> Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                    {
                        info.map((Data, i) => <tr key={i}>
                            <th><button onClick={()=>handleDelete(Data?._id)}  className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button></th>
                            <td>{Data.Seller_Name}</td>
                            <td>{Data.toyName}</td>
                            <td>{Data.sub_category}</td>
                            <td>{Data.price}</td>
                            <td>{Data.Available_Quantity}</td>
                            <td><Link to={`/updateToy/${Data._id}`}><button className='btn btn-sm'>Update </button></Link></td>

                        </tr>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToy;