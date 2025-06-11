'use client';

import { useState, FormEvent, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
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

<<<<<<< HEAD
  // Check for error messages from NextAuth
=======
  // Check for error from NextAuth
>>>>>>> 4caa4617078b9d6d3e9d9b17b2dd37dd30393525
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
<<<<<<< HEAD
        // Clear form
=======
>>>>>>> 4caa4617078b9d6d3e9d9b17b2dd37dd30393525
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
                      className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[-20%] flex items-center justify-center w-10 h-auto"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`btn py-3 px-9 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-black bg-black text-white rounded-xl duration-700 relative uppercase mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                    aria-label="Login to your account"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                      </span>
                    ) : 'Login'}
                  </button>

                  <Link 
                    href="/register" 
                    className="btn py-3 px-8 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-black hover:bg-black hover:text-white rounded-xl duration-700 relative uppercase"
                  >
                    Register
                  </Link>
                </div>

<<<<<<< HEAD
                {/* Social Login Divider */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="border-t border-gray-300 w-full"></div>
                  <span className="bg-white px-4 text-sm text-gray-500">or continue with</span>
                  <div className="border-t border-gray-300 w-full"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => signIn('google', { callbackUrl: '/account-dashboard' })}
                    className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => signIn('facebook', { callbackUrl: '/account-dashboard' })}
                    className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
=======
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => signIn('google', { callbackUrl: '/account-dashboard' })}
                      className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                        />
                      </svg>
                      Google
                    </button>

                    <button
                      onClick={() => signIn('facebook', { callbackUrl: '/account-dashboard' })}
                      className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                  </div>
>>>>>>> 4caa4617078b9d6d3e9d9b17b2dd37dd30393525
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}