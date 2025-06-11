'use client';

import { useEffect, useState } from 'react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  confirmPassword?: string;
  subscribeNewsletter: boolean;
}

const AccountProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    subscribeNewsletter: false
  });

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

            <section className="w-full max-w-[1000px] mx-auto p-4 md:pl-9 mt-[50%] md:mt-0">
              <div className="block lg:hidden sm:py-4 sm:md:px-7 py-3 px-3 mb-5 bg-white border 
              border-black/10 rounded-lg justify-between items-center flex">
                <h2 className="font-semibold">Account Navbar</h2>
                <a className="bg-[#d9144e] text-white py-2 px-3 rounded-md after:content-[''] after:h-screen 
                after:w-0 after:fixed after:left-[-20%] after:top-0 after:bg-black after:opacity-70 
                after:z-99999 after:duration-1000 toggle-btn" href="#">
                  Account Menu
                </a>
              </div>

              <div className="border border-black/10 p-5 rounded-xl min-h-[250px] max-sm:p-5">
                <div className="sm:p-6 p-5 sm:-m-7 -m-5 sm:mb-[35px] mb-6 border-b border-black/20 flex items-center">
                  <div>
                    <h2 className="text-2.5xl">John Doe</h2><span className="text-primary">johndoe@example.com</span>
                  </div>
                </div>

                <form action="#" className="row">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-[50%] pr-0 lg:pr-3 mb-6">
                      <label className="mb-2 inline-block">First Name</label>
                      <input 
                        required 
                        className="w-full py-3 px-4 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light"
                        value={profile.firstName}
                        onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                      />
                    </div>
                    <div className="w-full lg:w-[50%] pl-0 lg:pl-3 mb-6">
                      <label className="mb-2 inline-block">Last Name</label>
                      <input 
                        required 
                        className="w-full py-3 px-4 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light"
                        value={profile.lastName}
                        onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-[50%] pr-0 lg:pr-3 mb-6">
                      <label className="mb-2.5 inline-block">Email address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full py-3 px-4 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    <div className="w-full lg:w-[50%] pl-0 lg:pl-3 mb-6">
                      <label className="mb-2.5 inline-block">Phone</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full py-3 px-4 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-[50%] pr-0 lg:pr-3 mb-6">
                      <label className="mb-2.5 inline-block">New password (leave blank to leave unchanged)</label>
                      <input 
                        type="password" 
                        required 
                        className="w-full py-3 px-4 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light"
                        value={profile.password}
                        onChange={(e) => setProfile({...profile, password: e.target.value})}
                      />
                    </div>
                    <div className="w-full lg:w-[50%] pl-0 lg:pl-3 mb-6">
                      <label className="mb-2.5 inline-block">Confirm new password</label>
                      <input 
                        type="password" 
                        required 
                        className="w-full py-3 px-4 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light"
                        value={profile.confirmPassword}
                        onChange={(e) => setProfile({...profile, confirmPassword: e.target.value})}
                      />
                    </div>
                  </div>
                </form>

                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <div className="custom-control custom-checkbox text-black">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="basic_checkbox_1"
                        checked={profile.subscribeNewsletter}
                        onChange={(e) => setProfile({...profile, subscribeNewsletter: e.target.checked})}
                      />
                      <label className="form-check-label font-base ml-2" htmlFor="basic_checkbox_1">
                        Subscribe me to Newsletter
                      </label>
                    </div>
                  </div>
                  <button 
                    className="btn py-3.5 px-7 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium leading-[1.2] border border-primary bg-[#d9144e] text-white rounded-xl duration-700 relative overflow-hidden mt-4 sm:mt-0" 
                    type="button"
                  >
                    Update profile
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile; 