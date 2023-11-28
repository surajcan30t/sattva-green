'use client'
import { set } from 'mongoose';
import React, { useState } from 'react';

const ConsultPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const [button, setButton] = useState('submit');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("preventdefault called")

        try {
            const res = await fetch("http://localhost:3000/api/consult-doctor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });
            console.log("fetch called")

            if (res.status === 200) {
                setName("");
                setEmail("");
                setMessage("");
                setButton("submitted");
                setStatus("success");
            } else {
                setStatus("failed");
            }
        } catch (err) {
            setStatus(err.message);
        }
    };

    return (
        <div className="flex flex-col gap-10 justify-center items-center h-screen bg-gray-200">
            <div>
                <h1 className='text-4xl text-green-600 font-bold capitalize'>consult a specialist</h1>
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                        id="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        {button}
                    </button>
                </div>
            </form>
            <div className='text-center'>

                {status === 'success' && <p className='text-green-800 m-1'>Message sent successfully!</p>}
                {status === 'failed' && <p className='text-red-600 m-1'>There was an error sending the message!! Please try again.</p>}
            </div>
        </div>
    );
};

export default ConsultPage;
