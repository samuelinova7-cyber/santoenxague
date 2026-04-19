/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  Wifi, 
  Smartphone, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  ArrowRight,
  Star,
  Wind,
  Droplets,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const HERO_VIDEO_URL = "https://res.cloudinary.com/dqukldtq1/video/upload/v1776561255/santo_enxague_grook_qwzoej.mp4";
const ABOUT_VIDEO_URL = "https://res.cloudinary.com/dqukldtq1/video/upload/v1776562449/WhatsApp_Video_2026-04-18_at_10.28.03_PM_ca0rvx.mp4";

const INSTAGRAM_IMAGES = [
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776561307/Captura_de_tela_2026-03-02_130423_hi1cm4.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776561305/Captura_de_tela_2026-03-02_130412_iowytf.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776561297/Captura_de_tela_2026-03-02_130343_vbt61k.png"
];

const VideoLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`overflow-hidden rounded-lg ${className} relative bg-gray-100`}>
    <video 
      src={HERO_VIDEO_URL} 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-cover"
    />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Estrutura', href: '#about' },
    { name: 'Serviços', href: '#how-it-works' },
    { name: 'Valores', href: '#pricing' },
    { name: 'Localização', href: '#units' },
  ];

  return (
    <div className="min-h-screen bg-white/80 selection:bg-brand-purple/20 selection:text-brand-purple relative">
      {/* Background Video */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <video 
          src={HERO_VIDEO_URL} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-20 blur-[60px]"
        />
      </div>

      {/* Fixed Sticky Marquee */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-purple text-white py-2 overflow-hidden border-b border-white/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <VideoLogo className="w-8 h-8 rounded-full border border-white/20" />
              <span className="flex items-center gap-2">
                <Clock size={14} /> Aberto todos os dias: 06h às 22h
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Lavanderia Express em Uruguaiana - RS
              </span>
              <span className="flex items-center gap-2">
                <Smartphone size={14} /> Tecnologia Self-Service
              </span>
              <span className="w-2 h-2 bg-brand-green rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-8 ${scrolled ? 'glass shadow-lg py-2 md:py-3' : 'bg-white/90 backdrop-blur-sm py-3 md:py-5'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-2 md:px-6">
            <div className="flex items-center gap-4">
              <VideoLogo className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-brand-purple/20 shadow-lg" />
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <span 
                  className="font-bold text-2xl md:text-3xl tracking-tighter brand-text-shine brand-reflect" 
                  data-text="Santo Enxágue"
                >
                  Santo Enxágue
                </span>
              </motion.div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a 
                href="https://wa.me/5555991371968?text=Ol%c3%a1!%20Gostaria%20de%20saber%20como%20funciona%20a%20lavanderia%3F" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={16} /> Saiba mais
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-brand-purple" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-gray-800 hover:text-brand-purple"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5555991371968?text=Ol%c3%a1!%20Gostaria%20de%20saber%20como%20funciona%20a%20lavanderia%3F" 
                className="bg-brand-purple text-white py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-brand-purple/20"
              >
                Lavar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20 md:pt-32">
        {/* Hero Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            src={HERO_VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover blur-[10px] scale-105"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-8xl font-bold leading-tight md:leading-[1.1] mb-8 text-gray-900 drop-shadow-sm">
              Roupas <span className="text-brand-purple">limpas e secas</span> em aproximadamente 1 hora!
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 mb-10 leading-relaxed font-medium px-4 md:px-0">
              A experiência de lavanderia express em Uruguaiana que você merece. Tecnologia de ponta, conforto total e praticidade para o seu dia a dia.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#units" className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-brand-purple/40">
                Ver Localização
              </a>
              <a href="#how-it-works" className="bg-white text-brand-purple px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl border border-brand-purple/10">
                Como Funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-24 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16] max-w-[320px] mx-auto bg-white relative">
              <video 
                src={ABOUT_VIDEO_URL} 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Muito mais que uma <span className="text-brand-purple italic font-serif">lavanderia</span>.
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Na Santo Enxágue, transformamos a tarefa de lavar roupa em um momento de conveniência. Enquanto nossas máquinas de alta tecnologia cuidam das suas peças, você aproveita nosso espaço climatizado.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap className="text-brand-cyan" />, title: "Tecnologia", desc: "Máquinas modernas e eficientes." },
                { icon: <Wifi className="text-brand-purple" />, title: "Wi-Fi Grátis", desc: "Trabalhe enquanto espera." },
                { icon: <Wind className="text-brand-blue" />, title: "Climatizado", desc: "Conforto total no ambiente." },
                { icon: <Smartphone className="text-brand-green" />, title: "Self-Service", desc: "Prático e sem burocracia." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Service (B2B/Niche) */}
      <section className="py-20 bg-brand-purple text-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Lavagem de Edredons e Cobertores</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Suas máquinas domésticas não dão conta? Temos equipamentos de alta capacidade para lavar e secar suas peças mais pesadas com perfeição.
          </p>
          <a href="https://machines.sislav.com.br/YsN7B0oPye" className="inline-flex items-center gap-2 bg-brand-green text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
            Consultar Disponibilidade <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* 5. How It Works */}
      <section id="how-it-works" className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-gray-600">Simples, rápido e eficiente em 4 passos.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Traga sua Roupa", desc: "Use nossos cestos de medida padrão para organizar suas peças." },
              { step: "02", title: "Escolha o Ciclo", desc: "Selecione lavagem ou secagem conforme sua necessidade." },
              { step: "03", title: "Pagamento", desc: "Pague de forma rápida no totem ou diretamente na máquina." },
              { step: "04", title: "Pronto!", desc: "Em cerca de 60 minutos suas roupas estarão limpas e secas." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-bold text-gray-100 absolute -top-10 -left-4 group-hover:text-brand-purple/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-brand-purple">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" className="py-24 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
            <p className="text-gray-600">Economia e qualidade para o seu bolso.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-brand-purple transition-colors group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Droplets size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ciclo Padrão</h3>
              <p className="text-gray-500 mb-6">Lavagem ou Secagem</p>
              <ul className="space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-brand-green" /> Lavagem em 35 min
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-brand-green" /> Secagem em até 45 min
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-brand-green" /> Sabão e amaciante OMO/Confort inclusos automaticamente.
                </li>
              </ul>
              <a 
                href="https://wa.me/5555991371968?text=Ol%c3%a1!%20Gostaria%20de%20saber%20como%20funciona%20a%20lavanderia%3F"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-brand-purple text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue transition-all"
              >
                Saiba mais <MessageCircle size={18} />
              </a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-2 border-brand-purple relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-purple text-white px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
                Mais Procurado
              </div>
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6">
                <Wind size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lavagem ou Secagem BIG</h3>
              <p className="text-gray-500 mb-6">Ideal para edredons e peças grandes.</p>
              <ul className="space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-brand-green" /> Lavagem em 35 min
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-brand-green" /> Secagem em até 45 min
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-brand-green" /> Luz ultravioleta que ajuda na eliminação de odores e bactérias
                </li>
              </ul>
              <a 
                href="https://wa.me/5555991371968?text=Ol%c3%a1!%20Gostaria%20de%20saber%20como%20funciona%20a%20lavanderia%3F"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-brand-purple text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue transition-all"
              >
                Saiba mais <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social & Reviews */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-gray-600">Confira a experiência de quem já usa a Santo Enxágue.</p>
          </div>
          <a href="https://instagram.com/santoenxague/" className="hidden md:flex items-center gap-2 text-brand-purple font-bold hover:underline">
            Seguir no Instagram <Instagram size={20} />
          </a>
        </div>

        {/* Testimonials Marquee */}
        <div className="flex animate-marquee mb-20">
          {[
            { name: "Ana Silva", text: "Melhor lavanderia de Uruguaiana! Rápido e o cheirinho é maravilhoso.", stars: 5 },
            { name: "Carlos Eduardo", text: "Excelente para lavar edredons. Máquinas potentes e ambiente nota 10.", stars: 5 },
            { name: "Mariana Costa", text: "Praticidade total. Enquanto a roupa lava, eu trabalho no Wi-Fi. Recomendo!", stars: 5 },
            { name: "João Pedro", text: "Preço justo e resultado impecável. Não lavo mais roupa em casa.", stars: 5 },
            { name: "Ana Silva", text: "Melhor lavanderia de Uruguaiana! Rápido e o cheirinho é maravilhoso.", stars: 5 },
            { name: "Carlos Eduardo", text: "Excelente para lavar edredons. Máquinas potentes e ambiente nota 10.", stars: 5 },
          ].map((item, i) => (
            <div key={i} className="mx-4 glass p-8 rounded-3xl min-w-[350px] border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, s) => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{item.text}"</p>
              <p className="font-bold text-brand-purple">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <div className="mb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Siga nosso Instagram</h3>
              <p className="text-gray-500">Acompanhe as novidades e promoções da @santoenxague</p>
            </div>
            <a 
              href="https://instagram.com/santoenxague/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <Instagram size={20} /> Seguir @santoenxague
            </a>
          </div>

          <div className="flex animate-marquee">
            {[...INSTAGRAM_IMAGES, ...INSTAGRAM_IMAGES].map((img, i) => (
              <div key={i} className="mx-2 min-w-[280px] md:min-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 group">
                <img 
                  src={img} 
                  alt={`Instagram post ${i}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <Instagram className="text-white w-12 h-12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <a 
            href="https://g.page/r/CZTMrXFfclLZEBM/review" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 px-8 py-3 rounded-xl font-bold hover:border-brand-purple transition-colors"
          >
            Avaliar no Google <Star size={18} className="text-yellow-400" />
          </a>
        </div>
      </section>

      {/* 8. Units & Map */}
      <section id="units" className="py-24 bg-gray-900 text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-8">Onde Estamos</h2>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-brand-green shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Unidade Uruguaiana</h4>
                    <p className="text-gray-400">Rua Bento Martins, 2426<br />Uruguaiana - RS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-8">
                  <Clock className="text-brand-cyan shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Horário</h4>
                    <p className="text-gray-400">Todos os dias<br />06h às 22h</p>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/dir//Rua+Bento+Martins,+2426+-+Uruguaiana,+RS" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-4 bg-brand-purple text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue transition-all"
                >
                  Como Chegar <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-brand-green font-bold">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                Funcionamos todos os dias, incluindo sábados, domingos e feriados, das 06h:00 às 22:00.
              </div>
            </div>
            <div className="lg:col-span-2">
              <a 
                href="https://www.google.com/maps/dir//Rua+Bento+Martins,+2426+-+Uruguaiana,+RS" 
                target="_blank" 
                rel="noreferrer"
                className="block rounded-[2.5rem] overflow-hidden h-[500px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group relative"
              >
                <img 
                  src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20123030.png" 
                  alt="Mapa de Localização Santo Enxágue" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-brand-purple text-white px-8 py-4 rounded-2xl font-bold shadow-2xl">Clique para ver no Google Maps</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quanto tempo demora o ciclo?", a: "Os ciclos de lavagem duram 35 minutos e os ciclos de secagem duram até 45 minutos (podendo ser encerrado a qualquer momento). Em pouco mais de uma hora você tem suas roupas prontas para guardar!" },
              { q: "Qual o horário de funcionamento?", a: "Funcionamos todos os dias, incluindo sábados, domingos e feriados, das 06h:00 às 22:00." },
              { q: "Como funciona o autoatendimento?", a: "Você coloca as roupas no cesto de medida, escolhe sua máquina, realiza o pagamento no totem (PIX ou Cartão) e inicia o ciclo. A máquina injeta o sabão e o amaciante automaticamente! É rápido e prático!" },
              { q: "Quais são as formas de pagamento?", a: "Aceitamos PIX, Cartão de Débito e Cartão de Crédito diretamente no nosso totem." },
              { q: "Preciso levar sabão ou amaciante?", a: "Não precisa! Utilizamos as melhores marcas do mercado, OMO e Comfort, que já estão inclusos no valor e são dispensados automaticamente." },
              { q: "O que não pode ser lavado?", a: "Por higiene e segurança das máquinas, não é permitida a lavagem de: tapetes, tênis/calçados, roupas de pet, roupas hospitalares, almofadas e travesseiros." },
              { q: "Posso lavar edredon e coberta?", a: "Pode! Verifique primeiro a capacidade em nossos cestos de medida. Temos a máquina BIG, ideal para esses tipos de peça." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-lg text-brand-purple">{item.q}</h4>
                  {openFaqIndex === i ? <ChevronUp className="text-brand-purple" /> : <ChevronDown className="text-brand-purple" />}
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-20 bg-white px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-3 mb-6">
              <VideoLogo className="w-20 h-20 md:w-24 md:h-24" />
              <span className="font-bold text-3xl tracking-tight text-brand-purple">Santo Enxágue</span>
            </div>
            <p className="text-gray-500 max-w-md mb-8">
              A sua lavanderia express em Uruguaiana. Roupas limpas, secas e cheirosas com a praticidade que o seu tempo exige.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://www.instagram.com/santoenxague/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] transition-all">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575107378594&locale=pt_BR" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#4267B2] hover:border-[#4267B2] transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-brand-purple transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Suporte</h4>
            <ul className="space-y-4">
              <li className="text-gray-500">Dúvidas Frequentes</li>
              <li className="text-gray-500">Termos de Uso</li>
              <li className="text-gray-500">Privacidade</li>
              <li className="text-gray-500">Contato</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Santo Enxágue Lavanderia Express. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para Uruguaiana.</p>
        </div>
      </footer>

      {/* 10. Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5555991371968?text=Ol%c3%a1!%20Gostaria%20de%20saber%20como%20funciona%20a%20lavanderia%3F" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Dúvidas? Fale conosco!
        </span>
      </a>
    </div>
  );
}
