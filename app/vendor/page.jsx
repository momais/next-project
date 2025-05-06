"use client";

import { useState, useEffect } from "react";
import { Range } from 'react-range';
import Link from "next/link";

export default function vendor() {

  const [values, setValues] = useState([0, 400]);
  const minLimit = 0;
  const maxLimit = 400;

  const [latestOpen, setLatestOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

 const [products, setProducts] = useState([]);
 const baseUrl = "https://letsenjoyksa.com/imgupload/";

  useEffect(() => {
    fetch("/api/vendor")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

 
  return (
    <div>
    <div className="w-full overflow-hidden mb-[26%]">
      <div className="absolute top-20 left-0 w-screen min-h-[250px] max-sm:min-h-[230px] bg-cover 
      bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black 
      before:opacity-40" style={{ backgroundImage: "url('/assets/bg1.jpg')" }}>
        <div className="relative z-10 flex flex-col items-center justify-center h-[250px] max-sm:h-[230px] text-center text-white">
          <h1 className="mb-2.5 lg:text-5xl md:text-3xl sm:text-2.5xl text-2xl font-bold">
            Shop Standard
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
                  Shop Standard
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>


<div className="block lg:hidden p-2 relative z-10 md:-mt-[3%] -mt-0 md:pt-0 pt-[160px]">
  {/* Top Text */}
  <div className="text-black mb-3">
    Showing 1–5 Of 50 Results
  </div>

  {/* Filter + Dropdown + View Icons */}
  <div className="flex items-center justify-between">
    {/* Left Side: Filter & Latest */}
    <div className="flex items-center gap-4">
      {/* Filter Icon */}
      <div className="flex items-center gap-1 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500">
  <line x1="3" y1="6" x2="21" y2="6" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
  <circle cx="10" cy="6" r="2" fill="gray"/>

  <line x1="3" y1="12" x2="21" y2="12" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
  <circle cx="6" cy="12" r="2" fill="gray"/>

  <line x1="3" y1="18" x2="21" y2="18" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
  <circle cx="14" cy="18" r="2" fill="gray"/>
</svg>

        <span className="font-base">Filter</span>
      </div>

      {/* Latest Dropdown */}
       <div className="relative">
          <button className="font-base flex items-center gap-8" onClick={() => setLatestOpen(!latestOpen)}>
            Latest
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          </button>
          {latestOpen && (
            <div className="absolute top-full -left-5 mt-1 bg-white shadow-lg border rounded-md w-32 z-50">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Latest</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Popularity</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Newest</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Oldest</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Low to High</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">High to Low</li>
              </ul>
            </div>
          )}
        </div>
    </div>

    {/* Right Side: View Icons */}
    <div className="flex items-center gap-3">
      {/* Grid View Icon */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 opacity-50">
  <rect x="4" y="4" width="4" height="4" rx="1" fill="gray"/>
  <rect x="4" y="10" width="4" height="4" rx="1" fill="gray"/>
  <rect x="4" y="16" width="4" height="4" rx="1" fill="gray"/>
  <rect x="10" y="4" width="10" height="4" rx="1" fill="gray"/>
  <rect x="10" y="10" width="10" height="4" rx="1" fill="gray"/>
  <rect x="10" y="16" width="10" height="4" rx="1" fill="gray"/>
</svg>

          {/* Second SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="gray"  viewBox="0 0 24 24"
           className="w-6 h-6 opacity-50 gap-0">
            <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
          </svg>
    </div>
  </div>
</div>


<div className="hidden md:block">
<div className="flex items-center justify-between p-2 relative z-10 md:-mt-[3%] -mt-0 md:pt-0 pt-[160px]">
      <div className="flex items-center gap-2 cursor-pointer ml-4 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500">
  <line x1="3" y1="6" x2="21" y2="6" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
  <circle cx="10" cy="6" r="2" fill="gray"/>

  <line x1="3" y1="12" x2="21" y2="12" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
  <circle cx="6" cy="12" r="2" fill="gray"/>

  <line x1="3" y1="18" x2="21" y2="18" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
  <circle cx="14" cy="18" r="2" fill="gray"/>
</svg>

        <span className="font-base">Filter</span>
      </div>

  <div className="text-[15px] mr-[7.5%] whitespace-nowrap">
    Showing 1–5 Of 50 Results
  </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="font-base flex items-center gap-8" onClick={() => setLatestOpen(!latestOpen)}>
            Latest
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          </button>
          {latestOpen && (
            <div className="absolute top-full -left-5 mt-1 bg-white shadow-lg border rounded-md w-32 z-50">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Latest</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Popularity</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Newest</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Oldest</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Low to High</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">High to Low</li>
              </ul>
            </div>
          )}
        </div>

        <div className="border-l border-gray-300 h-10"></div>

        {/* Products Dropdown */}
        <div className="relative">
          <button className="font-base flex items-center gap-8" onClick={() => setProductsOpen(!productsOpen)}>
            Products
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>  
          </button>
          {productsOpen && (
            <div className="absolute top-full -left-2 mt-1 bg-white shadow-lg border rounded-md w-32 z-50">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">9 Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">12 Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">14 Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">16 Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-red-700">20 Products</li>

              </ul>
            </div>
          )}
        </div>

        <div className="border-l border-gray-300 h-10"></div>
        <div className="flex items-center gap-2">
          {/* First SVG */}
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 opacity-50">
  <rect x="4" y="4" width="4" height="4" rx="1" fill="gray"/>
  <rect x="4" y="10" width="4" height="4" rx="1" fill="gray"/>
  <rect x="4" y="16" width="4" height="4" rx="1" fill="gray"/>
  <rect x="10" y="4" width="10" height="4" rx="1" fill="gray"/>
  <rect x="10" y="10" width="10" height="4" rx="1" fill="gray"/>
  <rect x="10" y="16" width="10" height="4" rx="1" fill="gray"/>
</svg>

          {/* Second SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="gray"  viewBox="0 0 24 24"
           className="w-6 h-6 opacity-50 gap-0">
            <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
          </svg>

          {/* Third SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
            <circle cx="5" cy="5" r="2" />
            <circle cx="12" cy="5" r="2" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
            <circle cx="5" cy="19" r="2" />
            <circle cx="12" cy="19" r="2" />
            <circle cx="19" cy="19" r="2" />
          </svg>

        </div>
      </div>
    </div>
    </div>


 <div className="flex flex-col md:flex-row -mt-4">
      {/* Sidebar */}
      <aside className="w-full md:w-[30%] p-2 hidden md:block -ml-4 -mt-[7%]">
         <div className="max-lg:mb-10 p-8">
                <div>
                  <div className="relative flex flex-wrap items-stretch pl-0 w-[100%] mt-16 border-black p-2">
                 <input name="Search" required="required" type="search" className="py-2.5 px-4 text-2sm 
                 placeholder-black text-title outline-none flex-auto w-[1%] rounded-xl border border-black"
                      placeholder="Search Product" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[87%] z-9">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
 strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-black">
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>
                    </div>
                  </div>
                </div>
              </div>
              

<div className="w-full max-w-xl mx-auto p-10 -mt-12">
      <h2 className="font-semibold text-base -ml-2">Price</h2>
      <div className="relative w-full h-12 flex items-center">
        <Range step={1} min={minLimit} max={maxLimit} values={values}
         onChange={(newValues) => setValues(newValues)} renderTrack={({ props, children }) => (
            <div {...props} className="w-full h-[4px] bg-gray-300 relative">
              <div className="absolute h-[4px] bg-black"
                style={{
                  left: `${((values[0] - minLimit) / (maxLimit - minLimit)) * 100}%`,
                  right: `${100 - ((values[1] - minLimit) / (maxLimit - minLimit)) * 100}%`
                }} />
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;
            return (
              <div key={key} {...restProps} className="w-5 h-5 bg-white border-2 border-black rounded-full 
              cursor-default focus:outline-none" />
            );
          }} />
      </div>
      <div className="flex gap-8 text-sm font-base">
        <span className="text-left">Min Price: ${values[0]}</span>
        <span className="text-right">Max Price: ${values[1]}</span>
      </div>
    </div>

  <div className="max-lg:mb-10 -mt-10 p-8">
  <h6 className="relative mb-6.1 font-medium">Color</h6>
  <div className="flex flex-wrap items-center color-filter ps-2 mt-4 gap-x-4 gap-2.5">
    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#000000" }}></span>
    </div>
    
    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#9BD1FF" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#21B290" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#FEC4C4" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#FF7354" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#51EDC8" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#B77CF3" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#FF4A76" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#3E68FF" }}></span>
    </div>

    <div className="form-check">
      <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
       type="radio" name="radioNoLabel" aria-label="..." />
      <span className="size-4 block relative rounded-full z-1" style={{ backgroundColor: "#7BEF68" }}></span>
    </div>
  </div>
</div>

 <div className="max-lg:mb-10 p-8 -mt-10">
      <h6 className="relative mb-6.1 font-medium">Size</h6>
      <div className="flex flex-wrap relative product-size mt-3 space-y-2">

      <input  type="radio"  className="opacity-0 absolute pointer-events-none btn-check" 
      name="btnradio1"  />
      <label htmlFor="btnradio11" className="size-[34px] leading-[34px] rounded-full text-center border 
      border-black bg-black text-white mr-2.5 mb-1.1">4</label>

           <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1" />
                  <label
                    htmlFor="btnradio21"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >6</label>

                  <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1"
                     />
                  <label htmlFor="btnradio31" className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >8</label>

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                  />
                  <label
                    htmlFor="btnradio41"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >10</label
                  >

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                  />
                  <label
                    htmlFor="btnradio51"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >12</label
                  >

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                  />
                  <label
                    htmlFor="btnradio61"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >14</label
                  >

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                  />
                  <label
                    htmlFor="btnradio71"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >16</label
                  >

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                  />
                  <label
                    htmlFor="btnradio81"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >18</label
                  >

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                  />
                  <label
                    htmlFor="btnradio91"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black 
                    mr-2.5 mb-1.1"
                    >20</label
                  >
                </div>
              </div>


          <div className="max-lg:mb-10 p-8 -mt-10">
                <h6 className="relative mb-6.1 font-medium">Category</h6>
                <ul className="mt-5">
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 text-black"
                      href="#"
                      >Dresses</a>
                    (10)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Top &amp; Blouses</a>
                    (5)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Boots</a>
                    (17)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Jewelry</a>
                    (13)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Makeup</a>
                    (06)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Fragrances</a>
                    (17)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Shaving &amp; Grooming</a>
                    (13)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-base">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Jacket</a>
                    (06)
                  </li>
                  <li className="py-2 text-right w-full text-2sm font-bases">
                    <a
                      className="inline-block float-left duration-500 hover:text-primary"
                      href="#"
                      >Coat</a>
                    (22)
                  </li>
                </ul>
              </div>


              <div className="max-lg:mb-10 p-8 -mt-12">
                <h6 className="relative mb-6.1 font-medium">Tags</h6>
                <div className="tagcloud mt-6">
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Vintage
                  </a>
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Wedding</a
                  >
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Cotton</a
                  >
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Linen</a
                  >
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Navy</a
                  >
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Urban</a
                  >
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Business Meeting</a
                  >
                  <a className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm 
                  leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white" href="#">
                  Formal
                    </a>
                </div>
              </div>
              
       <a href="#" className="btn py-2.5 px-4 text-sm ml-8 inline-block font-medium leading-[1.2]
         border border-black bg-black text-white rounded-xl duration-700 relative overflow-hidden">
        RESET</a> 
            

      </aside>
      


      {/* Product Grid */}
      <main className="w-full md:w-3/4 md:mt-0 mt-[30%]">

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 

{Array.isArray(products) && products.slice(0, 12).map((product, index) => (
  <div key={index} className="bg-white p-2 rounded-lg mt-4">
    <div className="relative">

   <Link href={`/singlevendor/id${index + 1}`}>
                {product.company_picture && (
                  <img src="https://placehold.co/100x100"
                    alt={product.title_user}
                    className="w-full h-48 object-cover rounded-2xl cursor-pointer"
                  />
                )}
              </Link>
      <button className="absolute top-3 left-3 bg-white px-2 py-1.5 text-xs font-semibold rounded-full">
        GET 20% OFF
      </button>
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <div className="size-[40px] bg-[#0000004d] flex items-center justify-center rounded-full shadow-default relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="dz-heart" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </div>

        {/* Cart Icon */}
        <div className="size-[40px] bg-[#0000004d] flex items-center justify-center rounded-full shadow-default relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9h18l-2 10H5L3 9z" />
            <path d="M9 9l3-6 3 6" />
            <line x1="5" y1="13" x2="5" y2="17" />
            <line x1="9" y1="13" x2="9" y2="17" />
            <line x1="15" y1="13" x2="15" y2="17" />
            <line x1="19" y1="13" x2="19" y2="17" />
          </svg>
        </div>
      </div>
    </div>

    {/* Title and Price */}
    <div className="flex justify-between mt-2 hover:cursor-pointer">
      <h3 className="text-lg font-semibold leading-normal">
       {product["company_name"]}
      </h3>
      <p className="text-lg font-semibold">$80</p>
    </div>
  </div>
))}




      
<div className="flex flex-wrap mt-[25%] mb-[20%] max-md:text-center w-[870px]">
  <div className="md:w-1/2 w-full flex justify-start ml-0 mb-4 max-md:mb-6">
    <p className="max-md:mb-6.1">Showing 1–5 Of 50 Results</p>
  </div>
  <div className="md:w-1/2 w-full flex justify-end">
    <nav>
      <ul className="flex justify-end max-md:justify-center gap-2">
        <li>
          <a className="size-10 max-sm:size-9 inline-flex items-center justify-center rounded-full border 
          border-black mx-1.1 duration-500 hover:bg-black hover:text-white" href="#">
            1
          </a>
        </li>
        <li>
          <a className="size-10 max-sm:size-9 inline-flex items-center justify-center rounded-full border 
          border-black mx-1.1 duration-500 hover:bg-black hover:text-white" href="#">
            2
          </a>
        </li>
        <li>
          <a className="size-10 max-sm:size-9 inline-flex items-center justify-center rounded-full border 
          border-black mx-1.1 duration-500 hover:bg-black hover:text-white" href="#">
            3
          </a>
        </li>
        <li>
          <a className="py-2.5 px-5 max-sm:px-3 max-sm:min-w-[90px] max-sm:h-9 text-2sm uppercase inline-flex 
          items-center justify-center rounded-full border border-black mx-1.1" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>

        </div>
      </main>
    </div>



    </div>
  );
}