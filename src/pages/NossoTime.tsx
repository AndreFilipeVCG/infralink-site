import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Wrench, Wifi, Shield, Monitor } from "lucide-react";
import teamImage from "@/assets/team-working.jpg";

const NossoTime = () => {
  const teamStats = [
    { icon: Users, number: "15+", label: "Profissionais Especialistas" },
    { icon: Award, number: "50+", label: "Certificações Técnicas" },
    { icon: Wrench, number: "500+", label: "Projetos Executados" },
    { icon: Wifi, number: "24/7", label: "Suporte Disponível" }
  ];

  const specialties = [
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description: "Especialistas em diagnóstico e reparo de hardware e software",
      skills: ["Diagnóstico Avançado", "Reparo de Hardware", "Recuperação de Dados", "Otimização de Performance"]
    },
    {
      icon: Wrench,
      title: "Implementação de Workstations",
      description: "Configuração completa de estações de trabalho corporativas",
      skills: ["Montagem de Hardware", "Instalação de Software", "Configuração de Domínio", "Personalização Corporativa"]
    },
    {
      icon: Wifi,
      title: "Infraestrutura de Redes",
      description: "Projetos completos de cabeamento e configuração de redes",
      skills: ["Cabeamento Estruturado", "Configuração de Switches", "Roteamento Avançado", "Segurança de Rede"]
    },
    {
      icon: Shield,
      title: "Sistemas de CFTV",
      description: "Instalação e configuração de sistemas de monitoramento",
      skills: ["Câmeras IP", "Gravação Digital", "Monitoramento Remoto", "Análise de Imagens"]
    }
  ];

  const certifications = [
    "CompTIA A+",
    "CompTIA Network+",
    "CompTIA Security+",
    "Cisco CCNA",
    "Microsoft Certified",
    "VMware Certified",
    "ITIL Foundation",
    "Certified Ethical Hacker"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nosso Time Trabalhando</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Conheça nossa equipe de especialistas em ação, implementando soluções de TI
          </p>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Profissionais em Ação
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Nossa equipe é formada por <strong className="text-foreground">técnicos especializados</strong> e 
                  <strong className="text-foreground"> engenheiros certificados</strong> que trabalham diariamente 
                  para garantir que sua infraestrutura de TI funcione perfeitamente.
                </p>
                <p>
                  Cada membro do time possui <strong className="text-foreground">certificações reconhecidas</strong> no 
                  mercado e está constantemente se atualizando com as mais recentes tecnologias e melhores práticas da indústria.
                </p>
                <p>
                  Nossos profissionais são treinados para trabalhar com <strong className="text-foreground">metodologias ágeis</strong>, 
                  garantindo entregas rápidas e eficientes, sempre mantendo os mais altos padrões de qualidade e organização.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={teamImage} 
                  alt="Equipe da InfraLink trabalhando com equipamentos de rede e servidores"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-6 rounded-xl shadow-primary">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossa Equipe em Números
            </h2>
            <p className="text-xl text-muted-foreground">
              Estatísticas que demonstram nossa experiência e competência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Áreas de Especialização
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nosso time possui expertise técnica avançada em todas as áreas que atendemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300 bg-card border-border">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <specialty.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {specialty.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {specialty.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Competências Técnicas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {specialty.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="bg-infralink-blue-light text-infralink-navy"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-infralink-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Certificações e Qualificações
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Nossa equipe possui as principais certificações do mercado de TI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-sm font-medium">{cert}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Compromisso com a Excelência</h3>
                  <p className="text-blue-100 mb-6">
                    Nosso time está constantemente se capacitando e obtendo novas certificações 
                    para oferecer sempre o melhor serviço aos nossos clientes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold mb-1">100%</div>
                      <div className="text-sm text-blue-200">Técnicos Certificados</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">25h</div>
                      <div className="text-sm text-blue-200">Treinamento Mensal</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">5★</div>
                      <div className="text-sm text-blue-200">Avaliação dos Clientes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NossoTime;