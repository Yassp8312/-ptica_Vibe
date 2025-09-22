import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

export function LocationsSection() {
  const locations = [
    {
      name: "Clínica Clixaro",
      address: "Miramar, frente à administração de Sambizanga",
      schedule: "Segundas e terças a partir das 14:30",
      description: "Instalações modernas com equipamentos de última geração",
    },
    {
      name: "Centro Óptico Olhos nos Olhos",
      address: "Prédio Solar de Alvalade, ao lado da OMA",
      schedule: "Segundas e quintas, 8:00–12:30",
      description: "Especializado em óptica e lentes de contacto",
    },
    {
      name: "Clínica Cardiozono",
      address: "Projecto Nova Vida, atrás das bombas Pumangol",
      schedule: "Segundas e sextas, 8:00–12:30",
      description: "Centro médico integral com serviços oftalmológicos",
    },
  ]

  return (
    <section id="localizacoes" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">As Nossas Localizações</h2>
          <p className="text-xl text-muted-foreground text-pretty">Encontre a clínica mais conveniente para si</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{location.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{location.address}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{location.schedule}</p>
                  </div>
                  <p className="text-sm text-muted-foreground/80 italic">{location.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Mapa interactivo com as 3 localizações</p>
              <p className="text-sm text-muted-foreground/80 mt-1">Brevemente disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
