import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Dona de Restaurante",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    text: "Desde que começamos a mentoria com a Attracta, o volume de reservas triplicou. O ajuste no nosso Perfil do Google e o WhatsApp ágil mudaram o rumo do nosso negócio. O atendimento deles é de fato muito acolhedor."
  },
  {
    name: "Roberto Almeida",
    role: "Clínica de Estética",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    text: "Qualidade premium do começo ao fim. A forma como eles integraram a IA no nosso Instagram aumentou o engajamento absurdamente. Sem falar na equipe especializada que sempre tira nossas dúvidas com a maior paciência."
  },
  {
    name: "Camila Fernandes",
    role: "Loja de Roupas Locais",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    text: "Eu não tinha ideia de como destacar meus produtos online. A consultoria da Attracta abriu minha mente e hoje atraio clientes não só do meu bairro, mas da cidade inteira. Um serviço transformador e humano."
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-[#38bdf8] font-bold tracking-[0.2em] uppercase text-xs mb-3">Histórias de Sucesso</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              A experiência do cliente que <span className="text-[#38bdf8] italic">transforma</span> negócios.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <p className="text-slate-400 font-sans max-w-md text-sm">Veja o que empreendedores como você dizem sobre nossa mentoria e atendimento de qualidade.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 border border-white/15 p-8 rounded-[24px] backdrop-blur-xl relative"
            >
              <Quote size={40} className="text-white/10 absolute top-6 right-6 rotate-180" />
              
              <div className="flex gap-1 text-[#38bdf8] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              
              <p className="text-slate-300 font-sans text-sm mb-8 leading-relaxed italic relative z-10">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-sm opacity-80 mix-blend-luminosity"
                />
                <div>
                  <h5 className="font-bold text-white text-sm">{item.name}</h5>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
