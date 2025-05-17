'use client';

import { useState } from 'react';
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    if (res.ok) setMessage('Registered successfully');
    else setMessage(data.error || 'Error registering');
  };
  
  return (

<div className="page-content overflow-x-hidden">
 <section className="px-4">
  <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* small Left Side */}
  <div className="lg:hidden w-full relative bg-[#FFEDD4] start-side-content p-4 flex flex-col items-start">
  <div className="dz-bnr-inr-entry text-center mt-5">
    <h1 className="text-xl font-bold">My Account</h1>
    <nav className="mb-4">
      <ul className="text-left">
        <li className="mr-[3px] inline-block text-xs font-base">
          <a href="#">Home</a>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="inline-block">
          <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
        </svg>
        <li className="mr-[3px] inline-block text-xs font-base">My Account</li>
      </ul>
    </nav>
  </div>

  {/* Image with correct size and placement */}
  <div className="relative z-10 flex justify-between w-full items-center">
    <div className="text-left w-1/2">
      {/* Left side text */}
    </div>
    <div className="flex justify-end -mt-40">
      <img src="assets/images/registration/pic3.png" className="w-[120px] mt-16" alt="Account" />
    </div>
  </div>

  {/* Overlay */}
  <div className="absolute right-[2%] w-[30%] h-[80%] bg-white z-0 rounded-t-full"></div>
</div>

{/* large left */}
          <div className="col-xxl-6 lg:w-1/2 hidden md:block w-full relative bg-[#FFEDD4] start-side-content p-4 flex flex-col items-center lg:items-start">
            <div>
              <h1 className="xl:text-4.5xl md:text-4xl font-bold sm:text-3xl text-2xl mb-2">My Account</h1>
              <nav className="mb-4">
                <ul>
                  <li className="mr-[3px] inline-block text-base font-base">
                    <a href="#">Home</a>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="inline-block">
                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                  </svg>
                  <li className="mr-[3px] inline-block text-base font-base before:pr-2">Shop Registration</li>
                </ul>
              </nav>
            </div>

            {/* Image and text adjustment for small screens */}
            <div className="text-center sm:text-center relative z-10 m-auto mt-10 mb-4 max-3xl:mt-0 registration-media">
              <img src="assets/images/registration/pic3.png" className="w-[300px] sm:w-[350px] md:w-[410px] mx-auto" width={410} height={410} alt="Account" />
            </div>

            <div className="absolute bottom-8 left-[14%] w-[51%] h-[65%] bg-white z-0 rounded-t-full"></div>
          </div>

          {/* Right Side - Login Form */}
          <div className="col-xxl-6 lg:w-1/2 w-full flex flex-col end-side-content p-3">
            <div className="p-6 max-w-[522px] m-auto rounded-3xl border border-black w-full sm:p-5 lg:p-20 max-xl:p-7.5 max-sm:!p-3.6">
              <h2 className="mb-2 text-center text-3xl font-bold">Registration Now</h2>
              <p className="text-center mb-9 text-base text-gray-800">Welcome please registration to your account</p>
              
              <form onSubmit={handleRegister}>
                <div className="mb-6">
                  <label className="block font-medium mb-2">Username</label>
                  <input type="text" placeholder="Username" className="w-full py-4 px-5 h-13.5 outline-none rounded-xl 
                   border border-black bg-white placeholder-black duration-500 focus:bg-light"
                   value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-6">
                  <label className="block font-medium mb-2">Email Address</label>
                  <input type="email" placeholder="Email Address" className="w-full py-4 px-5 h-13.5 outline-none rounded-xl 
                    border border-black bg-white placeholder-black duration-500 focus:bg-light"
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              <div className="mb-4">
      <label className="block font-medium mb-2">Password</label>
      <div className="relative z-1">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full py-4 px-5 h-13.5 outline-none rounded-xl border border-black placeholder-black bg-white duration-500 focus:bg-light dz-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div
          className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[-20%] flex items-center justify-center w-10 h-auto"
          onClick={() => setShowPassword(!showPassword)}
        >
          {/* Flipped icons */}
          {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
    </div>
                <div className="form-row flex justify-between mb-9">
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="form-check-input ml-1" id="basic_checkbox_1" />
                      <label className="form-check-label" htmlFor="basic_checkbox_1" className="ml-2 font-base">
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                   <button type="submit" className="btn py-3 px-9 max-sm:px-6 text-base max-sm:text-sm font-Lufga 
                    inline-block font-medium leading-[1.2] border border-black bg-black text-white 
                    rounded-xl duration-700 relative uppercase mr-2">Register</button>

                  <Link href="/login" className="btn py-3 px-8 max-sm:px-6 text-base max-sm:text-sm font-Lufga 
                    inline-block font-medium leading-[1.2] border border-black hover:bg-black 
                    hover:text-white rounded-xl duration-700 relative uppercase">
                    Sign In
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}