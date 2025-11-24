import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { Facebook, Twitter, Instagram, MoveRight, Linkedin, Github } from 'lucide-react';
import sabbir from "../../assets/Sabbir.jpg";

const Hero = () => {
  // --- Animation Variants ---

  // Stagger for the main 3 columns
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8, // Wait for title to finish
      },
    },
  };

  const itemFadeUp = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] // Custom "Framer" ease curve
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col items-center pt-32 pb-16 md:pt-48 md:pb-32 selection:bg-white selection:text-black">

      {/* 0. BACKGROUND FX */}
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      {/* Top Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />


      {/* 1. ANIMATED OUTLINED TITLE */}
      <div className="w-full text-center mb-16 md:mb-24 z-10 relative px-4">
        <AnimatedTitle text="SABBIR ANSARI" />
      </div>

      {/* 2. MAIN GRID LAYOUT */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center w-full max-w-7xl relative z-10"
      >

        {/* --- LEFT COLUMN: INFO --- */}
        <div className="order-2 lg:order-1 flex flex-col space-y-16 text-center lg:text-left">

          <motion.div variants={itemFadeUp} className="group cursor-default">
            <SectionLabel>Biography</SectionLabel>
            <p className="text-neutral-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-base md:text-lg transition-colors group-hover:text-neutral-200">
              I’m a passionate developer focused on building clean, user-friendly, and efficient digital experiences. I enjoy turning ideas into real products using modern tools and creative problem-solving. Every project I work on is driven by precision, innovation, and continuous learning.
              <span className="block mt-4 text-white font-medium">
                Passionate about creating digital experiences that matter.
              </span>
            </p>
          </motion.div>

          <motion.div variants={itemFadeUp} className="group cursor-default">
            <SectionLabel>Skills</SectionLabel>
            <div className="text-neutral-400 leading-relaxed max-w-md mx-auto lg:mx-0 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
               <span>Web Development</span>
               <span className="w-1 h-1 bg-neutral-600 rounded-full self-center" />
               <span>UI & UX Design</span>
               <span className="w-1 h-1 bg-neutral-600 rounded-full self-center" />
               <span>App Developer</span>

            </div>
          </motion.div>

          <motion.div variants={itemFadeUp}>
            <SectionLabel>Connect</SectionLabel>
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* UPDATED: Added href props here */}
              <SocialIcon
                href="https://github.com/sabbir-786"
                icon={<Github size={18} />}
              />
              <SocialIcon
                href="www.linkedin.com/in/sabbir-ansari-56260929a"
                icon={<Linkedin size={18} />}
              />
              <SocialIcon
                href="https://www.instagram.com/sabbir_ansari_007"
                icon={<Instagram size={18} />}
              />
            </div>
          </motion.div>

        </div>

        {/* --- CENTER COLUMN: IMAGE --- */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative">

          {/* Floating Dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className="w-1.5 h-1.5 bg-white rounded-full mb-10 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />

          {/* Profile Image with Hover Glare */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full isolate"
          >
             {/* Ring 1 */}
             <div className="absolute inset-[-2px] rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-700 ease-out" />
             {/* Ring 2 */}
             <div className="absolute inset-[-15px] rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 ease-out delay-75" />

             <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-900 border border-white/10">
                <img
                  src= {sabbir}
                  alt="SABBIR ANSARI"
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
             </div>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: STATS --- */}
        <div className="order-3 lg:order-3 flex flex-col space-y-16 text-center lg:text-right">
          {/* Pass raw strings, NumberTicker handles the parsing */}
          <StatItem label="Projects Done" value="10" variants={itemFadeUp} delay={0} />
          <StatItem label="Experience" value="1+" variants={itemFadeUp} delay={0.1} />
          <StatItem label="Clients" value="12" variants={itemFadeUp} delay={0.2} />
        </div>

      </motion.div>
    </section>
  );
};

// --- SUB COMPONENTS ---

// 1. Animated Number Ticker
const NumberTicker = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when in view

  // Split numeric part and non-numeric part (e.g. "13+" -> 13 and "+")
  const numericValue = parseInt(value.toString().replace(/\D/g, "")) || 0;
  const suffix = value.toString().replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2 // longer duration for effect
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

// 2. Animated Title Component
const AnimatedTitle = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center overflow-hidden"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="font-sans font-medium text-[13vw] md:text-[8.5vw] leading-[0.8] uppercase tracking-tighter text-transparent transition-all duration-500 cursor-default hover:text-white/10"
          style={{
             WebkitTextStroke: '1px rgba(255,255,255,0.9)',
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// 3. Section Label
const SectionLabel = ({ children }) => (
  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 opacity-80">
    <div className="w-8 h-[1px] bg-indigo-500/50 hidden lg:block" />
    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white">{children}</h3>
  </div>
);

// 4. Stat Item (Modified to use NumberTicker)
const StatItem = ({ label, value, variants }) => (
  <motion.div
    variants={variants}
    className="group relative cursor-pointer"
  >
    <div className="flex flex-col items-center lg:items-end space-y-2">
       <h3 className="text-xs font-medium tracking-widest uppercase text-neutral-500 group-hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2">
         {label}
         <MoveRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
       </h3>
       <p className="text-6xl md:text-8xl font-light text-white tracking-tighter transition-transform duration-500 group-hover:scale-[1.02] origin-right">
         {/* Use the new NumberTicker component */}
         <NumberTicker value={value} />
       </p>
    </div>
  </motion.div>
);

// 5. Social Icon - UPDATED to accept `href`
const SocialIcon = ({ icon, href }) => (
  <a
    href={href || "#"} // Use href if provided, else default to #
    target="_blank"     // Open in new tab
    rel="noopener noreferrer" // Security best practice
    className="w-12 h-12 rounded-full border border-white/10 bg-transparent flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 group"
  >
    <div className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
  </a>
);

export default Hero;
