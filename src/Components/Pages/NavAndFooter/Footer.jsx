import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/Fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center ">
                  
                    <p className='text-3xl font-extralight text-fuchsia-500'>kawaiikorner Ltd.</p>
                    <p>Discover joy and imagination with our enchanting collection of toys. Fun-filled adventures await!</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a> 
                            <FaFacebook className='text-3xl'></FaFacebook>
                        </a>
                        <a> 
                            <FaInstagram className='text-3xl'></FaInstagram>
                        </a>
                        <a> 
                            <FaTwitter className='text-3xl'></FaTwitter>
                        </a>
                      
                      
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;