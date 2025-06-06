'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return false;
    }

    if (formData.username.length < 3) {
      setError('Username must be at least 3 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Check if password is at least 6 characters
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Show success message
      setSuccessMessage('Registration successful! Redirecting to login...');
      
      // Clear form
      setFormData({
        username: '',
        email: '',
        password: ''
      });
      
      // Wait for 1.5 seconds to show the success message
      setTimeout(() => {
        router.push('/login');
      }, 1500);

    } catch (err: unknown) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Error registering. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content overflow-x-hidden">
      <section className="px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* small Left Side */}
          <div className="lg:hidden w-full relative bg-[#FFEDD4] start-side-content p-4 flex flex-col items-start">
            <div className="dz-bnr-inr-entry text-center mt-5">
              <h1 className="text-xl font-bold">My Account</h1>
              <nav className="mb-4">
                <ul className="text-left">
                  <li className="mr-[3px] inline-block text-xs font-base">
                    <Link href="/">Home</Link>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="inline-block">
                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                  </svg>
                  <li className="mr-[3px] inline-block text-xs font-base">Register</li>
                </ul>
              </nav>
            </div>

            <div className="relative z-10 flex justify-between w-full items-center">
              <div className="text-left w-1/2"></div>
              <div className="flex justify-end -mt-40">
                <img src="assets/images/registration/pic3.png" className="w-[120px] mt-16" alt="Account" />
              </div>
            </div>

            <div className="absolute right-[2%] w-[30%] h-[80%] bg-white z-0 rounded-t-full"></div>
          </div>

          {/* large left */}
          <div className="col-xxl-6 lg:w-1/2 hidden md:block w-full relative bg-[#FFEDD4] start-side-content p-4 flex flex-col items-center lg:items-start">
            <div className="dz-bnr-inr-entry">
              <h1 className="xl:text-4.5xl md:text-4xl font-bold sm:text-3xl text-2xl mb-2">My Account</h1>
              <nav className="mb-4">
                <ul>
                  <li className="mr-[3px] inline-block text-base font-base">
                    <Link href="/">Home</Link>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="inline-block">
                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                  </svg>
                  <li className="mr-[3px] inline-block text-base font-base before:pr-2">Register</li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-center relative z-10 m-auto mt-10 mb-4 max-3xl:mt-0 registration-media">
              <img src="assets/images/registration/pic3.png" className="w-[300px] sm:w-[350px] md:w-[410px] mx-auto" width={410} height={410} alt="Account" />
            </div>

            <div className="absolute bottom-8 left-[14%] w-[51%] h-[65%] bg-white z-0 rounded-t-full"></div>
          </div>

          {/* Right Side - Register Form */}
          <div className="col-xxl-6 lg:w-1/2 w-full flex flex-col end-side-content p-4">
            <div className="p-6 max-w-[522px] m-auto rounded-3xl border border-black w-full sm:p-5 lg:p-20 max-xl:p-7.5 max-sm:!p-3.6">
              <h2 className="mb-2 text-center text-3xl font-bold">Register Now</h2>
              <p className="text-center mb-9 text-base text-gray-800">Create your account</p>
              
              {error && (
                <div className={`mb-4 p-3 ${error.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-lg text-sm`}>
                  {error}
                </div>
              )}

              {successMessage && (
                <div className={`mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm`}>
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleRegister}>
                <div className="mb-6">
                  <label className="block font-medium mb-2">Username</label>
                  <input 
                    type="text" 
                    name="username"
                    placeholder="Username" 
                    className="w-full py-4 px-5 h-13.5 outline-none rounded-xl border border-black bg-white placeholder-black duration-500 focus:bg-light"
                    value={formData.username} 
                    onChange={handleChange}
                    required 
                    disabled={isLoading}
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="w-full py-4 px-5 h-13.5 outline-none rounded-xl border border-black bg-white placeholder-black duration-500 focus:bg-light"
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                    disabled={isLoading}
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-medium mb-2">Password</label>
                  <div className="relative z-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="w-full py-4 px-5 h-13.5 outline-none rounded-xl border border-black placeholder-black bg-white duration-500 focus:bg-light dz-password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <div
                      className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[-20%] flex items-center justify-center w-10 h-auto"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className={`btn py-3 px-9 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-black bg-black text-white rounded-xl duration-700 relative uppercase mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Registering...
                      </span>
                    ) : 'Register'}
                  </button>

                  <Link 
                    href="/login" 
                    className="btn py-3 px-8 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-black hover:bg-black hover:text-white rounded-xl duration-700 relative uppercase"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}