import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wifi, Shield, Settings, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-servers.jpg";

const Home = () => {
  const services = [
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description: "Manutenção preventiva e corretiva de equipamentos de informática.",
      path: "/servicos/manutencao"
    },
    {
      icon: Settings,
      title: "Implementação de Workstations",
      description: "Configuração e implementação de estações de trabalho personalizadas.",
      path: "/servicos/workstations"
    },
    {
      icon: Wifi,
      title: "Infraestrutura de Redes",
      description: "Projetos completos de infraestrutura de redes corporativas.",
      path: "/servicos/redes"
    },
    {
      icon: Shield,
      title: "Sistemas de CFTV",
      description: "Instalação e configuração de sistemas de monitoramento e segurança.",
      path: "/servicos/cftv"
    }
  ];

  const benefits = [
    "Equipe especializada e certificada",
    "Suporte técnico 24/7",
    "Soluções personalizadas",
    "Garantia de qualidade",
    "Preços competitivos",
    "Atendimento rápido"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              InfraLink
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-200">
                Serviços de Infraestrutura de Redes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Especialistas em implementação de workstations, manutenção de computadores, 
              infraestrutura de redes e sistemas de monitoramento CFTV.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-infralink-navy hover:bg-gray-100 font-semibold"
              >
                <Link to="/solicitacao">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-infralink-navy"
              >
                <Link to="/quem-somos">Conhecer a Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em infraestrutura de TI para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <Link to={service.path}>
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Por que escolher a InfraLink?
              </h2>
              <p className="text-lg text-muted-foreground">
                Somos uma empresa consolidada no mercado de TI, com anos de experiência 
                e um time altamente qualificado para atender suas necessidades.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                <Link to="/quem-somos">
                  Conhecer Nossa História
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h3>
                <p className="mb-6">
                  Nosso time está pronto para atender sua empresa com soluções 
                  personalizadas e suporte técnico especializado.
                </p>
                <div className="space-y-4">
                  <Button 
                    asChild 
                    variant="secondary" 
                    className="w-full bg-white text-infralink-navy hover:bg-gray-100"
                  >
                    <Link to="/contato">Entrar em Contato</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-infralink-navy"
                  >
                    <Link to="/solicitacao">Solicitar Serviço</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;