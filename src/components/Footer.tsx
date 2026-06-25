import { MessageCircle, MapPin, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/30 text-slate-400 pt-16 pb-8 border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.pinimg.com/736x/a7/33/9d/a7339ddb959704cc343d97ac807a9909.jpg" 
                alt="Attracta Digital Mkt Logo" 
                className="h-10 md:h-12 w-auto object-contain rounded-md" 
              />
              <span className="text-lg font-bold tracking-tight text-white uppercase">
                ATTRACTA DIGITAL MKT
              </span>
            </a>
            <p className="font-sans text-sm text-slate-500 mb-6 leading-relaxed">
              Mentoria e consultoria especializada em marketing digital. Transformamos a experiência do seu cliente desde o primeiro clique.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors text-slate-400">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors text-slate-400">
                <Facebook size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li><a href="#sobre" className="hover:text-[#38bdf8] transition-colors">Sobre a Empresa</a></li>
              <li><a href="#servicos" className="hover:text-[#38bdf8] transition-colors">Nossos Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-[#38bdf8] transition-colors">Portfólio</a></li>
              <li><a href="#depoimentos" className="hover:text-[#38bdf8] transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Mentoria de Crescimento</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Consultoria de Vendas</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Google Perfil Empresas</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">WhatsApp Comercial</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Engajamento com IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">WhatsApp</p>
                  <a href="https://wa.me/5511999999999" className="hover:text-[#38bdf8] transition-colors">+55 (11) 99999-9999</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">E-mail</p>
                  <a href="mailto:contato@attractamkt.com" className="hover:text-[#38bdf8] transition-colors">contato@attractamkt.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">Endereço</p>
                  <p>Av. Paulista, 1000<br/>São Paulo - SP</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500">
          <p>&copy; {new Date().getFullYear()} Attracta Digital Mkt. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
