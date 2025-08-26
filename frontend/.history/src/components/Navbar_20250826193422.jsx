import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  X, 
  Menu, 
  Sun, 
  Moon 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll event for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Submit Complaint', href: '/submit' },
    { name: 'Track Complaint', href: '/track' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
            : 'bg-gradient-to-r from-blue-900 to-emerald-600 py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Droplets className="h-8 w-8 text-emerald-400" />
              <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900 dark:text-white' : 'text-white'}`}>
                Water Complaint System
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400' 
                      : 'text-white hover:text-emerald-200'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </motion.span>
                </NavLink>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' 
                    : 'bg-white/20 text-white'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Dark mode toggle for mobile */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' 
                    : 'bg-white/20 text-white'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300' 
                    : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl md:hidden z-50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-8 w-8 text-emerald-500" />
                      <span className="text-xl font-bold text-blue-900 dark:text-white">
                        Water Complaint System
                      </span>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-gray-500 dark:text-gray-400"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="flex flex-col space-y-2 px-4">
                      {navItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Add spacing for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
