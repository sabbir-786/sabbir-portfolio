import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, MapPin, Clock, Send } from "lucide-react";

const GetInTouch = () => {
  const [activeSubject, setActiveSubject] = useState("Web Design");
  const [isCopied, setIsCopied] = useState(false);
  const [time, setTime] = useState("");

  // --- Live Clock Logic ---
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata" // Change to your timezone
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // --- Copy Email Logic ---
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@arthurjackson.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] text-white py-24 md:py-32 px-6 overflow-hidden">

      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      {/* Bottom Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* --- LEFT COLUMN: INFO --- */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-[1px] bg-indigo-500" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-400">
                  Contact
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8"
              >
                Let's work <br />
                <span className="text-neutral-600">together.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-neutral-400 max-w-md leading-relaxed mb-12"
              >
                Have a project in mind? I'm currently available for freelance work and open collaborations.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Email Copy Component */}
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-4 text-left hover:opacity-80 transition-opacity"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${isCopied ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-white/5 border-white/10 text-white'}`}>
                  {isCopied ? <Check size={20} /> : <Copy size={20} />}
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Email Me</span>
                  <span className="text-xl md:text-2xl text-white font-medium tracking-tight">sabbir.ansari3574@gmail.com</span>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-indigo-400 mt-1" />
                  <div>
                     <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Location</span>
                     <span className="text-white">Bokaro, Jharkhand, India</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-indigo-400 mt-1" />
                  <div>
                     <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Local Time</span>
                     <span className="text-white tabular-nums">{time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: FORM --- */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">

              {/* Subject Selection */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">I'm interested in...</label>
                <div className="flex flex-wrap gap-3">
                  {["Web Design", "Development", "Brand Strategy", "Other"].map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => setActiveSubject(subject)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                        activeSubject === subject
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <InputGroup label="Your Name" placeholder="John Doe" type="text" />
                <InputGroup label="Your Email" placeholder="john@example.com" type="email" />
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows="4"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full relative overflow-hidden rounded-xl bg-white text-black py-4 font-bold text-lg transition-transform active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- SUB COMPONENTS ---

const InputGroup = ({ label, placeholder, type }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors"
    />
  </div>
);

export default GetInTouch;
