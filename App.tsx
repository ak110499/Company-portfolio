import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Loader2 } from 'lucide-react';

// Lazy load components for performance optimization
const StatsSection = lazy(() => import('./components/StatsSection'));
const HistorySection = lazy(() => import('./components/HistorySection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ClientsSection = lazy(() => import('./components/ClientsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const ContactFooter = lazy(() => import('./components/ContactFooter'));
const ChatBot = lazy(() => import('./components/ChatBot'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
    <Loader2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400 animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-cyan-200 dark:selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
          <HistorySection />
          <ServicesSection />
          <ClientsSection />
          <TestimonialsSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20 bg-slate-50 dark:bg-slate-950"></div>}>
        <ContactFooter />
        <ChatBot />
      </Suspense>
    </div>
  );
}

export default App;