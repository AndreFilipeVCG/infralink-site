import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  HardDrive, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Users,
  ShieldCheck
} from "lucide-react";

const ServicosManutencao = () => {
  const services = [
    {
      title: "Limpeza Interna",
      description: "Remoção de poeira e detritos dos componentes",
      icon: Wrench
    },
    {
      title: "Verificação de Hardware",
      description: "Diagnóstico completo de componentes",
      icon: HardDrive
    },
    {
      title: "Otimização de Software",
      description: "Limpeza e otimização do sistema operacional",
      icon: Cpu
    },
    {
      title: "Backup de Dados",
      description: "Proteção preventiva das informações",
      icon: ShieldCheck
    }
  ];

  const materials = [
    {
      name: "Mídia de Instalação",
      description: "Dispositivo físico ou arquivo digital que contém todos os arquivos necessários para instalar ou reinstalar um sistema operacional em um computador, permitindo uma configuração inicial ou reparo do sistema.",
      image: "/placeholder.svg"
    }
  ];

  const benefits = [
    "Diagnóstico completo do hardware e software",
    "Limpeza física interna e externa",
    "Otimização do sistema operacional",
    "Verificação e correção de erros",
    "Backup preventivo de dados importantes",
    "Relatório detalhado dos serviços executados"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Especialidade InfraLink
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Manutenção de Computadores
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Mantenha seus sistemas funcionando perfeitamente
            </p>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Manutenção de Computadores
              </h2>
              <p className="text-lg text-muted-foreground">
                Garantimos operações sem interrupções ao cuidar do hardware, software e solucionar 
                problemas com eficiência. Mantenha seus sistemas funcionando perfeitamente para 
                focar no crescimento dos negócios.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contato">
                  Entre em Contato
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/src/assets/team-working.jpg" 
                alt="Técnico realizando manutenção em computador" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Nossos Serviços de Manutenção
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cuidado completo para seus equipamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Material Utilizado
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e recursos profissionais para manutenção
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <HardDrive className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {materials[0].name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {materials[0].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Por que escolher nossa manutenção?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Tempo Resposta</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Taxa Sucesso</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Computadores Atendidos</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">6 Meses</div>
                  <div className="text-sm text-muted-foreground">Garantia Serviços</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Seus computadores precisam de manutenção?
            </h2>
            <p className="text-xl text-blue-100">
              Entre em contato conosco e agende uma visita técnica gratuita 
              para avaliar suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-infralink-navy hover:bg-gray-100"
              >
                <Link to="/solicitacao">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-infralink-navy"
              >
                <Link to="/contato">Agendar Visita Técnica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosManutencao;