import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {

    // const { createUser } = useContext(AuthContext)
    const {createUser} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const name = form.name.value
        const password = form.password.value
        const photo = form.photo.value
   
        createUser(email, password)
            .then(result => {
                const createduser = result.user
             
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className=" bg-white md:flex  justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    <img className='w-[75%]' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1683012395~exp=1683012995~hmac=3185b5abb3a4ec2b9546bb01a2bcc0540447e41ba10a066854d8307e8901c0ae" alt="" />
                </div>
                
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register account
                    </h2>
                </div>
                    <div className=" py-8 px-4 shadow-lg w-[80%] bg-opacity-5 mx-auto sm:rounded-lg sm:px-10">
                        <form onSubmit={handleRegister} className="space-y-6 " action="#" method="POST">
                            <div>
                                <label htmlFor="name" className=" block text-sm font-medium ">
                                 Name
                                </label>
                                <div className="mt-1">
                                    <input id="name" name="name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className=" block text-sm font-medium ">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="photo_url" className=" block text-sm font-medium ">
                                    photo_url
                                </label>
                                <div className="mt-1">
                                    <input id="photo_url" name="photo" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 roun ded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <button

                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500
                                    hover:bg-black">
                                    Register
                                </button>
                                <p
                                    className='mt-2'>Already have an account ?
                                    <Link className='underline text-red-500' to='/login'>login here</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;