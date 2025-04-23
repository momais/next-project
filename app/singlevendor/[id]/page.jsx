'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductCarousel() {
  const { id } = useParams(); // id1, id2, etc.
  const [clickedImg, setClickedImg] = useState(null);
 const baseUrl = "https://letsenjoyksa.com/imgupload/";

  useEffect(() => {
    fetch("http://localhost:5050/cashbackengine_users")
      .then((res) => res.json())
      .then((data) => {
        const index = parseInt(id.replace('id', '')) - 1;
        const image = data?.[index]?.company_picture?.trim().replace(",", "");
        if (image) {
          setClickedImg(`${baseUrl}${image}`);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [id]);

  return (
    <div>
 <div className="container mx-auto">
     <div className="flex flex-col sm:flex-row justify-between px-2 mb-4 gap-2 sm:gap-0">
  <nav>
    <ul className="flex items-center flex-wrap">
      <li className="mr-2 text-[16px] font-semibold">
        <a href="/">Home</a>
      </li>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
      <li className="ml-2 text-[16px] font-semibold">Product Carousel</li>
    </ul>
  </nav>

  <div className="flex md:gap-7 gap-2 md:text-[16px] text-[14px] text-gray-600">
    <button>PREV</button>
    <span>/</span>
    <button>NEXT</button>
  </div>
</div>


   <div className="relative overflow-hidden">
      {clickedImg && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={800}
          navigation={{
            nextEl: ".portfolio-button-next",
            prevEl: ".portfolio-button-prev",
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {Array(5).fill(clickedImg).map((img, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-3xl relative">
                <img
                  src={img}
                  alt={`Clicked Image`}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="absolute inset-0 flex items-center justify-center custom-pagination"></div>
    </div>

    </div>   


{/* Sale section */}

<section className="py-12">
  <div className="container mx-auto px-2">
    <div className="w-full flex flex-col">
      
      <div className="mb-2">
        <span className="inline-block bg-black text-white text-[11px] font-bold uppercase py-0.5 px-3 
        rounded-md">
          Sale 20% Off
        </span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold">Lady Red Coat Black Jeans</h1>

      <div className="hidden md:block">
        <div className="flex gap-6 ">
          <div className="flex items-center mt-6">
            <img src="/assets/icons/ship.png" className="w-11 h-11" />
            <div className="ml-6">
              <span className="text-sm text-gray-600">FREE</span>
              <h6 className="font-bold text-base">Shipping</h6>
            </div>
          </div>
          <div className="flex items-center mt-6">
           <img src="/assets/icons/delivery.png" className="w-11 h-11" />
            <div className="ml-6">
              <span className="text-sm text-gray-600">Easy Returns</span>
              <h6 className="font-bold text-base">30 Days</h6>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-orange-500 text-base">★★★☆☆</span>
        <span className="ml-2 text-sm">4.7 Rating</span>
        <a href="#" className="text-sm ml-2">(5 customer reviews)</a>
      </div>

      <p className="text-[14.5px] font-base leading-relaxed mt-4 w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s. It has survived not only five centuries but also the 
        leap into electronic typesetting, remaining essentially unchanged.
      </p>

      <div className="flex items-center mt-1.5">
        <div className="mr-10 mt-2">
          <span className="block text-base font-bold mb-3">Price</span>
          <span className="text-2xl font-bold mt-[8%]">
            $125.75 <del className="text-base opacity-40 ml-0.5">$132.17</del>
          </span>
        </div>
        
        <div className="flex flex-col mt-3">
          <span className="block text-base font-bold mb-4">Quantity</span>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-black text-white rounded-full flex items-center 
            justify-center text-lg">-</button>
            <span className="w-10 h-10 text-center border border-black bg-white flex items-center justify-center rounded-full text-lg font-semibold">1</span>
            <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-lg">+</button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-8">
        <button className="py-2.5 px-6 text-white font-semibold bg-black rounded-lg uppercase
         text-base">Add To Cart
        </button>
        <button className="py-2.5 px-5 ml-6 flex items-center gap-2 border border-black text-black 
        rounded-lg text-base font-semibold hover:bg-black hover:text-white">
           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
          Add To Wishlist
        </button>
      </div>
      <div className="border-t pt-3 mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm">
  
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-2">
    <div className="flex items-center">
      <span className="font-bold">SKU:</span>
      <span className="ml-2">PRT584E63A</span>
    </div>
    <div className="flex items-center flex-wrap space-x-2">
      <span className="font-bold">Category:</span>
      <div className="flex flex-wrap gap-x-2">
        <a href="#">Dresses,</a>
        <a href="#">Jeans,</a>
        <a href="#">Swimwear,</a>
        <a href="#">Summer,</a>
        <a href="#">Clothing,</a>
      </div>
    </div>
    <div className="flex items-center flex-wrap space-x-2">
      <span className="font-bold">Tags:</span>
      <div className="flex flex-wrap gap-x-2">
        <a href="#">Casual,</a>
        <a href="#">Athletic,</a>
        <a href="#">Workwear,</a>
        <a href="#">Accessories,</a>
      </div>
    </div>
  </div>

  <div className="flex items-center mt-4 lg:mt-0">
    <span className="text-base font-bold">Share:</span>
    <div className="flex gap-4 ml-2">
      <a href="#" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black">
      <path d="M9 8h3V6c0-.828.672-1.5 1.5-1.5H15V2h-1.5C11.57 2 10 3.57 10 5.5V8H9v3h1v11h3V11h2.25L16 8h-2V5.5c0-.276.224-.5.5-.5H16V3h-1.5C12.57 3 11 4.57 11 6.5V8H9v3z"/>
    </svg>
      </a>
      <a href="#" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black">
      <path d="M22.23 0H1.77C.792 0 0 .77 0 1.725v20.55C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.725V1.725C24 .77 23.208 0 22.23 0zM7.058 20.452H3.563V9h3.495v11.452zM5.31 7.56c-1.12 0-2.03-.91-2.03-2.03 0-1.121.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zm15.142 12.892h-3.495V14.73c0-1.366-.028-3.126-1.903-3.126-1.903 0-2.196 1.486-2.196 3.018v5.83h-3.495V9h3.356v1.563h.047c.468-.884 1.61-1.816 3.312-1.816 3.543 0 4.195 2.328 4.195 5.356v6.35z"/>
    </svg>
      </a>
      <a href="#" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
      </a>
      <a href="#" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black">
      <path d="M23.953 4.569c-.885.39-1.83.654-2.825.774 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .39.045.765.13 1.125-4.087-.205-7.713-2.164-10.141-5.144-.424.728-.666 1.571-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.829-.413.111-.85.171-1.296.171-.317 0-.626-.031-.927-.089.626 1.956 2.445 3.38 4.6 3.42-1.68 1.319-3.808 2.104-6.116 2.104-.398 0-.79-.023-1.174-.068 2.179 1.398 4.768 2.212 7.557 2.212 9.065 0 14.015-7.514 14.015-14.015 0-.213-.005-.425-.014-.636.961-.695 1.8-1.562 2.46-2.549z"/>
    </svg>
      </a>
    </div>
  </div>

</div>
    </div>
  </div>
</section>


  <h2 className="text-center text-lg font-bold mt-10">Available Offers...</h2>
<div className="relative w-full max-w-lg mx-auto h-[180px] p-6 bg-gradient-to-r from-pink-500 
to-purple-600 text-white shadow-lg mb-14 mt-8 rounded-lg">
  
<div className="absolute left-0 top-0 bottom-0 w-5 ">
  <svg className="h-full w-5" viewBox="0 0 10 100" preserveAspectRatio="none">
    <polygon points="0,0 10,10 0,20 10,30 0,40 10,50 0,60 10,70 0,80 10,90 0,100" fill="white"/>
  </svg>
</div>

  <div className="absolute -top-2 right-4 w-6 h-6 bg-white rounded-full"></div>
  <div className="absolute -bottom-2 right-4 w-6 h-6 bg-white rounded-full"></div>

  <div className="absolute top-0 bottom-0 left-[35%] w-0.5 border-r-2 border-dotted border-white"></div>

  <div className="flex justify-between items-center mt-6">
    {/* Discount Text */}
    <div href="#" className="text-left pr-6 hover:cursor-pointer">
      <h2 className="text-3xl font-bold">50% OFF</h2>
      <p className="text-sm">On all products</p>
    </div>
    <div className="text-center">
      <p className="text-lg font-semibold mb-1">Use Code:</p>
      <div className="bg-white text-red-500 px-3 py-1 rounded-lg text-lg font-bold">
        SAVE50
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm">Expires:</p>
      <p className="text-lg font-semibold">March 31, 2025</p>
    </div>
  </div>
</div>

</div>
  );
}