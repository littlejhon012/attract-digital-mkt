import { motion } from 'motion/react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="https://i.pinimg.com/736x/a7/33/9d/a7339ddb959704cc343d97ac807a9909.jpg" 
                alt="Attracta Digital Mkt Logo" 
                className="h-10 md:h-12 w-auto object-contain rounded-md" 
              />
              <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                ATTRACTA DIGITAL MKT
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-slate-300 hover:text-white transition-colors font-medium text-sm">Sobre</a>
            <a href="#servicos" className="text-slate-300 hover:text-white transition-colors font-medium text-sm">Serviços</a>
            <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors font-medium text-sm">Portfólio</a>
            <a href="#depoimentos" className="text-slate-300 hover:text-white transition-colors font-medium text-sm">Depoimentos</a>
            
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              Fale Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-slate-300 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#050505] border-t border-white/15"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Sobre</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Serviços</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Portfólio</a>
            <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Depoimentos</a>
            
            <div className="px-3 pt-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-black px-5 py-3 rounded-full font-semibold shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                Iniciar Atendimento
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
