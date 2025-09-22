import { Card, CardContent } from "@/components/ui/card"
import { Eye, Stethoscope, Glasses, Users } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Eye,
      title: "Optometria",
      description:
        "Exames visuais completos e personalizados para detectar problemas de visão e prescrever correções precisas.",
    },
    {
      icon: Stethoscope,
      title: "Oftalmologia",
      description:
        "Diagnóstico e tratamento médico especializado para doenças oculares e condições complexas da vista.",
    },
    {
      icon: Glasses,
      title: "Óptica",
      description:
        "Assessoria profissional e venda de lentes de alta qualidade, armações modernas e acessórios ópticos.",
    },
    {
      icon: Users,
      title: "Assessoria Personalizada",
      description:
        "Orientação especializada para recomendar o melhor serviço segundo as necessidades específicas de cada paciente.",
    },
  ]

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Os Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground text-pretty">Soluções integrais para o cuidado da sua visão</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
