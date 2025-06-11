"use client";
import React from "react";

export default function Home() {
  return (
  <div>
     
<div className="overflow-hidden relative p-8">
  <div>
    <div>
      <div className="h-[550px] pt-7.5 pb-20 max-3xl:h-[700px] max-3xl:pb-13
          max-xl:!h-[550px] max-xl:!pb-[75px] max-lg:mb-7">
        
<div className="flex flex-col lg:flex-row items-center w-full px-4 gap-8">
   {/* Left Side Content */}
  <div className="w-full lg:w-7/12">
  <div className="max-sm:mb-7">
    <div className="relative z-[2] pb-[45px] max-xl:pb-5">
      <h1 data-swiper-parallax="-20" className="md:text-6xl sm:text-4xl text-2xl md:mt-0 sm:mt-4 
        md:mr-0 sm:mr-4 font-bold text-left">
        Your Ultimate
        <span className="text-primary mt-4 mb-4 flex items-center text-red-700">
          Online Store
        </span>
        for All Your Needs.
      </h1>
      <p className="md:text-xl sm:text-lg text-base mt-4 font-semibold max-xl:text-xl max-md:!text-lg 
      text-left" data-swiper-parallax="-40">
        No code needed. Plus free shipping on
        <span className="text-primary text-red-600 font-semibold"> $99+</span> orders!
      </p>
    </div>

    <div className="flex flex-nowrap items-center text-center justify-start gap-4 max-sm:gap-2 
      max-sm:flex-nowrap overflow-auto" data-swiper-parallax="-60">
      <a href="#" className="btn py-3 px-5 text-base max-sm:text-sm inline-block font-medium 
       leading-[1.2] border border-black bg-black text-white 
          rounded-lg duration-700 relative overflow-hidden whitespace-nowrap text-center flex 
          items-center justify-center">
        ADD TO CART
      </a>
      <a href="#" className="btn py-3 px-5 text-base max-sm:text-sm inline-block 
          font-medium leading-[1.2] border border-black rounded-lg duration-700 
          hover:bg-black hover:text-white relative overflow-hidden whitespace-nowrap text-center 
          flex items-center justify-center">
        VIEW DETAILS
      </a>
    </div>

  </div>
</div>

 {/* Right Side Content */}
  <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[500px]">

    <div className="overflow-hidden">
      <img src="assets/images/main-slider/slider2/pic1.png" alt="banner-media"
        className="w-full object-cover" />
    </div>

    <div className="w-[200px] p-4 border absolute top-[38%] right-[1vw] duration-700 rounded-2xl 
    bg-[#ffffffb3] shadow-wrapper backdrop-blur-[7px] flex items-center max-3xl:w-[0px]
     max-3xl:p-3.6 max-3xl:right-[1vw] max-md:hidden hover:-translate-y-2.5">
      <div className="relative overflow-hidden z-1 rounded-xl shadow-[0px_15px_40px_0px_rgba(0,0,0,0.1)] mr-5">
        <img src="assets/images/shop/product/small/1.png" alt="" className="w-full" />
      </div>
      <div className="relative z-1 max-xl:pt-3">
        <h5 className="text-sm font-semibold">Cozy Knit Cardigan</h5>
        <h6 className="text-xs text-red-600 font-bold">$80</h6>
         <div className="bg-red-700 border size-[35px] max-sm:size-4.5 max-sm:group-hover:-bottom-2.5 bg-primary 
         flex items-center justify-center rounded-full mb-1.1 shadow-default absolute bottom-[-35px] 
         right-0 overflow-hidden btn meta-icon dz-carticon">       
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M20.756 9.345 15.276 1.81a1 1 0 0 0-1.604 1.19l4.89 6.345H5.437l4.89-6.345A1 1 0 0 0 8.723 1.81L3.244 9.345A1 1 0 0 0 3 10v2c0 .553.447 1 1 1h1.07l1.683 7.295a2 2 0 0 0 1.954 1.58h7.586a2 2 0 0 0 1.953-1.58L18.93 13H20c.553 0 1-.447 1-1v-2a1 1 0 0 0-.244-.655zM16.316 19H7.684L6.14 13h11.72l-1.544 6z"/>
      </svg>       
    </div>
  </div>
</div>

    {/* Wishlist Box */}
    <div className="p-4 absolute bottom-[17%] border left-[3vw] duration-700 rounded-2xl 
    bg-[#ffffffb3] shadow-wrapper backdrop-blur-[7px] flex items-center w-[190px] justify-center
     max-md:hidden hover:-translate-y-2.5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(185, 28, 28)">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>  
        <ul className="flex px-2.5">
        <li className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
          <img src="assets/images/testimonial/testimonial1.jpg" alt="testimonial1" className="border-2 border-white rounded-full size-full" />
        </li>
        <li className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
          <img src="assets/images/testimonial/testimonial2.jpg" alt="testimonial2" className="border-2 border-white rounded-full size-full" />
        </li>
        <li className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
          <img src="assets/images/testimonial/testimonial3.jpg" alt="testimonial3" className="border-2 border-white rounded-full size-full" />
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
</div>
</div>

            <div className="absolute top-7 -left-2 xl:block hidden">
              <ul className="flex items-center flex-col">
                <li className="py-5 [writing-mode:tb-rl]">
                <a className="text-xs font-bold uppercase tracking-widest" href="#" target="_blank">
                    Instagram
                  </a>
                </li>
                <li className="py-5 [writing-mode:tb-rl]">
                  <a className="text-xs font-bold uppercase tracking-widest" href="#" target="_blank">
                    Facebook
                  </a>
                </li>
                <li className="py-5 [writing-mode:tb-rl]">
                  <a className="text-xs font-bold uppercase tracking-widest" href="#" target="_blank">
                    twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
  </div>

{/* Second Section */}

<div className="relative z-1 bg-yellow-200 py-16 px-8 max-md:px-5 rounded-3xl mt-16 md:mt-2">
  <div>
    <div className="grid grid-cols-12 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2">
      
      <div className="col-span-4 max-lg:col-span-1 max-md:col-span-1 relative ml-[10%]">
        <a href="#" className="relative">
          <img src="assets/images/category/pic1.jpg" alt="Jacket"
            className="w-[300px] h-[250px] max-md:w-[180px] max-md:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ee-[60px] max-md:rounded-ee-[30px]" />
          <div className="absolute top-[75%] -left-6 bg-white px-4 py-2 rounded-full text-md font-semibold shadow-md">
            Jacket
          </div>
        </a>
      </div>

      <div className="col-span-4 max-lg:col-span-1 max-md:col-span-1 relative ml-[20%]">
        <a href="#" className="relative">
          <img src="assets/images/category/pic2.jpg" alt="Jeans"
            className="w-[220px] h-[250px] max-md:w-[180px] max-md:h-[150px] object-cover border-4 border-white rounded-3xl rounded-es-[60px] max-md:rounded-es-[30px]" />
          <div className="absolute top-[75%] -left-6 bg-white px-4 py-2 font-semibold rounded-full text-md shadow-md">
            Jeans
          </div>
        </a>
      </div>

      <div className="col-span-4 max-lg:col-span-1 md:mt-0 mt-6 max-md:col-span-1 relative mr-[10%]">
        <a href="#" className="relative">
          <img src="assets/images/category/pic3.jpg" alt="Shirts"
            className="w-[100%] h-[250px] max-md:w-[180px] max-md:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ee-[60px] max-md:rounded-ee-[30px]" />
          <div className="absolute top-[75%] -left-6 bg-white px-4 py-1 font-semibold rounded-full text-md shadow-md">
            Shirts
          </div>
        </a>
      </div>

      <div className="col-span-4 max-lg:col-span-1 max-md:col-span-1 relative top-[15%] ml-[7%]">
        <a href="#" className="relative">
          <img src="assets/images/category/pic4.jpg" alt="Shorts"
            className="w-[280px] h-[250px] max-md:w-[180px] max-md:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ss-[60px] max-md:rounded-ss-[30px]" />
          <div className="lg:hidden absolute top-[75%] -left-6 bg-white px-4 py-1 font-semibold rounded-full text-md shadow-md">
            Shorts
          </div>
          <div className="hidden md:block absolute top-[75%] right-16 font-semibold bg-white px-4 py-1 rounded-full text-md shadow-md">
            Shorts
          </div>
        </a>
      </div>

      <div className="col-span-4 max-lg:col-span-1 max-md:col-span-1 relative top-[15%] ml-[2%]">
        <a href="#" className="relative">
          <img src="assets/images/category/pic5.jpg" alt="T-Shirt"
            className="w-full h-[250px] max-md:w-[180px] max-md:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ss-[60px] max-md:rounded-ss-[30px]" />
          <div className="lg:hidden absolute top-[75%] -left-6 bg-white px-4 py-1 font-semibold rounded-full text-md shadow-md">
            T-Shirt
          </div>
          <div className="hidden md:block absolute bottom-5 -right-4 bg-white font-semibold px-4 py-1 rounded-full text-md shadow-md">
            T-Shirt
          </div>
        </a>
      </div>

      <div className="col-span-4 max-lg:col-span-1 max-md:col-span-1 relative top-[15%] ml-[17%]">
        <a href="#" className="relative">
          <img src="assets/images/category/pic6.jpg" alt="Coat"
            className="w-[210px] h-[250px] max-md:w-[180px] max-md:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ss-[60px] max-md:rounded-ss-[30px]" />
          <div className="lg:hidden absolute top-[75%] -left-6 bg-white px-4 py-1 font-semibold rounded-full text-md shadow-md">
            Coat
          </div>
          <div className="hidden md:block absolute bottom-5 right-[30%] font-semibold bg-white px-4 py-1 rounded-full text-md shadow-md">
            Coat
          </div>
        </a>
      </div>

    </div>
  </div>
</div>


{/* Third Section */}

<section className="w-screen max-w-none mx-0 px-0 absolute left-0 shop-section overflow-hidden mt-20 h-auto">
  <div className="!p-0">
    <div className="flex flex-wrap">
      
      <div className="lg:w-2/3 w-full !px-12 max-lg:!px-6 py-16 max-sm:py-10 bg-yellow-200 relative overflow-hidden">
        <div className="flex items-center overflow-x-auto">
          <div className="flex justify-between gap-6 w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:justify-center">
            
            <div className="w-1/5 max-sm:w-[78%] flex flex-col items-center">
              <div className="shop-box">
                <div className="mb-4 text-center relative overflow-hidden">
                  <img src="assets/images/shop/product/clothes/1.png" alt="Shirts" 
                   className="w-28 h-[130px] max-sm:w-54 max-sm:h-[150px] object-contain mx-auto" />
                </div>
                <h6 className="text-sm font-medium bg-white text-center w-fit m-auto py-1 px-3 rounded-3xl border border-black">
                  <a className="hover:text-primary" href="#">Shirts</a>
                </h6>
              </div>
            </div>

            <div className="w-1/5 max-sm:w-[78%] flex flex-col items-center">
              <div>
                <div className="mb-4 text-center relative overflow-hidden">
                  <img src="assets/images/shop/product/clothes/2.png" alt="Shorts" 
                       className="w-28 h-[130px] max-sm:w-54 max-sm:h-[150px] object-contain mx-auto" />
                </div>
                <h6 className="text-sm font-medium bg-white text-center w-fit m-auto py-1 px-3 rounded-3xl border border-black">
                  <a className="hover:text-primary" href="#">Shorts</a>
                </h6>
              </div>
            </div>

            {/* Product Item 3 */}
            <div className="w-1/5 max-sm:w-[48%] flex flex-col items-center hidden md:block">
              <div>
                <div className="mb-4 text-center relative overflow-hidden">
                  <img src="assets/images/shop/product/clothes/3.png" alt="T-Shirt" 
                    className="w-28 h-[130px] max-sm:w-24 max-sm:h-[110px] object-contain mx-auto" />
                </div>
                <h6 className="text-sm font-medium bg-white text-center w-fit m-auto py-1 px-3 rounded-3xl border border-black">
                  <a className="hover:text-primary" href="#">T-Shirt</a>
                </h6>
              </div>
            </div>

            <div className="w-1/5 max-sm:w-[48%] flex flex-col items-center hidden md:block">
              <div>
                <div className="mb-4 text-center relative overflow-hidden">
                  <img src="assets/images/shop/product/clothes/4.png" alt="Jeans" 
                   className="w-28 h-[130px] max-sm:w-24 max-sm:h-[110px] object-contain mx-auto" />
                </div>
                <h6 className="text-sm font-medium bg-white text-center w-fit m-auto py-1 px-3 rounded-3xl border border-black">
                  <a className="hover:text-primary" href="#">Jeans</a>
                </h6>
              </div>
            </div>

            <div className="w-1/5 max-sm:w-[48%] flex flex-col items-center hidden md:block">
              <div>
                <div className="mb-4 text-center relative overflow-hidden">
                  <img src="assets/images/shop/product/clothes/5.png" alt="Coat" 
                    className="w-28 h-[130px] max-sm:w-24 max-sm:h-[110px] object-contain mx-auto" />
                </div>
                <h6 className="text-sm font-medium bg-white text-center w-fit m-auto py-1 px-3 rounded-3xl 
                border border-black">
                  <a className="hover:text-primary" href="#">Coat</a>
                </h6>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="lg:w-1/3 w-full py-16 max-xl:p-8 bg-black text-white flex flex-col 
      justify-start items-start pl-8 max-sm:w-full max-sm:pl-6 max-sm:py-10">
        <div>
          <h2 className="lg:hidden text-white text-4xl max-sm:text-2xl font-medium mb-2">
            Featured Categories
          </h2>
          <h2 className="hidden md:block text-white text-4xl max-sm:text-2xl font-medium mb-2">
            Featured <br /> Categories
          </h2>
          <p className="mb-5 text-[#ffffffcc] text-sm mx-auto">
            Discover the most trending products in Pixio.
          </p>
          <div className="flex justify-start gap-6">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 35" fill="none">
                <path d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289L2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903L9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328L4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z" fill="white"></path>
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 35" fill="none">
                <path d="M2.73549 16.9503H30.9186L24.2492 10.4669C23.7396 9.97176 24.4954 9.1837 25.0119 9.68289L32.6481 17.1063C32.8709 17.3092 32.8531 17.6755 32.648 17.8903L25.0118 25.3169C24.4979 25.81 23.7378 25.0367 24.2492 24.5328L30.921 18.0441H2.73549C2.03663 18.0375 2.00064 16.9636 2.73549 16.9503Z" fill="white"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Fifth Section */}

<section className="md:mt-[30%] mt-[130%] sm:mt-[100%]">
  <div className="p-6">
    <div className="flex flex-wrap items-center">
      {/* Left side text content */}
      <div className="lg:w-7/12 w-full">
        <div className="xl:py-6 xl:px-14.5 lg:py-5 sm:px-10 sm:py-10 p-0 max-sm:relative z-[2]">
          <div>
            <div className="sm:mb-10 mt-7 md:mt-0 mb-5 wow fadeInUp block" data-wow-delay="0.4s">
              <h2 className="lg:text-4xl text-xl font-bold sm:mb-2 mb-1.5">Our Mission</h2>
              <p className="mb-4 text-body text-sm pr-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took galley of type and scrambled it to make type
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                when an unknown printer took a galley of type and scrambled it to make a type   
                specimen book.
              </p>
              
              <h2 className="lg:text-4xl text-xl font-bold sm:mb-2 mb-1.5">Our Vision</h2>
              <p className="mb-4 text-body text-sm pr-7">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley type and scrambled it to make type
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                when an unknown printer took a galley of type and scrambled it to make type   
                chunks as true generator on the Internet.
              </p>
            </div>

            <div className="flex justify-start lg:text-start text-center space-x-6 mt-12">
              <div className="w-1/3 wow fadeInUp" data-wow-delay="0.5s">
                <div>
                  <h2 className="xl:text-6xl lg:text-6xl md:text-4xl text-4xl font-medium">
                    <span>40</span>k+
                  </h2>
                  <span className="sm:text-base text-xs font-bold">Happy Customer</span>
                </div>
              </div>
              <div className="w-1/3 wow fadeInUp" data-wow-delay="0.6s">
                <div>
                  <h2 className="xl:text-6xl lg:text-6xl md:text-4xl text-4xl font-medium">
                    <span>21</span>+
                  </h2>
                  <span className="sm:text-base text-xs font-bold">Years in Business</span>
                </div>
              </div>
              <div className="w-1/3 wow fadeInUp" data-wow-delay="0.7s">
                <div>
                  <h2 className="xl:text-6xl lg:text-6xl md:text-4xl text-4xl font-medium">
                    <span>98</span>%
                  </h2>
                  <span className="sm:text-base text-xs font-bold">Return Clients</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="lg:w-5/12 w-full flex md:justify-end sm:justify-center mt-20 pr-5">
        <div className="wow fadeInUp" data-wow-delay="0.8s">
          <img src="assets/images/lady3.png" alt="" className="rounded-3xl w-full lg:max-w-[480px] 
          max-sm:max-w-[400px]" />
        </div>
      </div>
    </div>
  </div>
</section>

 
 {/* Sixth Section */}

<section className="py-16 px-6 md:px-12 mb-10 rounded-4xl mx-5 max-md:mx-2.5 [background:var(--gradient2)] overflow-hidden rounded-3xl mt-16">
  <div className="container max-w-[1200px] mx-auto">
    <div className="text-left mb-8">
      <h2 className="text-4xl md:text-5xl text-white font-semibold md:leading-normal sm:leading-normal
       space-y-3 pt-3 pb-5">
        We're just keep growing <br /> with 6.3k trusted companies
      </h2>
    </div>
  </div>

  <div className="container max-w-[1200px] mx-auto">
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">

      <div className="flex items-center justify-center bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo1.png" alt="Company 1" className="w-16 md:w-20" />
      </div>

      <div className="flex items-center justify-center bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo2.png" alt="Company 2" className="w-16 md:w-20" />
      </div>

      <div className="flex items-center justify-center bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo3.png" alt="Company 3" className="w-16 md:w-20" />
      </div>

      <div className="flex items-center justify-center bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo4.png" alt="Company 4" className="w-16 md:w-20" />
      </div>

      <div className="flex items-center justify-center bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo5.png" alt="Company 5" className="w-16 md:w-20" />
      </div>

      <div className="flex items-center justify-center bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo6.png" alt="Company 6" className="w-16 md:w-20" />
      </div>

      <div className="flex items-center justify-center hidden md:block bg-white h-16 md:h-20 rounded-xl 
      shadow-md p-3">
        <img src="assets/images/companies/logo7.png" alt="Company 7" className="w-16 md:w-20 ml-7 mt-3" />
      </div>

      <div className="flex items-center justify-center hidden md:block bg-white h-16 md:h-20 rounded-xl 
      shadow-md p-3">
        <img src="assets/images/companies/logo8.png" alt="Company 8" className="w-16 md:w-20 ml-7 mt-3" />
      </div>

      <div className="flex items-center justify-center hidden md:block bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo2.png" alt="Company 9" className="w-16 md:w-20 ml-7 mt-3" />
      </div>

      <div className="flex items-center justify-center hidden md:block bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo3.png" alt="Company 10" className="w-16 md:w-20 ml-7 mt-3" />
      </div>

      <div className="flex items-center justify-center hidden md:block bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo4.png" alt="Company 11" className="w-16 md:w-20 ml-7 mt-3" />
      </div>

      <div className="flex items-center justify-center hidden md:block bg-white h-16 md:h-20 rounded-xl shadow-md p-3">
        <img src="assets/images/companies/logo5.png" alt="Company 12" className="w-16 md:w-20 ml-7 mt-3" />
      </div>

    </div>
  </div>
</section>

  </div>
  );
} 