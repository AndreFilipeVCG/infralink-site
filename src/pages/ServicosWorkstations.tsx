import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Cpu, 
  Cable, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Users,
  Zap
} from "lucide-react";

const ServicosWorkstations = () => {
  const materials = [
    {
      name: "Anilha de Identificação de cabos de rede",
      description: "Identificação organizada dos cabos",
      image: "/placeholder.svg"
    },
    {
      name: "Organizador Espiral",
      description: "Organização profissional de cabos",
      image: "/placeholder.svg"
    },
    {
      name: "Abraçadeira Plástica",
      description: "Fixação segura dos cabos",
      image: "/placeholder.svg"
    },
    {
      name: "Régua de Alimentação",
      description: "Distribuição de energia controlada",
      image: "/placeholder.svg"
    },
    {
      name: "Suporte para Monitor",
      description: "Posicionamento ergonômico",
      image: "/placeholder.svg"
    },
    {
      name: "Organizador de Mesa",
      description: "Otimização do espaço de trabalho",
      image: "/placeholder.svg"
    },
    {
      name: "Hub USB",
      description: "Conectividade expandida",
      image: "/placeholder.svg"
    },
    {
      name: "Filtro de Linha",
      description: "Proteção contra surtos elétricos",
      image: "/placeholder.svg"
    }
  ];

  const benefits = [
    "Análise ergonômica do ambiente de trabalho",
    "Organização física do espaço de trabalho",
    "Disposição adequada dos computadores e periféricos",
    "Posicionamento adequado de periféricos",
    "Organização de cabos e ajustes ergonômicos",
    "Treinamento da equipe para manutenção"
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
              Implementação de WorkStations
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Organização física do espaço de trabalho para máxima produtividade
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
                Implementação de WorkStations
              </h2>
              <p className="text-lg text-muted-foreground">
                A implementação de workstations abrange a organização física do espaço de trabalho, 
                incluindo o arranjo ergonômico das mesas, disposição dos computadores, 
                posicionamento adequado de periféricos, organização de cabos e ajustes ergonômicos 
                para garantir um ambiente confortável e produtivo para os usuários.
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
                src="/assets/workstation.jpeg"
                alt="Equipe implementando works"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover object-center" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Materiais Utilizados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Materiais de alta qualidade para organização profissional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cable className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {material.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {material.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Transforme seu ambiente de trabalho
            </h2>
            <p className="text-xl text-blue-100">
              Entre em contato conosco e receba um orçamento personalizado 
              para implementação de workstations ergonômicas.
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

export default ServicosWorkstations;