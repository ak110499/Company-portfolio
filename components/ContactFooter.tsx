
import React, { useState, useEffect, useRef } from 'react';
import { Truck, MapPin, Phone, Mail, Loader2, CheckCircle, FileText } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
  }

  return (
    <footer id="contact" ref={footerRef} className="bg-slate-50 dark:bg-slate-950 pt-24 pb-12 border-t border-slate-200 dark:border-slate-900 scroll-mt-20 transition-colors duration-300">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Truck className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                ATUL<span className="text-cyan-600 dark:text-cyan-400">LOGISTICS</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              Established in 2000. Forging lasting partnerships with a self-owned fleet of 75 GPS-enabled vehicles and two decades of logistical expertise.
            </p>
            
            <address className="space-y-6 not-italic">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                  <MapPin className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Registered Office</h4>
                  <p className="text-slate-500 text-sm mt-1">Shop No. 4, Killa No. 72/15/1/2/2,<br/>Akbarpur Barota, Sonipat, Haryana</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                  <MapPin className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Admin Office</h4>
                  <p className="text-slate-500 text-sm mt-1">1098/7 Jain Bagh Colony<br/>Near Jemini Hospital Kakroi Chowk<br/>Sonipat, 131001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                  <Phone className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Contact Numbers</h4>
                  <div className="text-slate-500 text-sm mt-1 space-y-1">
                    <a href="tel:+919812265674" className="block hover:text-cyan-600 dark:hover:text-cyan-400">+91 98122 65674 (Pardeep Sharma)</a>
                    <a href="tel:+919813216616" className="block hover:text-cyan-600 dark:hover:text-cyan-400">+91 98132 16616 (Shivcharan Kaushik)</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                  <Mail className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Corporate Email</h4>
                  <div className="text-slate-500 text-sm mt-1 space-y-1">
                    <a href="mailto:atullogistics06@gmail.com" className="block hover:text-cyan-600 dark:hover:text-cyan-400">atullogistics06@gmail.com</a>
                    <a href="mailto:sharmapradeepkundli@gmail.com" className="block hover:text-cyan-600 dark:hover:text-cyan-400">sharmapradeepkundli@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                  <FileText className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Tax Information</h4>
                  <p className="text-slate-500 text-sm mt-1">GST: 06EXQPK4096H1ZW</p>
                </div>
              </div>
            </address>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 backdrop-blur-sm hover:border-cyan-500/20 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Request Business Proposal</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name" 
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    required
                    placeholder="Business Email" 
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Industry Type (e.g. Consumer Electronics)" 
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Describe your logistics needs (Fleet size, route requirements...)" 
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  formStatus === 'success'
                    ? 'bg-green-500 text-white cursor-default'
                    : formStatus === 'submitting'
                    ? 'bg-cyan-200 dark:bg-cyan-500/50 cursor-wait text-slate-600'
                    : 'bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 text-white dark:text-slate-950 shadow-lg shadow-cyan-500/20 active:scale-95'
                }`}
              >
                {formStatus === 'idle' && 'Submit Request'}
                {formStatus === 'submitting' && (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    Proposal Request Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-600 text-sm">© {new Date().getFullYear()} Atul Logistics. Registered in Haryana. GST: 06EXQPK4096H1ZW.</p>
          <div className="flex gap-6">
             <a href="#" onClick={handleLinkClick} className="text-slate-500 dark:text-slate-600 hover:text-cyan-600 text-sm">Privacy Policy</a>
             <a href="#" onClick={handleLinkClick} className="text-slate-500 dark:text-slate-600 hover:text-cyan-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
