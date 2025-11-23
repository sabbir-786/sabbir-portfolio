import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

// --- Import Logo ---
import Logo from "../assets/logo02.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden">

      {/* --- BACKGROUND FX --- */}
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">

        {/* --- 1. TOP SECTION: CONTENT --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">

          {/* Logo / Slogan */}
          <div className="space-y-4">
            {/* Logo Container */}
            <div className="w-12 h-12 overflow-hidden rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center">
               <img
                 src={Logo}
                 alt="Sabbir Ansari Logo"
                 className="w-full h-full object-cover"
               />
            </div>

            <p className="text-neutral-400 max-w-xs text-sm leading-relaxed">
              Crafting digital experiences with code and passion. Based in Bokaro Steel City, working globally.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-16 md:gap-24 flex-wrap">

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-1">Sitemap</h4>
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-1">Socials</h4>
              <SocialLink href="#" label="Twitter" icon={<Twitter size={14} />} />
              <SocialLink href="#" label="LinkedIn" icon={<Linkedin size={14} />} />
              <SocialLink href="#" label="GitHub" icon={<Github size={14} />} />
              <SocialLink href="#" label="Instagram" icon={<Instagram size={14} />} />
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>

        </div>

        {/* --- 2. MASSIVE TYPOGRAPHY --- */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <motion.h1
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[13vw] leading-[0.8] font-bold tracking-tighter text-center md:text-left text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none"
          >
            SABBIR ANSARI
          </motion.h1>
        </div>

        {/* --- 3. BOTTOM COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 uppercase tracking-wider font-medium">
          <p>&copy; {new Date().getFullYear()} Sabbir Ansari. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper Component for Social Links
const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-indigo-400 transition-colors group"
  >
    <span className="group-hover:scale-110 transition-transform">{icon}</span>
    {label}
  </a>
);

export default Footer;
