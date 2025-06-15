"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react"; 

type DropdownKey = 'home' | 'shop' | 'blog' | 'portfolio' | 'pages' | 'account';

type Header1Props = {
  MenuIcon: React.ReactNode;
  CloseIcon: React.ReactNode;
  ChevronRightIcon: React.ReactNode;
  ChevronDownIcon: React.ReactNode;
};

const Header1 = ({ MenuIcon, CloseIcon, ChevronRightIcon, ChevronDownIcon }: Header1Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    home: false,
    shop: false,
    blog: false,
    portfolio: false,
    pages: false,
    account: false,
  });

  const toggleDropdown = (menu: DropdownKey) => {
    setDropdownOpen((prev) => {
      const newDropdownState = { ...prev, [menu]: !prev[menu] };
      
      for (let key in newDropdownState) {
        if (key !== menu) {
          newDropdownState[key as DropdownKey] = false;
        }
      }
      
      return newDropdownState;
    });
  };

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <header className="w-full bg-white border-b p-4 flex justify-between items-center lg:hidden">
        <img src="/assets/images/logo.svg" alt="Logo" />

        {/* Menu Button */}
        <button className="bg-black p-2 rounded" onClick={handleMenuClick}>
          {MenuIcon}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4 flex flex-col overflow-y-auto max-h-screen">
          {/* Top Bar with Logo and Close Button */}
          <div className="flex justify-between items-center border-b pb-3">
            <img src="/assets/images/logo.svg" alt="Logo" className="h-12 transition-all duration-300" />
            <button className="bg-black p-2 rounded" onClick={() => setMenuOpen(false)}>
              {CloseIcon}
            </button>
          </div>

          <ul className="mt-6 space-y-4 flex-1">
            {/* Home */}
            <li className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <Link href="#" className="text-lg font-semibold">Home</Link>
                <button className="p-1 bg-black rounded-sm" onClick={() => toggleDropdown("home")}>
                  {dropdownOpen.home ? ChevronDownIcon : ChevronRightIcon}
                </button>
              </div>
              {dropdownOpen.home && (
                <ul className="grid grid-cols-2 pl-4 mt-2 border-t">
                  <li className="h-48 w-48 p-2 text-center mt-8">
                    <a href="#">
                      <img src="/assets/images/demo/demo-1.png" alt="/" />
                      <span className="menu-title block mt-2 font-semibold">01 Home Page</span>
                    </a>
                  </li>
                   <li className="h-48 w-48 p-2 text-center mt-8">
                          <a href="#">
                            <img src="assets/images/demo/demo-2.png" alt="/" />
                            <span className="menu-title block mt-2 font-semibold">02 Home Page</span>
                          </a>
                        </li>
                        <li className="h-48 w-48 p-2 text-center mt-16 mb-20">
                          <a href="#">
                            <img src="assets/images/demo/demo-3.png" alt="/" />
                            <span className="menu-title block mt-2 font-semibold">03 Home Page</span>
                          </a>
                        </li>
                </ul>
              )}
            </li>

    {/* Shop */}
