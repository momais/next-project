"use client";
import React from "react";

export default function Home() {
  return (
  <div className="page-content">
     
<div className="relative md:w-[110%] w-[130%] h-[330px] md:h-[0%] md:-ml-20 -ml-4 -mt-4">
  {/* Background Image with Red Overlay */}
  <div className="absolute inset-0 bg-cover bg-center w-[85%] h-[105%]" 
  style={{ backgroundImage: "url('/assets/bg2.jpg')" }}>
  <div className="absolute inset-0 bg-red-800 opacity-70"></div>
</div>

  {/* Content Container */}
  <div className="relative flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-16 w-full">
    <div className="text-white md:ml-7 ml-0 mt-16 md:mt-10 text-left w-full max-w-2xl">
      <h2 className="text-3xl md:text-6xl font-bold">Become a Partner</h2>
      <p className="mt-4 text-base md:w-[85%] w-[80%] ml-1">
        ENJOY offers some amazing BOGO deals for you. Now get two for the price of one and enjoy!
      </p>
    </div>

    {/* White Background Box */}
    <div className="bg-white p-3 md:mr-[23%] -mt-3 hidden md:block">
      <img src="/assets/offer.png" alt="Offer" className="w-[150px] h-[230px]" />
    </div>
  </div>
</div>




    <div className="flex items-center justify-center bg-white mt-[10%]">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-start gap-36">
        
        {/* Left Side - Form */}
        <div className="w-full lg:w-[50%] bg-white rounded-md mb-6 md:-ml-14 -ml-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 relative w-fit mx-auto md:mx-0 text-center md:text-left">
          Vendor Details
        <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-0 md:top-14
        top-12 w-[150%] md:w-[110%] h-[3px] bg-red-400"></div>
        </h2>

          <form className="space-y-4 mt-9">
            <input type="text" placeholder="Brand Name" className="md:w-[85%] w-[100%] p-4 
            placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-0" />
            <input type="email" placeholder="Email" className="md:w-[85%] w-[100%] p-4 placeholder-gray-500 
            border border-gray-300 rounded-md focus:outline-none focus:ring-0" />
            <input type="text" placeholder="Phone" className="md:w-[85%] w-[100%] p-4 placeholder-gray-500 
            border border-gray-300 rounded-md focus:outline-none focus:ring-0" />
            <input type="password" placeholder="Password" className="md:w-[85%] w-[100%] p-4 
            placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-0" />

            <button className="md:w-[85%] w-[100%] bg-red-500 text-white py-3 rounded-md font-semibold">
              Get Started
            </button>
          </form>

          <p className="text-sm md:text-base text-center md:text-left mt-4 w-[80%] md:w-[85%]">
            By registering, you consent to our{' '}
            <a href="#" className="text-blue-700">Privacy Policy</a> and{' '}
            <a href="#" className="text-blue-700">End User License Agreement</a>.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[38%] -mt-28 lg:-mt-0">
          <img src="/assets/men.png" alt="Vendor" className="lg:w-full w-[120%] h-auto rounded-md" />
        </div>
      </div>
    </div>

<div className="px-6 py-12 md:-ml-8 -ml-0">

  <h2 className="text-2xl md:text-4xl font-semibold mb-2 relative w-fit mx-auto md:mx-0 text-center md:text-left">
  How we can help our partners</h2>
<div className="w-60 h-[3px] bg-red-500 mt-4 mb-6 mx-auto md:mx-0"></div>
  <p className="font-base md:text-left text-center">The Things We’ve Made Happen That <br /> Work A Little Too Well</p>

  <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:gap-12 gap-3 mt-8">
    <div className="flex space-x-3 justify-center lg:justify-start bg-red-100 lg:bg-transparent p-6 md:p-0">
      <img src="/assets/1.png" alt="Higher Footfall" className="md:w-6 w-6 md:h-6 h-5" />
      <div className="text-md">
        <h3 className="font-semibold">Higher footfall</h3>
        <p className="font-base -ml-8 mt-3">Boost your foot traffic <br /> with our attractive deals</p>
      </div>
    </div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/2.png" alt="Brand Visibility" className="w-6 h-6" />
      <h3 className="font-semibold">Brand Visibility</h3>
    </div>
    <p className="font-base mt-2">
      Project Your Identity to the Online World through Digital Advertising
    </p>
  </div>
</div>

    <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/3.png" alt="Brand Visibility" className="w-6 h-6" />
  <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
    Gain Deeper Insight into Your Customers with Data Analytics
    </p>
  </div>
</div>

  <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/4.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Strategic Marketing</h3>
    </div>
    <p className="font-base mt-2">
   Deliver Timely, Relevant Offers for Maximum Impact and Results</p>
  </div>
</div>


 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Gain Deeper Insight into Your Customers with Data Analytics</p>
  </div>
</div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Leverage the Power of Multiple Platforms for Greater Impact</p>
  </div>
</div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Leverage the Power of Multiple Platforms for Greater Impact</p>
  </div>
</div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Leverage the Power of Multiple Platforms for Greater Impact</p>
  </div>
</div>

  </div>
</div>

    </div>
  );
} 