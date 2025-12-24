
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { ESTABLISHED_YEAR } from '../constants';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (titleRef.current) {
      const { left, top, width, height } = titleRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  const gridShiftX = (mousePosition.x - 50) * 0.2;
  const gridShiftY = (mousePosition.y - 50) * 0.2;
  const gridIntensity = 0.05 + (Math.sin(scrollY * 0.01) * 0.02 + 0.02);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5 dark:opacity-10 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-slate-50/60 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950/60 transition-colors duration-300"></div>
        
        <div 
          className="absolute inset-0 bg-[size:40px_40px] transition-all duration-75 ease-out"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,${gridIntensity}) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,${gridIntensity}) 1px, transparent 1px)`,
            backgroundPosition: `${gridShiftX}px ${gridShiftY}px`,
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block animate-pulse-slow mb-6">
           <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 uppercase transition-colors">
             Established {ESTABLISHED_YEAR} • Over 2 Decades of Excellence
           </span>
        </div>

        <div className="mb-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-slate-900 dark:text-white uppercase drop-shadow-sm">
            Atul <span className="text-cyan-600 dark:text-cyan-400">Logistics</span>
          </h2>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-slate-700 dark:text-slate-300 tracking-tight mb-6 cursor-default transition-colors"
        >
          Reliable. Cost-Effective. <br />
          <span 
            className="bg-clip-text text-transparent transition-all duration-75 text-4xl md:text-6xl"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #0891b2, #2563eb, #1e40af)`,
              backgroundSize: '200% 200%',
            }}
          >
            Innovative.
          </span>
        </h1>
        
        <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 transition-colors leading-relaxed">
          India's trusted leader in logistics serving <strong className="text-slate-900 dark:text-white font-bold">Leading Global Brands</strong>. Operating a fleet of 85+ GPS-enabled vehicles with a customer-centric philosophy.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white dark:text-slate-950 bg-cyan-600 dark:bg-cyan-400 rounded-full overflow-hidden transition-all duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="relative z-10 flex items-center">
              Request Consultation
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          
          <a 
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all duration-300"
          >
            Our Mission & Vision
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
