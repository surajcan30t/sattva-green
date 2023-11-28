'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsBagPlusFill } from "react-icons/bs";
import {data} from "@/utils/data"



const page = (addtoCart) => {
    const { products } = data
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recomended Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative m-2 shadow-slate-800 shadow-md rounded-lg p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <Link href={`/product/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={'alt'}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                        </Link>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute text-black font-bold" />
                                            {product.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                        
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">&#8377;{product.price}</p>

                                </div>
                                <button onClick={()=>{addtoCart(1,2,49,"name")}}  className="text-xl text-center font-medium text-gray-900 bg-blue-gray-600 p-2 ">                         
                                            <BsBagPlusFill />
                                        </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page