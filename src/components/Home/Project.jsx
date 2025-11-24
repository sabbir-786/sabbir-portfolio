import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, MoveRight, Github, ArrowRightCircle } from "lucide-react"; // Added Github Icon

// --- ASSETS ---
import expense from "../../assets/Expense.png";
import shopkart from "../../assets/Shopkart.png";
import company from "../../assets/Company.png";

// --- DATA ---
const projects = [
  {
    id: 1,
    title: "Expense Tracker App",
    category: "React Native Expo App",
    description: "A cross-platform mobile app to track income and expenses with real-time syncing. Features Firebase Auth for sessions, Realtime Database for data storage, and Cloudinary for receipt uploads.",
    tags: ["React Native", "TypeScript", "Firebase"],
    image: expense,
    // PASTE YOUR GITHUB LINK BELOW
    link: "https://github.com/sabbir-786/expense-tracker-app.git"
  },
  {
    id: 2,
    title: "Shopkart",
    category: "eCommerce App",
    description: "A full-stack e-commerce platform with secure user/admin login and order management. Utilizes JWT for auth, Redux Toolkit for global state, and Shadcn UI for a modern interface.",
    tags: ["MERN", "Redux Toolkit", "Shadcn UI"],
    image: shopkart,
    // PASTE YOUR GITHUB LINK BELOW
    link: "https://github.com/yourusername/shopkart"
  },
  {
    id: 3,
    title: "Company Management Portal",
    category: "Admin Dashboard",
    description: "A responsive admin dashboard built with React and PHP. Features secure REST APIs for managing employees, services, and content, with strictly implemented role-based access control.",
    tags: ["React", "PHP", "REST API"],
    image: company,
    // PASTE YOUR GITHUB LINK BELOW
    link: "https://www.techdigimind.com/"
  },
];

const Project = () => {
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
            href="https://github.com/sabbir-786" // Link to your main GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-all"
          >
            View Github Profile <MoveRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- SUB COMPONENTS ---

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      {/* --- IMAGE SECTION --- */}
      <div className={`lg:col-span-7 relative overflow-hidden rounded-2xl h-auto border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
        <div className="w-full relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain block filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* --- INFO SECTION --- */}
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
        </h3>

        {/* Desc */}
        <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
          {project.description}
        </p>

        {/* Button - Updated to GitHub Style */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors"
        >
          <ArrowRightCircle className="w-5 h-5" />
          <span className="border-b border-white/30 pb-1 group-hover:border-indigo-400 transition-colors">
            View
          </span>
        </a>

      </div>
    </motion.div>
  );
};

export default Project;
