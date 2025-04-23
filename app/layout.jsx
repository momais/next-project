import "./globals.css"; // Import global styles
import { Search, Heart, ShoppingCart } from "lucide-react"; // Import icons
import { X, Menu, ChevronRight, ChevronDown } from "lucide-react"; // Import these icons here
import Header from "./components/Header";
import Header1 from "./components/Header1"; // Import the new header
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* First Header (Header1) */}
        <header className="w-full bg-white z-50 block md:hidden">
          <Header1 
            MenuIcon={<Menu className="w-7 h-7 text-white" />}
            CloseIcon={<X className="w-7 h-7 text-white" />}
            ChevronRightIcon={<ChevronRight className="w-5 h-5 text-white" />}
            ChevronDownIcon={<ChevronDown className="w-5 h-5 text-white" />}
          />
        </header>

        {/* Second Header (Header) - Fixed at bottom on small screens, static on large screens */}
        <header className="fixed bottom-0 left-0 w-full bg-white lg:static z-50 border">
          <Header
            searchIcon={<Search className="w-5 h-5 md:ml-0 ml-28 cursor-pointer mt-1.5" />}
            heartIcon={<Heart className="w-5 h-5 cursor-pointer mt-1.5" />}
            cartIcon={<ShoppingCart className="w-5 h-5 cursor-pointer mt-1" />}
          />
        </header>

        <main className="container mx-auto p-4 pb-[60px] lg:pb-0">{children}</main>

        <Footer />
      </body>
    </html>
  );
}