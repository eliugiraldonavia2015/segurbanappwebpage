import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Smartphone, Users, BarChart3, Cloud, 
  Lock, CheckCircle2, ArrowRight, Zap, Radio
} from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenDemo?: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="benefits" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
      
      {/* Glowing Orbs - Reduced size for better performance and less distraction */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
              Solución Integral
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Todo lo que necesita para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Operar con Excelencia</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Elimine la complejidad. Una sola plataforma que unifica seguridad, finanzas y comunidad para que usted tenga el control total.
            </p>
          </motion.div>
        </div>

        {/* Compact Grid Layout - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Security - High Priority */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all group flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Seguridad 24/7</h3>
            <p className="text-slate-400 mb-6 text-sm flex-grow">
              Proteja su comunidad sin descanso. Control de accesos biométrico y registro automático de visitas y vehículos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-500 shrink-0" /> <span>Reconocimiento Facial</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-500 shrink-0" /> <span>Lectura de Placas</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-500 shrink-0" /> <span>Códigos QR para Visitas</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Finance - High Value */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Finanzas Sanas</h3>
            <p className="text-slate-400 mb-6 text-sm flex-grow">
              Automatice la cobranza y recupere cartera vencida. Conciliación bancaria inteligente que ahorra horas de trabajo.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span>Cobranza Automática</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span>Recibos Digitales</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span>Reportes en Tiempo Real</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 3: Community & App - Engagement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all group flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Vida en Comunidad</h3>
            <p className="text-slate-400 mb-6 text-sm flex-grow">
              Mejore la experiencia del residente. Una App intuitiva para reservas, votaciones y comunicación directa.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-purple-500 shrink-0" /> <span>App iOS y Android</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-purple-500 shrink-0" /> <span>Reserva de Amenities</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-purple-500 shrink-0" /> <span>Votaciones Digitales</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 4: Hardware & Cloud - Trust Factor (Spans full width on mobile, 3 cols on md) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-indigo-500/30 transition-all"
          >
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 hidden md:flex">
                  <Cloud size={24} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                     <Cloud size={20} className="md:hidden text-indigo-400" />
                     Infraestructura Cloud & Compatible
                   </h3>
                   <p className="text-slate-400 text-sm max-w-2xl">
                     Acceda desde cualquier lugar con seguridad bancaria. 
                     <span className="text-indigo-300 font-medium"> Compatible con sus cámaras y barreras actuales</span>, sin costosos reemplazos de hardware.
                   </p>
                </div>
             </div>
             
             <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-start">
                 <div className="text-center">
                    <div className="text-emerald-400 font-bold font-mono text-lg">99.9%</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Uptime</div>
                 </div>
                 <div className="text-center">
                    <div className="text-blue-400 font-bold font-mono text-lg">24/7</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Soporte</div>
                 </div>
                 <div className="text-center">
                    <div className="text-purple-400 font-bold font-mono text-lg">SSL</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Seguro</div>
                 </div>
             </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
            <button 
                onClick={onOpenDemo}
                className="bg-white text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-app-accent hover:text-white transition-all shadow-lg hover:shadow-app-accent/20 flex items-center justify-center gap-2 mx-auto text-lg group"
            >
                Solicitar Demostración <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-slate-500 mt-4 text-xs">
               Implementación rápida en menos de 48 horas para comunidades estándar.
            </p>
        </div>
      </div>
    </section>
  );
};
