import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";

// --- DATA ---
const projects = [
  {
    id: 1,
    title: "Nebula Finance",
    category: "Fintech / UI Design",
    description: "A next-generation banking dashboard focusing on data visualization and user trust. Built with real-time websocket integration.",
    tags: ["React", "D3.js", "Tailwind"],
    // Dark, moody abstract tech image
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Aero Space",
    category: "Ecommerce / 3D",
    description: "An immersive e-commerce experience for high-end furniture, utilizing WebGL to render products in the user's environment.",
    tags: ["Next.js", "Three.js", "Shopify"],
    // Sleek furniture/interior image
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Lumina Health",
    category: "App / UX Strategy",
    description: "A holistic health tracking application that uses AI to predict wellness trends based on user habits.",
    tags: ["React Native", "Python", "OpenAI"],
    // Clean, minimal abstract shape
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    link: "#"
  },
];

const Work = () => {
  return (
    <section id="work" className="relative w-full bg-[#050505] text-white py-24 md:py-32 px-6">

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* --- HEADER --- */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-indigo-500" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-400">
                Selected Work
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]">
              Featured <br />
              <span className="text-neutral-600">Projects.</span>
            </h2>
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-all"
          >
            View All Works <MoveRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile "View All" Button */}
        <div className="mt-16 md:hidden flex justify-center">
           <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest">
              View All Works
           </a>
        </div>

      </div>
    </section>
  );
};

// --- SUB COMPONENTS ---

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to image movement (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      {/* --- IMAGE SECTION (Takes up 7 cols) --- */}
      <div className={`lg:col-span-7 relative overflow-hidden rounded-2xl h-[300px] md:h-[500px] border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>

        {/* Overlay that fades on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500" />

        <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
          />
        </motion.div>
      </div>

      {/* --- INFO SECTION (Takes up 5 cols) --- */}
      <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1 lg:text-right items-end' : 'lg:order-2 lg:text-left items-start'}`}>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-semibold text-white mb-4 flex items-center gap-4 group-hover:text-indigo-300 transition-colors duration-300">
          {project.title}
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
        </h3>

        {/* Desc */}
        <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
          {project.description}
        </p>

        {/* Button */}
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors"
        >
          <span className="border-b border-white/30 pb-1 group-hover:border-indigo-400 transition-colors">See Case Study</span>
        </a>

      </div>
    </motion.div>
  );
};

export default Work;
