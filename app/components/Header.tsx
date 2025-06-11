"use client";
import { useState, useEffect, ReactNode } from "react";
import { Range } from 'react-range';
import Link from "next/link";

type HeaderProps = {
  searchIcon?: ReactNode;
  heartIcon?: ReactNode;
  cartIcon?: ReactNode;
}

<<<<<<< HEAD
const Header = ({ searchIcon, heartIcon, cartIcon }: HeaderProps) => {
  const [tab, setTab] = useState<string>("");
  const [showWishlist, setShowWishlist] = useState<boolean>(true);
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setWishlistOpen] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("btnradio11");
  const [values, setValues] = useState<number[]>([0, 400]);
  const [quantity, setQuantity] = useState<number>(1);

=======
const [tab, setTab] = useState("");
  const [showWishlist, setShowWishlist] = useState(true);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState("btnradio11");

const [values, setValues] = useState([0, 400]);
>>>>>>> 4caa4617078b9d6d3e9d9b17b2dd37dd30393525
  const minLimit = 0;
  const maxLimit = 400;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(Number(e.target.value)); 
  };

  const handleRadioChange = (value: string): void => {
    setSelected(value);
  };

  const closeAllModals = (): void => {
    setSearchOpen(false);
    setCartOpen(false);
    setWishlistOpen(false);
  };

  useEffect(() => {
    if (isSearchOpen || isCartOpen || isWishlistOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchOpen, isCartOpen, isWishlistOpen]);

  return (
    <header className="w-full bg-white border-b z-50">
      <div>
        <div>
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl flex items-center justify-between py-4">
            
            {/* Left: Logo (Hidden on Small Screens) */}
            <div className="logo-header logo-dark pl-4 hidden md:block">
              <Link href="/">
                <img src="/assets/images/logo.svg" alt="Logo" />
              </Link>
            </div>

            <nav className="header-nav navbar-collapse ml-12 mt-1 hidden md:block">
              <ul className="nav navbar-nav flex items-center space-x-9">
                
                {/* Home */}
                <li className="relative group">
                  <Link href="/" className="flex items-center">
                    <span className="font-semibold">Home</span>
                  </Link>
                  <div className="fixed left-1/2 top-20 transform -translate-x-1/2 w-[850px] bg-white 
                  shadow-lg p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 gap-10 z-50">

                    <ul className="p-5 gap-4 flex items-center justify-between">
                        <li className="h-90 w-60 p-2 text-center">
                          <a href="#">
                            <img src="assets/images/demo/demo-1.png" alt="/" />
                            <span className="menu-title block mt-2 font-semibold">01 Home Page</span>
                          </a>
                        </li>
                        <li className="h-70 w-60 p-2 text-center">
                          <a href="#">
                            <img src="assets/images/demo/demo-2.png" alt="/" />
                            <span className="menu-title block mt-2 font-semibold">02 Home Page</span>
                          </a>
                        </li>
                        <li className="h-70 w-60 p-2 text-center">
                          <a href="#">
                            <img src="assets/images/demo/demo-3.png" alt="/" />
                            <span className="menu-title block mt-2 font-semibold">03 Home Page</span>
                          </a>
                        </li>
                      </ul>
                  </div>
                </li>



        {/* Become A Vendor */}
  <li className="has-mega-menu sub-menu-down relative group">
    <Link href="/become-a-vendor" className="flex items-center gap-1">
      <span className="font-semibold">Become a Vendor</span>
    </Link>

   <div className="mega-menu shop-menu fixed left-1/2 top-20 transform -translate-x-1/2 w-[1100px] 
    bg-white shadow-lg p-8 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all
    duration-300 gap-10 z-50">
      
      <div className="w-2/3">
        <div className="grid grid-cols-3 gap-10">
          
          <div>
            <a href="#" className="menu-title font-bold text-gray-900 block mb-3 text-lg">Shop Structure</a>
             <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-primary">Shop Standard</a></li>
              <li><a href="#" className="hover:text-primary">Shop List</a></li>
              <li><a href="#" className="hover:text-primary">Shop With Category</a></li>
              <li><a href="#" className="hover:text-primary">Shop Filters Top Bar</a></li>
              <li><a href="#" className="hover:text-primary">Shop Sidebar</a></li>
              <li><a href="#" className="hover:text-primary">Shop Style 1</a></li>
              <li><a href="#" className="hover:text-primary">Shop Style 2</a></li>
            </ul>
          </div>

          <div>
            <a href="#" className="menu-title font-bold text-gray-900 block mb-3 text-lg">Product Structure</a>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-primary">Default</a></li>
              <li><a href="#" className="hover:text-primary">Thumbnail</a></li>
              <li><a href="#" className="hover:text-primary">Grid Media</a></li>
              <li><a href="#" className="hover:text-primary">Carousel</a></li>
              <li><a href="#" className="hover:text-primary">Full Width</a></li>
            </ul>
          </div>

          <div>
            <a href="#" className="menu-title font-bold text-gray-900 block mb-3 text-lg">Shop Pages</a>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-primary">Wishlist</a></li>
              <li><a href="#" className="hover:text-primary">Cart</a></li>
              <li><a href="#" className="hover:text-primary">Checkout</a></li>
              <li><a href="#" className="hover:text-primary">Compare</a></li>
              <li><a href="#" className="hover:text-primary">Order Tracking</a></li>
              <li><a href="#" className="hover:text-primary">My Account</a></li>
              <li><a href="#" className="hover:text-primary">Registration</a></li>
            </ul>
          </div>
        </div>

     {/* Deal of the Month */}
   <div className="mt-8 border border-gray-300 p-6 rounded-md flex justify-between items-center bg-white 
    shadow-md">
          
    <div>
      <h3 className="text-xl font-semibold mb-2">Deal of the Month</h3>
      <p className="text-sm text-gray-800 font-semibold leading-normal">
        Yes! Send me exclusive offers, personalized gifts <br /> ideas, and shopping tips. <br /> 
      </p>
     <a href="#" className="text-sm text-gray-500 font-semibold mt-3">View All Products</a>
    </div>

    <div className="flex gap-2 text-center ml-2">

      <div className="flex flex-col items-center">
        <div className="px-4 py-2 rounded-md bg-gray-100">
          <span className="text-xl font-semibold">28</span>
        </div>
        <span className="text-xs uppercase mt-1">Days</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="px-4 py-2 rounded-md bg-gray-100">
          <span className="text-xl font-semibold">12</span>
        </div>
        <span className="text-xs uppercase mt-1">Hours</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="px-4 py-2 rounded-md bg-gray-100">
          <span className="text-xl font-semibold">06</span>
        </div>
        <span className="text-xs uppercase mt-1">Minutes</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="px-4 py-2 rounded-md bg-gray-100">
          <span className="text-xl font-semibold">43</span>
        </div>
        <span className="text-xs uppercase mt-1">Seconds</span>
      </div>
    </div>

  </div>
      </div>

      <div className="w-1/3">
        <img src="assets/images/adv-1.png" alt="Promo Image" className="w-full h-auto object-cover rounded-md shadow-md" />
      </div>

    </div>
  </li>


          {/* Vendor */}
     <li className="relative group">
    <Link href="/vendor" className="block  py-2">
      <span className="font-semibold">Vendor</span>
    </Link>

    <div className="fixed left-1/2 top-20 transform -translate-x-1/2 w-[1100px] bg-white shadow-lg p-8 grid grid-cols-4 gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-lg z-50">
      
      <div>
        <a href="#" className="font-bold text-lg text-gray-900">Blog Dark Style</a>
        <ul className="mt-2 space-y-1 text-gray-700">
          <li><a href="#">Blog 2 Column</a></li>
          <li><a href="#">Blog 2 Column Sidebar</a></li>
          <li><a href="#">Blog 3 Column</a></li>
          <li><a href="#">Blog Half Image</a></li>
        </ul>

        <a href="#" className="font-bold text-lg text-gray-900 mt-5 block">Blog Light Style</a>
        <ul className="mt-2 space-y-1 text-gray-700">
          <li><a href="#">Blog 2 Column</a></li>
          <li><a href="#">Blog 2 Column Sidebar</a></li>
          <li><a href="#">Blog Half Image</a></li>
          <li><a href="#">Blog Exclusive</a></li>
        </ul>
      </div>

      <div>
        <a href="#" className="font-bold text-lg text-gray-900">Blog Sidebar</a>
        <ul className="mt-2 space-y-1 text-gray-700">
          <li><a href="#">Blog Left Sidebar</a></li>
          <li><a href="#">Blog Right Sidebar</a></li>
          <li><a href="#">Blog Both Sidebar</a></li>
          <li><a href="#">Blog Wide Sidebar</a></li>
        </ul>

        <a href="#" className="font-bold text-lg text-gray-900 mt-5 block">Blog Page</a>
        <ul className="mt-2 space-y-1 text-gray-700">
          <li><a href="#">Blog Archive</a></li>
          <li><a href="#">Author</a></li>
          <li><a href="#">Blog Category</a></li>
          <li><a href="#">Blog Tag</a></li>
        </ul>
      </div>

      <div>
        <a href="#" className="font-bold text-lg text-gray-900">Blog Details</a>
        <ul className="mt-2 space-y-1 text-gray-700">
          <li><a href="#">Post Standard</a></li>
          <li><a href="#">Post Left Sidebar</a></li>
          <li><a href="#">Post Header Image</a></li>
          <li><a href="#">Post Slide Show</a></li>
          <li><a href="#">Post Side Image</a></li>
          <li><a href="#">Post Gallery</a></li>
          <li><a href="#">Post Gallery Alternative</a></li>
          <li><a href="#">Post Open Gutenberg</a></li>
          <li><a href="#">Post Link</a></li>
          <li><a href="#">Post Audio</a></li>
          <li><a href="#">Post Video</a></li>
        </ul>
      </div>

      <div>
        <a href="#" className="font-bold text-lg text-gray-900">Recent Posts</a>
        <ul className="mt-2 space-y-3 text-gray-700">
          <li className="flex items-center">
            <img src="assets/images/shop/product/small/1.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
            <div>
              <a href="#" className="font-medium text-gray-900">Cozy Knit Cardigan Sweater</a>
              <span className="block text-sm text-gray-500">July 23, 2024</span>
            </div>
          </li>
          <li className="flex items-center">
            <img src="assets/images/shop/product/small/2.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
            <div>
              <a href="#" className="font-medium text-gray-900">Sophisticated Swagger Suit</a>
              <span className="block text-sm text-gray-500">July 23, 2024</span>
            </div>
          </li>
          <li className="flex items-center">
            <img src="assets/images/shop/product/small/3.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
            <div>
              <a href="#" className="font-medium text-gray-900">Athletic Mesh Sports Leggings</a>
              <span className="block text-sm text-gray-500">July 23, 2024</span>
            </div>
          </li>
          <li className="flex items-center">
            <img src="assets/images/shop/product/small/4.png" className="w-12 h-12 rounded-lg mr-3" alt="" />
            <div>
              <a href="#" className="font-medium text-gray-900">Satin Wrap Party Blouse</a>
              <span className="block text-sm text-gray-500">July 23, 2024</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </li>


<<<<<<< HEAD
        {/* Pages */}
  <li className="relative group">
    <a href="#" className="block py-2">
      <span className="font-semibold">Pages</span>
    </a>

   <div className="fixed left-1/2 top-20 transform -translate-x-1/2 w-screen h-[60%] bg-white shadow-lg 
   p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all
    duration-300 flex gap-10 z-50">   

      <div className="max-w-[1920px] mx-auto grid grid-cols-6 gap-6">
        
        <div>
          <h3 className="font-bold text-lg text-gray-900">Pages</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">About Us</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Pricing Table</a></li>
            <li><a href="#">Our Gift Vouchers</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Faqs 1</a></li>
            <li><a href="#">Faqs 2</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">Contact Us</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">Contact Us 1</a></li>
            <li><a href="#">Contact Us 2</a></li>
            <li><a href="#">Contact Us 3</a></li>
          </ul>
          
          <h3 className="font-bold text-lg text-gray-900 mt-4">Web Pages</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">Error 404 1</a></li>
            <li><a href="#">Error 404 2</a></li>
            <li><a href="#">Coming Soon</a></li>
            <li><a href="#">Under Construction</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">Banner Style</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">Banner with BG Color</a></li>
            <li><a href="#">Banner with Image</a></li>
            <li><a href="#">Banner with Video</a></li>
            <li><a href="#">Banner with Kanbern</a></li>
            <li><a href="#">Banner Small</a></li>
            <li><a href="#">Banner Medium</a></li>
            <li><a href="#">Banner Large</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">Header Style</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">Header Style 1</a></li>
            <li><a href="#">Header Style 2</a></li>
            <li><a href="#">Header Style 3</a></li>
            <li><a href="#">Header Style 4</a></li>
            <li><a href="#">Header Style 5</a></li>
            <li><a href="#">Header Style 6</a></li>
            <li><a href="#">Header Style 7</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">Footer Style</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">Footer Style 1</a></li>
            <li><a href="#">Footer Style 2</a></li>
            <li><a href="#">Footer Style 3</a></li>
            <li><a href="#">Footer Style 4</a></li>
            <li><a href="#">Footer Style 5</a></li>
            <li><a href="#">Footer Style 6</a></li>
            <li><a href="#">Footer Style 7</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">Dashboard</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-base">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Order Details</a></li>
            <li><a href="#">Order Confirmation</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">Return Request</a></li>
            <li><a href="#">Return Request Detail</a></li>
            <li><a href="#">Return Request Confirmed</a></li>
          </ul>
        </div>

      </div>
    </div>
  </li>
=======
                {/* My Account */}
              <li className="relative group">
                  <Link href="/account-profile" className="flex items-center">
                    <span className="font-semibold">My Account</span>
                  </Link>
                   <div className="fixed left-1/2 top-18 transform -translate-x-1/2 ml-40
                  w-[200px] bg-white shadow-lg p-1 hidden group-hover:flex gap-10 z-50">
                   
                    <ul className="p-3 space-y-2 text-gray-600">
                      <li><a href="/account-dashboard" className="text-sm">Dashboard</a></li>
                      <li><a href="/account-orders" className="text-sm">Orders</a></li>
                      <li><a href="#" className="text-sm">Orders Details</a></li>
                      <li><a href="#" className="text-sm">Orders Confirmation</a></li>
                      <li><a href="#" className="text-sm">Downloads</a></li>
                      <li><a href="#" className="text-sm">Return Request</a></li>
                      <li><a href="#" className="text-sm">Return Request Detail</a></li>
                      <li><a href="#" className="text-sm">Return Request Confirmed</a></li>
                      <li><a href="#" className="text-sm">Profile</a></li>
                      <li><a href="#" className="text-sm">Address</a></li>
                      <li><a href="#" className="text-sm">Shipping methods</a></li>
                      <li><a href="#" className="text-sm">Payment Methods</a></li>
                      <li><a href="#" className="text-sm">Review</a></li>
                      <li><a href="#" className="text-sm">Billing address</a></li>
                      <li><a href="#" className="text-sm">Shipping address</a></li>
                      <li><a href="#" className="text-sm">Cancellation Requests</a></li>
                    </ul>
                  </div>
                </li>
>>>>>>> 4caa4617078b9d6d3e9d9b17b2dd37dd30393525


          {/* My Account */}
        <li className="relative group">
            <Link href="/account-profile" className="flex items-center">
              <span className="font-semibold">My Account</span>
            </Link>
             <div className="fixed left-1/2 top-18 transform -translate-x-1/2 ml-40
            w-[200px] bg-white shadow-lg p-1 hidden group-hover:flex gap-10 z-50">
             
              <ul className="p-3 space-y-2 text-gray-600">
                <li><a href="/account-dashboard" className="text-sm">Dashboard</a></li>
                <li><a href="/account-orders" className="text-sm">Orders</a></li>
                <li><a href="#" className="text-sm">Orders Details</a></li>
                <li><a href="#" className="text-sm">Orders Confirmation</a></li>
                <li><a href="#" className="text-sm">Downloads</a></li>
                <li><a href="#" className="text-sm">Return Request</a></li>
                <li><a href="#" className="text-sm">Return Request Detail</a></li>
                <li><a href="#" className="text-sm">Return Request Confirmed</a></li>
                <li><a href="#" className="text-sm">Profile</a></li>
                <li><a href="#" className="text-sm">Address</a></li>
                <li><a href="#" className="text-sm">Shipping methods</a></li>
                <li><a href="#" className="text-sm">Payment Methods</a></li>
                <li><a href="#" className="text-sm">Review</a></li>
                <li><a href="#" className="text-sm">Billing address</a></li>
                <li><a href="#" className="text-sm">Shipping address</a></li>
                <li><a href="#" className="text-sm">Cancellation Requests</a></li>
              </ul>
            </div>
          </li>


          </ul>
        </nav>


<div className="md:ml-12 ml-0">
        <div className="nav-link border-b flex items-center space-x-2">
          <Link href="/login">Login</Link>
          <span>/</span>
          <Link href="/register">Register</Link>
    </div>
  </div>

   {/* Right-side Icons */}
<div className="flex items-center justify-end w-full md:w-auto max-w-full overflow-x-auto">
  <ul className="flex items-center space-x-2 md:space-x-4 list-none flex-nowrap">

    <li>
      <button type="button" className="offcanvas-btn"
        onClick={() => { closeAllModals(); setSearchOpen(true); }}>
      {searchIcon}
      </button>
    </li>


      {/* Search Bar */}
  <div className={`fixed h-[580px] max-md:h-[470px] max-sm:!h-[440px] top-0 left-0 right-0 bg-white 
  z-[9999] transition-transform duration-500 ${
    isSearchOpen ? "translate-y-0" : "-translate-y-full"
  }`}
  style={{
    height: "90vh", 
    overflowY: "auto", 
    paddingBottom: "20px",
  }}
>
        <button type="button" className="absolute top-2 right-9 text-4xl opacity-50"
          onClick={() => setSearchOpen(false)}>
          &times;
        </button>

        <div className="container mt-14">
            <form className="block w-[1100px] mb-13.5 relative ml-14">
              <div
                className="relative flex flex-wrap items-center border-b-2 border-secondary pb-2"
              >
            <div className="relative after:content-[''] after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 
            after:w-[1px] after:h-[35px] max-sm:after:h-6.1">
        <select className="nice-select border-0 float-none px-0 text-xl min-w-[270px] font-md h-[45px] leading-[48px]">
                    <option>All Categories</option>
                    <option>Clothes</option>
                    <option>UrbanSkirt</option>
                    <option>VelvetGown</option>
                    <option>LushShorts</option>
                    <option>Vintage</option>
                    <option>Wedding</option>
                    <option>Cotton</option>
                    <option>Linen</option>
                    <option>Navy</option>
                    <option>Urban</option>
                    <option>Business Meeting</option>
                    <option>Formal</option>
                  </select>
                </div>
            <input type="search" className="py-2.5 px-3.6 text-xl placeholder-black font-md text-title 
             outline-none flex-auto w-[1%] h-[45px] border-l pl-4" placeholder="Search Product" />
                <button className="btn" type="button">
                 {searchIcon}
                </button>
              </div>
              <ul className="flex items-center font-normal flex-wrap py-2.5 space-x-3">
                <li className="text-2sm py-1.1">
                <span>Quick Search :</span></li>
                <li className="text-2sm py-1.1 px-3.6">
                  <a href="#">Clothes</a>
                </li>
                <li className="text-2sm py-1.1 px-3.6">
                  <a href="#">UrbanSkirt</a>
                </li>
                <li className="text-2sm py-1.1 px-3.6">
                  <a href="#">VelvetGown</a>
                </li>
                <li className="text-2sm py-1.1 px-3.6">
                  <a href="#">LushShorts</a>
                </li>
              </ul>
            </form>
    
  <div className="row ml-7 mr-7 mt-9">
  <div className="w-full">
    <h5 className="mb-4 text-lg font-semibold ml-8">You May Also Like</h5>
    <div className="overflow-x-auto whitespace-nowrap grid grid-cols-3 md:grid-col-6 lg:grid-col-9 ml-8">
      <div className="flex gap-5">
      <div className="relative z-[1] h-full flex-shrink-0 w-44">
                      <div className="relative z-[1] h-full">
                        <div className="rounded-3xl overflow-hidden relative">
                          <img src="assets/images/shop/product/1.png" alt="image" />
                        </div>
                        <div className="flex justify-between font-semibold py-3">
                          <h6><a href="#">SilkBliss Dress</a></h6>
                          <h6>$40.00</h6>
                        </div>
                      </div>
                    </div>
                  
                    <div className="h-full flex-shrink-0 w-44">
                      <div className="relative z-[1] h-full">
                        <div className="rounded-3xl overflow-hidden relative">
                          <img
                            src="assets/images/shop/product/4.png"
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between font-semibold py-3">
                          <h6><a href="#">ComfyLeggings</a></h6>
                          <h6>$35.00</h6>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex-shrink-0 w-44">
                      <div className="relative z-[1] h-full">
                        <div className="rounded-3xl overflow-hidden relative">
                          <img
                            src="assets/images/shop/product/2.png"
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between font-semibold py-3">
                          <h6><a href="#">ClassicCapri</a></h6>
                          <h6>$20.00</h6>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex-shrink-0 w-44">
                      <div className="relative z-[1] h-full">
                        <div className="rounded-3xl overflow-hidden relative">
                          <img
                            src="assets/images/shop/product/5.png"
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between font-semibold py-3">
                          <h6><a href="#">DapperCoat</a></h6>
                          <h6>$70.00</h6>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex-shrink-0 w-44">
                      <div className="relative z-[1] h-full">
                        <div className="rounded-3xl overflow-hidden relative">
                          <img
                            src="assets/images/shop/product/6.png"
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between font-semibold py-3">
                          <h6><a href="#">ComfyLeggings</a></h6>
                          <h6>$45.00</h6>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex-shrink-0 w-44">
                      <div className="relative z-[1] h-full">
                        <div className="rounded-3xl overflow-hidden relative">
                          <img
                            src="assets/images/shop/product/7.png"
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between font-semibold py-3">
                          <h6><a href="#">Denim Jeans</a></h6>
                          <h6>$40.00</h6>
                        </div>
                      </div>
                    </div>
                  
                  
                  </div>
                </div>
              </div>
            </div>
      </div>
</div>

{/* Search Icon end */}

  <li>
    <button
      className="offcanvas-btn"
      onClick={() => {
        console.log("Wishlist button clicked");
        setTab("wishlist");
      }}
      data-target="offcanvasRight"
    >
    {heartIcon}
     </button>
  </li>
  <li>
    <button
      className="offcanvas-btn mr-8"
      onClick={() => {
        console.log("Shopping Cart button clicked");
        setTab("shoppingcart");
      }}
      data-target="offcanvasRight">
              {cartIcon}
      <span className="absolute -top-1 right-0.5 text-[11px] flex items-center justify-center min-h-4.5
      in-w-4.5 font-bold rounded-full bg-primary text-white">
      </span>
    </button>
  </li>

  
  <li className="filte-link">
  <button
    className="filte-btn offcanvas-btn"
    onClick={() => setSidebarOpen(true)}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-8 mt-1.5 cursor-pointer"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"  
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="2" y1="8" x2="20" y2="8" />  
    <line x1="2" y1="16" x2="20" y2="16" />  
  </svg>
  </button>
  </li>
     

  </ul>
</div>


 <div className={`fixed top-0 right-0 h-full w-[485px] bg-white border z-[9999] overflow-y-auto 
 transition-transform duration-500 ${
    isSidebarOpen ? "translate-x-0" : "translate-x-full"
  }`}>
  <button className="absolute top-2 right-5 text-4xl opacity-50" onClick={() => setSidebarOpen(false)}>
    &times;
  </button>
  
  <div className="flex-grow overflow-y-auto py-14.5 px-[75px] max-sm:py-13.5 max-sm:px-3.6 mb-[15%]">
            <div>
              <div className="mb-[25px] max-lg:mb-10 mr-4">
                <div>
                  <div className="relative flex flex-wrap items-stretch pl-0 w-[110%] mt-16 border-black p-2">
                 <input name="Search" required={true} type="search" className="py-2.5 px-4 text-2sm 
                 placeholder-black text-title outline-none flex-auto w-[1%] rounded-xl border border-black"
                      placeholder="Search Product" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[87%] z-9">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
 strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-black">
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>                  
  </div>
                  </div>
                </div>
              </div>


<div className="w-full max-w-xl mx-auto">
      <h2 className="font-semibold text-base">Price</h2>
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

  
  
    <div className="mb-[45px] max-lg:mb-10 mt-8">
      <h6 className="relative mb-6.1 font-medium">Color</h6>
      <div className="flex items-center flex-wrap color-filter ps-2 mt-4 space-x-2">
        <div className="form-check">

        <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
         type="radio" name="radioNoLabel" id="radioNoLabel1"
         aria-label="..." />

          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#000000" }}>
          </span>
        </div>
        <div className="form-check">
         <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
            type="radio" name="radioNoLabel" id="radioNoLabel2" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#9BD1FF" }}>
          </span>
        </div>
        <div className="form-check">
        <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
            type="radio" name="radioNoLabel" id="radioNoLabel3" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#21B290" }}>
          </span>
        </div>
        <div className="form-check">
        <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
           type="radio" name="radioNoLabel" id="radioNoLabel4" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#FEC4C4" }}>
          </span>
        </div>
        <div className="form-check">
         <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
          type="radio" name="radioNoLabel" id="radioNoLabel5" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#FF7354" }}>
          </span>
        </div>
        <div className="form-check">
         <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
          type="radio" name="radioNoLabel" id="radioNoLabel6" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#51EDC8" }}>
          </span>
        </div>
        <div className="form-check">
        <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
            type="radio" name="radioNoLabel" id="radioNoLabel7" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#B77CF3" }}>
          </span>
        </div>
        <div className="form-check">
         <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
            type="radio" name="radioNoLabel" id="radioNoLabel8" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#FF4A76" }}>
          </span>
        </div>
        <div className="form-check">
         <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
           type="radio" name="radioNoLabel" id="radioNoLabel9" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#3E68FF" }}>
          </span>
        </div>
        <div className="form-check">
         <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1"
          type="radio" name="radioNoLabel" id="radioNoLabel10" aria-label="..." />
          <span className="mr-3.6 size-4 block relative rounded-full z-1" 
          style={{ backgroundColor: "#7BEF68" }}>
          </span>
        </div>
      </div>
    </div>

     <div className="mb-[45px] max-lg:mb-10">
      <h6 className="relative mb-6.1 font-medium">Size</h6>
      <div className="flex flex-wrap relative product-size mt-3 space-y-2">

      <input
        type="radio"
        name="btnradio"
        id="btnradio11"
        autoComplete="off"
        checked={selected === "btnradio11"}
        onChange={() => handleRadioChange("btnradio11")}
        className="opacity-0 absolute pointer-events-none btn-check"
      />
                  <label htmlFor="btnradio11"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >4</label>

                  <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1"
                   id="btnradio21" />
                  <label
                    htmlFor="btnradio21"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >6</label>

                  <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1"
                    id="btnradio31" />
                  <label htmlFor="btnradio31" className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >8</label>

                  <input
                    type="radio"
                    className="opacity-0 absolute pointer-events-none btn-check"
                    name="btnradio1"
                    id="btnradio41"
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
                    id="btnradio51"
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
                    id="btnradio61"
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
                    id="btnradio71"
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
                    id="btnradio81"
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
                    id="btnradio91"
                  />
                  <label
                    htmlFor="btnradio91"
                    className="size-[34px] leading-[34px] rounded-full text-center border border-black mr-2.5 mb-1.1"
                    >20</label
                  >
                </div>
              </div>
              <div className="mb-[45px] max-lg:mb-10 widget_categories">
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

              <div className="mb-[45px] max-lg:mb-10 widget_tag_cloud">
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
                  <a
                    className="relative border border-black py-2 px-4 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                    href="#"
                    >Formal</a
                  >
                </div>
              </div>
              <a href="#" className="btn py-2.5 px-4 text-sm font-Lufga inline-block font-medium leading-[1.2] border border-black bg-black text-white rounded-xl duration-700 relative overflow-hidden"
                >RESET</a
              > 
            </div>
          </div>
        </div>
</div>
</div>


             
</div>

     {/* Sidebar cart */}
      <div className={`w-[485px] fixed z-[1045] flex flex-col max-full duration-500 top-0 bottom-0 right-0 bg-white border transition-transform ${
          tab ? "translate-x-0" : "translate-x-full" }`} id="offcanvasRight">
        <button type="button" className="size-10 flex items-center justify-center absolute top-1.5 right-5 opacity-50 text-4xl font-semibold"
          onClick={() => setTab("")} >
          &times;
        </button>

        <div className="flex-grow overflow-y-auto py-14.5 px-[75px] max-sm:py-13.5 max-sm:px-3.6">
          <div className="product-description mt-16">
            <ul className="flex flex-wrap justify-center border-b" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button id="shoppingcart" onClick={() => setTab("shoppingcart")}
                  className={`w-full py-2.5 px-5 text-start font-medium border-b-2 border-transparent mb-[-1px] ${
                    tab === "shoppingcart" ? "!border-black" : "" }`}>
                  Shopping Cart
                  <span
                    className={`text-xs inline-flex items-center justify-center size-6 font-bold rounded-full ml-2 px-0.5 ${
                      tab === "shoppingcart" ? "bg-black text-white" : "" }`}>
                    5
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button id="wishlist" onClick={() => setTab("wishlist")}
                  className={`w-full py-2.5 px-5 text-start font-medium font-Lufga border-b-2 border-transparent mb-[-1px] ${
                    tab === "wishlist" ? "!border-black" : ""
                  }`}>
                  Wishlist
                  <span className={`text-xs inline-flex items-center justify-center size-6 font-bold rounded-full ml-2 
                      px-0.5 ${
                      tab === "wishlist" ? "bg-black text-white" : ""
                    }`}>
                    2
                  </span>
                </button>
              </li>
            </ul>

            {tab === "shoppingcart" && <div className="p-5">
              </div>}

            {tab === "wishlist" && <div className="p-5">

    {/* Wishlist Section */}
      {showWishlist && (
        <div className="flex flex-col min-h-[calc(100vh_-_190px)]">
          <ul className="sidebar-cart-list">
            <li>
              <div className="py-5 border-b border-border">
                <div className="flex items-center justify-center">
                  <div className="size-20 rounded-3xl relative overflow-hidden mr-4">
                    <img src="assets/images/shop/shop-cart/pic1.jpg" alt="" className="w-full" />
                  </div>
                  <div className="mr-5 flex-[1]">
                    <h6 className="mb-2 font-medium">
                      <Link href="/checkout">
                        Sophisticated Swagger Suit
                      </Link>
                    </h6>
                    <div className="flex items-center">
                      <h6 className="font-semibold">$50.00</h6>
                    </div>
                  </div>
                  <button className="size-7 flex items-center">
                 <img src="assets/icons/remove.png" alt="" className="w-9 h-8" />        
                   </button>
                </div>
              </div>
            </li>
            <li>
              <div className="py-5 border-b border-border">
                <div className="flex items-center justify-center">
                  <div className="size-20 rounded-3xl relative overflow-hidden mr-4">
                    <img src="assets/images/shop/shop-cart/pic2.jpg" alt="pic2" className="w-full" />
                  </div>
                  <div className="mr-5 flex-[1]">
                    <h6 className="mb-2 font-medium">
                      <Link href="/checkout">
                        Cozy Knit Cardigan Sweater
                      </Link>
                    </h6>
                    <div className="flex items-center">
                      <h6 className="font-semibold">$40.00</h6>
                    </div>
                  </div>
                  <button className="size-7 flex items-center">
                 <img src="assets/icons/remove.png" alt="" className="w-9 h-8" />        
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="py-5 border-b border-border">
                <div className="flex items-center justify-center">
                  <div className="size-20 rounded-3xl relative overflow-hidden mr-4">
                    <img src="assets/images/shop/shop-cart/pic3.jpg" alt="" className="w-full" />
                  </div>
                  <div className="mr-5 flex-[1]">
                    <h6 className="mb-2 font-medium">
                      <Link href="/checkout">
                        Athletic Mesh Sports Leggings
                      </Link>
                    </h6>
                    <div className="flex items-center">
                      <h6 className="font-semibold">$65.00</h6>
                    </div>
                  </div>
                  <button
                    className="size-7 flex items-center">
                 <img src="assets/icons/remove.png" alt="" className="w-9 h-8" />        
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className="mt-auto">
            <Link href="#" className="btn py-3.5 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga font-medium leading-[1.2] border border-secondary bg-black text-white rounded-xl duration-700 relative overflow-hidden text-center block w-full">
                Check Your Favourite
            </Link>
          </div>
        </div>
      )}
              
              </div>}
                <div className="mb-[20%]">
                  <div className={tab === "shoppingcart" ? "block" : "hidden"}>
                    <ul className="sidebar-cart-list">
                      <li>
                        <div className="py-5 border-b border-border">
                          <div className="flex items-center justify-center">
                            <div className="size-20 rounded-3xl relative overflow-hidden mr-4">
                              <img src="assets/images/shop/shop-cart/pic1.jpg" alt="" className="w-full" />
                            </div>
                            <div className="mr-5 flex-[1]">
                              <h6 className="mb-2 font-medium">
                                <Link href="/checkout">
                                Sophisticated Swagger Suit
                                </Link>
                              </h6>
                              <div className="flex items-center">
                                <div className="input-group">
                                  <span className="flex">
                                    <button className="button-minus size-8 text-xl rounded-full border 
                                    border-black mr-2.5 bg-black text-white">-</button>
            <span className="w-8 h-8 text-center border border-black bg-white flex items-center 
            justify-center rounded-full text-lg font-semibold mr-2.5">1</span>
          <button className="button-plus size-8 text-xl rounded-full border border-black mr-2.5 bg-black
           text-white">+</button>
                                  </span>
                                </div>
                                <h6 className="font-semibold">$50.00</h6>
                              </div>
                            </div>
                            <button
                              className="size-7 flex items-center">
                           <img src="assets/icons/remove.png" alt="" className="w-9 h-8" />        
                            </button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="py-5 border-b border-border">
                          <div className="flex items-center justify-center">
                            <div className="size-20 rounded-3xl relative overflow-hidden mr-4">
                              <img src="assets/images/shop/shop-cart/pic2.jpg" alt="" className="w-full" />
                            </div>
                            <div className="mr-5 flex-[1]">
                              <h6 className="mb-2 font-medium">
                                <Link href="/checkout">
                                  Cozy Knit Cardigan Sweater
                                </Link>
                              </h6>
                              <div className="flex items-center">
                                <div className="input-group">
                                  <span className="flex">
    <button className="button-minus size-8 text-xl rounded-full border border-black mr-2.5 bg-black text-white">-</button>
   <span className="w-8 h-8 text-center border border-black bg-white flex items-center 
            justify-center rounded-full text-lg font-semibold mr-2.5">1</span>
  <button className="button-plus size-8 text-xl rounded-full border border-black mr-2.5 bg-black text-white">+</button>
                                  </span>
                                </div>
                                <h6 className="font-semibold">$40.00</h6>
                              </div>
                            </div>
                            <button className="size-7 flex items-center">
                           <img src="assets/icons/remove.png" alt="" className="w-9 h-8" />        
                            </button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="py-5 border-b border-border">
                          <div className="flex items-center justify-center">
                            <div className="size-20 rounded-3xl relative overflow-hidden mr-4">
                              <img src="assets/images/shop/shop-cart/pic3.jpg" alt="" className="w-full" />
                            </div>
                            <div className="mr-5 flex-[1]">
                              <h6 className="mb-2 font-medium">
                                <Link href="/checkout">
                                  Athletic Mesh Sports Leggings
                                </Link>
                              </h6>
                              <div className="flex items-center">
                                <div className="input-group">
                                  <span className="flex">
      <button className="button-minus size-8 text-xl rounded-full border border-black mr-2.5 bg-black text-white">-</button>
   <span className="w-8 h-8 text-center border border-black bg-white flex items-center 
            justify-center rounded-full text-lg font-semibold mr-2.5">1</span>
      <button className="button-plus size-8 text-xl rounded-full border border-black mr-2.5 bg-black 
      text-white">+</button>
                                  </span>
                                </div>
                                <h6 className="font-semibold">$65.00</h6>
                              </div>
                            </div>
                            <button
                              className="size-7 flex items-center">
                         <img src="assets/icons/remove.png" alt="" className="w-9 h-8" />        
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>


  {/* Cart Section */}
  <div className="flex items-center justify-between p-4.5 mb-2.5 mt-4 ml-3">
        <h5 className="text-lg font-bold">Subtotal:</h5>
        <h5 className="text-lg font-bold">300.00$</h5>
      </div>
      <div className="mt-auto">
        <div className="flex items-center mb-10">
          <div className="size-13.5 mr-5 flex items-center justify-center">
         <img src="assets/icons/ship.png" alt="" className="w-20 h-14" />        
          </div>
          <div className="shipping-content">
            <h6 className="mb-2 pr-6 font-semibold">
              Congratulations, you've got free shipping!
            </h6>
  <div className="h-[5px] bg-[#e9ecef] overflow-hidden flex">
  <div className="bg-black h-full" style={{ width: "75%" }} role="progressbar">
    <span className="sr-only">75% Complete</span>
  </div>
</div>
          
</div>
        </div>
        <Link href="#" className="btn py-3.5 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-bold leading-[1.2] border border-black rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden text-center w-full mb-5">
            Checkout
        </Link>
        <Link href="#" className="btn py-3.5 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-black text-white rounded-xl duration-700 relative overflow-hidden text-center w-full">
            View Cart
        </Link>
      </div>

</div>
</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;