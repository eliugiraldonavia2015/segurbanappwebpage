import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { FeatureOverlay, FeatureData } from './components/FeatureOverlay';
import { 
  Shield, Smartphone, Users, CheckCircle, ArrowRight, 
  Lock, Activity, Play, Star, Mail, Phone, Building,
  BarChart3, ScanLine, Radio, Cloud, PieChart, Tablet, BookOpen, Award, Headphones, Loader2
} from 'lucide-react';
import { Card } from './components/ui/Card';
import { Modal } from './components/ui/Modal';

// Datos de Características - Lenguaje Corporativo y Beneficios
const featureDetails: Record<string, FeatureData> = {
  'access-control': {
    id: 'access-control',
    icon: ScanLine,
    title: 'Control de Accesos Inteligente',
    subtitle: 'Seguridad Perimetral Automatizada',
    description: 'Gestione el ingreso de visitantes y residentes con tecnología de punta. Nuestro sistema agiliza el flujo en garita manteniendo los más altos estándares de seguridad, con registros detallados y monitoreo en tiempo real.',
    imageGradient: 'bg-gradient-to-br from-slate-800 to-slate-900',
    specs: [
      { label: 'Velocidad', value: '< 1 seg' },
      { label: 'Disponibilidad', value: '24/7' },
      { label: 'Precisión', value: '99.9%' },
      { label: 'Respaldo', value: 'Cloud' },
    ],
    capabilities: [
      'Registro digital de visitantes con lectura de documento de identidad.',
      'Invitaciones QR temporales para visitas y servicios de delivery.',
      'Restricción automática de acceso a morosos (según reglamento).',
      'Alertas inmediatas de seguridad a administración y garita.'
    ]
  },
  'finance-engine': {
    id: 'finance-engine',
    icon: BarChart3,
    title: 'Gestión Financiera',
    subtitle: 'Recaudación y Conciliación Automática',
    description: 'Simplifique la administración financiera de su comunidad. Automatice el cobro de expensas, concilie pagos bancarios sin esfuerzo manual y ofrezca transparencia total a los copropietarios.',
    imageGradient: 'bg-gradient-to-br from-blue-900 to-slate-900',
    specs: [
      { label: 'Conciliación', value: 'Automática' },
      { label: 'Reportes', value: 'Tiempo Real' },
      { label: 'Recuperación', value: '+35%' },
      { label: 'Auditoría', value: 'Total' },
    ],
    capabilities: [
      'Identificación automática de transferencias y depósitos.',
      'Emisión y envío automático de recibos y estados de cuenta.',
      'Gestión de morosidad con notificaciones preventivas automatizadas.',
      'Pasarela de pagos integrada para tarjetas y transferencias.'
    ]
  },
  'digital-governance': {
    id: 'digital-governance',
    icon: Users,
    title: 'Gobernanza Digital',
    subtitle: 'Participación y Transparencia',
    description: 'Facilite la toma de decisiones en su comunidad. Realice asambleas híbridas, votaciones digitales seguras y mantenga a todos los residentes informados y participativos.',
    imageGradient: 'bg-gradient-to-br from-indigo-900 to-slate-900',
    specs: [
      { label: 'Votación', value: 'Certificada' },
      { label: 'Quórum', value: 'Automático' },
      { label: 'Asambleas', value: 'Híbridas' },
      { label: 'Legalidad', value: 'Garantizada' },
    ],
    capabilities: [
      'Voto ponderado automático según coeficiente de propiedad.',
      'Plataforma para asambleas virtuales y mixtas.',
      'Reserva de áreas comunes (amenities) con pagos integrados.',
      'Canal oficial de comunicados y noticias de la administración.'
    ]
  },
  'security-terminal': {
    id: 'security-terminal',
    icon: Tablet,
    title: 'Terminal de Operaciones',
    subtitle: 'Herramientas para Personal de Seguridad',
    description: 'Equipe a su personal de vigilancia con herramientas robustas y fáciles de usar. Centralice el control de barreras, cámaras y comunicaciones en una interfaz diseñada para la eficiencia operativa.',
    imageGradient: 'bg-gradient-to-br from-slate-700 to-slate-900',
    specs: [
      { label: 'Interfaz', value: 'Táctil' },
      { label: 'Conexión', value: '4G/5G/WiFi' },
      { label: 'Uso', value: 'Rudo' },
      { label: 'Modo', value: 'Offline' },
    ],
    capabilities: [
      'Funcionamiento continuo incluso sin conexión a internet.',
      'Botón de pánico y alerta silenciosa a autoridades.',
      'Escaneo rápido de documentos y placas vehiculares.',
      'Comunicación directa encriptada con residentes.'
    ]
  },
   'about-system': {
    id: 'about-system',
    icon: BookOpen,
    title: 'Sobre SegUrban',
    subtitle: 'Innovación y Experiencia',
    description: 'SegUrban es la solución líder en gestión de comunidades. Desarrollada con un enfoque en la experiencia del usuario y la robustez técnica, nuestra plataforma evoluciona constantemente para satisfacer las necesidades de las urbanizaciones más exigentes.',
    imageGradient: 'bg-gradient-to-br from-blue-800 to-slate-900',
    specs: [
      { label: 'Experiencia', value: '10+ Años' },
      { label: 'Soporte', value: 'Local' },
      { label: 'Nube', value: 'Segura' },
      { label: 'Clientes', value: 'Satisfechos' },
    ],
    capabilities: [
      'Desarrollo continuo basado en retroalimentación de clientes.',
      'Infraestructura en la nube de alta disponibilidad y seguridad.',
      'Integraciones vía API con sistemas de terceros.',
      'Cumplimiento normativo y de protección de datos.'
    ]
  },
  'success-stories': {
    id: 'success-stories',
    icon: Award,
    title: 'Casos de Éxito',
    subtitle: 'Resultados Comprobados',
    description: 'Nuestros clientes avalan la efectividad de SegUrban. Hemos ayudado a cientos de comunidades a reducir costos, mejorar la seguridad y recuperar cartera vencida en tiempo récord.',
    imageGradient: 'bg-gradient-to-br from-amber-700 to-slate-900',
    specs: [
      { label: 'ROI', value: 'Positivo' },
      { label: 'Ahorro', value: 'Operativo' },
      { label: 'Seguridad', value: 'Total' },
      { label: 'Confianza', value: 'Alta' },
    ],
    capabilities: [
      'Reducción drástica de incidentes de seguridad.',
      'Optimización del tiempo del personal administrativo.',
      'Mejora en la plusvalía y percepción de la comunidad.',
      'Recuperación efectiva de cuotas de mantenimiento.'
    ]
  },
  'enterprise-support': {
    id: 'enterprise-support',
    icon: Headphones,
    title: 'Soporte Premium',
    subtitle: 'Acompañamiento Constante',
    description: 'No solo le vendemos un software, nos convertimos en su socio tecnológico. Ofrecemos soporte técnico especializado y atención personalizada para garantizar que su operación nunca se detenga.',
    imageGradient: 'bg-gradient-to-br from-red-800 to-slate-900',
    specs: [
      { label: 'Atención', value: '24/7' },
      { label: 'Respuesta', value: 'Rápida' },
      { label: 'Expertos', value: 'Certificados' },
      { label: 'Canales', value: 'Múltiples' },
    ],
    capabilities: [
      'Gerente de cuenta asignado para seguimiento continuo.',
      'Monitoreo proactivo de la salud del sistema.',
      'Capacitación constante para nuevos usuarios y personal.',
      'SLA de servicio garantizado por contrato.'
    ]
  }
};

