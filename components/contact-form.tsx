"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Phone } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá, gostaria de agendar uma consulta:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Mensagem: ${formData.message}`

    const whatsappUrl = `https://wa.me/244924125209?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+244924125209"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold mb-6">Agendar Consulta</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="O seu nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+244 XXX XXX XXX"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correio Electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva a sua consulta ou sintomas..."
              rows={4}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="mr-2 h-4 w-4" />
              Enviar Consulta
            </Button>
            <Button type="button" variant="outline" onClick={handlePhoneCall} className="flex-1 bg-transparent">
              <Phone className="mr-2 h-4 w-4" />
              Ligar Agora
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
