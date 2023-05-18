import React from 'react';
import { FaFacebook, FaInstagram , FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="mt-20 bg-fuchsia-50">
                <div className="container mx-auto md:flex justify-between sm:text p-4">
                    <div className="w-full md:w-1/3">
                        <div className="flex items-center mb-4">
                            <img className='w-[50%] rounded-md' src="https://i.ibb.co/M86pxhv/ss.png" alt="" />

                        </div>
                        <p className="text-sm mb-4 w-72">

                            Discover joy and imagination with our enchanting collection of toys. Fun-filled adventures await!
                        </p>
                        <div className="flex">
                            <a
                                href="https://facebook.com"
                                className="mr-2 text-white hover:text-gray-400"
                            >
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="mr-2 text-white hover:text-gray-400"
                            >
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="mr-2 text-white hover:text-gray-400"
                            >
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4 ">Important links</h2>
                       <div className='flex gap-10'>
                       <p >
                            <FaFacebook className='text-3xl'></FaFacebook>
                        </p>
                        <p >
                            <FaInstagram className='text-3xl'></FaInstagram>
                        </p>
                        <p >
                            <FaTwitter className='text-3xl'></FaTwitter>
                        </p>
                       </div>
                      
                        
                    </div>
                    <div className="w-full md:w-1/3 md:flex md:justify-end">
                        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <p className="text-sm mb-2">
                                Email: info@example.com
                            </p>
                            <p className="text-sm mb-2">
                                Phone: +1 (123) 456-7890
                            </p>
                            <p className="text-sm">
                                Address: 123 Main Street, City, Country
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container mx-auto text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} kawaiiKorner . All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;