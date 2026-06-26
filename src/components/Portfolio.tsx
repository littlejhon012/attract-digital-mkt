import { motion } from 'motion/react';

const projects = [
  {
    image: "https://fabricadeartigos.com.br/wp-content/uploads/2022/01/Perfil-de-Negocio-do-Google-O-que-muda-para-as-empresas.jpg",
    title: "Otimização de Reservas",
    category: "Google Perfil & Mentoria"
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
    title: "Atração de Público Local",
    category: "Consultoria Especializada"
  },
  {
    image: "https://i.pinimg.com/736x/4b/f5/03/4bf5031c82b7d9e55fac5ca5d03858a5.jpg",
    title: "Experiência Omnichannel",
    category: "WhatsApp Comercial"
  },
  {
    image: "https://i.pinimg.com/736x/49/1a/6e/491a6ee83ab96aff86b923c779e4f732.jpg",
    title: "Engajamento Visual",
    category: "Instagram & IA"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#38bdf8] font-bold tracking-[0.2em] uppercase text-xs mb-3">Nosso Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Onde a estética encontra <span className="text-[#38bdf8] italic">resultados</span>.
            </h3>
            <p className="text-lg text-slate-400 font-sans">
              Navegue por nossa galeria moderna de cases e veja como destacamos a variedade de produtos e serviços dos nossos clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-[32px] overflow-hidden group cursor-pointer border border-white/15 p-2 bg-white/5 backdrop-blur-sm ${index === 0 || index === 3 ? 'md:aspect-video aspect-square' : 'aspect-square'}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-2 rounded-[24px] bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2 text-[#38bdf8]">
                  {project.category}
                </span>
                <h4 className="text-xl font-serif text-white">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
