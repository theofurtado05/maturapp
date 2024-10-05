"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, User, BarChart, Settings } from 'lucide-react'
import Menu from '../_components/menu'
import Header from '../_components/header'

const areas = [
  { value: 'comercial', label: 'Comercial', icon: '💼' },
  { value: 'compliance', label: 'Compliance', icon: '⚖️' },
  { value: 'qualidade', label: 'Gestão de Qualidade', icon: '🏅' },
  { value: 'contabilidade', label: 'Contabilidade', icon: '📊' },
]

export default function MobileApp() {
  const [selectedArea, setSelectedArea] = useState('')
  const [customArea, setCustomArea] = useState('')

  //@ts-ignore
  const onContinue = (area) => {
    console.log('Área selecionada:', area)
    window.location.href = '/step2'
    // Aqui você implementaria a lógica para avançar para a próxima tela
  }

  

  return (
    <div className="flex flex-col h-screen max-h-[89vh] bg-red-50">
      {/* Barra superior */}
      <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-6">
            <CardTitle className="text-2xl font-bold text-center">Perfil da Empresa</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <form onSubmit={(e) => { e.preventDefault(); onContinue(selectedArea || customArea); }}>
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-700">Qual área da empresa será avaliada?</p>
                <div className="grid grid-cols-2 gap-4">
                  {areas.map((area) => (
                    <Button
                      key={area.value}
                      type="button"
                      onClick={() => setSelectedArea(area.value)}
                      className={`p-4 text-left flex items-center justify-start space-x-2 rounded-2xl transition-colors ${
                        selectedArea === area.value
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 border-2 border-primary hover:bg-primary'
                      }`}
                    >
                      <span className="text-2xl">{area.icon}</span>
                      <span className="font-medium">{area.label}</span>
                    </Button>
                  ))}
                </div>
                <div className="relative">
                  <Input
                    placeholder="Ou digite a área da empresa"
                    value={customArea}
                    onChange={(e) => {
                      setCustomArea(e.target.value)
                      setSelectedArea('')
                    }}
                    className="w-full p-4 bg-white border-2 border-primary rounded-2xl focus:ring-primary focus:border-primary placeholder-primary"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  type="submit"
                >
                  Continuar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      {/* Barra de navegação inferior */}
      <Menu/>
    </div>
  )
}