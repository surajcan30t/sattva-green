'use client'
import Link from 'next/link';
import React,{useState} from 'react';
import { IoCart } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";



const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const toggleCart = () => setSidebar(!sidebar);

    return (
        <nav className="relative bg-green-500 font-[400]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center bg-white rounded-lg">
                        <a href="/" className="text-blue-500 text-3xl font-bold p-2">
                            सत्व-<span className='text-green-500'>Green</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-40 flex items-baseline space-x-4">
                            <a href="/" className="font-[400] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg">
                                Home
                            </a>
                            <a href="/product" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                                Products
                            </a>
                            <a href="/consult" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                                Consult
                            </a>
                            <a href="/remedies" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                                Remedies
                            </a>
                            <a href="/contactdoctor" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                                Remedies
                            </a>

                        </div>
                    </div>
                    <div className="hidden md:block">
                        {/* Search bar */}
                        <input type="text" placeholder="Search symptoms" className="bg-white text-gray-800 px-4 py-2 rounded-md" />
                    </div>
                </div>
            </div>
            <div className={` ${sidebar?'translate-x-0':'translate-x-full'} transition-all duration-500 sidebar absolute top-0 right-0 w-80 h-screen bg-white rounded-l-lg z-50 flex flex-col items-center` }>
                <div onClick={toggleCart} className='absolute top-5 right-5 text-black text-xl'><IoMdCloseCircle /></div>
                <h1 className='text-center text-black mt-10 text-xl'>Your Items</h1>
                <div>
                </div>
                <div className='flex flex-row justify-center gap-2 mt-10'>
                    <button className='bg-green-800 px-3 py-2 text-white'>Check Out</button>
                    <button className='bg-green-800 px-3 py-2 text-white'>Clear Cart</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
