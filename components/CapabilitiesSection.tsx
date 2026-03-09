import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Smartphone, Users, BarChart3, Cloud, 
  CheckCircle2, ArrowRight, Scan, CreditCard, Bell, 
  Search, FileText, UserCheck, Key, Package, AlertTriangle, Video, Map, ChevronLeft, ChevronRight
} from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenDemo?: () => void;
}

type TabType = 'admin' | 'resident' | 'guard';

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full h-full rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-contain bg-slate-900"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<TabType>('admin');

  const tabs = [
    { id: 'admin', label: 'Para Administradores', icon: BarChart3 },
    { id: 'resident', label: 'Para Residentes', icon: Smartphone },
    { id: 'guard', label: 'Para Guardias', icon: Shield },
  ];

  const content = {
    admin: {
      title: 'Control Total en Tiempo Real',
      description: 'Gestione su comunidad con datos precisos y herramientas automatizadas. Elimine la carga operativa manual.',
      color: 'emerald',
      features: [
        { icon: BarChart3, text: 'Cobranza automatizada en tiempo real' },
        { icon: FileText, text: 'Auditoría de bitácoras y emergencias al instante' },
        { icon: Video, text: 'Supervisión de cámaras y placas vehiculares' },
        { icon: Search, text: 'Directorio inteligente por villas y contactos' },
        { icon: CreditCard, text: 'Registro manual de pagos flexible' },
        { icon: Bell, text: 'Envío de comunicados Push masivos' },
      ],
      image: (
        <div className="w-full h-full shadow-2xl rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
          <Carousel images={[
            '/screenshots/admin-residentes.jpeg',
            '/screenshots/admin-personal.jpeg',
            '/screenshots/admin-home.jpeg'
          ]} />
        </div>
      )
    },
    resident: {
      title: 'Autonomía y Comodidad',
      description: 'Empodere a sus residentes con una App que resuelve todo en segundos, sin filas ni llamadas a garita.',
      color: 'blue',
      features: [
        { icon: Key, text: 'Reservas sin cruces de horarios' },
        { icon: CreditCard, text: 'Pago de alícuotas y deudas desde la App' },
        { icon: Key, text: 'Generador de QR y códigos de acceso' },
        { icon: Bell, text: 'Notificaciones automáticas (ej: mantenimiento)' },
        { icon: AlertTriangle, text: 'Botón de pánico con geolocalización' },
        { icon: Package, text: 'Gestión de visitas y paquetería' },
      ],
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 z-20 flex justify-center">
                  <div className="w-20 h-4 bg-black rounded-b-xl"></div>
               </div>
               <div className="p-6 pt-12 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                  <div className="flex justify-between items-center mb-8">
                     <div className="text-lg font-bold">Hola, Carlos</div>
                     <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     <div className="bg-blue-600 p-4 rounded-2xl flex flex-col items-center gap-2 aspect-square justify-center">
                        <Key size={24} />
                        <span className="text-xs">Accesos</span>
                     </div>
                     <div className="bg-slate-700 p-4 rounded-2xl flex flex-col items-center gap-2 aspect-square justify-center">
                        <CreditCard size={24} />
                        <span className="text-xs">Pagos</span>
                     </div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                     <div className="text-xs text-slate-400 mb-1">Próxima Visita</div>
                     <div className="font-bold">Familia Pérez</div>
                     <div className="text-xs text-green-400">Acceso Autorizado</div>
                  </div>
               </div>
            </div>
        </div>
      )
    },
    guard: {
      title: 'Velocidad y Seguridad',
      description: 'Herramientas rápidas para que sus guardias se enfoquen en proteger, no en burocracia.',
      color: 'purple',
      features: [
        { icon: Scan, text: 'Entradas automatizadas sin llamar al residente' },
        { icon: Search, text: 'Identificación vehicular (Placa -> Villa)' },
        { icon: UserCheck, text: 'Escaneo de cédula para control de staff' },
        { icon: Map, text: 'Contactos ordenados por villa en tiempo real' },
        { icon: FileText, text: 'Bitácoras digitales 100% auditables' },
        { icon: Shield, text: 'Control de rondas y novedades' },
      ],
      image: (
        <div className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col">
          <div className="bg-slate-900 p-3 border-b border-slate-700 flex justify-center">
            <div className="w-32 h-1 bg-slate-700 rounded-full"></div>
          </div>
          <div className="p-6 flex flex-col h-full relative">
             <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
             <div className="text-sm text-slate-400 uppercase font-bold mb-4">Terminal de Garita</div>
             
             <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 mb-4 flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center">
                   <Video size={24} className="text-slate-400" />
                </div>
                <div>
                   <div className="text-lg font-bold text-white">GTR-4582</div>
                   <div className="text-sm text-green-400">Residente Autorizado</div>
                   <div className="text-xs text-slate-400">Villa 45 - Familia López</div>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-3">
                <div className="bg-indigo-600 text-white p-3 rounded-lg text-center font-bold text-sm">Abrir Barrera</div>
                <div className="bg-slate-700 text-white p-3 rounded-lg text-center font-bold text-sm">Denegar</div>
             </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="benefits" className="py-20 bg-slate-900 relative flex flex-col justify-center overflow-hidden">
      {/* Background - Brighter */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-90"></div>
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Una Plataforma, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tres Experiencias</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Diseñamos interfaces específicas para cada rol, garantizando eficiencia y control total.
          </p>
        </div>

        {/* Tabs Navigation - Compact */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                  isActive 
                    ? 'bg-white text-slate-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105' 
                    : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area - Split View - More Compact */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 min-h-[400px] shadow-2xl relative overflow-hidden">
          {/* Inner Glow */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-${content[activeTab].color}-500/10 rounded-full blur-[80px] pointer-events-none transition-colors duration-500`}></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center h-full relative z-10"
            >
              {/* Left: Text Content */}
              <div className="order-2 md:order-1">
                <div className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3 bg-${content[activeTab].color}-500/20 text-${content[activeTab].color}-300 border border-${content[activeTab].color}-500/30`}>
                   Beneficios Clave
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{content[activeTab].title}</h3>
                <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                  {content[activeTab].description}
                </p>
                
                <div className="grid gap-3">
                  {content[activeTab].features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                    >
                      <div className={`p-1.5 rounded-md bg-${content[activeTab].color}-500/10 text-${content[activeTab].color}-400 shrink-0`}>
                        <feature.icon size={16} />
                      </div>
                      <span className="text-slate-200 text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                   <button 
                      onClick={onOpenDemo}
                      className={`bg-${content[activeTab].color}-600 hover:bg-${content[activeTab].color}-500 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-${content[activeTab].color}-500/20 transition-all flex items-center gap-2 text-sm`}
                   >
                      Ver Demo para {tabs.find(t => t.id === activeTab)?.label.replace('Para ', '')} <ArrowRight size={16} />
                   </button>
                </div>
              </div>

              {/* Right: Visual Representation */}
              <div className="order-1 md:order-2 h-[250px] md:h-[400px] flex items-center justify-center relative">
                 <div className="relative z-10 w-full max-w-sm h-full max-h-[350px]">
                    {content[activeTab].image}
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
