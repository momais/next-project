'use client';

import { useState, FormEvent, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();

  // Redirect if already logged in
  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      router.replace('/account-dashboard');
    }
  }, [status, session, router]);

  // Check for error messages from NextAuth
  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      setError('Invalid email or password');
    }
  }, [searchParams]);

  const validateForm = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (!result) {
        throw new Error('Authentication failed');
      }

      if (result.error) {
        setError('Invalid email or password');
        setPassword('');
        return;
      }

      if (result.ok) {
        setSuccessMessage('Login successful! Redirecting...');
        // Clear form
        setEmail('');
        setPassword('');
        // Redirect after a short delay
        setTimeout(() => {
          router.push('/account-dashboard');
        }, 1000);
      }

    } catch (err: unknown) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
      setPassword('');
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
                  <li className="mr-[3px] inline-block text-xs font-base">My Account</li>
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
                  <li className="mr-[3px] inline-block text-base font-base before:pr-2">Login</li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-center relative z-10 m-auto mt-10 mb-4 max-3xl:mt-0 registration-media">
              <img src="assets/images/registration/pic3.png" className="w-[300px] sm:w-[350px] md:w-[410px] mx-auto" width={410} height={410} alt="Account" />
            </div>

            <div className="absolute bottom-8 left-[14%] w-[51%] h-[65%] bg-white z-0 rounded-t-full"></div>
          </div>

          {/* Right Side - Login Form */}
          <div className="col-xxl-6 lg:w-1/2 w-full flex flex-col end-side-content p-4">
            <div className="p-6 max-w-[522px] m-auto rounded-3xl border border-black w-full sm:p-5 lg:p-20 max-xl:p-7.5 max-sm:!p-3.6">
              <h2 className="mb-2 text-center text-3xl font-bold">Login Now</h2>
              <p className="text-center mb-9 text-base text-gray-800">Welcome please login to your account</p>
              
              {successMessage && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                  {successMessage}
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} id="login-form">
                <div className="mb-6">
                  <label htmlFor="login-email" className="block font-medium mb-2">Email Address</label>
                  <input
                    id="login-email"
                    name="login-email"
                    type="email"
                    placeholder="Email Address" 
                    className="w-full py-4 px-5 h-13.5 outline-none rounded-xl border border-black bg-white placeholder-black duration-500 focus:bg-light"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                    disabled={isLoading}
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="login-password" className="block font-medium mb-2">Password</label>
                  <div className="relative z-1">
                    <input
                      id="login-password"
                      name="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full py-4 px-5 h-13.5 outline-none rounded-xl border border-black placeholder-black bg-white duration-500 focus:bg-light dz-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                      autoComplete="current-password"
                      aria-required="true"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-5 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 