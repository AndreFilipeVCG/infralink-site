import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Clock } from "lucide-react";

const QuemSomos = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer soluções completas e inovadoras em infraestrutura de TI, garantindo a máxima eficiência e segurança para nossos clientes."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência nacional em serviços de infraestrutura de redes, reconhecida pela excelência técnica e atendimento personalizado."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Comprometimento, transparência, inovação e excelência em cada projeto, sempre priorizando a satisfação dos nossos clientes."
    }
  ];

  const stats = [
    { number: "500+", label: "Projetos Concluídos" },
    { number: "10+", label: "Anos de Experiência" },
    { number: "50+", label: "Clientes Ativos" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Conheça a InfraLink e nossa trajetória de sucesso no mercado de TI
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A InfraLink
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A <strong className="text-foreground">InfraLink</strong> é uma empresa especializada 
                  em serviços de infraestrutura de redes, com mais de 10 anos de experiência no mercado 
                  brasileiro. Fundada com o objetivo de oferecer soluções completas e inovadoras em TI, 
                  crescemos constantemente e nos tornamos referência no setor.
                </p>
                <p>
                  Nosso time é composto por profissionais altamente qualificados e certificados, 
                  especializados em <strong className="text-foreground">implementação de workstations</strong>, 
                  <strong className="text-foreground"> manutenção de computadores</strong>, 
                  <strong className="text-foreground"> infraestrutura de redes</strong> e 
                  <strong className="text-foreground"> sistemas de monitoramento CFTV</strong>.
                </p>
                <p>
                  Atendemos empresas de todos os portes, desde pequenos escritórios até grandes 
                  corporações, sempre com foco na qualidade, eficiência e satisfação do cliente. 
                  Nossa abordagem personalizada garante que cada projeto seja desenvolvido de acordo 
                  com as necessidades específicas de cada cliente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-gradient-card border-border">
                  <CardContent className="p-6">
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
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Princípios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os valores que guiam nossa empresa e orientam cada decisão que tomamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-primary transition-all duration-300 bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Especialistas em soluções completas de infraestrutura de TI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Implementação de Workstations
                    </h3>
                    <p className="text-muted-foreground">
                      Configuração completa de estações de trabalho, desde a montagem do hardware 
                      até a instalação e configuração de software especializado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Manutenção de Computadores
                    </h3>
                    <p className="text-muted-foreground">
                      Serviços de manutenção preventiva e corretiva, garantindo o máximo 
                      desempenho e vida útil dos seus equipamentos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Infraestrutura de Redes
                    </h3>
                    <p className="text-muted-foreground">
                      Projetos completos de cabeamento estruturado, configuração de switches, 
                      roteadores e toda a infraestrutura de rede corporativa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Sistemas de Monitoramento CFTV
                    </h3>
                    <p className="text-muted-foreground">
                      Instalação e configuração de sistemas de circuito fechado de TV, 
                      garantindo segurança e monitoramento 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;