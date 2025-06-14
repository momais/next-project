"use client";

import { useState, useEffect } from "react";
import { Range } from 'react-range';
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function Vendor() {
  const [values, setValues] = useState<number[]>([0, 400]);
  const minLimit = 0;
  const maxLimit = 400;

  const [latestOpen, setLatestOpen] = useState<boolean>(false);
  const [productsOpen, setProductsOpen] = useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>([]);
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" className="w-6 h-6 opacity-50 gap-0">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" className="w-6 h-6 opacity-50 gap-0">
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
                <input 
                  name="Search" 
                  required={true} 
                  type="search" 
                  className="py-2.5 px-4 text-2sm"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 