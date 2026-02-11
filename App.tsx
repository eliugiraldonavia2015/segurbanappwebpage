import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { FeatureOverlay, FeatureData } from './components/FeatureOverlay';
import { 
  Shield, Smartphone, CreditCard, Users, CheckCircle, ArrowRight, 
  Lock, Activity, ChevronRight, Play, Star, Mail, Phone, Building,
  Server, Database, Globe, Zap, BarChart3, ScanLine, Cpu, Network, Wifi,
  Layers, Radio, Cloud, PieChart, Tablet, BookOpen, Award, Headphones, FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from './components/ui/Card';
import { Modal } from './components/ui/Modal';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Data for Feature Overlays
const featureDetails: Record<string, FeatureData> = {
  // --- ECOSISTEMA ---
  'access-control': {
    id: 'access-control',
    icon: ScanLine,
    title: 'Control de Accesos IA',
    subtitle: 'Zero-Trust Perimetral System',
    description: 'Nuestro sistema propietario de control de accesos elimina el error humano. Utilizando visión computacional y redes neuronales, el sistema identifica vehículos y personas en <300ms, gestiona listas negras en tiempo real y genera un registro forense inmutable de cada interacción en la garita.',
    imageGradient: 'bg-gradient-to-br from-blue-900 to-slate-900',
    specs: [
      { label: 'Latencia de Reconocimiento', value: '< 300ms' },
      { label: 'Protocolo Encriptación', value: 'AES-256 GCM' },
      { label: 'Precisión LPR', value: '99.8%' },
      { label: 'Uptime Garantizado', value: '99.99%' },
    ],
    capabilities: [
      'Anti-Passback Lógico: Impide que una credencial sea usada dos veces consecutivas sin salida previa.',
      'Invitaciones Temporales: Códigos QR dinámicos con expiración automática para visitas y deliveries.',
      'Reconocimiento Facial 3D: Detección de vida (liveness detection) para evitar suplantación con fotos.',
      'Modo Lockdown: Cierre perimetral total instantáneo en caso de amenaza de seguridad.'
    ]
  },
  'finance-engine': {
    id: 'finance-engine',
    icon: BarChart3,
    title: 'Motor de Cobranzas',
    subtitle: 'Autonomous Fintech Core',
    description: 'El primer motor financiero diseñado específicamente para la propiedad horizontal de gran escala. Automatiza el 100% del ciclo "Order-to-Cash", conciliando transferencias bancarias mediante algoritmos de scraping seguro y APIs bancarias directas, eliminando la necesidad de reportes manuales.',
    imageGradient: 'bg-gradient-to-br from-emerald-900 to-slate-900',
    specs: [
      { label: 'Conciliación Automática', value: 'H2H (Host-to-Host)' },
      { label: 'Procesamiento', value: 'Real-Time' },
      { label: 'Recuperación Cartera', value: '+40% vs Tradicional' },
      { label: 'Auditoría', value: 'ISO 27001' },
    ],
    capabilities: [
      'Identificación Inteligente: Algoritmo que empareja transferencias incompletas con unidades basado en histórico.',
      'Facturación Atómica: Emisión y timbrado fiscal automático al detectar el ingreso de fondos.',
      'Cobranza Predictiva: Modelos de ML que identifican riesgo de mora y activan recordatorios preventivos.',
      'Pasarela Multicanal: Integración nativa con tarjetas de crédito, PSE y transferencias directas.'
    ]
  },
  'digital-governance': {
    id: 'digital-governance',
    icon: Users,
    title: 'Gobernanza Digital',
    subtitle: 'Blockchain-Verified Democracy',
    description: 'Transforme la política comunitaria con un sistema de votación y toma de decisiones a prueba de manipulaciones. Permite asambleas híbridas (presencial/remoto) con cálculo de quórum en tiempo real basado en coeficientes de copropiedad, asegurando legalidad y transparencia.',
    imageGradient: 'bg-gradient-to-br from-purple-900 to-slate-900',
    specs: [
      { label: 'Integridad de Voto', value: 'Cryptographic Hash' },
      { label: 'Capacidad Simultánea', value: '10k+ Usuarios' },
      { label: 'Cálculo Quórum', value: 'Milisegundos' },
      { label: 'Validez Legal', value: 'Certificada' },
    ],
    capabilities: [
      'Votación Ponderada: Cálculo automático del peso del voto según el coeficiente de propiedad.',
      'Asambleas Híbridas: Módulo de video integrado con sistema de votación para participantes remotos.',
      'Reserva de Activos: Gestión de amenities (canchas, salones) con reglas de negocio complejas y pagos integrados.',
      'Muro Digital Moderado: Canal de comunicación oficial segmentado por torres o zonas, libre de spam.'
    ]
  },
  'security-terminal': {
    id: 'security-terminal',
    icon: Tablet,
    title: 'Terminal de Seguridad',
    subtitle: 'Rugged Edge Hardware',
    description: 'Hardware dedicado para el personal de seguridad. Una interfaz táctil simplificada y robusta que centraliza cámaras, barreras y comunicaciones. Diseñada para operar en condiciones adversas y mantener la operatividad incluso si se pierde la conexión a internet (Edge Computing).',
    imageGradient: 'bg-gradient-to-br from-orange-900 to-slate-900',
    specs: [
      { label: 'Resistencia', value: 'IP68 / Mil-Spec' },
      { label: 'Conectividad', value: '5G + Starlink Ready' },
      { label: 'Batería Respaldo', value: '12 Horas' },
      { label: 'SO', value: 'SegUrban OS (Hardened)' },
    ],
    capabilities: [
      'Modo Offline: Operatividad completa de accesos locales sin conexión al servidor central.',
      'Botón de Pánico Físico: Gatillo de hardware para situaciones de emergencia crítica.',
      'Escaneo Documental: OCR integrado para lectura de identificaciones y pasaportes en <2s.',
      'Intercom Digital: Comunicación VoIP encriptada directamente con la app del residente.'
    ]
  },

  // --- EMPRESA ---
  'about-system': {
    id: 'about-system',
    icon: BookOpen,
    title: 'Sobre el Sistema',
    subtitle: 'Zero-Legacy Architecture',
    description: 'SegUrban nació de la frustración con los sistemas legacy. Construimos nuestra plataforma desde cero utilizando arquitectura de microservicios, eliminando la deuda técnica común en la industria. Somos una compañía de tecnología "Product-First" enfocada obsesivamente en la experiencia del usuario final y la robustez de la infraestructura.',
    imageGradient: 'bg-gradient-to-br from-indigo-900 to-slate-900',
    specs: [
      { label: 'Fundación', value: '2021' },
      { label: 'Arquitectura', value: 'Cloud-Native' },
      { label: 'Despliegue', value: 'Global AWS' },
      { label: 'Comunidades', value: '150+' },
    ],
    capabilities: [
      'API-First Design: Todo lo que ves en nuestra interfaz es accesible vía API, permitiendo integraciones ilimitadas.',
      'Evolución Continua: CI/CD pipeline que despliega mejoras de seguridad y funcionalidad semanalmente sin downtime.',
      'Escalabilidad Horizontal: Capacidad elástica para manejar picos de tráfico durante asambleas o eventos masivos.',
      'Seguridad por Diseño: Penetration testing trimestral realizado por firmas de ciberseguridad externas.'
    ]
  },
  'success-stories': {
    id: 'success-stories',
    icon: Award,
    title: 'Casos de Éxito',
    subtitle: 'Verified Impact Metrics',
    description: 'No vendemos promesas, vendemos resultados auditables. Nuestras implementaciones en comunidades de alto perfil han demostrado consistentemente un ROI positivo en menos de 6 meses, reduciendo costos operativos de seguridad y recuperando cartera vencida mediante automatización.',
    imageGradient: 'bg-gradient-to-br from-yellow-900 to-slate-900',
    specs: [
      { label: 'ROI Promedio', value: '350% / Año 1' },
      { label: 'Satisfacción', value: '4.9/5.0' },
      { label: 'Implementación', value: '< 2 Semanas' },
      { label: 'Retención', value: '98%' },
    ],
    capabilities: [
      'Reducción de Incidentes: -92% en brechas de seguridad reportadas en el primer año de operación.',
      'Eficiencia Administrativa: Ahorro de 40 horas/mes en gestión manual de conciliaciones bancarias.',
      'Optimización de Procesos: Automatización de tareas rutinarias que libera tiempo valioso del personal para enfocarse en la atención al residente.',
      'Modernización del Hábitat: Transformación digital integral que eleva el estándar de vida y la percepción de confort de los residentes.'
    ]
  },
  'enterprise-support': {
    id: 'enterprise-support',
    icon: Headphones,
    title: 'Soporte Enterprise',
    subtitle: 'White-Glove Service Tier',
    description: 'Entendemos que la seguridad no duerme. Nuestro nivel de soporte Enterprise ofrece acceso directo a ingenieros de nivel 3, sin bots ni scripts básicos. Ofrecemos SLAs agresivos de respuesta y resolución, garantizando que su operación crítica nunca se detenga.',
    imageGradient: 'bg-gradient-to-br from-rose-900 to-slate-900',
    specs: [
      { label: 'Disponibilidad', value: '24/7/365' },
      { label: 'Tiempo Respuesta', value: '< 15 Min' },
      { label: 'Canales', value: 'Omnicanal' },
      { label: 'CSAT Score', value: '99%' },
    ],
    capabilities: [
      'Ingeniero Dedicado (TAM): Un Technical Account Manager asignado que conoce su infraestructura al detalle.',
      'Monitoreo Proactivo: Detectamos y resolvemos anomalías en sus sensores antes de que usted las note.',
      'On-Site Emergency: Despliegue de técnicos físicos en sitio en <2 horas para ciudades principales.',
      'Entrenamiento Continuo: Capacitaciones ilimitadas para nuevos guardias y personal administrativo.'
    ]
  }
};

const App: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const activeFeature = activeFeatureId ? featureDetails[activeFeatureId] : null;

  return (
    <Layout 
      onOpenLogin={() => setShowLoginModal(true)} 
      onOpenDemo={() => setShowDemoModal(true)}
      onOpenFeature={(id) => setActiveFeatureId(id)}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-app-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-app-success animate-pulse"></span>
              <span className="text-xs font-semibold text-app-primary tracking-wide uppercase">Tecnología State-of-the-Art</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              El <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-primary to-blue-500">Cerebro Digital</span> de tu Urbanización
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Más que un software convencional, es el <strong>Sistema Operativo Integral</strong> que define el nuevo estándar de seguridad, eficiencia en recaudación y gobernanza. Una infraestructura tecnológica imperdible para comunidades modernas.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-app-primary hover:bg-app-primaryHover text-slate-900 font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Implementar Sistema <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-4 px-8 rounded-full border border-slate-700 transition-all flex items-center justify-center gap-2 group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={12} fill="currentColor" />
                </div>
                Ver Arquitectura
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-6 text-slate-500 text-sm font-medium">
              <p>El estándar en +150 comunidades de alto nivel</p>
            </motion.div>
          </motion.div>

          {/* Abstract Phone Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
             <div className="relative mx-auto w-[320px] h-[650px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden z-20">
                {/* Simulated App UI */}
                <div className="h-full w-full bg-slate-900 flex flex-col">
                    {/* Header */}
                    <div className="p-6 pt-12 pb-4 bg-slate-900/50 backdrop-blur-md z-10">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <div className="text-xs text-app-muted">Sistema Activo</div>
                                <div className="text-xl font-bold text-white">Dashboard Central</div>
                            </div>
                            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                                <Activity size={20} className="text-app-primary" />
                            </div>
                        </div>
                        <div className="bg-app-primary/10 border border-app-primary/20 p-4 rounded-2xl flex items-center gap-3">
                             <div className="bg-app-primary text-slate-900 p-2 rounded-lg">
                                 <Shield size={20} />
                             </div>
                             <div>
                                 <div className="text-sm font-bold text-white">Protocolo de Seguridad</div>
                                 <div className="text-xs text-app-primary">Estado: Óptimo</div>
                             </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-6 space-y-4 overflow-hidden relative">
                        <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                             <div className="flex justify-between mb-2">
                                <span className="text-slate-400 text-xs">Recaudación Mensual</span>
                                <span className="text-app-success text-xs font-bold bg-app-success/10 px-2 py-0.5 rounded">Meta alcanzada</span>
                             </div>
                             <div className="text-2xl font-bold text-white">$120,450.00</div>
                        </div>
                        
                         <div className="grid grid-cols-2 gap-3">
                             <div className="bg-slate-800 aspect-square rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-2">
                                <div className="text-app-primary"><Smartphone size={24} /></div>
                                <span className="text-xs text-slate-300">Accesos Digitales</span>
                             </div>
                             <div className="bg-slate-800 aspect-square rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-2">
                                <div className="text-emerald-500"><Users size={24} /></div>
                                <span className="text-xs text-slate-300">Data Visitas</span>
                             </div>
                         </div>
                         
                         {/* Fade out effect */}
                         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
                    </div>
                    {/* Bottom Nav Sim */}
                    <div className="h-16 bg-slate-900 border-t border-slate-800 flex justify-around items-center px-4">
                        <div className="w-12 h-1 bg-slate-800 rounded-full mb-2"></div>
                    </div>
                </div>
             </div>
             {/* Floating Elements */}
             <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-10 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl z-30 flex items-center gap-3"
             >
                 <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-500"><CheckCircle size={20} /></div>
                 <div>
                     <div className="text-xs text-slate-400">Conciliación Pagos</div>
                     <div className="text-sm font-bold text-white">Automática</div>
                 </div>
             </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 -left-12 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl z-30 flex items-center gap-3"
             >
                 <div className="bg-app-primary/20 p-2 rounded-lg text-app-primary"><Lock size={20} /></div>
                 <div>
                     <div className="text-xs text-slate-400">Token Digital</div>
                     <div className="text-sm font-bold text-white">Encriptado</div>
                 </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ECOSISTEMA (High-End System Architecture) */}
      <section id="features" className="py-24 bg-slate-950 relative scroll-mt-28">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400 mb-6">
                <Cpu size={14} className="text-app-primary" /> Arquitectura de Sistema Unificada
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                El Estándar Base para la<br/> <span className="text-app-primary">Gestión Moderna</span>
             </h2>
             <p className="text-slate-400 text-lg leading-relaxed">
                Olvídese de sistemas fragmentados. SegUrban actúa como el <strong>Sistema Nervioso Central</strong> de su comunidad, orquestando seguridad, finanzas y gobernanza en una única infraestructura sincronizada en tiempo real.
             </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-6">
            
            {/* 1. Main Hub - Security (Large) */}
            <div 
                onClick={() => setActiveFeatureId('access-control')}
                className="cursor-pointer md:col-span-2 md:row-span-2 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-app-primary/40 transition-all duration-500 relative overflow-hidden h-full min-h-[380px]"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-app-primary/5 rounded-full blur-[80px] -mr-10 -mt-10 group-hover:bg-app-primary/10 transition-colors"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-app-primary border border-slate-700 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                        <ScanLine size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Núcleo de Seguridad IA</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Control de accesos de latencia cero. Nuestro algoritmo procesa validaciones biométricas y QR en milisegundos, eliminando cuellos de botella en garitas y manteniendo un registro forense inalterable.
                    </p>
                </div>
                
                <div className="mt-8 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-app-primary w-[98%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                        </div>
                        <span className="text-xs font-mono text-app-primary">99.99% Uptime</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-300 flex items-center gap-2">
                            <Shield size={12} className="text-emerald-500" /> Anti-Passback
                        </span>
                         <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-300 flex items-center gap-2">
                            <Lock size={12} className="text-emerald-500" /> AES-256 Encrypted
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. Finance Engine (Wide Top Right) */}
            <div 
                onClick={() => setActiveFeatureId('finance-engine')}
                className="cursor-pointer md:col-span-2 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 group hover:border-emerald-500/40 transition-all duration-500 relative overflow-hidden min-h-[240px]"
            >
                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="flex justify-between items-start mb-4">
                     <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                        <BarChart3 size={24} />
                     </div>
                     <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider rounded">Fintech Core</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Motor de Recaudación</h3>
                 <p className="text-slate-400 text-sm mb-4">
                     Automatización total del ciclo de ingresos. Conciliación bancaria inteligente que detecta pagos y actualiza saldos al instante.
                 </p>
                 <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1"><CheckCircle size={10} className="text-emerald-500" /> Recordatorios Auto.</div>
                    <div className="flex items-center gap-1"><CheckCircle size={10} className="text-emerald-500" /> Estados de Cuenta</div>
                 </div>
            </div>

            {/* 3. Community (Small Box) */}
            <div 
                onClick={() => setActiveFeatureId('digital-governance')}
                className="cursor-pointer bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:bg-slate-800 transition-colors flex flex-col justify-center min-h-[180px] group"
            >
                 <Users size={28} className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                 <h3 className="text-lg font-bold text-white mb-1">Gobernanza</h3>
                 <p className="text-slate-400 text-xs leading-relaxed">
                     Votaciones digitales certificadas y reservas de activos centralizadas.
                 </p>
            </div>

            {/* 4. Resident SuperApp (Tall Vertical) */}
            <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-slate-900 to-app-primary/5 border border-slate-800 rounded-[2rem] p-6 hover:border-app-primary/30 transition-colors flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-app-primary to-transparent opacity-50"></div>
                 <div>
                    <div className="w-12 h-12 bg-app-primary/10 rounded-xl flex items-center justify-center text-app-primary mb-6">
                        <Smartphone size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">SuperApp Residente</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        Más que una app, un control remoto para la vida en comunidad. Diseño nativo iOS/Android centrado en la experiencia del usuario.
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 p-2 rounded-lg border border-slate-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Push Notifications
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 p-2 rounded-lg border border-slate-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Wallet Digital
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 p-2 rounded-lg border border-slate-800/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Mercado Vecinal
                        </div>
                    </div>
                 </div>
                 <div className="mt-6 flex justify-center">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=200" className="w-24 h-40 object-cover rounded-xl border-4 border-slate-800 shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500" alt="App Preview" />
                 </div>
            </div>

            {/* 5. IoT Neural Grid (Wide) */}
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex items-center justify-between gap-6 hover:bg-slate-800/50 transition-colors min-h-[200px] relative overflow-hidden">
                 <div className="z-10 relative max-w-[60%]">
                     <div className="flex items-center gap-2 text-orange-500 mb-3">
                         <Radio size={20} />
                         <span className="text-xs font-bold uppercase tracking-wider">Conectividad Física</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">IoT Neural Grid</h3>
                     <p className="text-slate-400 text-xs leading-relaxed">
                         Hub de hardware agnóstico. Integramos barreras vehiculares, cámaras LPR y sensores perimetrales en una sola red de telemetría en tiempo real.
                     </p>
                 </div>
                 <div className="z-10 flex flex-col gap-2">
                     <div className="bg-slate-950 border border-slate-700 p-3 rounded-xl flex items-center gap-3 w-40">
                         <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                         <span className="text-xs font-mono text-slate-300">LPR Cam 01</span>
                     </div>
                     <div className="bg-slate-950 border border-slate-700 p-3 rounded-xl flex items-center gap-3 w-40 opacity-70">
                         <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                         <span className="text-xs font-mono text-slate-300">Barrier N</span>
                     </div>
                     <div className="bg-slate-950 border border-slate-700 p-3 rounded-xl flex items-center gap-3 w-40 opacity-50">
                         <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                         <span className="text-xs font-mono text-slate-300">Bio Sensor</span>
                     </div>
                 </div>
                 <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none"></div>
            </div>

             {/* 6. Data Analytics (Small) */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:bg-slate-800 transition-colors flex flex-col justify-center min-h-[180px]">
                 <PieChart size={28} className="text-pink-500 mb-4" />
                 <h3 className="text-lg font-bold text-white mb-1">Data Lake</h3>
                 <p className="text-slate-400 text-xs leading-relaxed">
                     Dashboards de Business Intelligence para toma de decisiones directivas basadas en datos.
                 </p>
            </div>

            {/* 7. Connectivity/Sync (Small Box) */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:bg-slate-800 transition-colors flex flex-col justify-center min-h-[180px]">
                 <Network size={28} className="text-blue-500 mb-4" />
                 <h3 className="text-lg font-bold text-white mb-1">Sincronización</h3>
                 <p className="text-slate-400 text-xs leading-relaxed">
                     Datos unificados entre garitas, administración y residentes. Sin duplicidad.
                 </p>
            </div>

             {/* 8. Cloud Infra (Small Box) */}
             <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:bg-slate-800 transition-colors flex flex-col justify-center min-h-[180px]">
                 <Cloud size={28} className="text-sky-400 mb-4" />
                 <h3 className="text-lg font-bold text-white mb-1">Cloud Tier-IV</h3>
                 <p className="text-slate-400 text-xs leading-relaxed">
                     Infraestructura redundante, backups horarios encriptados y cumplimiento GDPR/LatAm.
                 </p>
            </div>


            {/* 9. Terminal Interface (Wide Bottom) */}
            <div 
                onClick={() => setActiveFeatureId('security-terminal')}
                className="cursor-pointer md:col-span-4 bg-gradient-to-r from-slate-900 via-slate-900 to-app-primary/10 border border-slate-800 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
            >
                 <div className="flex-1 relative z-10">
                     <div className="flex items-center gap-2 text-app-primary mb-3">
                         <Tablet size={16} className="animate-pulse" />
                         <span className="text-xs font-bold tracking-[0.2em] uppercase">Control Total</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-3">Interfaces Terminales Dedicadas</h3>
                     <p className="text-slate-400 max-w-xl">
                         Desde la tablet reforzada del guardia hasta el panel de control del administrador. Cada punto de contacto está diseñado para la velocidad operativa y la toma de decisiones.
                     </p>
                 </div>
                 <div className="flex items-center gap-6 relative z-10">
                     <div className="text-right">
                         <div className="text-3xl font-bold text-white">0.3s</div>
                         <div className="text-xs text-slate-500 uppercase tracking-wider">Respuesta API</div>
                     </div>
                     <div className="h-10 w-px bg-slate-700"></div>
                     <div className="text-left">
                         <div className="text-3xl font-bold text-white">24/7</div>
                         <div className="text-xs text-slate-500 uppercase tracking-wider">Disponibilidad</div>
                     </div>
                     <button className="ml-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                         <ArrowRight size={20} />
                     </button>
                 </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAPACIDADES (Previously Benefits) */}
      <section id="benefits" className="py-24 relative overflow-hidden bg-slate-950">
         <div className="max-w-7xl mx-auto px-6">
             <div className="mb-16 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Capacidades del Sistema</h2>
                 <p className="text-slate-400">Potencia de nivel empresarial simplificada para su administración.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
                 {/* Capability 1: Finance Engine */}
                 <div className="relative group">
                     <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full hover:border-emerald-500/30 transition-colors">
                         <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                             <BarChart3 size={24} />
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-4">Recaudación de Alta Precisión</h3>
                         <ul className="space-y-4">
                             <li className="flex items-start gap-3">
                                 <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-1" />
                                 <div>
                                     <span className="block text-white font-medium">Conciliación Automática</span>
                                     <span className="text-slate-400 text-sm">El sistema empareja transferencias bancarias con unidades inmobiliarias automáticamente.</span>
                                 </div>
                             </li>
                             <li className="flex items-start gap-3">
                                 <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-1" />
                                 <div>
                                     <span className="block text-white font-medium">Recuperación de Cartera</span>
                                     <span className="text-slate-400 text-sm">Flujos de notificaciones escalonadas para residentes en mora.</span>
                                 </div>
                             </li>
                             <li className="flex items-start gap-3">
                                 <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-1" />
                                 <div>
                                     <span className="block text-white font-medium">Reportes de Ingresos</span>
                                     <span className="text-slate-400 text-sm">Visibilidad total del flujo de caja entrante en tiempo real.</span>
                                 </div>
                             </li>
                         </ul>
                     </div>
                 </div>

                 {/* Capability 2: Security Core */}
                 <div className="relative group">
                     <div className="absolute inset-0 bg-gradient-to-r from-app-primary/10 to-transparent rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full hover:border-app-primary/30 transition-colors">
                         <div className="w-12 h-12 bg-app-primary/10 rounded-xl flex items-center justify-center text-app-primary mb-6">
                             <Shield size={24} />
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-4">Blindaje Digital Perimetral</h3>
                         <ul className="space-y-4">
                             <li className="flex items-start gap-3">
                                 <CheckCircle size={20} className="text-app-primary shrink-0 mt-1" />
                                 <div>
                                     <span className="block text-white font-medium">Validación Multi-factor</span>
                                     <span className="text-slate-400 text-sm">Códigos QR temporales encriptados y validación de identidad para visitas.</span>
                                 </div>
                             </li>
                             <li className="flex items-start gap-3">
                                 <CheckCircle size={20} className="text-app-primary shrink-0 mt-1" />
                                 <div>
                                     <span className="block text-white font-medium">Trazabilidad Total</span>
                                     <span className="text-slate-400 text-sm">Registro inmutable de quién entra, quién autoriza y cuánto tiempo permanece.</span>
                                 </div>
                             </li>
                             <li className="flex items-start gap-3">
                                 <CheckCircle size={20} className="text-app-primary shrink-0 mt-1" />
                                 <div>
                                     <span className="block text-white font-medium">Alertas Silenciosas</span>
                                     <span className="text-slate-400 text-sm">Protocolos de emergencia y botones de pánico integrados en la interfaz.</span>
                                 </div>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* CASOS DE ÉXITO (Previously Testimonials) */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Casos de Éxito</h2>
            <p className="text-slate-400">Resultados medibles en comunidades de alto perfil.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: "-40%",
                metricLabel: "Reducción de Morosidad",
                text: "La implementación del motor de cobranzas automatizó el seguimiento de pagos. Recuperamos flujo de caja crítico en los primeros 3 meses.",
                name: "Ing. Roberto Méndez",
                role: "Director de Operaciones, Los Pinos",
              },
              {
                metric: "0",
                metricLabel: "Brechas de Seguridad",
                text: "Desde que usamos el sistema de control de accesos, eliminamos completamente el ingreso no autorizado. La sensación de seguridad es total.",
                name: "Lic. Carolina Vega",
                role: "Gerente General, Altos del Bosque",
              },
              {
                metric: "+85%",
                metricLabel: "Participación Vecinal",
                text: "La gobernanza digital transformó nuestras asambleas. Pasamos de reuniones vacías a votaciones digitales con participación récord.",
                name: "Arq. Andrés Silva",
                role: "Presidente del Directorio",
              }
            ].map((t, i) => (
              <Card key={i} className="bg-slate-800/30 border-slate-800 p-8 flex flex-col justify-between">
                <div>
                    <div className="mb-6 pb-6 border-b border-slate-700">
                        <div className="text-4xl font-bold text-app-primary mb-1">{t.metric}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.metricLabel}</div>
                    </div>
                    <div className="flex gap-1 text-yellow-500 mb-4">
                        {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-300 mb-6 italic text-sm leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-app-bg">
        <div className="max-w-4xl mx-auto px-6">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-app-primary/5 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
                
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solicitar Consultoría Técnica</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Evaluamos la infraestructura actual de su urbanización y diseñamos un plan de implementación del Sistema SegUrban.
                    </p>
                </div>
                
                <form 
                  onSubmit={(e) => { e.preventDefault(); setShowDemoModal(true); }}
                  className="max-w-2xl mx-auto space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Nombre Completo</label>
                            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-app-primary transition-colors" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Cargo / Rol</label>
                            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-app-primary transition-colors" placeholder="Ej. Presidente, Administrador..." />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                         <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Email Corporativo</label>
                            <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-app-primary transition-colors" />
                        </div>
                         <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Teléfono</label>
                            <input type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-app-primary transition-colors" />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Urbanización / Proyecto</label>
                        <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-app-primary transition-colors" />
                    </div>

                    <button type="submit" className="w-full bg-app-primary hover:bg-app-primaryHover text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] text-lg">
                        Agendar Reunión de Análisis
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4 flex justify-center items-center gap-2">
                        <Lock size={12} /> Sus datos están protegidos bajo estrictos protocolos de privacidad.
                    </p>
                </form>
            </div>
        </div>
      </section>

      {/* --- MODALS --- */}
      
      {/* FEATURE OVERLAY (New High-Tech Detail View) */}
      <FeatureOverlay 
        feature={activeFeature} 
        onClose={() => setActiveFeatureId(null)}
        onRequestDemo={() => { setActiveFeatureId(null); setShowDemoModal(true); }}
      />

      {/* Client Access Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} title="Acceso al Sistema">
        <div className="space-y-6">
          <p className="text-slate-400 text-sm">Ingresa a tu Centro de Comando o Portal de Residente.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">ID de Usuario / Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-500" size={18} />
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-app-primary" placeholder="admin@sistema.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Clave de Acceso</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-slate-500" size={18} />
                <input type="password" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-app-primary" placeholder="••••••••" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center text-slate-400 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded bg-slate-800 border-slate-700" />
              Mantener sesión segura
            </label>
            <a href="#" className="text-app-primary hover:underline">Recuperar credenciales</a>
          </div>
          <button className="w-full bg-app-primary hover:bg-app-primaryHover text-slate-900 font-bold py-3 rounded-lg transition-colors">
            Iniciar Sesión Segura
          </button>
          <div className="text-center text-xs text-slate-500 mt-4">
            ¿Tu comunidad aún no tiene el sistema? <button onClick={() => {setShowLoginModal(false); setShowDemoModal(true);}} className="text-white hover:underline">Solicita activación</button>
          </div>
        </div>
      </Modal>

      {/* Request Demo Modal */}
      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Solicitar Implementación">
        <div className="space-y-6">
          <div className="bg-app-primary/10 border border-app-primary/20 p-4 rounded-lg">
             <h4 className="text-white font-bold text-sm mb-1">Moderniza tu Comunidad</h4>
             <p className="text-xs text-slate-300">Completa el perfil de tu proyecto y un especialista en sistemas de seguridad te contactará.</p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-app-primary" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Apellido</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-app-primary" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Corporativo</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 text-slate-500" size={16} />
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-white focus:outline-none focus:border-app-primary" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teléfono / WhatsApp</label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 text-slate-500" size={16} />
                <input type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-white focus:outline-none focus:border-app-primary" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre del Proyecto Inmobiliario</label>
              <div className="relative">
                <Building className="absolute left-3 top-2.5 text-slate-500" size={16} />
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-white focus:outline-none focus:border-app-primary" />
              </div>
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Dimensión (Unidades)</label>
               <select className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-app-primary">
                 <option>Menos de 50</option>
                 <option>50 - 100</option>
                 <option>101 - 300</option>
                 <option>Más de 300</option>
               </select>
            </div>
            <button type="button" className="w-full bg-app-primary hover:bg-app-primaryHover text-slate-900 font-bold py-3 rounded-lg shadow-lg mt-2">
              Solicitar Análisis
            </button>
          </form>
        </div>
      </Modal>

      {/* Video Demo Modal */}
      <Modal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} title="Arquitectura del Sistema" maxWidth="max-w-4xl">
         <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
            {/* Placeholder for Video - In a real app, embed YouTube/Vimeo here */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors">
               <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                  <Play size={40} fill="white" className="text-white ml-2" />
               </div>
            </div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Video Cover" className="w-full h-full object-cover opacity-50 -z-10" />
         </div>
      </Modal>

    </Layout>
  );
};

export default App;