<li className="pb-2 border-b">
  <div className="flex justify-between items-center">
    <Link href="#" className="text-lg font-semibold">Shop</Link>
    <button className="p-1 bg-black rounded-sm" onClick={() => toggleDropdown("shop")}>
      {dropdownOpen.shop ? ChevronDownIcon : ChevronRightIcon}
    </button>
  </div>
  {dropdownOpen.shop && (
    <ul className="grid grid-cols-2 gap-4 mt-2 border-t">
      <li className="col-span-1 mt-4">
        <p className="font-bold">Shop Structure</p>
        <ul className="mt-1 space-y-1">
          <li><a href="#" className="text-gray-600">Shop Standard</a></li>
          <li><a href="#" className="text-gray-600">Shop List</a></li>
          <li><a href="#" className="text-gray-600">Shop With Category</a></li>
          <li><a href="#" className="text-gray-600">Shop Filters Top Bar</a></li>
          <li><a href="#" className="text-gray-600">Shop Sidebar</a></li>
          <li><a href="#" className="text-gray-600">Shop Style 1</a></li>
          <li><a href="#" className="text-gray-600">Shop Style 2</a></li>
        </ul>
      </li>
      <li className="col-span-1 mt-4">
        <p className="font-bold">Product Structure</p>
        <ul className="mt-1 space-y-1">
          <li><a href="#" className="text-gray-600">Default</a></li>
          <li><a href="#" className="text-gray-600">Thumbnail</a></li>
          <li><a href="#" className="text-gray-600">Grid Media</a></li>
          <li><a href="#" className="text-gray-600">Carousel</a></li>
          <li><a href="#" className="text-gray-600">Full Width</a></li>
        </ul>
      </li>
      <li className="col-span-1 mt-4">
        <p className="font-bold">Shop Pages</p>
        <ul className="mt-1 space-y-1">
          <li><a href="#" className="text-gray-600">Whishlist</a></li>
          <li><a href="#" className="text-gray-600">Cart</a></li>
          <li><a href="#" className="text-gray-600">Checkout</a></li>
          <li><a href="#" className="text-gray-600">Compare</a></li>
          <li><a href="#" className="text-gray-600">Order Tracking</a></li>
          <li><a href="#" className="text-gray-600">My Account</a></li>
          <li><a href="#" className="text-gray-600">Registration</a></li>
        </ul>
      </li>

      {/* Deal of the Month - Adjusted Grid Layout */}
      <div className="col-span-2 mt-8 border border-gray-300 h-[250px] w-[300px] p-6 rounded-md bg-white mb-8">
        {/* Left Side - Text */}
        <div className="text-center flex-1">
          <h3 className="text-xl font-semibold mb-2">Deal of the Month</h3>
          <p className="text-sm text-gray-800 font-semibold leading-normal">
            Yes! Send me exclusive offers, personalized gifts <br /> ideas, and shopping tips.
          </p>
          <a href="#" className="text-sm text-gray-500 font-semibold mt-3">View All Products</a>
        </div>

        <div className="flex gap-2 text-center mt-4">
          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-md bg-gray-100">
              <span className="text-xl font-semibold">28</span>
            </div>
            <span className="text-xs uppercase mt-1 font-semibold">Days</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-md bg-gray-100">
              <span className="text-xl font-semibold">12</span>
            </div>
            <span className="text-xs uppercase mt-1 font-semibold">Hours</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-md bg-gray-100">
              <span className="text-xl font-semibold">06</span>
            </div>
            <span className="text-xs uppercase mt-1 font-semibold">Minutes</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-md bg-gray-100">
              <span className="text-xl font-semibold">43</span>
            </div>
            <span className="text-xs uppercase mt-1 font-semibold">Seconds</span>
          </div>
        </div>
      </div>
    </ul>
  )}

            </li>

            {/* Blog */}
            <li className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <Link href="#" className="text-lg font-semibold">Blog</Link>
                <button className="p-1 bg-black rounded-sm" onClick={() => toggleDropdown("blog")}>
                  {dropdownOpen.blog ? ChevronDownIcon : ChevronRightIcon}
                </button>
              </div>
              {dropdownOpen.blog && (
                <ul className="grid grid-cols-2 gap-4 mt-2 border-t">
                 <li className="col-span-1 mt-4">
                 <p className="font-bold">Blog Dark Style</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Blog 2 Column</a></li>
                   <li><a href="#" className="text-gray-600">Blog 2 Column Sidebar</a></li>
                   <li><a href="#" className="text-gray-600">Blog 3 Column</a></li>
                   <li><a href="#" className="text-gray-600">Blog Half Image</a></li>
                </ul>
             </li> 
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Blog Sidebar</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Blog Left Sidebar</a></li>
                   <li><a href="#" className="text-gray-600">Blog Right Sidebar</a></li>
                   <li><a href="#" className="text-gray-600">Blog Both Sidebar</a></li>
                   <li><a href="#" className="text-gray-600">Blog Wide Sidebar</a></li>
                </ul>
             </li>
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Blog Left Style</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Blog 2 Column</a></li>
                   <li><a href="#" className="text-gray-600">Blog 2 Column Sidebar</a></li>
                   <li><a href="#" className="text-gray-600">Blog Half Image</a></li>
                   <li><a href="#" className="text-gray-600">Blog Exclusive</a></li>
                </ul>
             </li>
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Blog Page</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Blog Archive</a></li>
                   <li><a href="#" className="text-gray-600">Author</a></li>
                   <li><a href="#" className="text-gray-600">Blog Category</a></li>
                   <li><a href="#" className="text-gray-600">Blog Tag</a></li>
                </ul>
             </li>
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Blog Page</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Post Standard</a></li>
                   <li><a href="#" className="text-gray-600">Post Sidebar</a></li>
                   <li><a href="#" className="text-gray-600">Post Header Image</a></li>
                   <li><a href="#" className="text-gray-600">Post Side Show</a></li>
                   <li><a href="#" className="text-gray-600">Post Side Image</a></li>
                   <li><a href="#" className="text-gray-600">Post Gallery</a></li>
                   <li><a href="#" className="text-gray-600">Post Gallery Alternative</a></li>
                   <li><a href="#" className="text-gray-600">Post Open Gutenberg</a></li>
                   <li><a href="#" className="text-gray-600">Post Link</a></li>
                   <li><a href="#" className="text-gray-600">Post Audio</a></li>
                   <li><a href="#" className="text-gray-600">Post video</a></li>
                </ul>
             </li> 

    <div className="col-span-2 mb-8">
      <a href="#" className="font-bold text-lg text-gray-900">Recent Posts</a>
      <ul className="mt-2 space-y-3 text-gray-700">
        <li className="flex items-center">
          <img src="assets/images/shop/product/small/1.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
          <div>
            <a href="#" className="font-medium text-sm text-gray-900">Cozy Knit Cardigan Sweater</a>
            <span className="block font-medium text-xs text-gray-900">July 23, 2024</span>
          </div>
        </li>
        <li className="flex items-center">
          <img src="assets/images/shop/product/small/2.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
          <div>
            <a href="#" className="font-medium text-sm text-gray-900">Sophisticated Swagger Suit</a>
            <span className="block font-medium text-xs text-gray-900">July 23, 2024</span>
          </div>
        </li>
        <li className="flex items-center">
          <img src="assets/images/shop/product/small/3.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
          <div>
            <a href="#" className="font-medium text-sm text-gray-900">Athletic Mesh Sports Leggings</a>
            <span className="block font-medium text-xs text-gray-900">July 23, 2024</span>
          </div>
        </li>
        <li className="flex items-center">
          <img src="assets/images/shop/product/small/4.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
          <div>
            <a href="#" className="font-medium text-sm text-gray-900">Satin Wrap Party Blouse</a>
            <span className="block font-medium text-sm text-gray-900">July 23, 2024</span>
          </div>
        </li>
      </ul>
    </div>         
           </ul>
              )}
            </li>


     {/* Portfolio */}
            <li className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <Link href="#" className="text-lg font-semibold">Portfolio</Link>
                <button className="p-1 bg-black rounded-sm" onClick={() => toggleDropdown("portfolio")}>
                  {dropdownOpen.portfolio ? ChevronDownIcon : ChevronRightIcon}
                </button>
              </div>
              {dropdownOpen.portfolio && (
               <ul className="grid grid-cols-2 gap-4 mt-2 border-t">
                <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/portfolio-tiles.svg" alt="" className="w-36 h-36 mx-auto mt-2" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Portfolio Tiles</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/collage-style-1.svg" alt="" className="w-36 h-36 mx-auto mt-2" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Collage Style 1</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/collage-style-2.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Collage Style 2</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/masonry-grid.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Masonry Grid</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/cobble-style-1.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Cobble Style 1</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/cobble-style-2.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Cobble Style 2</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/portfolio-thumbs-slider.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Portfolio Thumbs Slider</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/portfolio-film-strip.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Portfolio Film Strip</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/carousel-showcase.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Carousel Showcase</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/portfolio/icons/portfolio-split-slider.svg" alt="" className="w-36 h-36 mx-auto" />
              <span className="block text-sm mt-1 text-gray-700 text-center">Portfolio Split Slider</span>
            </a>
          </li>
           <div className="col-span-2 mb-8">
           <h3 className="font-bold text-lg text-gray-900 mt-2">Portfolio Details</h3>
        <ul className="mt-2 space-y-1.5 text-gray-700 text-md">
          <li><a href="#" className="text-gray-600">Portfolio Details 1</a></li>
          <li><a href="#" className="text-gray-600">Portfolio Details 2</a></li>
          <li><a href="#" className="text-gray-600">Portfolio Details 3</a></li>
          <li><a href="#" className="text-gray-600">Portfolio Details 4</a></li>
          <li><a href="#" className="text-gray-600">Portfolio Details 5</a></li>
        </ul>
        </div>
                </ul>
              )}
            </li>


            {/* Pages */}
            <li className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <Link href="#" className="text-lg font-semibold">Pages</Link>
                <button className="p-1 bg-black rounded-sm" onClick={() => toggleDropdown("pages")}>
                  {dropdownOpen.pages ? ChevronDownIcon : ChevronRightIcon}
                </button>
              </div>
              {dropdownOpen.pages && (
               <ul className="grid grid-cols-2 gap-4 mt-2 border-t">
                 <li className="col-span-1 mt-4">
                 <p className="font-bold">Pages</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">About Us</a></li>
                   <li><a href="#" className="text-gray-600">About Me</a></li>
                   <li><a href="#" className="text-gray-600">Pricing Table</a></li>
                   <li><a href="#" className="text-gray-600">Our Gift Vouchers</a></li>
                   <li><a href="#" className="text-gray-600">What We Do</a></li>
                   <li><a href="#" className="text-gray-600">Faqs 1</a></li>
                   <li><a href="#" className="text-gray-600">Faqs 2</a></li>
                   <li><a href="#" className="text-gray-600">Our Team</a></li>
                </ul>
             </li> 
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Blog Sidebar</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Contact Us 1</a></li>
                   <li><a href="#" className="text-gray-600">Contact Us 2</a></li>
                   <li><a href="#" className="text-gray-600">Contact Us 3</a></li>
                   <li><a href="#" className="font-bold mt-12 mb-6">Web Pages</a></li>
                   <li><a href="#" className="text-gray-600">Error 404 1</a></li>
                   <li><a href="#" className="text-gray-600">Error 404 2</a></li>
                   <li><a href="#" className="text-gray-600">Comming Soon</a></li>
                   <li><a href="#" className="text-gray-600">Ubder Construction</a></li>
                </ul>
             </li>
            
                   
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Banner Style</p>
                  <ul className="mt-1 space-y-1">
                   <li><a href="#" className="text-gray-600">Banner with BG Color</a></li>
                   <li><a href="#" className="text-gray-600">Banner with Image</a></li>
                   <li><a href="#" className="text-gray-600">Banner with Video</a></li>
                   <li><a href="#" className="text-gray-600">Banner with Kanbern</a></li>
                   <li><a href="#" className="text-gray-600">Banner Small</a></li>
                   <li><a href="#" className="text-gray-600">Banner Medium</a></li>
                   <li><a href="#" className="text-gray-600">Banner Large</a></li>
                </ul>
             </li>
             <li className="col-span-1 mt-4">
                 <p className="font-bold">Header Style</p>
                  <ul className="mt-1 space-y-1">
                    <li><a href="#" className="text-gray-600">Header Style 1</a></li>
                    <li><a href="#" className="text-gray-600">Header Style 2</a></li>
                    <li><a href="#" className="text-gray-600">Header Style 3</a></li>
                    <li><a href="#" className="text-gray-600">Header Style 4</a></li>
                    <li><a href="#" className="text-gray-600">Header Style 5</a></li>
                    <li><a href="#" className="text-gray-600">Header Style 6</a></li>
                    <li><a href="#" className="text-gray-600">Header Style 7</a></li>
                </ul>
                </li>
                <li className="col-span-1 mt-4">
                 <p className="font-bold">Footer Style</p>
                  <ul className="mt-1 space-y-1">
                     <li><a href="#" className="text-gray-600">Footer Style 1</a></li>
                     <li><a href="#" className="text-gray-600">Footer Style 2</a></li>
                     <li><a href="#" className="text-gray-600">Footer Style 3</a></li>
                     <li><a href="#" className="text-gray-600">Footer Style 4</a></li>
                     <li><a href="#" className="text-gray-600">Footer Style 5</a></li>
                     <li><a href="#" className="text-gray-600">Footer Style 6</a></li>
                     <li><a href="#" className="text-gray-600">Footer Style 7</a></li>
                </ul>
                </li>
                <li className="col-span-1 mt-4">
                 <p className="font-bold">Dashboard</p>
                  <ul className="mt-1 space-y-1">
                    <li><a href="#" className="text-gray-600">Dashboard</a></li>
                    <li><a href="#" className="text-gray-600">Orders</a></li>
                    <li><a href="#" className="text-gray-600">Order Details</a></li>
                    <li><a href="#" className="text-gray-600">Order Confirmation</a></li>
                    <li><a href="#" className="text-gray-600">Downloads</a></li>
                    <li><a href="#" className="text-gray-600">Return Request</a></li>
                    <li><a href="#" className="text-gray-600">Return Request Detail</a></li>
                    <li><a href="#" className="text-gray-600">Return Request Confirmed</a></li>
                </ul>
                </li>
        <div className="col-span-2">
        <h3 className="font-bold text-lg text-gray-900">Portfolio Details</h3>
        <ul className="mt-2 space-y-3 text-gray-700 text-md">
          <li><a href="#">Portfolio Details 1</a></li>
          <li><a href="#">Portfolio Details 2</a></li>
          <li><a href="#">Portfolio Details 3</a></li>
          <li><a href="#">Portfolio Details 4</a></li>
          <li><a href="#">Portfolio Details 5</a></li>
        </ul>
      </div>
                </ul>
              )}
            </li>

           {/* My Account */}
