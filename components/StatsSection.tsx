import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';

const Counter = ({ end, duration = 2000, delay = 0 }: { end: number, duration?: number, delay?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo: 1 - pow(2, -10 * t)
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(ease * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const startAnimation = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay]);

  return <>{count}</>;
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={sectionRef} className="py-24 bg-white dark:bg-slate-950 relative scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 backdrop-blur-sm group hover:border-cyan-500/30 transition-all duration-700 hover:-translate-y-1 cursor-default transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              <div className="relative">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {stat.label}
                </dt>
                <dd className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {isVisible ? (
                      <Counter end={stat.value} duration={2500} delay={index * 100} />
                    ) : (
                      0
                    )}
                  </span>
                  {stat.suffix && (
                    <span className="ml-1 text-2xl font-medium text-cyan-600 dark:text-cyan-400">
                      {stat.suffix}
                    </span>
                  )}
                </dd>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-500 font-light">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;