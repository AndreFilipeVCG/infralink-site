import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NossoTime = () => {
  const teamMembers = [
    {
     name: "Vinicius Gontijo",
      role: "Líder",
      image:"/assets/membros/vinicius.jpeg",
      description: "Apresentamos a força visionária por trás de nossa empresa. Com uma mente incisiva, paixão inabalável e um histórico impressionante, Carlos lidera nossa equipe rumo a um futuro inspirador e próspero.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },
    {
      name: "Ana Flávia",
      role: "Gerente de Administração",
      image: "/assets/membros/ana.png",
      description: "Apresentamos a liderança estratégica por trás de nossas operações. Com visão clara, disciplina exemplar e experiência consolidada, Ana Flávia conduz nossa administração com precisão, garantindo eficiência e crescimento sustentável.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },{
      name: "Maria Luiza",
      role: "Gerente de Comunicação",
      image: "/assets/membros/malu.png",
      description: "Apresentamos a voz que conecta nossa empresa ao mundo. Com criatividade, eloquência e habilidade de engajar, Maria Luiza transforma ideias em mensagens impactantes, fortalecendo nossa presença e reputação.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },{
      name: "Felipe Maciel",
      role: "Gerente de Projeto",
      image: "/assets/membros/felipe.jpeg",
      description: "Apresentamos o mestre da execução estratégica. Com organização impecável, liderança inspiradora e foco em resultados, Felipe Maciel transforma desafios em conquistas, conduzindo cada projeto ao sucesso.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },{
      name: "Vitor santos",
      role: "Gerente de Materiais",
      image: "/assets/membros/vitor.jpeg",
      description: "Apresentamos a força que mantém nosso fluxo operacional impecável. Com visão logística, atenção aos detalhes e experiência sólida, Vitor Santos garante que recursos e materiais estejam sempre disponíveis e otimizados..",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },
    {
      name: "Miguel Xavier",
      role: "Gerente de IA",
      image: "/assets/membros/miguel.jpeg",
      description: "Apresentamos a mente que transforma dados em inovação. Com expertise tecnológica, curiosidade incansável e visão futurista, Miguel Xavier impulsiona nossa empresa através da inteligência artificial, moldando soluções inteligentes e eficientes.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },
    
    {
      name: "André Filipe",
      role: "Gerente de TI",
      image: "/assets/membros/andre.png",
      description: "Apresentamos o guardião da nossa infraestrutura digital. Com conhecimento profundo, pensamento analítico e paixão por tecnologia, André Filipe garante que nossos sistemas funcionem com segurança, velocidade e inovação contínua.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },{
      name: "Arthur Bison",
      role: "Colaborador",
      image: "/assets/membros/arthur.jpeg",
      description: "Apresentamos a energia que move nossa empresa diariamente. Com dedicação, talento e espírito de equipe, cada colaborador contribui para transformar nossa visão em realidade, tornando o sucesso coletivo possível.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },{
      name: "Lucas Lima",
      role: "Colaborador",
      image: "/assets/membros/lucas.jpeg",
      description: "Apresentamos a energia que move nossa empresa diariamente. Com dedicação, talento e espírito de equipe, cada colaborador contribui para transformar nossa visão em realidade, tornando o sucesso coletivo possível.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
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
            Conheça os profissionais qualificados que fazem a InfraLink entregar as melhores soluções em TI
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
                        <div className="space-y-3 ">
                          <h4 className="font-semibold text-foreground">Certificações:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.certifications.map((cert, certIndex) => (
                              <img key={certIndex} src={cert} alt="" className="w-20 h-auto" />
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
        
      </section>
    </div>
  );
};

export default NossoTime;