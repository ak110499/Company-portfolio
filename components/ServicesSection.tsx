import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';
import { Truck, Zap, Network, Box } from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  truck: Truck,
  zap: Zap,
  network: Network,
  box: Box,
};

const ServicesSection: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-100 dark:bg-slate-900 relative overflow-hidden scroll-mt-24 transition-colors duration-300">
       {/* Decorative background element */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan-200/20 dark:bg-cyan-500/5 blur-3xl"></div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Operational <span className="text-cyan-600 dark:text-cyan-400">Capabilities</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Deploying advanced logistics infrastructure to serve sectors ranging from heavy industry to delicate electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.title}
                className={`group relative p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:scale-105 transform ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="h-24 w-24 text-cyan-600 dark:text-cyan-400" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg mb-4 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;