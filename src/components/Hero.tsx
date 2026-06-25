import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop" 
          alt="Equipe trabalhando feliz e conectada" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#38bdf8] text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#38bdf8]"></span>
              Transformando a presença da sua marca
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] font-normal">
              Aumente sua <span className="text-[#38bdf8] italic">visibilidade</span> e atraia os clientes certos.
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl font-sans">
              Na Attracta Digital Mkt, não fazemos apenas marketing. Criamos conexões reais, valorizamos a história da sua empresa e implementamos estratégias humanas e tecnológicas para o seu negócio decolar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5511971211201" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                Falar com um Consultor
              </a>
              <a 
                href="#servicos" 
                className="group flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              >
                Conhecer Serviços
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-slate-400 text-sm font-medium">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Cliente feliz" />
                <img className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80" alt="Cliente feliz" />
                <img className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Cliente feliz" />
                <div className="w-10 h-10 rounded-full border-2 border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold">+50</div>
              </div>
              <p>Empresas transformadas por nossa mentoria</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
