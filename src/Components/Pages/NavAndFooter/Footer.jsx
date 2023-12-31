import React from 'react';
import { FaFacebook, FaInstagram,FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center ">
                  
                    <p className='text-3xl font-extralight text-fuchsia-500'>kawaiikorner Ltd.</p>
                    <p>Discover joy and imagination with our enchanting collection of toys. Fun-filled adventures await!</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link> 
                           <FaFacebook className='text-5xl'></FaFacebook>
                        </Link>
                       
                        <Link> 
                           <FaInstagram className='text-5xl'></FaInstagram>
                        </Link>
                       
                        <Link> 
                           <FaTwitter className='text-5xl'></FaTwitter>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;