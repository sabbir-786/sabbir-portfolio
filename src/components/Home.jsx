import React, { useEffect, useState } from 'react';
import Hero from './Home/Hero'
import About from './Home/About'
import Project from './Home/Project'
import Contact from './Home/Contact'

const Home = () => {
    const [visibleSections, setVisibleSections] = useState(new Set(['home']));

    useEffect(() => {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Enhanced smooth scrolling with custom animation
        const handleSmoothScroll = (e) => {
            const target = e.target.closest('a');
            if (!target || !target.hash) return;

            e.preventDefault();
            const targetSection = document.querySelector(target.hash);

            if (targetSection) {
                // Calculate offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => new Set([...prev, entry.target.id]));
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        // Add event listener to navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Cleanup
        return () => {
            observer.disconnect();
            navLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    // Base animation classes
    const getBaseClasses = (sectionId) => {
        const baseAnimation = "transition-all duration-1000 ease-out";
        const visibleClasses = "opacity-100 translate-y-0";
        const hiddenClasses = "opacity-0 translate-y-8";

        return `${baseAnimation} ${visibleSections.has(sectionId) ? visibleClasses : hiddenClasses}`;
    };

    return (
        <div className="scroll-smooth">
            {/* Home/Hero Section - Dark gradient with centered content */}
            <section
                id="home"
                className={`{getBaseClasses('home')`}
            >
                <Hero />
            </section>

            {/* About Section - Gray gradient with padding */}
            <section
                id="about"
                className={`{getBaseClasses('about')}`}
            >
                <About />
            </section>


            {/* Projects Section - Dark with side gradients */}
            <section
                id="projects"
                className={`{getBaseClasses('projects')`}

            >
                <Project />
            </section>

            {/* Contact Section - Yellow accent bottom gradient */}
            <section
                id="contact"
                className={`{getBaseClasses('contact')`}

            >
                <Contact />
            </section>


        </div>

    )
}

export default Home
