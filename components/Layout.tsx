import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  onOpenLogin?: () => void;
  onOpenDemo?: () => void;
  onOpenFeature?: (featureId: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenLogin, onOpenDemo, onOpenFeature }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosistema', href: '#features' },
    { name: 'Capacidades', href: '#benefits' },
    { name: 'Casos de Éxito', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleFooterLinkClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onOpenFeature) onOpenFeature(id);
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text font-sans selection:bg-app-accent selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Logo Image Direct Render */}
            <div className="w-16 h-16 relative flex items-center justify-center">
              <img 
                src="/nuevosegurbaniconwebnobk.png" 
                alt="SegUrban Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-app-primary' : 'text-app-primary'}`}>
              SegUrban <span className="text-app-accent">System</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-slate-600 hover:text-app-accent' : 'text-slate-700 hover:text-app-accent'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenLogin}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${isScrolled ? 'text-slate-700 border-slate-200 hover:bg-slate-50' : 'text-slate-700 border-slate-300 hover:bg-white/50'}`}
            >
              Acceso Clientes
            </button>
            <button 
              onClick={onOpenDemo}
              className="bg-app-primary hover:bg-app-primaryHover text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Solicitar Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                 <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] relative shrink-0">
                    <img 
                      src="/nuevosegurbaniconwebnobk.png" 
                      alt="SegUrban Logo" 
                      width="48"
                      height="48"
                      className="w-full h-full object-contain block"
                    />
                 </div>
                 <span className="text-xl font-bold text-app-primary">Menu</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="bg-slate-100 p-2 rounded-full"><X className="text-slate-900" size={24} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-medium text-slate-700 hover:text-app-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100 my-4" />
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenLogin?.(); }}
                className="bg-slate-100 text-slate-900 w-full py-4 rounded-xl font-semibold border border-slate-200"
              >
                Acceso Clientes
              </button>
               <button 
                onClick={() => { setMobileMenuOpen(false); onOpenDemo?.(); }}
                className="bg-app-primary text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-app-primary/20"
              >
                Solicitar Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}

      {/* Footer */}
      <footer className="bg-slate-900 py-16 border-t border-slate-800 text-slate-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 relative flex items-center justify-center shrink-0">
                  <img 
                    src="/nuevosegurbaniconwebnobk.png" 
                    alt="SegUrban Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-white">SegUrban System</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                El sistema operativo definitivo para la gestión inteligente de comunidades. Tecnología de vanguardia para seguridad, recaudación y gobernanza.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white hover:bg-slate-700 cursor-pointer transition-all duration-300">
                    <ArrowRight size={16} className="-rotate-45" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Ecosistema</h4>
              <ul className="space-y-3 text-slate-400">
                <li onClick={() => handleFooterLinkClick('access-control')} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-white transition-colors"></span> Control de Accesos IA
                </li>
                <li onClick={() => handleFooterLinkClick('finance-engine')} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-white transition-colors"></span> Motor de Cobranzas
                </li>
                <li onClick={() => handleFooterLinkClick('digital-governance')} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-white transition-colors"></span> Gobernanza Digital
                </li>
                <li onClick={() => handleFooterLinkClick('security-terminal')} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-white transition-colors"></span> Terminal de Seguridad
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3 text-slate-400">
                <li onClick={() => handleFooterLinkClick('about-system')} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-white transition-colors"></span> Sobre el Sistema
                </li>
                <li onClick={() => handleFooterLinkClick('success-stories')} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-app-primary transition-colors"></span> Casos de Éxito
                </li>
                <li onClick={() => handleFooterLinkClick('enterprise-support')} className="hover:text-app-primary cursor-pointer transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-app-primary transition-colors"></span> Soporte Enterprise
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SegUrban System. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <span className="cursor-pointer hover:text-slate-300 transition-colors">Política de Privacidad</span>
              <span className="cursor-pointer hover:text-slate-300 transition-colors">Términos de Servicio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};