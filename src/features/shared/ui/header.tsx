import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['HOME', 'DINING', 'ROOMS', 'EVENTS', 'ABOUT US', 'CONTACT', 'BOOKINGS'];
  const getPath = (item: string) => item === 'HOME' ? '/' : item === 'CONTACT' ? '/contact' : item === 'DINING' ? '/dishes' : item === 'ROOMS' ? '/rooms' : item === 'EVENTS' ? '/events' : item === 'ABOUT US' ? '/about-us' : item === 'BOOKINGS' ? '/bookings' : '#';

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white py-4 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <Link to="/" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold z-50" onClick={closeMenu}>LOGO</Link>
        <Link to="/" className="font-bold text-lg tracking-widest text-gray-900 z-50" onClick={closeMenu}>AH HOTEL</Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => {
          const path = getPath(item);
          return (
            <NavLink 
              key={item} 
              to={path} 
              className={({ isActive }) => 
                `text-[11px] font-bold tracking-widest uppercase transition-all pb-1 ${
                  isActive && path !== '#'
                    ? 'text-[#0021B3] border-b-[1.5px] border-[#0021B3]' 
                    : 'text-gray-500 hover:text-[#0021B3]'
                }`
              }
            >
              {item}
            </NavLink>
          );
        })}
      </nav>
      
      <div className="hidden lg:block">
        <NavLink 
          to="/check-booking" 
          className={({ isActive }) => 
            `text-[10px] font-bold tracking-widest uppercase pb-0.5 transition-all border-b ${
              isActive 
                ? 'text-[#0021B3] border-[#0021B3] border-b-2' 
                : 'text-gray-900 hover:text-[#0021B3] border-gray-900 hover:border-[#0021B3]'
            }`
          }
        >
          Check Booking
        </NavLink>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden z-50 p-2 text-gray-900 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 lg:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-8 items-center">
            {navItems.map((item) => {
              const path = getPath(item);
              return (
                <NavLink 
                  key={item} 
                  to={path} 
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `text-xl font-bold tracking-widest uppercase transition-all ${
                      isActive && path !== '#'
                        ? 'text-[#0021B3]' 
                        : 'text-gray-900 hover:text-[#0021B3]'
                    }`
                  }
                >
                  {item}
                </NavLink>
              );
            })}
            <div className="mt-8 border-t border-gray-200 w-16 mx-auto pt-8 flex justify-center"></div>
            <NavLink 
              to="/check-booking" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-sm font-bold tracking-widest uppercase pb-1 transition-all border-b-2 ${
                  isActive 
                    ? 'text-[#0021B3] border-[#0021B3]' 
                    : 'text-gray-900 hover:text-[#0021B3] border-gray-900 hover:border-[#0021B3]'
                }`
              }
            >
              Check Booking
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
