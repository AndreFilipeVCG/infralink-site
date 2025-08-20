import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Cable, 
  Router, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Users
} from "lucide-react";

const ServicosInfraestrutura = () => {
  const services = [
    {
      title: "Cabeamento Estruturado",
      description: "Projeto e instalação de cabeamento Cat6 e fibra óptica",
      features: ["Certificação de cabos", "Organização profissional", "Garantia de performance"],
      icon: Cable
    },
    {
      title: "Configuração de Switches",
      description: "Configuração e otimização de switches gerenciados",
      features: ["VLANs configuradas", "QoS implementado", "Monitoramento ativo"],
      icon: Router
    },
    {
      title: "Redes Wireless",
      description: "Implementação de redes Wi-Fi corporativas seguras",
      features: ["Cobertura otimizada", "Segurança WPA3", "Gestão centralizada"],
      icon: Wifi
    },
    {
      title: "Segurança de Rede",
      description: "Implementação de firewalls e sistemas de segurança",
      features: ["Firewall configurado", "Monitoramento 24/7", "Políticas de acesso"],
      icon: Shield
    }
  ];

  const benefits = [
    "Análise técnica detalhada do ambiente",
    "Projeto personalizado para sua empresa",
    "Implementação com metodologia comprovada",
    "Documentação completa da infraestrutura",
    "Treinamento da equipe interna",
    "Suporte técnico pós-implementação"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análise do Ambiente",
      description: "Levantamento completo da infraestrutura atual e necessidades"
    },
    {
      step: "02", 
      title: "Projeto Técnico",
      description: "Desenvolvimento do projeto detalhado com especificações"
    },
    {
      step: "03",
      title: "Implementação",
      description: "Execução do projeto com equipe especializada"
    },
    {
      step: "04",
      title: "Testes e Validação",
      description: "Testes completos e validação da performance da rede"
    }
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
              Infraestrutura de Redes
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Projetos completos de infraestrutura de rede corporativa, 
              desde o cabeamento até a configuração de equipamentos
            </p>
           
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Serviços de Rede
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para sua infraestrutura de rede corporativa
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
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologia comprovada para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="text-center relative bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
     
    

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para modernizar sua infraestrutura?
            </h2>
            <p className="text-xl text-blue-100">
              Entre em contato conosco e receba um orçamento personalizado 
              para seu projeto de infraestrutura de redes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-infralink-navy hover:bg-gray-100"
              >
                <Link to="/solicitacao">
                  Solicitar Serviço
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosInfraestrutura;