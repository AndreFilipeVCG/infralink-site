import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Monitor, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Settings,
  Award
} from "lucide-react";

const ServicosCFTV = () => {
  const devices = [
    {
      name: "DVR 8 PORTAS",
      description: "Gravador digital de vídeo com 8 canais",
      image: "/placeholder.svg"
    },
    {
      name: "Fonte Colmeia 12v 10A",
      description: "Fonte de alimentação estabilizada",
      image: "/placeholder.svg"
    },
    {
      name: "Câmera Bullet",
      description: "Câmera de segurança externa resistente",
      image: "/placeholder.svg"
    },
    {
      name: "Conector BNC balun",
      description: "Conector para transmissão de sinal",
      image: "/placeholder.svg"
    },
    {
      name: "Cabo Coaxial RG59",
      description: "Cabo para transmissão de vídeo",
      image: "/placeholder.svg"
    },
    {
      name: "HD para CFTV",
      description: "Disco rígido específico para gravação",
      image: "/placeholder.svg"
    },
    {
      name: "Suporte Universal",
      description: "Suporte ajustável para câmeras",
      image: "/placeholder.svg"
    },
    {
      name: "Monitor LED",
      description: "Monitor para visualização das câmeras",
      image: "/placeholder.svg"
    }
  ];

  const features = [
    "Monitoramento 24 horas por dia",
    "Gravação em alta definição",
    "Acesso remoto via smartphone",
    "Detecção de movimento inteligente",
    "Backup automático de gravações",
    "Resistência a intempéries"
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
              Sistemas de CFTV
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Vigilância e segurança visual para diversos ambientes da sua empresa
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
                Sistemas de CFTV
              </h2>
              <p className="text-lg text-muted-foreground">
                Um sistema de CFTV, ou Circuito Fechado de Televisão, é uma rede de câmeras 
                interligadas que monitoram e gravam áreas específicas em tempo real, 
                proporcionando vigilância e segurança visual para diversos ambientes da sua 
                empresa.
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
                alt="Equipe instalando sistema de CFTV" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Devices Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Principais Dispositivos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Equipamentos de alta qualidade para seu sistema de segurança
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {devices.map((device, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {device.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {device.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Vantagens do nosso CFTV
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">HD 1080p</div>
                  <div className="text-sm text-muted-foreground">Qualidade de Imagem</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Acesso Remoto</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">IA</div>
                  <div className="text-sm text-muted-foreground">Detecção Inteligente</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">3 Anos</div>
                  <div className="text-sm text-muted-foreground">Garantia Total</div>
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
              Proteja seu patrimônio com CFTV profissional
            </h2>
            <p className="text-xl text-blue-100">
              Entre em contato conosco e receba um orçamento personalizado 
              para seu sistema de segurança.
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
                <Link to="/contato">Agendar Consultoria</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosCFTV;