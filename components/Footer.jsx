
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-8 px-4 md:px-8">
                <div className="flex flex-wrap">
                    {/* Logo section */}
                    <div className=" md:w-1/4 mb-4">
                    <div className="flex items-center bg-white rounded-lg">
                        <a href="/" className="text-blue-500 text-3xl font-bold p-2">
                            सत्व-<span className='text-green-500'>Green</span>
                        </a>
                    </div>
                    </div>

                    {/* About section */}
                    <div className="w-full md:w-1/4 mb-4">
                        <h3 className="text-lg font-bold mb-2">About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* Contact us section */}
                    <div className="w-full md:w-1/4 mb-4">
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>

                    {/* Address section */}
                    <div className="w-full md:w-1/4 mb-4">
                        <h3 className="text-lg font-bold mb-2">Address</h3>
                        <p>123 Main Street</p>
                        <p>City, State, ZIP</p>
                    </div>
                </div>

                {/* Line separator */}
                <hr className="border-t border-gray-700 my-8" />

                {/* Copyright section */}
                <div className="w-full md:w-1/4 mb-4 flex items-center justify-center">
                    <p className="text-center mt-4 text-sm text-gray-500">
                        &copy; {currentYear} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