<li className="pb-2 border-b">
  <div className="flex justify-between items-center">
   <Link href="#" className="text-lg font-semibold">My Account</Link>
    <button className="p-1 bg-black rounded-sm" onClick={() => toggleDropdown("account")}>
      {dropdownOpen.account ? ChevronDownIcon : ChevronRightIcon}
    </button>
  </div>
  {dropdownOpen.account && (
    <ul className="mt-1 text-gray-600 border-t border-b w-full -mx-5 px-5 py-3">
      <li className="border-b py-2"><a href="#" className="text-sm">Dashboard</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Orders</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Orders Details</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Orders Confirmation</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Downloads</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Return Request</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Return Request Detail</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Return Request Confirmed</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Profile</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Address</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Shipping methods</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Payment Methods</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Review</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Billing address</a></li>
      <li className="border-b py-2"><a href="#" className="text-sm">Shipping address</a></li>
      <li className="py-2"><a href="#" className="text-sm">Cancellation Requests</a></li>
    </ul>
  )}
</li>
<div className="flex justify-center space-x-4 mt-8">
  <div className="w-10 h-10 flex items-center justify-center bg-white border rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black">
      <path d="M9 8h3V6c0-.828.672-1.5 1.5-1.5H15V2h-1.5C11.57 2 10 3.57 10 5.5V8H9v3h1v11h3V11h2.25L16 8h-2V5.5c0-.276.224-.5.5-.5H16V3h-1.5C12.57 3 11 4.57 11 6.5V8H9v3z"/>
    </svg>
  </div>

  <div className="w-10 h-10 flex items-center justify-center bg-white border rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black">
      <path d="M23.953 4.569c-.885.39-1.83.654-2.825.774 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .39.045.765.13 1.125-4.087-.205-7.713-2.164-10.141-5.144-.424.728-.666 1.571-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.829-.413.111-.85.171-1.296.171-.317 0-.626-.031-.927-.089.626 1.956 2.445 3.38 4.6 3.42-1.68 1.319-3.808 2.104-6.116 2.104-.398 0-.79-.023-1.174-.068 2.179 1.398 4.768 2.212 7.557 2.212 9.065 0 14.015-7.514 14.015-14.015 0-.213-.005-.425-.014-.636.961-.695 1.8-1.562 2.46-2.549z"/>
    </svg>
  </div>

  <div className="w-10 h-10 flex items-center justify-center bg-white border rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black">
      <path d="M22.23 0H1.77C.792 0 0 .77 0 1.725v20.55C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.725V1.725C24 .77 23.208 0 22.23 0zM7.058 20.452H3.563V9h3.495v11.452zM5.31 7.56c-1.12 0-2.03-.91-2.03-2.03 0-1.121.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zm15.142 12.892h-3.495V14.73c0-1.366-.028-3.126-1.903-3.126-1.903 0-2.196 1.486-2.196 3.018v5.83h-3.495V9h3.356v1.563h.047c.468-.884 1.61-1.816 3.312-1.816 3.543 0 4.195 2.328 4.195 5.356v6.35z"/>
    </svg>
  </div>

  <div className="w-10 h-10 flex items-center justify-center bg-white border rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  </div>
</div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header1;