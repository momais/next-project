"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BecomeVendor() {
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch('/api/vendor/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.brandName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          usertype: 2 // Vendor type
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Redirect to vendor dashboard or login page
      router.push('/login?message=Registration successful! Please login.');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="page-content">
     
<div className="relative w-full h-auto min-h-[330px] overflow-hidden -left-[80px] ">
  {/* Background Image with Red Overlay */}
  <div className="absolute top-0 left-0 w-[100vw] h-full bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/assets/bgbanner.jpg')" }} >
    <div className="absolute inset-0 bg-red-800 opacity-70 z-10"></div>
  </div>

  <div className="relative z-20 flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-16 max-w-[1400px] mx-auto">
    <div className="text-white md:ml-4 ml-0 mt-16 md:mt-10 text-left w-full max-w-2xl">
      <h2 className="text-3xl md:text-6xl font-bold">Become a Partner</h2>
      <p className="mt-4 text-base md:w-[85%] w-[90%]">
        ENJOY offers some amazing BOGO deals for you. Now get two for the price of one and enjoy!
      </p>
    </div>

    <div className="bg-white p-3 md:mr-[10%] -mt-3 hidden md:block">
      <img src="/assets/offer.png" alt="Offer" className="w-[150px] h-[230px]" />
    </div>
  </div>
</div>

    <div className="flex items-center justify-center bg-white mt-[10%]">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-start gap-36">
        
        {/* Left Side - Form */}
        <div className="w-full lg:w-[50%] bg-white rounded-md mb-6 md:-ml-14 -ml-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 relative w-fit mx-auto md:mx-0 text-center md:text-left">
          Vendor Details
          <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-0 md:top-14
          top-12 w-[150%] md:w-[110%] h-[3px] bg-red-400"></div>
          </h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-9">
            <input 
              type="text" 
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Brand Name" 
              className="md:w-[85%] w-[100%] p-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              className="md:w-[85%] w-[100%] p-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              required 
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone" 
              className="md:w-[85%] w-[100%] p-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              required 
            />
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password" 
              className="md:w-[85%] w-[100%] p-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              required 
              minLength={6}
            />

            <button 
              type="submit" 
              disabled={loading}
              className={`md:w-[85%] w-[100%] bg-red-500 text-white py-3 rounded-md font-semibold ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-600'}`}
            >
              {loading ? 'Processing...' : 'Get Started'}
            </button>
          </form>

          <p className="text-sm md:text-base text-center md:text-left mt-4 w-[80%] md:w-[85%]">
            By registering, you consent to our{' '}
            <Link href="/privacy-policy" className="text-blue-700 hover:underline">Privacy Policy</Link> and{' '}
            <Link href="/terms" className="text-blue-700 hover:underline">End User License Agreement</Link>.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[38%] -mt-28 lg:-mt-0">
          <img src="/assets/men.png" alt="Vendor" className="lg:w-full w-[120%] h-auto rounded-md" />
        </div>
      </div>
    </div>

<div className="px-6 py-12 md:-ml-8 -ml-0">

  <h2 className="text-2xl md:text-4xl font-semibold mb-2 relative w-fit mx-auto md:mx-0 text-center md:text-left">
  How we can help our partners</h2>
<div className="w-60 h-[3px] bg-red-500 mt-4 mb-6 mx-auto md:mx-0"></div>
  <p className="font-base md:text-left text-center">The Things We've Made Happen That <br /> Work A Little Too Well</p>

  <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:gap-12 gap-3 mt-8">
    <div className="flex space-x-3 justify-center lg:justify-start bg-red-100 lg:bg-transparent p-6 md:p-0">
      <img src="/assets/1.png" alt="Higher Footfall" className="md:w-6 w-6 md:h-6 h-5" />
      <div className="text-md">
        <h3 className="font-semibold">Higher footfall</h3>
        <p className="font-base -ml-8 mt-3">Boost your foot traffic <br /> with our attractive deals</p>
      </div>
    </div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/2.png" alt="Brand Visibility" className="w-6 h-6" />
      <h3 className="font-semibold">Brand Visibility</h3>
    </div>
    <p className="font-base mt-2">
      Project Your Identity to the Online World through Digital Advertising
    </p>
  </div>
</div>

    <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/3.png" alt="Brand Visibility" className="w-6 h-6" />
  <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
    Gain Deeper Insight into Your Customers with Data Analytics
    </p>
  </div>
</div>

  <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/4.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Strategic Marketing</h3>
    </div>
    <p className="font-base mt-2">
   Deliver Timely, Relevant Offers for Maximum Impact and Results</p>
  </div>
</div>


 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Gain Deeper Insight into Your Customers with Data Analytics</p>
  </div>
</div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Leverage the Power of Multiple Platforms for Greater Impact</p>
  </div>
</div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Leverage the Power of Multiple Platforms for Greater Impact</p>
  </div>
</div>

 <div className="flex items-start text-center md:text-left bg-red-100 lg:bg-transparent p-6 md:p-0">
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-2">
      <img src="/assets/5.png" alt="Brand Visibility" className="w-6 h-6" />
        <h3 className="font-semibold">Customer Intelligence</h3>
    </div>
    <p className="font-base mt-2">
   Leverage the Power of Multiple Platforms for Greater Impact</p>
  </div>
</div>

  </div>
</div>

    </div>
  );
} 