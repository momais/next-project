import "./globals.css"; 
import { Search, Heart, ShoppingCart } from "lucide-react"; 
import { X, Menu, ChevronRight, ChevronDown } from "lucide-react";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";

export const metadata = {
  title: "Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* Header1 */}
        <header className="w-full bg-white z-50 block md:hidden">
          <Header1 
            MenuIcon={<Menu className="w-7 h-7 text-white" />}
            CloseIcon={<X className="w-7 h-7 text-white" />}
            ChevronRightIcon={<ChevronRight className="w-5 h-5 text-white" />}
            ChevronDownIcon={<ChevronDown className="w-5 h-5 text-white" />}
          />
        </header>

        {/* Second Header (Header) */}
        <header className="fixed bottom-0 left-0 w-full bg-white lg:static z-50 border">
          <Header
            searchIcon={<Search className="w-5 h-5 md:ml-0 ml-28 cursor-pointer mt-1.5" />}
            heartIcon={<Heart className="w-5 h-5 cursor-pointer mt-1.5" />}
            cartIcon={<ShoppingCart className="w-5 h-5 cursor-pointer mt-1" />}
          />
        </header>

      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}