import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react"; // Removed Code2
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Import Logo ---
// Note: Adjust the path below ("../image/logo.png") based on your folder structure.
// If your component is in 'src/components', this path assumes the image is in 'src/image'.
import Logo from "../assets/logo02.jpg";

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* We use a fixed container centered horizontally.
        The width changes based on scroll state.
      */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <motion.nav
          layout
          className={cn(
            "relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isScrolled
              ? "w-[90%] sm:w-[600px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.24)] py-3 px-3 sm:px-4"
              : "w-full max-w-7xl bg-transparent border-transparent py-2 px-6"
          )}
        >
          {/* --- Logo --- */}
          <div className="flex items-center gap-3">
            <a href="#home" className="group relative flex items-center gap-2">
              <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-neutral-900 border border-white/10 group-hover:border-indigo-500/50 transition-colors">

                {/* IMAGE LOGO */}
                <img
                  src={Logo}
                  alt="Sabbir Ansari Logo"
                  className="w-full h-full object-cover"
                />

                {/* Logo Glow Overlay */}
                <div className="absolute inset-0 bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <AnimatePresence>
                {(!isScrolled || isMobileMenuOpen) && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-bold text-lg text-white tracking-tight overflow-hidden whitespace-nowrap hidden sm:block"
                  >
                    Sabbir Ansari
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </div>

          {/* --- Desktop Navigation (The Cool Part) --- */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Subtle Glow beneath active/hovered item */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-500 blur-md"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* --- Right Actions --- */}
          <div className="flex items-center gap-3">
            {/* Shimmer Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden group",
                isScrolled && "px-4 py-2" // Smaller when scrolled
              )}
            >
              <span className="relative z-10 flex items-center gap-1">
                Let's Talk
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute top-0 -left-[100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer" />
            </motion.button>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 text-white bg-white/5 rounded-full backdrop-blur-md md:hidden border border-white/5"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* --- Full Screen Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-xl md:hidden"
          >
            {/* Header inside mobile menu */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-xl font-bold text-white">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links Container */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 hover:to-indigo-400 transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-8 border-t border-white/10">
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full py-4 text-black bg-white rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind Config for Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </>
  );
};

export default Header;
