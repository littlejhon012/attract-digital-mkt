import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Users, Heart, MessageCircle, Share2, MoreHorizontal, Music } from 'lucide-react';

function ReelsMockup() {
  const sites = [
    "https://www.oticasacaz.com.br/",
    "https://www.littleitalysp.com.br/"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sites.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-[40px] overflow-hidden border-[6px] md:border-[8px] border-slate-900 aspect-[9/16] bg-slate-950 w-full max-w-[280px] md:max-w-[320px] mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-5 md:h-6 bg-slate-900 rounded-b-3xl w-1/2 mx-auto z-20 flex justify-center items-end pb-1">
        <div className="w-12 h-1.5 bg-slate-800 rounded-full"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.iframe
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          src={sites[currentIndex]}
          className="absolute inset-0 w-[400px] h-[800px] border-none pointer-events-none origin-top-left scale-[0.70] md:scale-[0.80]"
          title={`Site showcase ${currentIndex}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none z-0"></div>

      {/* Reels UI Overlay */}
      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-10">
        <div className="flex flex-col items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-white transition-transform hover:scale-110">
            <Heart size={26} className="fill-white" />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">1.2k</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-white transition-transform hover:scale-110">
            <MessageCircle size={26} className="fill-white" />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">148</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-white transition-transform hover:scale-110">
            <Share2 size={24} className="fill-transparent stroke-[2.5px]" />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">1k</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-white transition-transform hover:scale-110 mt-2">
           <MoreHorizontal size={24} />
        </div>
        <div className="w-10 h-10 rounded-md border-2 border-white/50 overflow-hidden mt-2 p-[2px] animate-[spin_6s_linear_infinite]">
          <div className="w-full h-full bg-gradient-to-br from-[#38bdf8] to-blue-600 rounded-sm flex items-center justify-center">
            <Music size={14} className="text-white" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-16 z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#38bdf8] to-blue-600 p-[2px]">
             <div className="w-full h-full bg-slate-900 rounded-full border-2 border-transparent flex items-center justify-center">
               <span className="text-white text-[10px] font-bold">AT</span>
             </div>
          </div>
          <span className="text-white font-semibold text-sm drop-shadow-md">attracta.mkt</span>
          <button className="px-3 py-1 rounded-md border border-white text-white text-xs font-semibold backdrop-blur-md ml-1">Seguir</button>
        </div>
        <p className="text-white text-xs font-medium drop-shadow-md line-clamp-2 mb-1">
          Sites de alta performance feitos pela Attracta! 🚀 Confira nossos projetos mais recentes. 
        </p>
        <div className="flex items-center gap-1 text-white/80 text-[11px] font-medium">
          <Music size={12} />
          <span>Áudio original - attracta.mkt</span>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ReelsMockup />
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#38bdf8]/10 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#144272]/30 rounded-full -z-10 blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#38bdf8] font-bold tracking-[0.2em] uppercase text-xs mb-3">Sobre a Attracta</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Mais que marketing, somos parceiros do seu <span className="text-[#38bdf8] italic">crescimento</span>.
            </h3>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-sans">
              Nascemos com o propósito de democratizar o marketing digital de alta performance para negócios locais. Acreditamos que por trás de cada empresa existe uma história que merece ser contada de forma atrativa e emocionante.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-[#38bdf8] border border-white/15">
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Missão Clara</h4>
                  <p className="text-slate-400 font-sans">Aumentar a visibilidade e atratividade da sua empresa, focando em gerar contatos reais e visitas ao seu negócio físico.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-[#38bdf8] border border-white/15">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Cuidado Excepcional</h4>
                  <p className="text-slate-400 font-sans">Nossa consultoria e mentoria são feitas lado a lado com você. Pegamos na sua mão para ajustar o perfil da sua empresa e otimizar cada etapa de contato.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://wa.me/5511971211201" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#38bdf8] transition-colors group"
              >
                Conheça nossa equipe
                <span className="w-8 h-[1px] bg-white/50 group-hover:bg-[#38bdf8] group-hover:w-12 transition-all duration-300 ml-2"></span>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
