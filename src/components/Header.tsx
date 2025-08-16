import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Network } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Manutenção de Computadores", path: "/servicos/manutencao" },
    { name: "Implementação de Workstations", path: "/servicos/workstations" },
    { name: "Infraestrutura de Redes", path: "/servicos/redes" },
    { name: "Sistemas de CFTV", path: "/servicos/cftv" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-infralink-navy">
              InfraLink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:text-primary flex items-center space-x-1"
                >
                  <span>Nossos Serviços</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border border-border shadow-card">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      to={service.path}
                      className="w-full px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/quem-somos"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/quem-somos") ? "text-primary" : "text-foreground"
              }`}
            >
              Quem Somos
            </Link>

            <Link
              to="/nosso-time"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/nosso-time") ? "text-primary" : "text-foreground"
              }`}
            >
              Nosso Time
            </Link>

            <Link
              to="/contato"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contato") ? "text-primary" : "text-foreground"
              }`}
            >
              Contato
            </Link>

            <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
              <Link to="/solicitacao">Solicitar Serviço</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium py-2 px-4 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Nossos Serviços
                </p>
                <div className="flex flex-col space-y-2 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="text-sm py-1 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/quem-somos"
                className="text-sm font-medium py-2 px-4 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>

              <Link
                to="/nosso-time"
                className="text-sm font-medium py-2 px-4 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosso Time
              </Link>

              <Link
                to="/contato"
                className="text-sm font-medium py-2 px-4 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>

              <Button
                asChild
                className="mx-4 bg-gradient-primary hover:bg-primary-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/solicitacao">Solicitar Serviço</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;