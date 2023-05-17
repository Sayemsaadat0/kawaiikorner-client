import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
   /*  const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const name = form.name.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(email, name, password, photo)
        createUser(email, password)
            .then(result => {
                const createduser = result.user
                console.log(createduser)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleAccept = (event) => {
        setAccepted(event.target.checked)
    } */

    return (
        <div>
            <div className=" bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register account
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {/* onSubmit={handleRegister} */}
                        <form  className="space-y-6 " action="#" method="POST">
                            <div>
                                <label htmlFor="name" className=" block text-sm font-medium ">
                                    Your Name
                                </label>
                                <div className="mt-1">
                                    <input id="name" name="name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm" />
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
                                <label htmlFor="email" className=" block text-sm font-medium ">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
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
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    confirm  Password
                                </label>
                                <div className="mt-1">
                                    <input id="confirm" name="confirm" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>
                        {/*     <div className='flex items-center '>
                                <input
                                    onClick={handleAccept}
                                    type="checkbox"
                                    className="checkbox"
                                    name='checkbox'
                                />
                                <span className='mx-2'>accept
                                    <Link className='mx-2 btn-link' to='/terms'>
                                        terms and condition
                                    </Link>
                                </span>
                            </div> */}

                            <div>
                                <button
                                    // disabled={!accepted}
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Register
                                </button>
                                <p 
                                className='mt-2'>Already have an account ? 
                                <Link className='underline' to='/login'>login here</Link>
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