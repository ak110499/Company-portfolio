import React, { useEffect, useRef, useState } from 'react';
import { MILESTONES } from '../constants';

const HistorySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="history" 
      ref={sectionRef} 
      className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden scroll-mt-20 transition-colors duration-300"
      aria-label="Company History"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-200/20 dark:bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Evolutionary <span className="text-cyan-600 dark:text-cyan-400">Trajectory</span>
          </h2>
          <p className={`mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Tracing our path from a startup to a logistical powerhouse.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Vertical Line */}
          <div 
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transition-all duration-[1500ms] ease-in-out ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}
            aria-hidden="true"
          ></div>

          <div className="space-y-12 md:space-y-24">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group/timeline`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    {/* Wrapper for entrance animation to avoid delay conflicts with hover */}
                    <div 
                      className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div 
                          className="w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 cursor-pointer group-hover/timeline:scale-150 group-hover/timeline:bg-cyan-400 group-hover/timeline:shadow-[0_0_25px_rgba(34,211,238,1)]"
                          aria-hidden="true"
                        ></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div 
                    className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  >
                     {/* Wrapper for entrance animation */}
                    <div 
                      className={`transition-all duration-700 transform ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : isEven ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className="group relative p-6 bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group-hover/timeline:scale-[1.02] group-hover/timeline:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none overflow-hidden">
                          {/* Decorative Corner Accents */}
                          <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300 rounded-tl-lg"></div>
                          <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300 rounded-br-lg"></div>

                          {/* Background Watermark Year - Positioned based on alignment */}
                          <span 
                            className={`absolute top-[-0.5rem] font-black text-6xl text-slate-100 dark:text-slate-800/40 group-hover:text-slate-200 dark:group-hover:text-slate-700/60 transition-colors duration-300 select-none pointer-events-none ${isEven ? 'right-4' : 'left-4'}`}
                          >
                            {milestone.year}
                          </span>

                          <div className="relative z-10">
                            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm tracking-wider mb-2 block font-bold">{milestone.year}</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-100 transition-colors">{milestone.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;