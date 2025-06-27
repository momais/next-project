'use client';

import { useState } from 'react';
import Link from 'next/link';

const AccountOrderDetails: React.FC = () => {
  const [tab, setTab] = useState('nav-order-history');
  // Placeholder user data
  const username = 'John Doe';
  const email = 'john@example.com';

  return (
    <div>
      {/* Banner Section */}
      <div className="w-full overflow-hidden mb-[26%]">
        <div
          className="absolute top-20 left-0 w-screen min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40"
          style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-[250px] max-sm:h-[230px] text-center text-white">
            <h1 className="mb-2.5 lg:text-5xl md:text-3xl sm:text-2.5xl text-2xl font-bold">Shop Standard</h1>
            <nav>
              <ul className="flex items-center justify-center space-x-2 text-lg font-base">
                <li>
                  <Link href="/">
                    <span className="text-white text-base font-medium">Home</span>
                  </Link>
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
                  <span className="text-white text-base font-medium">Shop Standard</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="3xl:py-25 md:py-17 sm:py-13 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-[390px] md:block mb-8 md:mb-0 md:mr-8">
              <div className="p-4">
                <div className="bg-white xl:rounded-2xl shadow-[0_0px_20px_0_rgba(0,0,0,0.1)]" id="accountSidebar">
                  <div className="p-6 rounded-xl text-center">     
                    <h5 className="text-lg font-semibold">{username}</h5>
                    <span className="text-[#d9144e]">{email}</span>
                  </div>
                  <div className="mt-5">
                    <div className="py-2 px-5 mb-2 bg-yellow-50">DASHBOARD</div>
                    <ul className="pb-2">
                      <li><Link href="#"><span className="py-2 px-5 block">Dashboard</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Orders</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Downloads</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Return request</span></Link></li>
                    </ul>
                    <div className="py-2 px-5 mb-2">ACCOUNT SETTINGS</div>
                    <ul className="pb-2">
                      <li><Link href="#"><span className="py-2 px-5 block">Profile</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Address</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Shipping methods</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Payment Methods</span></Link></li>
                      <li><Link href="#"><span className="py-2 px-5 block">Review</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 xl:pl-9 pl-0">
            <div className="border border-black/10 p-7 rounded-xl min-h-[250px] max-sm:p-5">
              <div className="flex items-center border-b border-black/5 pb-5 mb-7">
                <div className="w-20 h-auto border border-border p-2.5 rounded-lg">
                    <img src="/assets/images/shop/small/pic1.png" alt="Order Item" />
                </div>
                  <div className="ml-5">
                    <div className="py-1 px-3 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-semibold bg-danger">In Progress</div>
                  <h4>Order #17493</h4>
                </div>
              </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mb-6 mb-2">
                  <div>
                    <span className="text-body">Item</span>
                    <h6 className="text-2sm">casual shirt</h6>
                  </div>
                  <div>
                    <span className="text-body">Courier</span>
                    <h6 className="text-2sm">casual shirt</h6>
                  </div>
                  <div>
                    <span className="text-body">Start Time</span>
                    <h6 className="text-2sm">05 April 2024, 15:43:23</h6>
                  </div>
                  <div>
                    <span className="text-body">Address</span>
                    <h6 className="text-2sm">Address 451 Wall Street UK, London</h6>
                  </div>
                </div>
                <div className="content-btn mb-4 flex flex-wrap gap-2">
                  <button className="btn py-3 px-7 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium leading-[1.2] border border-black bg-black text-white rounded-xl duration-700 relative overflow-hidden btnhover20">Export Details</button>
                  <button className="btn py-3 px-7 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-black rounded-xl duration-700 hover:bg-black hover:text-white relative overflow-hidden btnhover20">Request Confirmation</button>
                  <button className="btn py-3 px-7 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium leading-[1.2] border border-primary text-primary rounded-xl duration-700 hover:bg-primary hover:text-white relative overflow-hidden btnhover20">Cancel Order</button>
              </div>
                {/* Tabs */}
                <div className="clearfix">
                <div className="dz-tabs style-3">
                  <div className="flex flex-wrap border-b border-border mb-7.5" id="nav-tab" role="tablist">
                      <button
                        className={`inline-block py-3 text-base mr-4 duration-500 relative w-auto -mb-1 after:content-[''] after:bg-primary after:h-[3px] after:absolute after:bottom-0.5 after:left-1/2 after:duration-200 after:-translate-x-1/2 hover:after:w-full ${tab === 'nav-order-history' ? 'after:w-full font-bold' : 'after:w-0'}`}
                        onClick={() => setTab('nav-order-history')}
                      >
                        Order History
                      </button>
                      <button
                        className={`inline-block py-3 text-base mr-4 duration-500 relative w-auto -mb-1 after:content-[''] after:bg-primary after:h-[3px] after:absolute after:bottom-0.5 after:left-1/2 after:duration-200 after:-translate-x-1/2 hover:after:w-full ${tab === 'nav-Item' ? 'after:w-full font-bold' : 'after:w-0'}`}
                        onClick={() => setTab('nav-Item')}
                      >
                        Item Details
                      </button>
                      <button
                        className={`inline-block py-3 text-base mr-4 duration-500 relative w-auto -mb-1 after:content-[''] after:bg-primary after:h-[3px] after:absolute after:bottom-0.5 after:left-1/2 after:duration-200 after:-translate-x-1/2 hover:after:w-full ${tab === 'nav-courier' ? 'after:w-full font-bold' : 'after:w-0'}`}
                        onClick={() => setTab('nav-courier')}
                      >
                        Courier
                      </button>
                      <button
                        className={`inline-block py-3 text-base mr-4 duration-500 relative w-auto -mb-1 after:content-[''] after:bg-primary after:h-[3px] after:absolute after:bottom-0.5 after:left-1/2 after:duration-200 after:-translate-x-1/2 hover:after:w-full ${tab === 'nav-receiver' ? 'after:w-full font-bold' : 'after:w-0'}`}
                        onClick={() => setTab('nav-receiver')}
                      >
                        Receiver
                      </button>
                  </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    {tab === 'nav-order-history' && (
                      <div>
                    <div className="widget-timeline style-1">
                      <ul className="relative after:top-5 after:bottom-12 after:absolute after:content-[''] after:w-[1px] after:left-2.5 after:border-r after:border-dashed after:border-black/15">
                        <li className="relative mb-3.6">
                              <div className="rounded-full left-0 absolute top-2 size-5 border p-1 bg-white border-success after:content-[''] after:size-2 after:rounded-full after:block after:bg-success"></div>
                          <div className="p-2 pl-4 relative block ml-10">
                            <a className="timeline-panel" href="#">
                                  <h6 className="mb-0">Product Shipped</h6>
                              <span className="text-xs text-body tracking-wide mb-1">08/04/2024 5:23pm</span>
                            </a>
                            <p className="text-sm"><strong>Courier Service : </strong>UPS, R. Gosling</p>
                            <p className="text-sm"><strong>Estimated Delivery Date : </strong>09/04/2024</p>
                          </div>
                        </li>
                        <li className="relative mb-4">
                          <div className="rounded-full left-0 absolute top-3 size-5 border p-1 bg-white border-primary after:content-[''] after:size-2.5 after:rounded-full after:block after:bg-primary"></div>
                          <div className="p-2 pl-4 relative block ml-10">
                            <a className="timeline-panel" href="#">
                                  <h6 className="mb-0">Product Shipped</h6>
                              <span className="text-xs text-body tracking-wide mb-1">08/04/2024 5:23pm</span>
                            </a>
                            <p className="text-sm"><strong>Tracking Number : </strong>3409-4216-8759</p>
                            <p className="text-sm"><strong>Warehouse : </strong>Top Shirt 12b</p>
                          </div>
                        </li>
                         <li className="relative mb-4">
                          <div className="rounded-full left-0 absolute top-3 size-5 border p-1 bg-white border-[#cfcfcf] after:content-[''] after:size-2.5 after:rounded-full after:block after:bg-[#cfcfcf]"></div>
                          <div className="p-2 pl-4 relative block ml-10">
                            <a className="timeline-panel" href="#">
                               <h6 className="mb-0">Product Packaging</h6>
                              <span className="text-xs text-body tracking-wide mb-1">09/04/2024 4:34pm</span>
                            </a>
                          </div>
                        </li>
                        <li className="relative mb-4">
                          <div className="rounded-full left-0 absolute top-3 size-5 border p-1 bg-white border-[#cfcfcf] after:content-[''] after:size-2.5 after:rounded-full after:block after:bg-[#cfcfcf]"></div>
                          <div className="p-2 pl-4 relative block ml-10">
                            <a className="timeline-panel" href="#">
                                  <h6 className="mb-0">Order Placed</h6>
                              <span className="text-xs text-body tracking-wide mb-1">10/04/2024 2:36pm</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                    )}
                    {tab === 'nav-Item' && (
                      <div>
                    <h5 className="mb-2">Item Details</h5>
                    <div className="flex items-center mb-6">
                          <div className="w-[85px] h-auto border border-border p-2 rounded-lg mr-5">
                            <img src="/assets/images/shop/small/pic1.png" alt="Item" />
                          </div>
                      <div className="tracking-product-content">
                        <h6 className="title">Collar Casual Shirt</h6>
                        <small className="block text-body"><strong>Price</strong> : $150</small>
                            <small className="block text-body"><strong>Size</strong> : XL</small>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body">Total Price</span>
                      <h6 className="mb-2 font-semibold">+ $150</h6>
                    </div>
                      <div className="flex justify-between border-b border-light mb-2">
                      <span className="text-success">Total Discounts</span>
                      <h6 className="mb-2 font-semibold">- $55</h6>
                    </div>
                      <div className="flex justify-between">
                      <span className="text-body">Order Total</span>
                      <h6 className="mb-2 font-semibold">$95</h6>
                    </div>
                  </div>
                    )}
                    {tab === 'nav-courier' && (
                      <div>
                    <p className="text-body">Commyolk Suspendisse et justo. Praesent mattis augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue aliquam ornare.</p>
                  </div>
                    )}
                    {tab === 'nav-receiver' && (
                      <div>
                    <h5 className="text-success mb-6">Thank you Your order has been received</h5>
                    <ul className="tracking-receiver">
                      <li className="mb-1 text-sm text-body">Order Number : <strong className="text-title">#17493</strong></li>
                      <li className="mb-1 text-sm text-body">Date : <strong className="text-title">17/04/2024, 02:34pm</strong></li>
                      <li className="mb-1 text-sm text-body">Total : <strong className="text-title">$95</strong></li>
                      <li className="mb-1 text-sm text-body">Payment Methods : <strong className="text-title">Cash on Delivery</strong></li>
                    </ul>
                  </div>
                    )}
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOrderDetails;