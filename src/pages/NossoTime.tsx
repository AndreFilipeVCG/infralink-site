import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NossoTime = () => {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Líder Técnico",
      image: "/lovable-uploads/2eef37a7-4c27-4f4b-a9a3-e7b8d113b4cc.png",
      description: "Apresentamos a força visionária por trás de nossa empresa. Com uma mente incisiva, paixão inabalável e um histórico impressionante, Carlos lidera nossa equipe rumo a um futuro inspirador e próspero.",
      certifications: [
        "Cisco CCNA",
        "CompTIA Network+",
        "ITIL Foundation",
        "VMware Certified"
      ]
    },
    {
      name: "Marina Santos",
      role: "Gerente de TI",
      image: "/lovable-uploads/2eef37a7-4c27-4f4b-a9a3-e7b8d113b4cc.png",
      description: "Apresentamos nosso dedicado Gerente de TI, especialista em orquestrar tecnologia e estratégia para impulsionar a inovação e a eficiência operacional.",
      certifications: [
        "Microsoft Certified",
        "CompTIA A+",
        "Project Management",
        "ITIL Foundation"
      ]
    },
    {
      name: "Roberto Lima",
      role: "Especialista em CFTV",
      image: "/lovable-uploads/2eef37a7-4c27-4f4b-a9a3-e7b8d113b4cc.png",
      description: "Apresentamos o especialista em sistemas de monitoramento, responsável por otimizar a gestão e fluxo de segurança, garantindo eficiência na cadeia de suprimentos e mantendo um estoque estratégico para o pleno funcionamento da organização.",
      certifications: [
        "Certified Ethical Hacker",
        "CompTIA Security+",
        "Axis Certified",
        "Hikvision Certified"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nosso Time</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Conheça os profissionais especializados que fazem a InfraLink ser referência em soluções de TI
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Photo Section */}
                    <div className="bg-gradient-primary p-8 flex flex-col items-center justify-center text-primary-foreground">
                      <div className="w-32 h-32 mb-6">
                        <div className="w-full h-full rounded-full border-4 border-white bg-white p-1">
                          <img 
                            src={member.image} 
                            alt={`Foto de ${member.name}`}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-center">{member.name}</h3>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                            {member.name} - {member.role}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Certificações:</h4>
                          <div className="space-y-2">
                            {member.certifications.map((cert, certIndex) => (
                              <div key={certIndex} className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                <span className="text-muted-foreground">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Profissionais Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Certificações Técnicas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projetos Executados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NossoTime;