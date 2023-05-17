import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/category/0'
    // const navigate = useNavigate()
    // const {signinUser} = useContext(AuthContext)
   
   
    // const handleSignin = (event)=>{
    //     event.preventDefault()
    //     const form = event.target
    //     const email = form.email.value 
    //     const password = form.password.value 
    //     console.log(email,password)
    //     signinUser(email,password)
    //     .then(result =>{
    //         const loggedUser = result.user 
    //         console.log(loggedUser)
    //         form.reset()
    //         navigate(from, {replace : true})
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }
    return (
        <div>
            <div className=" bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-gradient-to-br  py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {/* onSubmit={handleSignin} */}
                        <form  className="space-y-6 " action="#" method="POST">
                            <div>
                                <label htmlFor="email" className=" block text-sm font-medium ">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email"  required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password"  required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Sign in
                                </button>
                                <p className='mt-2'>not have an account ? <Link className='underline' to='/register'>Register here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;