import React from 'react';
import { CLIENTS } from '../constants';

const ClientsSection: React.FC = () => {
  return (
    <section 
      id="clients" 
      className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900 scroll-mt-24 overflow-hidden transition-colors duration-300"
      aria-label="Trusted Clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Trusted By Industry Leaders</p>
        </div>
      </div>
        
      <div className="relative w-full overflow-hidden py-12">
        {/* Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors duration-300" aria-hidden="true"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors duration-300" aria-hidden="true"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* Original List */}
          {CLIENTS.map((client, index) => (
            <div 
              key={`client-1-${index}`} 
              className="group flex flex-col items-center justify-center mx-6 md:mx-12 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <div className="h-16 flex items-center justify-center px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/30 group-hover:shadow-lg dark:group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="text-2xl md:text-3xl font-black text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              </div>
              <span className="mt-2 text-xs text-slate-500 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-500/70 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                {client.industry}
              </span>
            </div>
          ))}

          {/* Duplicate List 1 */}
          <div className="flex" aria-hidden="true">
            {CLIENTS.map((client, index) => (
              <div 
                key={`client-2-${index}`} 
                className="group flex flex-col items-center justify-center mx-6 md:mx-12 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <div className="h-16 flex items-center justify-center px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/30 group-hover:shadow-lg dark:group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="text-2xl md:text-3xl font-black text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
                <span className="mt-2 text-xs text-slate-500 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-500/70 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>

           {/* Duplicate List 2 */}
           <div className="flex" aria-hidden="true">
            {CLIENTS.map((client, index) => (
              <div 
                key={`client-3-${index}`} 
                className="group flex flex-col items-center justify-center mx-6 md:mx-12 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <div className="h-16 flex items-center justify-center px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/30 group-hover:shadow-lg dark:group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="text-2xl md:text-3xl font-black text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
                <span className="mt-2 text-xs text-slate-500 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-500/70 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;