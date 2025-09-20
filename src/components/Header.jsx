import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' }
];

const PremiumHeader = () => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [isStaticVisible, setIsStaticVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Hide static header when scrolling down past 50px
        setIsStaticVisible(currentScrollY <= 50);

        // Show floating header when scrolling down past 150px
        if (currentScrollY > 150 && currentScrollY > lastScrollY.current) {
          setIsFloatingVisible(true);
        }
        // Hide floating header when scrolling up or near top
        else if (currentScrollY < lastScrollY.current - 5 || currentScrollY < 100) {
          setIsFloatingVisible(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Optimized animation variants
  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const floatingHeaderVariants = {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <>
      {/* Static Header */}
      <AnimatePresence>
        {isStaticVisible && (
          <motion.header
            variants={headerVariants}
            initial="visible"
            exit="hidden"
            className="fixed top-0 left-0 right-0 z-50"
          >
            <nav className="bg-transparent">
              <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <motion.a
                  href="#home"
                  className="flex items-center space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span className="text-white font-bold text-lg">A</span>
                    </motion.div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-200" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-xl">Axonn</span>
                    <div className="text-gray-400 text-sm">TechDigiMind</div>
                  </div>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="relative px-5 py-2 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </motion.a>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="hidden sm:flex items-center space-x-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <span>Hire Me</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 text-gray-300 hover:text-white rounded-xl hover:bg-white/10 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <X size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Menu size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating Header */}
      <AnimatePresence>
        {isFloatingVisible && (
          <motion.header
            variants={floatingHeaderVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <nav className="bg-black/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between px-8 py-4 min-w-max">

                {/* Logo */}
                <motion.a
                  href="#home"
                  className="flex items-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span className="text-white font-bold text-sm">A</span>
                    </motion.div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-200" />
                  </div>
                  <span className="text-white font-semibold text-lg hidden sm:block">Axonn</span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="relative px-4 py-2 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </motion.a>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="hidden sm:flex items-center space-x-1 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <span>Hire Me</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative top-24 mx-4 bg-black/90 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors duration-200"
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div
                  className="pt-4 border-t border-white/10 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <button
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    <span>Hire Me</span>
                    <ArrowUpRight size={16} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default PremiumHeader;