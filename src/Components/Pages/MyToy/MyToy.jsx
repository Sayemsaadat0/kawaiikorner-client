import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import MyToytable from './MyToytable';

const MyToy = () => {
    const { user, } = useContext(AuthContext)
    const [info, setInfo] = useState([])
    const url = `http://localhost:5000/addtoy?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [])
    return (
        <div>
            my toy
            <div className="overflow-x-auto w-full mb-20 mt-20">
                <table className="table w-full">
                    {/* head */}
                    <thead className='mx-0'>
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
                            info.map(i => <MyToytable
                            info={info} key={i._id}
                            ></MyToytable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;