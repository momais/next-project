"use client";

const Footer = () => {
  return (
    <footer className="border-t border-black bg-white">
      <div className="pt-20 pb-16 max-lg:pt-14 max-lg:pb-10 max-md:pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">

            {/* Left Section - Logo & Contact */}
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 mb-10">
              <a href="#">
                <img src="/assets/images/logo.svg" alt="Pixio" className="max-w-[180px] mb-6" />
              </a>
              <ul className="text-base space-y-2 mb-6">
                <li>Address: 451 Wall Street, UK, London</li>
                <li>E-mail: example@info.com</li>
                <li>Phone: (064) 332-1233</li>
              </ul>
              <h6 className="font-semibold mb-2">Subscribe To Our Newsletter</h6>
              <form action="#" method="post">
                <div className="relative">
                  <input type="email" className="w-full h-12 bg-yellow-200 placeholder-black px-4 rounded-lg border outline-none"
                    placeholder="Your Email Address" required />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                   </svg>                  
                 </button>
                </div>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 mb-10">
              <h5 className="text-lg font-semibold mb-5">Recent Posts</h5>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <img src="/assets/images/shop/product/small/1.png" alt="Cozy Knit Cardigan Sweater" className="w-16 h-16 rounded-lg mr-4" />
                  <div>
                    <h6 className="font-semibold">Cozy Knit Cardigan Sweater</h6>
                    <span className="text-sm">July 23, 2024</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <img src="/assets/images/shop/product/small/2.png" alt="Sophisticated Swagger Suit" className="w-16 h-16 rounded-lg mr-4" />
                  <div>
                    <h6 className="font-semibold">Sophisticated Swagger Suit</h6>
                    <span className="text-sm">July 23, 2024</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <img src="/assets/images/shop/product/small/3.png" alt="Athletic Mesh Sports Leggings" className="w-16 h-16 rounded-lg mr-4" />
                  <div>
                    <h6 className="font-semibold">Athletic Mesh Sports Leggings</h6>
                    <span className="text-sm">July 23, 2024</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Stores */}
            <div className="w-1/2 sm:w-1/3 xl:w-1/6 px-4 mb-10">
              <h5 className="text-lg font-semibold mb-5">Our Stores</h5>
              <ul className="space-y-2 text-base">
                <li><a href="#" className="hover:text-yellow-600">New York</a></li>
                <li><a href="#" className="hover:text-yellow-600">London SF</a></li>
                <li><a href="#" className="hover:text-yellow-600">Edinburgh</a></li>
                <li><a href="#" className="hover:text-yellow-600">Los Angeles</a></li>
                <li><a href="#" className="hover:text-yellow-600">Chicago</a></li>
                <li><a href="#" className="hover:text-yellow-600">Las Vegas</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="w-1/2 sm:w-1/3 xl:w-1/6 px-4 mb-10">
              <h5 className="text-lg font-semibold mb-5">Useful Links</h5>
              <ul className="space-y-2 text-base">
                <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-600">Returns</a></li>
                <li><a href="#" className="hover:text-yellow-600">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-yellow-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-600">Latest News</a></li>
                <li><a href="#" className="hover:text-yellow-600">Our Sitemap</a></li>
              </ul>
            </div>

            {/* Footer Menu */}
            <div className="w-full sm:w-1/3 xl:w-1/6 px-4 mb-10">
              <h5 className="text-lg font-semibold mb-5">Footer Menu</h5>
              <ul className="space-y-2 text-base">
                <li><a href="#" className="hover:text-yellow-600">Instagram Profile</a></li>
                <li><a href="#" className="hover:text-yellow-600">New Collection</a></li>
                <li><a href="#" className="hover:text-yellow-600">Woman Dress</a></li>
                <li><a href="#" className="hover:text-yellow-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-600">Latest News</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black/10 py-6 text-base font-semibold">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <p className="w-full lg:w-1/2 text-center lg:text-left">
            © 2025 <a href="#" className="text-red-600 font-bold">DexignZone</a> 
            Theme. All Rights Reserved.
          </p>
          <div className="w-full lg:w-1/2 text-center lg:text-right mt-4 lg:mt-0">
            <span className="mr-3">We Accept:</span>
            <img src="/assets/images/footer-img.png" alt="Payment Methods" className="inline-block" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;