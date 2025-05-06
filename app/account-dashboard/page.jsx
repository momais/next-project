'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

export default function Dashboard() {

const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

 const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Price',
        data: [198, 190, 199, 191, 205, 185, 199, 190],
        fill: true,
        borderColor: '#b91c1c',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(185, 28, 28, 0.2)');
          gradient.addColorStop(1, 'rgba(185, 28, 28, 0)');
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 180,
        max: 210,
        ticks: {
          callback: (value) => `$${value}`,
        },
        grid: {
          color: '#f1f5f9',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

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
                <h5 className="text-lg font-semibold">{user.username}</h5>
                <span className="text text-[#d9144e]">{user.email}</span>
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


            <div className="border border-black/10 p-7 rounded-xl min-h-[250px] max-sm:p-5">
              <div className="mb-2 p-2">
                <p className="mb-4 text-body">Hello <strong className="text-black">John Doe
                </strong> (not <strong className="text-black">John Doe</strong>? 
                  <button onClick={handleLogout} className="underline hover:text-red-700 ml-2">
                  Log out
                  </button>)
                </p>
                <p>From your account dashboard you can view your
                 <a href="#" className="underline hover:text-red-700">recent orders</a>, manage your 
                  <a href="#" className="underline hover:text-red-700">shipping and billing addresses
                  </a>, and <a href="#" className="underline hover:text-red-700">
                  edit your password and account details</a>.</p>
              </div>

          <div className="flex flex-col lg:flex-row gap-4 p-4">

          <div className="w-[80%]">
          <div className="bg-white hover:bg-[#d9144e] py-6 px-6 shadow-[0px_36px_48_rgba(31,66,135,0.04)] rounded-lg
           border border-black/5 group hover:text-red-700 duration-500 max-md:flex justify-between">
                   <div className="size-14 bg-white rounded-lg flex items-center justify-center border border-border">
                 <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d9144e]">
             <path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="currentColor" />
           <path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="currentColor" />
          <path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="currentColor" />
         </svg>          
               </div>
                    <div className="mt-4">
                      <span className="text-sm text-gray-700 duration-500 group-hover:text-white">Total Order</span>
                      <h2 className="md:text-3xl text-2xl font-medium duration-500 group-hover:text-white">3658</h2>
                    </div>
                  </div>
                </div>

                <div className="w-[80%]">
                  <div className="bg-white hover:bg-[#d9144e] py-6 px-6 shadow-[0px_36px_48_rgba(31,66,135,0.04)] rounded-lg border border-black/5 group hover:text-red-700 duration-500 max-md:flex justify-between">
                    <div className="size-14 bg-white rounded-lg flex items-center justify-center border border-border">
                <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M30.2253 12.8816H29.4827L28.6701 9.36514C28.376 8.10431 27.2552 7.22168 25.9662 7.22168H21.8474V3.84528C21.8474 2.03804 20.3764 0.581055 18.5831 0.581055H3.17237C1.46313 0.581055 0.0761719 1.96801 0.0761719 3.67717V20.0967C0.0761719 21.8058 1.46313 23.1928 3.17237 23.1928H4.29313C4.89555 25.1962 6.74485 26.6533 8.93037 26.6533C11.1159 26.6533 12.9792 25.1962 13.5816 23.1928C13.8455 23.1928 20.3459 23.1928 20.1942 23.1928C20.7966 25.1962 22.6459 26.6533 24.8315 26.6533C27.031 26.6533 28.8803 25.1962 29.4827 23.1928H30.2253C31.7663 23.1928 32.9992 21.9599 32.9992 20.4189V15.6555C32.9992 14.1145 31.7663 12.8816 30.2253 12.8816ZM8.93037 23.8513C7.78968 23.8513 6.88491 22.8969 6.88491 21.7918C6.88491 20.657 7.79558 19.7324 8.93037 19.7324C10.0652 19.7324 10.9898 20.657 10.9898 21.7918C10.9898 22.9151 10.0692 23.8513 8.93037 23.8513ZM13.9739 8.06224L9.79897 11.3125C9.20227 11.7767 8.30347 11.6903 7.82363 11.0604L6.21247 8.94486C5.7361 8.32843 5.86222 7.4458 6.47866 6.98346C7.08107 6.50717 7.96369 6.63321 8.44006 7.24965L9.19656 8.23035L12.2507 5.84867C12.8531 5.3864 13.7357 5.48448 14.2121 6.10092C14.6884 6.71727 14.5763 7.58595 13.9739 8.06224ZM24.8315 23.8513C23.6906 23.8513 22.7861 22.8969 22.7861 21.7918C22.7861 20.657 23.7107 19.7324 24.8315 19.7324C25.9662 19.7324 26.8909 20.657 26.8909 21.7918C26.8909 22.9166 25.9683 23.8513 24.8315 23.8513ZM22.618 10.0236H25.2798C25.6021 10.0236 25.8962 10.2337 26.0083 10.542L26.8629 13.0497C27.031 13.5541 26.6667 14.0724 26.1344 14.0724H22.618C22.1976 14.0724 21.8474 13.7222 21.8474 13.3019V10.7942C21.8474 10.3739 22.1976 10.0236 22.618 10.0236Z" fill="#d9144e"/>
               </svg>
                    </div>
                   <div className="mt-4">
                      <span className="text-sm text-gray-700 duration-500 group-hover:text-white">Total Pending Order</span>
                      <h2 className="md:text-3xl text-2xl font-medium duration-500 group-hover:text-white">3658</h2>
                    </div>
                  </div>
                </div>

                <div className="w-[80%]">
                  <div className="bg-white hover:bg-[#d9144e] py-6 px-6 shadow-[0px_36px_48_rgba(31,66,135,0.04)] rounded-lg
                  border border-black/5 group hover:text-red-700 duration-500 max-md:flex justify-between">
                     <div className="size-14 bg-white rounded-lg flex items-center justify-center border border-border">
                 <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.79749 18.4331C6.71621 20.0289 5.95627 20.8019 4.64859 23.6816C3.76653 22.8387 2.90107 22.0123 2.00953 21.1599C2.5288 20.3146 3.03267 19.4942 3.53535 18.6726C3.88035 18.1071 3.46066 17.0579 2.82282 16.899C1.88623 16.6666 0.94845 16.4426 0 16.2114C0 14.4034 0 12.6274 0 10.7827C0.921182 10.561 1.85422 10.3405 2.78489 10.1117C3.46777 9.94331 3.8922 8.90476 3.52705 8.30605C3.03385 7.49868 2.5371 6.6925 2.06051 5.91596C3.35514 4.62014 4.62251 3.35396 5.92426 2.05339C6.70673 2.53355 7.52832 3.03978 8.35347 3.54246C8.88698 3.8673 9.94331 3.44524 10.0927 2.84416C10.3262 1.90638 10.5491 0.965048 10.7839 0C12.5883 0 14.3785 0 16.2197 0C16.4366 0.906955 16.6548 1.8234 16.8777 2.73865C17.0555 3.46777 18.0763 3.89694 18.7082 3.50926C19.5144 3.01489 20.3182 2.52051 21.0829 2.05102C22.3763 3.34447 23.6318 4.59998 24.943 5.9124C24.4783 6.67235 23.9756 7.49038 23.4753 8.31079C23.1114 8.90713 23.5405 9.93976 24.2258 10.1081C25.1434 10.3334 26.0646 10.5503 27 10.7756C27 12.5954 27 14.3892 27 16.2197C26.1298 16.426 25.2667 16.6287 24.4048 16.8338C23.4658 17.0579 23.0651 18.0122 23.5654 18.8267C24.029 19.5819 24.4914 20.3383 24.9727 21.122C24.1487 22.004 23.3473 22.8612 22.4901 23.7776C21.5393 21.1741 19.8297 19.4243 17.3163 18.4592C20.5565 15.5332 19.8558 11.4668 17.659 9.41099C15.2973 7.19992 11.5995 7.26157 9.31378 9.56393C7.15368 11.7406 6.71858 15.6885 9.79749 18.4331Z" fill="#d9144e"></path>
                  <path d="M21.0695 30.3147C16.0415 30.3147 11.0847 30.3147 6.03891 30.3147C6.03891 29.9768 6.03416 29.6496 6.04009 29.3224C6.06262 28.0396 5.97963 26.7426 6.13612 25.4752C6.53566 22.2576 9.12611 19.9244 12.3722 19.8213C13.5886 19.7821 14.8417 19.7762 16.0249 20.0169C18.8643 20.5954 20.8916 23.0258 21.0552 25.9364C21.1359 27.3709 21.0695 28.8138 21.0695 30.3147Z" fill="#d9144e"></path>
                  <path d="M13.5375 17.9235C11.2244 17.9093 9.35005 16.0112 9.38325 13.7195C9.41763 11.4124 11.3169 9.55701 13.6157 9.58428C15.8849 9.61036 17.7486 11.5013 17.7403 13.7693C17.7332 16.0752 15.8481 17.9378 13.5375 17.9235Z" fill="#d9144e"></path>
                </svg>
                    </div>
                    <div className="mt-4">
                      <span className="text-sm text-gray-700 duration-500 group-hover:text-white">Total Wishlist</span>
                      <h2 className="md:text-3xl text-2xl font-medium duration-500 group-hover:text-white">31576</h2>
                    </div>
                  </div>
                </div>

              </div>

<div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 rounded-lg max-w-5xl mx-auto w-full">
      {/* Left: Chart */}
      <div className="bg-white p-4 rounded-lg flex-1 border md:w-full w-[100%]">
        <Line data={data} options={options} className="mt-8" />
      </div>

     <div className="md:w-[30%] w-[100%]">
      <div className="flex flex-col border border-border rounded-lg shadow-card bg-white p-4 pb-2 mb-2">
                    <h6 className="mb-2 font-semibold">Your Top Countries</h6>
                    <ul>
                      <li className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex">
                          <img className="w-7" src="assets/images/country/pic1.png" alt="" />
                          <span className="ml-2 text-2sm">United States</span>
                        </div>
                        <div className="font-semibold"><h6 className="amount">$130.00</h6></div>
                      </li>
                      <li className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex">
                          <img className="w-7" src="assets/images/country/pic2.png" alt="" />
                          <span className="ml-2 text-2sm">India</span>
                        </div>
                        <div className="font-semibold"><h6 className="amount">$110.00</h6></div>
                      </li>
                      <li className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex">
                          <img className="w-7" src="assets/images/country/pic3.png" alt="" />
                          <span className="ml-2 text-2sm">Africa</span>
                        </div>
                        <div className="font-semibold"><h6 className="amount">$90.00</h6></div>
                      </li>
                      <li className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex">
                          <img className="w-7" src="assets/images/country/pic4.png" alt="" />
                          <span className="ml-2 text-2sm">Canada</span>
                        </div>
                        <div className="font-semibold"><h6 className="amount">$75.00</h6></div>
                      </li>
                      <li className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex">
                          <img className="w-7" src="assets/images/country/pic5.png" alt="" />
                          <span className="ml-2 text-2sm">Brazil</span>
                        </div>
                        <div className="font-semibold"><h6 className="amount">$60.00</h6></div>
                      </li>
                      <li className="flex items-center justify-between py-3">
                        <div className="flex">
                          <img className="w-7" src="assets/images/country/pic6.png" alt="" />
                          <span className="ml-2 text-2sm">Jordan</span>
                        </div>
                        <div className="font-semibold"><h6 className="amount">$50.00</h6></div>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
                        </div> 
            
                    </section>
                </div>
          </div>
    </div>
  </div>

      );
}