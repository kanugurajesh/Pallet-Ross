import React, { useState, useEffect } from 'react';
import { NavItem } from '../../types';
import { Palette } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navItems: NavItem[] = [
  { label: 'Get Started', href: '#get-started' },
  { label: 'Create strategy', href: '#strategy' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'Solution', href: '#solution' },
  { label: 'E-Commerce', href: '#e-commerce' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Palette className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold whitespace-nowrap">Pallet Ross</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="nav-link text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <button className="hidden lg:block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap ml-6">
              Sign In
            </button>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
              navItems={navItems}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;