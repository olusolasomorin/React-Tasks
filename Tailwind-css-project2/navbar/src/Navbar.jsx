import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {

    const navLinks = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'About' },
        { href: '#', label: 'Services' },
        { href: '#', label: 'Contact' },
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  const nigerianGreen = '#008751';

  return (
    <div className="font-sans">
      
      <nav 
        style={{ backgroundColor: nigerianGreen }} 
        className="text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold">
                MyLogo
              </a>
            </div>


            <div className="hidden md:flex md:items-center md:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 hover:bg-opacity-75 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              
              <button className="p-1 rounded-full hover:bg-green-700 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">View cart</span>
              </button>

              <button 
                className="bg-white text-sm font-medium rounded-md px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-gray-100 transition-colors" 
                style={{ color: nigerianGreen }}
              >
                Login
              </button>

              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>

                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
          id="mobile-menu"
        >
          
          <div className="border-t border-green-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 hover:bg-opacity-75 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}