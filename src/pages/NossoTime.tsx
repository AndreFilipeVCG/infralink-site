import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NossoTime = () => {
  const teamMembers = [
    {
      name: "André Filipe",
      role: "Gerente de TI",
      image: "https://th.bing.com/th/id/R.88e4dc61ec7beabb9e695bf4142e7b86?rik=WcvmLuKWqnaN7A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ynSsG6h2Ooo%2fU2BHBwEYD5I%2fAAAAAAAABL0%2f5LjUGlLxhLk%2fs1600%2frato(1).jpg&ehk=ZpG%2bMbsRDjxIfvEdH63ZR4PWs57jlOd1Ex32Wpz%2fuFo%3d&risl=&pid=ImgRaw&r=0",
      description: "Apresentamos o guardião da nossa infraestrutura digital. Com conhecimento profundo, pensamento analítico e paixão por tecnologia, André Filipe garante que nossos sistemas funcionem com segurança, velocidade e inovação contínua.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },
    {
     name: "Vinicius Gontijo",
      role: "Líder",
      image: "https://wallpapers.com/images/hd/imagens-de-ratos-you9cqjxyg57r2un.jpg",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.5xBSDBPZnsP-1yM2cg5lFAHaFy?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Apresentamos a liderança estratégica por trás de nossas operações. Com visão clara, disciplina exemplar e experiência consolidada, Ana Flávia conduz nossa administração com precisão, garantindo eficiência e crescimento sustentável.",
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
      image: "https://images.ecycle.com.br/wp-content/uploads/2022/11/03123226/joshua-j-cotten-QxW15BmJxOQ-unsplash-1024x683.jpg",
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
      name: "Maria Luiza",
      role: "Gerente de Comunicação",
      image: "https://i.pinimg.com/736x/f9/c3/77/f9c3772676c168ae6793684ea59afa67--pet-shop-boys-pet-rats.jpg",
      description: "Apresentamos a voz que conecta nossa empresa ao mundo. Com criatividade, eloquência e habilidade de engajar, Maria Luiza transforma ideias em mensagens impactantes, fortalecendo nossa presença e reputação.",
      certifications: [
        "https://images.credly.com/size/160x160/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
        "https://images.credly.com/images/29e7c859-4719-4081-a12f-6bdc073a43d2/image.png",
        "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
        "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png"
      ]
    },
    {
      name: "Felipe Maciel",
      role: "Gerente de Projeto",
      image: "https://wallpapers.com/images/featured/fundo-de-rato-lrno67qsmjkqofzh.jpg",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.7ueZsm0BdnYQ_7olzacmIgHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Apresentamos a força que mantém nosso fluxo operacional impecável. Com visão logística, atenção aos detalhes e experiência sólida, Vitor Santos garante que recursos e materiais estejam sempre disponíveis e otimizados..",
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
      image: "https://mega.ibxk.com.br/2022/05/03/meta-03164405801499.jpg?ims=600x",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.mGIAgObmv3netZgJ0su1VAHaE8?r=0&w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3",
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