const App: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const activeFeature = activeFeatureId ? featureDetails[activeFeatureId] : null;

  const handleCloseVideoModal = () => {
    setShowVideoModal(false);
    setIsVideoLoading(false);
  };

  return (
    <Layout 
      onOpenLogin={() => setShowLoginModal(true)} 
      onOpenDemo={() => setShowDemoModal(true)}
      onOpenFeature={(id) => setActiveFeatureId(id)}
    >
      {/* Hero Section - Clean & Corporate */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Seguridad y Gestión Integral para su <span className="text-app-accent">Urbanización</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              La plataforma definitiva que integra seguridad, finanzas y gobernanza. Transforme su comunidad con tecnología eficiente, transparente y fácil de usar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-app-primary hover:bg-app-primaryHover text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Solicitar Demostración <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="bg-white hover:bg-slate-50 text-slate-700 font-medium py-4 px-8 rounded-lg border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2 group hover:border-slate-300"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-app-accent group-hover:text-white transition-colors">
                  <Play size={14} fill="currentColor" />
                </div>
                Ver Video Explicativo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-slate-500 text-sm font-medium border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-app-accent" /> +150 Comunidades
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-app-accent" /> Soporte 24/7
              </div>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="relative hidden md:block">
             <div className="relative mx-auto w-full max-w-lg aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-20 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                {/* Simulated Dashboard UI - Clean */}
                <div className="h-full w-full bg-slate-50 flex flex-col">
                    <div className="p-6 bg-white border-b border-slate-100">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <div className="text-xs text-slate-400 uppercase font-bold">Panel de Control</div>
                                <div className="text-xl font-bold text-slate-800">Resumen General</div>
                            </div>
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                                <Activity size={20} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                           <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                              <div className="text-blue-600 font-bold text-lg">98%</div>
                              <div className="text-[10px] text-blue-400 font-medium uppercase">Cobranza</div>
                           </div>
                           <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                              <div className="text-emerald-600 font-bold text-lg">Activo</div>
                              <div className="text-[10px] text-emerald-400 font-medium uppercase">Accesos</div>
                           </div>
                           <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                              <div className="text-purple-600 font-bold text-lg">12</div>
                              <div className="text-[10px] text-purple-400 font-medium uppercase">Visitas</div>
                           </div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 space-y-3">
                        <div className="h-2 w-3/4 bg-slate-200 rounded-full"></div>
                        <div className="h-2 w-1/2 bg-slate-200 rounded-full"></div>
                        <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                        <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                <Users size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-700">Nueva Reserva</div>
                                <div className="text-xs text-slate-400">Salón de Eventos - Hoy 18:00</div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-app-accent/10 rounded-full blur-3xl -z-10"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID - Corporate & Organized */}
      <section id="features" className="min-h-screen flex flex-col justify-center py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ecosistema Integral de Gestión
             </h2>
             <p className="text-slate-500 text-lg leading-relaxed">
                Una suite completa de herramientas diseñadas para resolver los desafíos reales de la administración de propiedades y seguridad residencial.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card 
                onClick={() => setActiveFeatureId('access-control')}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-app-accent/50 hover:shadow-xl transition-all duration-300 p-8 rounded-2xl relative overflow-hidden"
            >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-app-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ScanLine size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Control de Accesos</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Seguridad perimetral automatizada. Registre visitas, controle el ingreso vehicular y peatonal con tecnología ágil y segura.
                </p>
                <div className="flex items-center text-app-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver detalles <ArrowRight size={16} className="ml-2" />
                </div>
            </Card>

            {/* Feature 2 */}
            <Card 
                onClick={() => setActiveFeatureId('finance-engine')}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 p-8 rounded-2xl relative overflow-hidden"
            >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Finanzas y Recaudo</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Motor financiero inteligente. Automatice la facturación, conciliación bancaria y gestión de cobranza para una administración transparente.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver detalles <ArrowRight size={16} className="ml-2" />
                </div>
            </Card>

            {/* Feature 3 */}
            <Card 
                onClick={() => setActiveFeatureId('digital-governance')}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 p-8 rounded-2xl relative overflow-hidden"
            >
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Comunidad y Votación</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Fomente la participación. Herramientas para asambleas, votaciones digitales y comunicación efectiva entre vecinos y administración.
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver detalles <ArrowRight size={16} className="ml-2" />
                </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
             {/* Feature 4 */}
            <Card 
                onClick={() => setActiveFeatureId('security-terminal')}
                className="group cursor-pointer bg-slate-50 border border-slate-200 hover:bg-white hover:border-app-primary/50 hover:shadow-xl transition-all duration-300 p-8 rounded-2xl flex items-center gap-6"
            >
                <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-app-primary group-hover:text-white transition-colors">
                    <Tablet size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Terminal de Seguridad</h3>
                    <p className="text-slate-500 text-sm">
                        Interfaz robusta para guardias. Operación offline, botón de pánico y escaneo de documentos.
                    </p>
                </div>
            </Card>

             {/* Feature 5 */}
             <Card 
                onClick={() => setActiveFeatureId('about-system')}
                className="group cursor-pointer bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 p-8 rounded-2xl flex items-center gap-6"
            >
                <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Cloud size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Plataforma Cloud</h3>
                    <p className="text-slate-500 text-sm">
                        Acceda desde cualquier lugar. Datos encriptados, respaldos automáticos y alta disponibilidad.
                    </p>
                </div>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS / BENEFITS - Clean Layout */}
      <section id="benefits" className="min-h-screen flex flex-col justify-center py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-16">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div>
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultados Reales y Medibles</h2>
                     <p className="text-slate-400 text-lg mb-8">
                         Nuestro enfoque está en generar valor tangible para su comunidad desde el primer día de implementación.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                 <BarChart3 size={24} />
                             </div>
                             <div>
                                 <h4 className="text-xl font-bold mb-1">Reducción de Morosidad</h4>
                                 <p className="text-slate-400 text-sm">Automatización de recordatorios y facilidad de pago que incrementa la recaudación hasta un 35%.</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                 <Shield size={24} />
                             </div>
                             <div>
                                 <h4 className="text-xl font-bold mb-1">Seguridad Proactiva</h4>
                                 <p className="text-slate-400 text-sm">Detecte amenazas antes de que ocurran con alertas en tiempo real y control estricto de accesos.</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                 <Award size={24} />
                             </div>
                             <div>
                                 <h4 className="text-xl font-bold mb-1">Plusvalía</h4>
                                 <p className="text-slate-400 text-sm">Una comunidad segura y bien administrada incrementa el valor de las propiedades.</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                     <div className="grid grid-cols-2 gap-8">
                         <div className="text-center p-4 border-r border-b border-slate-700">
                             <div className="text-4xl font-bold text-white mb-2">99%</div>
                             <div className="text-xs text-slate-400 uppercase tracking-wider">Uptime Garantizado</div>
                         </div>
                         <div className="text-center p-4 border-b border-slate-700">
                             <div className="text-4xl font-bold text-white mb-2">-40%</div>
                             <div className="text-xs text-slate-400 uppercase tracking-wider">Carga Administrativa</div>
                         </div>
                         <div className="text-center p-4 border-r border-slate-700">
                             <div className="text-4xl font-bold text-white mb-2">24/7</div>
                             <div className="text-xs text-slate-400 uppercase tracking-wider">Soporte Técnico</div>
                         </div>
                         <div className="text-center p-4">
                             <div className="text-4xl font-bold text-white mb-2">150+</div>
                             <div className="text-xs text-slate-400 uppercase tracking-wider">Comunidades</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* TESTIMONIALS - Professional */}
      <section id="testimonials" className="min-h-screen flex flex-col justify-center py-24 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-slate-500">Testimonios de administradores y residentes satisfechos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "La implementación del motor de cobranzas automatizó el seguimiento de pagos. Recuperamos flujo de caja crítico en los primeros 3 meses.",
                name: "Ing. Roberto Méndez",
                role: "Director de Operaciones, Los Pinos",
                stars: 5
              },
              {
                text: "Desde que usamos el sistema de control de accesos, eliminamos completamente el ingreso no autorizado. La sensación de seguridad es total.",
                name: "Lic. Carolina Vega",
                role: "Gerente General, Altos del Bosque",
                stars: 5
              },
              {
                text: "La gobernanza digital transformó nuestras asambleas. Pasamos de reuniones vacías a votaciones digitales con participación récord.",
                name: "Arq. Andrés Silva",
                role: "Presidente del Directorio",
                stars: 5
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                        {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                      {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carrusel Infinito de Clientes */}
          <div className="mt-24 pt-16 border-t border-slate-200">
             <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Confían en SegUrban</p>
             
             <div className="relative overflow-hidden w-full">
                {/* Degradados laterales para efecto 'fade' */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
                
                <div className="flex w-max animate-scroll gap-16 items-center">
                    {[
                       // Colombia
                       { name: "Ciudad Jardín", country: "Colombia" },
                       { name: "ACEIS S.A.S.", country: "Colombia" },
                       { name: "Abelardo Yepes S.A.S.", country: "Colombia" },
                       { name: "Constructora Meléndez", country: "Colombia" },
                       { name: "Neivor", country: "Colombia" },
                       // Perú
                       { name: "Monterrico", country: "Perú" },
                       { name: "Rinconada del Lago", country: "Perú" },
                       { name: "Constructora Líder", country: "Perú" },
                       { name: "San Isidro Golf", country: "Perú" },
                       { name: "Chacarilla", country: "Perú" },
                       // Bolivia
                       { name: "Santa Cruz La Vieja", country: "Bolivia" },
                       { name: "Ciudad El Triunfo", country: "Bolivia" },
                       { name: "Condominio Montibello", country: "Bolivia" },
                       { name: "Buen Vivir Urbanizaciones", country: "Bolivia" },
                       { name: "Jardín Real", country: "Bolivia" },
                       // Uruguay
                       { name: "Altos de la Tahona", country: "Uruguay" },
                       { name: "Lagos de Carrasco", country: "Uruguay" },
                       { name: "Carmel", country: "Uruguay" },
                       { name: "Pueblo Mío", country: "Uruguay" },
                       { name: "Viñedos de la Tahona", country: "Uruguay" },
                       // Chile
                       { name: "ComunidadFeliz", country: "Chile" },
                       { name: "Chicureo", country: "Chile" },
                       { name: "Santa María de Manquehue", country: "Chile" },
                       { name: "Inmobiliaria Almagro", country: "Chile" },
                       { name: "Lo Barnechea", country: "Chile" },
                       // Paraguay
                       { name: "Condominio Aqua Village", country: "Paraguay" },
                       { name: "Rakiura", country: "Paraguay" },
                       { name: "Santa María de la Lomada", country: "Paraguay" },
                       { name: "San Bernardino Country", country: "Paraguay" },
                       { name: "Grupo Vierci", country: "Paraguay" },
                       // Repetición para efecto infinito (Seamless Loop)
                       { name: "Ciudad Jardín", country: "Colombia" },
                       { name: "ACEIS S.A.S.", country: "Colombia" },
                       { name: "Abelardo Yepes S.A.S.", country: "Colombia" },
                       { name: "Constructora Meléndez", country: "Colombia" },
                       { name: "Neivor", country: "Colombia" },
                       { name: "Monterrico", country: "Perú" },
                    ].map((client, idx) => (
                       <div key={idx} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity min-w-[200px]">
                          {/* Placeholder Logo - In production replace with img */}
                          <div className="text-lg font-bold text-slate-700 mb-1 whitespace-nowrap">{client.name}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{client.country}</div>
                       </div>
                    ))}
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Clean */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-24 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6 w-full">
            <div className="bg-app-primary rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para modernizar su comunidad?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Solicite una consultoría gratuita hoy mismo. Nuestros expertos evaluarán sus necesidades y le presentarán una propuesta a medida.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => setShowDemoModal(true)}
                            className="bg-white text-app-primary font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-slate-50 transition-colors transform hover:-translate-y-1"
                        >
                            Solicitar Cotización
                        </button>
                        <button 
                            className="bg-app-primary border border-white/30 text-white font-medium py-4 px-10 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Contactar Ventas
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- MODALS --- */}
      
      {/* FEATURE OVERLAY */}
      <FeatureOverlay 
        feature={activeFeature} 
        onClose={() => setActiveFeatureId(null)}
        onRequestDemo={() => { setActiveFeatureId(null); setShowDemoModal(true); }}
      />

      {/* Client Access Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} title="Acceso Clientes">
        <div className="space-y-6">
          <p className="text-slate-500 text-sm">Ingrese sus credenciales para acceder al sistema.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-slate-800 focus:outline-none focus:border-app-primary focus:ring-1 focus:ring-app-primary" placeholder="usuario@ejemplo.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-slate-800 focus:outline-none focus:border-app-primary focus:ring-1 focus:ring-app-primary" placeholder="••••••••" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center text-slate-600 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-slate-300" />
              Recordarme
            </label>
            <a href="#" className="text-app-primary hover:underline font-medium">¿Olvidó su contraseña?</a>
          </div>
          <button className="w-full bg-app-primary hover:bg-app-primaryHover text-white font-bold py-3 rounded-lg transition-colors shadow-md">
            Ingresar
          </button>
        </div>
      </Modal>

      {/* Request Demo Modal */}
      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Solicitar Información">
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
             <h4 className="text-app-primary font-bold text-sm mb-1">Atención Personalizada</h4>
             <p className="text-xs text-slate-600">Déjenos sus datos y un asesor comercial se pondrá en contacto a la brevedad.</p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-slate-800 focus:outline-none focus:border-app-primary" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Apellido</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-slate-800 focus:outline-none focus:border-app-primary" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
              <input type="email" className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-slate-800 focus:outline-none focus:border-app-primary" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teléfono</label>
              <input type="tel" className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-slate-800 focus:outline-none focus:border-app-primary" />
            </div>
            <button type="button" className="w-full bg-app-primary hover:bg-app-primaryHover text-white font-bold py-3 rounded-lg shadow-md mt-2">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </Modal>

      {/* Video Demo Modal */}
      <Modal isOpen={showVideoModal} onClose={handleCloseVideoModal} title="Conozca SegUrban" maxWidth="max-w-4xl">
         <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative group flex items-center justify-center">
             <p className="text-white text-lg">Video Promocional Corporativo</p>
             <button onClick={handleCloseVideoModal} className="absolute top-4 right-4 text-white hover:text-gray-300">
                <span className="sr-only">Cerrar</span>
             </button>
         </div>
      </Modal>

    </Layout>
  );
};

export default App;