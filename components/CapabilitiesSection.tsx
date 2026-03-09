import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Smartphone, Users, BarChart3, Cloud, 
  Lock, Zap, Globe, Cpu, Radio, CheckCircle2, ArrowRight 
} from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenDemo?: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="benefits" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
              Arquitectura Enterprise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Capacidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Sin Límites</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Diseñado para escalar. SegUrban integra tecnologías de vanguardia para ofrecer una experiencia de gestión robusta, segura y completamente automatizada.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: Security Core (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/30 transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Seguridad Perimetral Inteligente</h3>
              <p className="text-slate-400 mb-6 max-w-lg">
                Control de accesos con validación biométrica y lectura de placas vehiculares en tiempo real. 
                Registro inmutable de cada ingreso y salida sincronizado con la nube.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> <span>Reconocimiento Facial</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> <span>Lectura de Placas LPR</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> <span>Códigos QR Dinámicos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Cloud Infrastructure (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-indigo-900/40 to-slate-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-500/40 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Cloud size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Infraestructura Cloud</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Arquitectura serverless de alta disponibilidad. Sus datos están replicados globalmente y protegidos con encriptación de grado bancario.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Uptime SLA</span>
                  <span className="text-emerald-400 font-bold font-mono">99.99%</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Backup</span>
                  <span className="text-blue-400 font-bold font-mono">Tiempo Real</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Latencia</span>
                  <span className="text-purple-400 font-bold font-mono">&lt; 50ms</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Finance Engine (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Motor Financiero</h3>
            <p className="text-slate-400 text-sm">
              Conciliación bancaria automática y detección inteligente de pagos. Reduzca la morosidad hasta un 40%.
            </p>
          </motion.div>

          {/* Card 4: Mobile App (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">App Residente</h3>
            <p className="text-slate-400 text-sm">
              Todo en la palma de la mano: Pagos, reservas, invitaciones y votaciones. Disponible en iOS y Android.
            </p>
          </motion.div>

          {/* Card 5: IoT & Hardware (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-slate-600 transition-all flex flex-col md:flex-row items-center justify-between gap-8"
          >
             <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="text-amber-400" size={24} />
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-sm">Hardware Agnostic</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Integración Universal IoT</h3>
                <p className="text-slate-400 text-lg">
                  Compatible con el 95% de los dispositivos de seguridad del mercado. 
                  Cámaras IP, barreras vehiculares, sensores biométricos y controles de acceso existentes.
                  No necesita reemplazar su infraestructura actual.
                </p>
             </div>
             
             <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Tech Logos Placeholders */}
                <div className="flex flex-col items-center gap-2">
                   <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                      <Radio size={24} className="text-white" />
                   </div>
                   <span className="text-xs text-slate-500 font-mono">RFID</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                      <Zap size={24} className="text-white" />
                   </div>
                   <span className="text-xs text-slate-500 font-mono">Z-WAVE</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                      <Globe size={24} className="text-white" />
                   </div>
                   <span className="text-xs text-slate-500 font-mono">IP</span>
                </div>
             </div>
          </motion.div>

        </div>

        <div className="mt-16 text-center">
            <button 
                onClick={onOpenDemo}
                className="bg-white text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-app-accent hover:text-white transition-all shadow-lg hover:shadow-app-accent/20 flex items-center justify-center gap-2 mx-auto text-lg"
            >
                Solicitar Demostración Completa <ArrowRight size={20} />
            </button>
            <p className="text-slate-500 mt-4 text-sm">
                * Algunas capacidades requieren hardware compatible. Consulte con nuestro equipo técnico.
            </p>
        </div>
      </div>
    </section>
  );
};
