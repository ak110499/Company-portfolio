import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
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
      id="testimonials" 
      ref={sectionRef} 
      className="py-24 bg-slate-100 dark:bg-slate-950/50 relative scroll-mt-20 transition-colors duration-300"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Client <span className="text-cyan-600 dark:text-cyan-400">Endorsements</span>
          </h2>
          <p className={`mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Hear from the industry leaders who trust us with their most critical logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none hover:border-cyan-500/30 transition-all duration-700 hover:-translate-y-2 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="currentColor" />
                </div>
              </div>
              
              <blockquote className="flex-1 mb-6">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic">
                  "{item.quote}"
                </p>
              </blockquote>

              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white text-base">
                  {item.author}
                </div>
                <div className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                  {item.role}
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-xs uppercase tracking-wider mt-1">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;