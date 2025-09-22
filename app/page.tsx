"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, MapPin, Clock, Phone, Mail, Calendar, Award, Users } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ServicesSection } from "@/components/services-section"
import { LocationsSection } from "@/components/locations-section"

export default function HomePage() {
  const handleWhatsAppBooking = () => {
    const message = "Olá, gostaria de marcar uma consulta com o Dr. Victor Mario Delis"
    const whatsappUrl = `https://wa.me/244924125209?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+244924125209"
  }

  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">ViBe</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>
              <a href="#localizacoes" className="text-muted-foreground hover:text-foreground transition-colors">
                Localizações
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>
            <Button onClick={handleWhatsAppBooking} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Marcar Consulta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4" />
                  <span>Mais de 15 anos de experiência</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Dr. Victor Mario Delis
                </h1>
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold text-balance">
                  Especialista em Optometria & Oftalmologia
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Com mais de 15 anos de experiência, oferece cuidados especializados da sua visão com qualidade,
                  confiança e proximidade. Optometria, Oftalmologia e Óptica ao seu alcance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Marcar Consulta
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToServices}>
                  Conhecer Serviços
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>3 Localizações</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Milhares de Pacientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Horários Flexíveis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
                <img
                  src="/dr-victor-mario-delis-office.jpg"
                  alt="Dr. Victor Mario Delis no seu consultório oftalmológico"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Dr. Victor Mario Delis</p>
                    <p className="text-xs text-muted-foreground">15+ anos de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Conheça o Dr. Victor Mario Delis
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Um profissional dedicado ao cuidado da sua visão há mais de 15 anos
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Experiência Comprovada</h3>
                  <p className="text-sm text-muted-foreground">
                    Mais de 15 anos dedicados ao cuidado especializado da visão
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Milhares de Pacientes</h3>
                  <p className="text-sm text-muted-foreground">
                    Confiança conquistada através de cuidados personalizados
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Especialização Completa</h3>
                  <p className="text-sm text-muted-foreground">Optometria, Oftalmologia e Óptica num só lugar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Locations Section */}
      <LocationsSection />

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Reserve a sua Consulta</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Agende a sua consulta e comece a cuidar da sua visão hoje mesmo
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Informações de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+244 924 125 209</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>cayotdelis@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Múltiplas localizações em Luanda</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Porquê escolher o Dr. Victor Mario Delis?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mais de 15 anos de experiência comprovada</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Equipamentos de última tecnologia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Atendimento personalizado e próximo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Múltiplas localizações convenientes</span>
                  </li>
                </ul>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="h-6 w-6" />
                <span className="text-xl font-bold">ViBe</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Dr. Victor Mario Delis cuida da sua visão há mais de 15 anos com a mais alta qualidade profissional e
                tecnologia avançada.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Optometria</li>
                <li>Oftalmologia</li>
                <li>Óptica</li>
                <li>Assessoria Personalizada</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>cayotdelis@gmail.com</p>
                <p>+244 924 125 209</p>
                <p>Luanda, Angola</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2024 ViBe - Dr. Victor Mario Delis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
