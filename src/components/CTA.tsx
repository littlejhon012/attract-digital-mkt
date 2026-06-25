import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/15 rounded-[40px] p-10 md:p-16 overflow-hidden relative backdrop-blur-2xl">
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#144272]/50 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38bdf8]/20 rounded-full filter blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3 text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight"
              >
                Pronto para transformar sua presença no <span className="text-[#38bdf8] italic">digital</span>?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 font-sans mb-0"
              >
                "O verdadeiro marketing não se faz de cliques, se faz de conexões que geram confiança e valor."
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3 flex justify-center lg:justify-end shrink-0"
            >
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                  Iniciar no WhatsApp
                </div>
                <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">Atendimento humanizado</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
