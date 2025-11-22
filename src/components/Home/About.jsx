import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Globe, Layout, Database, Cpu, Layers } from "lucide-react";

// --- DATA ---
const services = [
  {
    icon: <Palette size={24} />,
    title: "Design",
    desc: "Crafting intuitive, user-centric interfaces that blend aesthetics with functionality to drive engagement.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Engineering",
    desc: "Building robust, scalable web applications using modern frameworks and clean, maintainable code.",
  },
  {
    icon: <Zap size={24} />,
    title: "Strategy",
    desc: "Bridging the gap between business goals and technical execution to deliver impactful digital solutions.",
  },
];

const techStack = [
  { name: "React", icon: <Globe size={20} /> },
  { name: "Next.js", icon: <Layout size={20} /> },
  { name: "TypeScript", icon: <Code2 size={20} /> },
  { name: "Node.js", icon: <Database size={20} /> },
  { name: "Tailwind", icon: <Palette size={20} /> },
  { name: "Framer", icon: <Layers size={20} /> },
  { name: "AWS", icon: <Cpu size={20} /> },
  { name: "GraphQL", icon: <Zap size={20} /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-indigo-500" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-400">
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]"
          >
            I create digital experiences <br className="hidden md:block" />
            <span className="text-neutral-500">that merge art with code.</span>
          </motion.h2>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

          {/* Left: Narrative */}
          <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My journey started with a curiosity for how things work on the web. Over the last decade, that curiosity evolved into a career building complex applications for startups and established brands alike.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I believe that great software is not just about clean code—it's about empathy for the user. Every pixel, animation, and interaction should serve a purpose.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <a href="#contact" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 hover:border-white hover:text-white transition-all text-white">
                <span>Read more about my process</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Tech Stack Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest mb-8 text-white/70"
            >
              Current Stack
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <StackItem key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* --- SERVICES CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-16 md:pt-24">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- SUB COMPONENTS ---

const StackItem = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
    className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-white/[0.02] cursor-default group transition-colors"
  >
    <div className="text-neutral-500 group-hover:text-indigo-400 transition-colors mb-3">
      {tech.icon}
    </div>
    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
      {tech.name}
    </span>
  </motion.div>
);

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-colors"
  >
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-500">
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
      {service.title}
    </h3>
    <p className="text-neutral-500 leading-relaxed text-sm">
      {service.desc}
    </p>
  </motion.div>
);

export default About;
