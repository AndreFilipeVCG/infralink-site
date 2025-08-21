import { Link } from "react-router-dom";
import { Network, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-infralink-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/assets/infralink.png" alt="" />
              </div>
              <span className="text-xl font-bold">InfraLink</span>
            </div>
            <p className="text-sm text-gray-300">
              Especialistas em serviços de infraestrutura de redes, oferecendo soluções 
              completas para sua empresa.
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link 
                  to="/servicos/manutencao" 
                  className="hover:text-primary transition-colors"
                >
                  Manutenção de Computadores
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/workstations" 
                  className="hover:text-primary transition-colors"
                >
                  Implementação de Workstations
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/redes" 
                  className="hover:text-primary transition-colors"
                >
                  Infraestrutura de Redes
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/cftv" 
                  className="hover:text-primary transition-colors"
                >
                  Sistemas de CFTV
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/nosso-time" className="hover:text-primary transition-colors">
                  Nosso Time
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/solicitacao" className="hover:text-primary transition-colors">
                  Solicitar Serviço
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contatoinfralink@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(31) 7179-3374</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Belo Horizonte , MG</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 InfraLink. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;