'use client'
import React, { useState,useEffect } from 'react'
import FormField from '@/components/FormField';
import { IoCloseSharp } from "react-icons/io5";
import { getRandomPrompt } from '@/utils';

const Suggestion = () => {



  const [form, setForm] = useState({});
  const [show, setShow] = useState(true);
  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  // const handleSurpriseMe = () => {
  //   const randomPrompt = getRandomPrompt(form.prompt);
  //   setForm({ ...form, prompt: randomPrompt });
  // };

  const handleChange = () => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShow(false)

  }
  useEffect(() => {
    
  
      const handleChange = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
      };
      handleChange()
    
  }, [])
  


  return (<>
    {showComponent &&(
    <div className={` ${!show ? 'hidden' : 'block'} relative bg-[#323131ab] h-screen w-[98.9vw] justify-center items-center`}>
      <div className='absolute top-[20%] left-[33%] bg-white rounded-2xl border-2 border-gray-600 w-[500px] h-[350px] flex flex-col justify-center items-center'>
        <div onClick={handleClose} className={` absolute rounded-tr-xl text-white text-2xl font-bolder bg-red-600 hover:bg-red-700 justify-center items-center flex text-center top-0 right-0 w-16 h-12`}>
          <IoCloseSharp />
        </div>
        <div>
          <h1 className='text-4xl text-black font-extrabold'>Tip Of The Day</h1>
        </div>
        <div onChange={handleChange} className='font-[700] text-2xl p-2 h-36 w-full text-center mt-10 text-green-900'>
          {form.prompt}
        </div>
        {/* <button onClick={handleSurpriseMe} className='h-16 w-1/3 bg-slate-900 hover:bg-slate-950 hover:shadow-slate-600 hover:shadow-md text-white rounded-lg'>Next</button> */}
      </div>
    </div>
    )}
    </>
  )
}

export default Suggestion