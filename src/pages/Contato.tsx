import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse na InfraLink.",
      });
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@infralink.com.br",
      description: "Envie sua mensagem"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 9999-9999",
      description: "Atendimento comercial"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Atendemos toda a região"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 8h às 18h",
      description: "Suporte 24/7 disponível"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa com soluções personalizadas
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Envie sua Mensagem
                </h2>
                <p className="text-lg text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato 
                  o mais breve possível para atender suas necessidades.
                </p>
              </div>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Formulário de Contato
                  </CardTitle>
                  <CardDescription>
                    Todos os campos são obrigatórios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="border-input bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-input bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="border-input bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Descreva como podemos ajudar sua empresa..."
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-input bg-background"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:bg-primary-hover"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Informações de Contato
                </h2>
                <p className="text-lg text-muted-foreground">
                  Entre em contato conosco através de qualquer um dos canais abaixo.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-card transition-all duration-300 bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <Card className="mt-8 bg-gradient-primary text-primary-foreground border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">
                    Precisa de Atendimento Urgente?
                  </h3>
                  <p className="mb-4 text-blue-100">
                    Nossa equipe de suporte técnico está disponível 24/7 
                    para emergências e situações críticas.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="bg-white text-infralink-navy hover:bg-gray-100"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Ligar Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;