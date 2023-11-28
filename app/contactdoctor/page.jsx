import React from 'react'
import {data } from "@/utils/doc"

const page = () => {
    const {doctors} = data
  return (
    <div className='flex flex-col items-center gap-5 '>
        {data.map((item) => {
            return (
                <div>
                    <h1 className='text-2xl text-black'>{item.name}</h1>
                    <h1 className='text-xl text-black'>{item.email}</h1>
                    <h1 className='text-xl text-black'>{item.phone}</h1>
                </div>
            )
})}
    </div>
  )
}

export default page