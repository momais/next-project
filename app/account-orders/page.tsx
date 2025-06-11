'use client';

import { useEffect, useState } from 'react';

interface Order {
  id: string;
  date: string;
  total: string;
  status: 'In Progress' | 'Canceled' | 'Delayed' | 'Delivered';
}

const AccountOrders: React.FC = () => {
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

      <div className="3xl:py-25 md:py-17 sm:py-13 py-10">
        <div className="container">
          <div className="flex">
            <aside className="w-[390px] hidden md:block">
              <div className="p-4 mt-[-20%]">
                <div className="bg-white xl:rounded-2xl xl:relative xl:z-9 shadow-[0_0px_20px_0_rgba(0,0,0,0.1)] 
                top-0 left-0 max-xl:w-[280px]" id="accountSidebar">
                  <div className="p-6 rounded-xl text-center">     
                    <h5 className="text-lg font-semibold">user username</h5>
                    <span className="text text-[#d9144e]">user email</span>
                  </div>
                  <div className="mt-5">
                    <div className="py-2 px-5 mb-2 bg-yellow-50">DASHBOARD</div>
                    <ul className="pb-2">
                      <li><a className="py-2 px-5 block" href="#">Dashboard</a></li>
                      <li><a className="py-2 px-5 block" href="#">Orders</a></li>
                      <li><a className="py-2 px-5 block" href="#">Downloads</a></li>
                      <li><a className="py-2 px-5 block" href="#">Return request</a></li>
                    </ul>
                    <div className="py-2 px-5 mb-2">ACCOUNT SETTINGS</div>
                    <ul className="pb-2">
                      <li><a className="py-2 px-5 block" href="#">Profile</a></li>
                      <li><a className="py-2 px-5 block" href="#">Address</a></li>
                      <li><a className="py-2 px-5 block" href="#">Shipping methods</a></li>
                      <li><a className="py-2 px-5 block" href="#">Payment Methods</a></li>
                      <li><a className="py-2 px-5 block" href="#">Review</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            <section className="w-full max-w-[1200px] mx-auto p-20 md:pl-9 mt-[30%] md:-mt-14">
              <div className="border border-black/10 p-7 rounded-xl min-h-[450px] max-sm:p-5">
                <div className="overflow-x-auto">
                  <table className="table-hover min-w-[600px] mb-4 w-full text-left">
                    <thead>
                      <tr>
                        <th className="py-4 px-3 uppercase">Order #</th>
                        <th className="py-4 px-3 uppercase">Date Purchased</th>
                        <th className="py-4 px-3 uppercase">Status</th>
                        <th className="py-4 px-3 uppercase">Total</th>
                        <th className="py-4 px-3 uppercase text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#34VB5540K83</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">May 21, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$358.75</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-info m-0">In Progress</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#78A643CD409</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">December 09, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span>$760.50</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1 px-2 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-danger m-0">Canceled</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#112P45A90V2</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">October 15, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$1,264.00</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1.1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-warning m-0">Delayed</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#28BA67U0981</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">July 19, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$198.35</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1.1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-success m-0">Delivered</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#502TR872W2</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">April 04, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$2,133.90</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1.1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-success m-0">Delivered</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#47H76G09F33</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">March 30, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$86.40</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1.1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-success m-0">Delivered</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#53U76G09E38</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">April 21, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$86.40</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1.1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-success m-0">Delivered</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <a href="#" className="fw-medium">#31M76G09G76</a>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border">May 07, 2024</td>
                        <td className="py-4 px-3 text-body border-t border-border">$112.40</td>
                        <td className="py-4 px-3 text-body border-t border-border">
                          <span className="py-1.1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-success m-0">Delivered</span>
                        </td>
                        <td className="py-4 px-3 text-body border-t border-border text-right">
                          <a href="#" className="text-primary underline p-0">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-center">
                  <nav aria-label="Table Pagination">
                    <ul className="flex space-x-2">
                      <li><a className="py-3 px-4 h-10 min-w-10 leading-10 text-center inline-flex text-2sm items-center justify-center border border-black rounded-3xl mx-1.1 duration-200 hover:bg-black hover:text-white" href="#">Prew</a></li>
                      <li><a className="py-3 px-4 size-10 leading-10 text-center inline-flex text-2sm items-center justify-center border border-black rounded-3xl mx-1.1 duration-200 hover:bg-black hover:text-white" href="#">1</a></li>
                      <li><a className="py-3 px-4 size-10 leading-10 text-center inline-flex text-2sm items-center justify-center border border-black rounded-3xl mx-1.1 duration-200 hover:bg-black hover:text-white" href="#">2</a></li>
                      <li><a className="py-3 px-4 size-10 leading-10 text-center inline-flex text-2sm items-center justify-center border border-black rounded-3xl mx-1.1 duration-200 hover:bg-black hover:text-white" href="#">3</a></li>
                      <li><a className="py-3 px-4 h-10 min-w-10 leading-10 text-center inline-flex text-2sm items-center justify-center border border-black rounded-3xl mx-1.1 duration-200 hover:bg-black hover:text-white" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOrders; 