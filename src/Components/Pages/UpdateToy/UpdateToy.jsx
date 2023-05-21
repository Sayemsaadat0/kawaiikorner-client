import React, { useContext } from 'react';

import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateToy = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleAddToy = (event) => {

        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const Picture = form.Picture.value;
        const Seller_Name = form.Seller_Name.value;
        const Seller_email = form.Seller_email.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const Available_Quantity = form.Available_Quantity.value;
        const details = form.details.value;
        const formData = {
            toyName: toyName,
            Picture: Picture,
            Seller_Name: Seller_Name,
            Seller_email: Seller_email,
            sub_category: sub_category,
            price: price,
            Available_Quantity: Available_Quantity,
            details: details
        }
        console.log(formData);
        fetch('http://localhost:5000/addtoy', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Updated successfully'
                    )
                    form.reset()
                    navigate('/mytoy')
                    console.log(data)

                }
            })
    }
    return (
        <div>
            <h2 className='text-center text-3xl mb-10 font-semibold underline'>Update Details</h2>
            <form className='mb-20' onSubmit={handleAddToy}>
                <div className="form-control w-[50%] mx-auto">
                    <label
                        className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input
                        type="text"
                        name='toyName'
                        placeholder="Toy name"
                        className="input input-bordered w-full" />
                    <label
                        className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input
                        type="text"
                        name='Picture'
                        placeholder="Picture"
                        className="input input-bordered w-full" />

                    <label
                        className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input
                        type="text"
                        name='Seller_Name'
                        placeholder="Seller Name"
                        className="input input-bordered w-full" />

                    <label
                        className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <input
                        type="email"
                        name='Seller_email'
                        defaultValue={user ? user.email : 'your email '}
                        className="input input-bordered w-full" disabled />

                    <label
                        className="label">
                        <span className="label-text">sub category</span>
                    </label>
                    <input
                        type="text"
                        name='sub_category'
                        placeholder="sub category"
                        className="input input-bordered w-full" />

                    <label
                        className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        name='price'
                        placeholder="price"
                        className="input input-bordered w-full" />

                    <label
                        className="label">
                        <span className="label-text">Available Quantity </span>
                    </label>
                    <input
                        type="text"
                        name='Available_Quantity' placeholder="Available Quantity " className="input input-bordered w-full" />

                    <label
                        className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input
                        type="text"
                        name='details'
                        placeholder="details"
                        className="input input-bordered w-full" />

                </div>

                <div className='flex justify-center'>
                    <button type='submit' className='btn btn-success w-[50%] mt-5'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;