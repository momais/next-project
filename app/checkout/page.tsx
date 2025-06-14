"use client";

import { FormEvent } from 'react';

interface FormData {
  Name: string;
  Email: string;
  PhoneNumber: string;
  ReferralCode?: string;
}

export default function CheckOut() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <div className="w-full overflow-hidden ">
        <div
          className="absolute top-20 left-0 w-screen min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center 
          bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40"
          style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-[250px] max-sm:h-[230px] text-center text-white">
            <h1 className="mb-2.5 lg:text-5xl md:text-3xl sm:text-2.5xl text-2xl font-bold">
              Checkout
            </h1>
            <nav>
              <ul className="flex items-center justify-center space-x-2 text-lg font-base">
                <li>
                  <a href="#" className="text-white text-base font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3.5 h-3 mt-1 fill-white">
                    <path
                      d="M438.6 233.4l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 201.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3z"
                      stroke="white"
                      strokeWidth="5"
                    />
                  </svg>
                </li>
                <li>
                  <a href="#" className="text-white text-base font-medium">
                    About Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="md:pt-[25%] pt-[70%] pb-5">
        <div className="container">
          <div className="row flex flex-wrap">
            <div className="lg:w-1/2 w-full flex flex-col items-center md:items-start mt-2">
              <div className="md:mb-15 md:min-h-[335px] mb-10 text-center md:text-left w-full sm:w-[80%] md:w-full">
                <h2 className="text-2xl md:text-4xl text-black font-semibold mb-2 relative w-fit mx-auto md:mx-0">
                  Summary
                </h2>
                <div className="w-60 h-[2.5px] bg-black mt-5 mb-6 mx-auto md:mx-0"></div>
                <div className="bg-gray-100 p-5 font-semibold w-full sm:w-[80%] md:w-[60%] h-auto rounded-md text-left">
                  <h2 className="text-lg border-b pb-2 mb-3">KSA Bundle 2024</h2>
                  <h2 className="text-lg border-b pb-2 mb-3">SAR 20</h2>
                  <h2 className="text-lg border-b pb-2 mb-3">Discount SAR - 100</h2>
                  <h2 className="text-lg border-b pb-2 mb-3">Total SAR 150</h2>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] lg:h-[520px] w-full bg-black rounded-3xl md:mb-20 mb-1">
              <div className="p-3 sm:p-9 xl:p-6 text-white bg-black rounded-2xl sm:rounded-4xl shadow-sm 
                   relative z-10 ml-auto lg:max-w-[520px] max-w-full lg:mb-[-215px]">
                <h2 className="text-2xl md:text-4xl font-semibold mb-2 w-fit mx-auto md:mx-0 text-center md:text-left">
                  Personal Information
                </h2>
                <div className="w-60 h-[2px] bg-white mt-4 mb-6 mx-auto md:mx-0"></div>
                <form method="POST" onSubmit={handleSubmit}>
                  <label className="mb-2.5 block">Name *</label>
                  <input 
                    required 
                    type="text" 
                    name="Name" 
                    className="py-2.5 px-5 h-12 rounded-xl border border-white bg-transparent w-full outline-none text-sm mb-5"
                  />
                  <label className="mb-2.5 block">Email *</label>
                  <input 
                    required 
                    type="email" 
                    name="Email" 
                    className="py-2.5 px-5 h-12 rounded-xl border border-white bg-transparent w-full outline-none text-sm mb-5"
                  />
                  <label className="mb-2.5 block">Phone *</label>
                  <input 
                    required 
                    type="tel" 
                    name="PhoneNumber" 
                    className="py-2.5 px-5 h-12 rounded-xl border border-white bg-transparent w-full outline-none text-sm mb-5"
                  />
                  <label className="mb-2.5 block">Referral Code (Optional)</label>
                  <input 
                    type="text" 
                    name="ReferralCode" 
                    className="py-2.5 px-5 h-12 rounded-xl border border-white bg-transparent w-full outline-none text-sm mb-5"
                  />
                  <button 
                    type="submit" 
                    className="py-3 px-7 text-base sm:text-sm w-full text-center font-medium 
                      bg-white text-black border border-white rounded-xl duration-700"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 