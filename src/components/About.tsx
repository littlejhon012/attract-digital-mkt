import { motion } from 'motion/react';
import { Heart, Target, Users } from 'lucide-react';

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
            <div className="relative rounded-[32px] overflow-hidden border border-white/15 aspect-[4/5] bg-white/5 backdrop-blur-sm p-2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                alt="Equipe Attracta Mkt em reunião" 
                className="w-full h-full object-cover rounded-[24px] mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent rounded-[24px] m-2"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#38bdf8] border border-white/10">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Atendimento Humanizado</h4>
                      <p className="text-sm text-slate-300">Cada cliente é único para nós.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
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
                href="https://wa.me/5511999999999" 
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
