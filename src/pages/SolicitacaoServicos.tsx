import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Send, FileText, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SolicitacaoServicos = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    nomeContato: "",
    email: "",
    telefone: "",
    tipoServico: "",
    urgencia: "",
    descricao: "",
    orcamento: "",
    servicos: [] as string[],
    observacoes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        servicos: [...formData.servicos, service]
      });
    } else {
      setFormData({
        ...formData,
        servicos: formData.servicos.filter(s => s !== service)
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Recebemos sua solicitação e nossa equipe entrará em contato em breve com um orçamento personalizado.",
      });
      setFormData({
        nomeEmpresa: "",
        nomeContato: "",
        email: "",
        telefone: "",
        tipoServico: "",
        urgencia: "",
        descricao: "",
        orcamento: "",
        servicos: [],
        observacoes: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const servicosDisponiveis = [
    "Manutenção Preventiva de Computadores",
    "Manutenção Corretiva de Computadores",
    "Implementação de Workstations",
    "Configuração de Rede Local",
    "Cabeamento Estruturado",
    "Instalação de Sistema CFTV",
    "Configuração de Servidores",
    "Suporte Técnico On-site",
    "Consultoria em TI",
    "Backup e Recuperação de Dados"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Solicitação de Serviços</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Preencha o formulário detalhado para receber um orçamento personalizado
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Formulário de Solicitação
              </h2>
              <p className="text-lg text-muted-foreground">
                Quanto mais detalhes você fornecer, mais preciso será nosso orçamento. 
                Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                      <FileText className="mr-2 w-5 h-5" />
                      Informações da Solicitação
                    </CardTitle>
                    <CardDescription>
                      Preencha todos os campos obrigatórios marcados com *
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Dados da Empresa */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                          Dados da Empresa
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nomeEmpresa">Nome da Empresa *</Label>
                            <Input
                              id="nomeEmpresa"
                              name="nomeEmpresa"
                              type="text"
                              placeholder="Nome da sua empresa"
                              value={formData.nomeEmpresa}
                              onChange={handleChange}
                              required
                              className="border-input bg-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="nomeContato">Nome do Contato *</Label>
                            <Input
                              id="nomeContato"
                              name="nomeContato"
                              type="text"
                              placeholder="Seu nome"
                              value={formData.nomeContato}
                              onChange={handleChange}
                              required
                              className="border-input bg-background"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">E-mail *</Label>
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
                            <Label htmlFor="telefone">Telefone *</Label>
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
                        </div>
                      </div>

                      {/* Detalhes do Serviço */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                          Detalhes do Serviço
                        </h3>

                        <div className="space-y-2">
                          <Label htmlFor="tipoServico">Tipo Principal de Serviço *</Label>
                          <Select onValueChange={(value) => handleSelectChange("tipoServico", value)} required>
                            <SelectTrigger className="border-input bg-background">
                              <SelectValue placeholder="Selecione o tipo de serviço" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manutencao">Manutenção de Computadores</SelectItem>
                              <SelectItem value="workstations">Implementação de Workstations</SelectItem>
                              <SelectItem value="redes">Infraestrutura de Redes</SelectItem>
                              <SelectItem value="cftv">Sistemas de CFTV</SelectItem>
                              <SelectItem value="consultoria">Consultoria em TI</SelectItem>
                              <SelectItem value="multiplos">Múltiplos Serviços</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Serviços Específicos (marque todos que se aplicam):</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {servicosDisponiveis.map((servico) => (
                              <div key={servico} className="flex items-center space-x-2">
                                <Checkbox
                                  id={servico}
                                  checked={formData.servicos.includes(servico)}
                                  onCheckedChange={(checked) => 
                                    handleServiceChange(servico, checked as boolean)
                                  }
                                />
                                <Label htmlFor={servico} className="text-sm">
                                  {servico}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label>Nível de Urgência *</Label>
                          <RadioGroup
                            value={formData.urgencia}
                            onValueChange={(value) => handleSelectChange("urgencia", value)}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="baixa" id="baixa" />
                              <Label htmlFor="baixa">Baixa (até 7 dias)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="media" id="media" />
                              <Label htmlFor="media">Média (até 3 dias)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="alta" id="alta" />
                              <Label htmlFor="alta">Alta (24-48h)</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="orcamento">Faixa de Orçamento</Label>
                          <Select onValueChange={(value) => handleSelectChange("orcamento", value)}>
                            <SelectTrigger className="border-input bg-background">
                              <SelectValue placeholder="Selecione uma faixa (opcional)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ate-1000">Até R$ 1.000</SelectItem>
                              <SelectItem value="1000-5000">R$ 1.000 - R$ 5.000</SelectItem>
                              <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
                              <SelectItem value="10000-25000">R$ 10.000 - R$ 25.000</SelectItem>
                              <SelectItem value="acima-25000">Acima de R$ 25.000</SelectItem>
                              <SelectItem value="a-definir">A definir</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="descricao">Descrição Detalhada *</Label>
                          <Textarea
                            id="descricao"
                            name="descricao"
                            placeholder="Descreva detalhadamente o que você precisa, quantos equipamentos, localização, prazos, etc..."
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="border-input bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="observacoes">Observações Adicionais</Label>
                          <Textarea
                            id="observacoes"
                            name="observacoes"
                            placeholder="Informações complementares, horários preferidos para contato, etc..."
                            value={formData.observacoes}
                            onChange={handleChange}
                            rows={3}
                            className="border-input bg-background"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:bg-primary-hover"
                        size="lg"
                      >
                        {isSubmitting ? "Enviando Solicitação..." : "Enviar Solicitação"}
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gradient-primary text-primary-foreground border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 mr-2" />
                      <h3 className="text-lg font-semibold">Próximos Passos</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-blue-100">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">1</span>
                        <span>Análise da sua solicitação pela nossa equipe técnica</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">2</span>
                        <span>Contato em até 24 horas para esclarecimentos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">3</span>
                        <span>Envio do orçamento personalizado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">4</span>
                        <span>Agendamento e execução do serviço</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Atendimento Urgente
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Para emergências ou situações críticas, entre em contato diretamente:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Telefone:</strong> (11) 9999-9999</p>
                      <p><strong>E-mail:</strong> urgencia@infralink.com.br</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolicitacaoServicos;