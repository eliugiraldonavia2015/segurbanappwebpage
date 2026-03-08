import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Activity } from 'lucide-react';

export interface FeatureData {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  capabilities: string[];
  imageGradient: string;
}

interface FeatureOverlayProps {
  feature: FeatureData | null;
  onClose: () => void;
  onRequestDemo: () => void;
}

export const FeatureOverlay: React.FC<FeatureOverlayProps> = ({ feature, onClose, onRequestDemo }) => {
  useEffect(() => {
    if (feature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [feature]);

  if (!feature) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white overflow-y-auto"
      >
        <div className="min-h-screen flex flex-col relative">
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-20">
            <button 
              onClick={onClose}
              className="p-3 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:shadow-md transition-all group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Hero Header */}
          <div className={`relative h-[40vh] ${feature.imageGradient} flex items-center justify-center overflow-hidden`}>
             <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
             
             <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl"
                >
                   <feature.icon size={40} />
                </motion.div>
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  {feature.title}
                </motion.h2>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-white/90 font-medium tracking-wide uppercase"
                >
                  {feature.subtitle}
                </motion.p>
             </div>
          </div>

          {/* Content Body */}
          <div className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full">
            <div className="grid md:grid-cols-12 gap-16">
               
               {/* Left Column: Description & Specs */}
               <div className="md:col-span-7 space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Activity className="text-app-primary" /> Detalles Técnicos
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {feature.specs.map((spec, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1) }}
                        className="bg-slate-50 border border-slate-200 p-5 rounded-xl hover:bg-white hover:shadow-md transition-all"
                      >
                        <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">{spec.label}</div>
                        <div className="text-slate-900 font-mono text-lg font-bold">{spec.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <button 
                      onClick={() => { onClose(); onRequestDemo(); }}
                      className="w-full md:w-auto bg-app-primary hover:bg-app-primaryHover text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                    >
                      Solicitar Demo Personalizada <ArrowRight size={20} />
                    </button>
                    <p className="text-slate-400 text-xs mt-4 text-center md:text-left">
                      *La implementación puede variar según la infraestructura existente.
                    </p>
                  </div>
               </div>

               {/* Right Column: Capabilities List */}
               <div className="md:col-span-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[60px] pointer-events-none"></div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-8 relative z-10">Capacidades Clave</h3>
                    <ul className="space-y-6 relative z-10">
                      {feature.capabilities.map((cap, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (idx * 0.1) }}
                          className="flex items-start gap-4"
                        >
                          <div className="mt-1 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-app-primary shrink-0 shadow-sm">
                            <CheckCircle size={14} />
                          </div>
                          <div>
                             {/* Simple parsing assuming no colon or handling it if present */}
                            <span className="text-slate-700 text-sm leading-relaxed font-medium">{cap}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges */}
                  <div className="mt-6 flex gap-3 flex-wrap">
                     <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium shadow-sm">Certificado ISO</span>
                     <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium shadow-sm">Soporte 24/7</span>
                     <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium shadow-sm">Garantía Extendida</span>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};