import { motion } from 'motion/react';
import { Store, Smartphone, Instagram, Lightbulb, Presentation, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Store size={24} strokeWidth={1.5} />,
    title: "Google Perfil de Empresas",
    description: "Otimizamos seu perfil para que sua empresa seja a primeira escolha quando buscarem pelos seus produtos ou serviços na região."
  },
  {
    icon: <Smartphone size={24} strokeWidth={1.5} />,
    title: "WhatsApp Comercial",
    description: "Ajustamos e automatizamos seu WhatsApp com um botão de atendimento ágil para converter contatos curiosos em clientes pagantes."
  },
  {
    icon: <Instagram size={24} strokeWidth={1.5} />,
    title: "Engajamento Instagram",
    description: "Usamos Inteligência Artificial para analisar, sugerir conteúdos e aumentar a interação do público com a sua marca na rede."
  },
  {
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
    title: "Consultoria Especializada",
    description: "Análise profunda do seu negócio para identificar gargalos e oportunidades de atrair mais público e aumentar as reservas."
  },
  {
    icon: <Presentation size={24} strokeWidth={1.5} />,
    title: "Mentoria de Crescimento",
    description: "Acompanhamento premium. Nossa equipe especializada pega na sua mão para implementar estratégias de alta performance."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#38bdf8] font-bold tracking-[0.2em] uppercase text-xs mb-3">Nossas Soluções</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Serviços premium para o seu <span className="text-[#38bdf8] italic">sucesso local</span>.
            </h3>
            <p className="text-lg text-slate-400 font-sans">
              Destacamos a variedade dos seus produtos e serviços através de um ecossistema digital que atrai, engaja e vende.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#38bdf8]/20 text-[#38bdf8] rounded-2xl flex items-center justify-center mb-6 border border-[#38bdf8]/30 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                <p className="text-sm text-slate-400 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <a href="https://wa.me/5511971211201" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors underline underline-offset-4 decoration-white/30 group-hover:decoration-white">
                Saiba mais
              </a>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#144272]/40 border border-[#38bdf8]/30 p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-4">Precisa de um projeto personalizado?</h4>
              <p className="text-sm text-slate-300 font-sans mb-8">Nossa equipe de especialistas está pronta para ouvir você e desenhar a estratégia ideal.</p>
              <a 
                href="https://wa.me/5511971211201" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                Falar com a Equipe
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
