"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle, Share2 } from 'lucide-react'
import Header from '../_components/header'
import Menu from '../_components/menu'

const maturityLevels = [
  {
    level: 1,
    title: "Inicial",
    description: "Processos são geralmente ad hoc e caóticos. A organização geralmente não fornece um ambiente estável para apoiar os processos.",
  },
  {
    level: 2,
    title: "Gerenciado",
    description: "Os projetos da organização têm a garantia de que os processos são planejados e executados de acordo com a política.",
  },
  {
    level: 3,
    title: "Definido",
    description: "Processos são bem caracterizados e compreendidos, e são descritos em padrões, procedimentos, ferramentas e métodos.",
  },
  {
    level: 4,
    title: "Quantitativamente Gerenciado",
    description: "A organização e projetos estabelecem objetivos quantitativos para qualidade e desempenho de processo e os utilizam como critérios na gestão de processos.",
  },
  {
    level: 5,
    title: "Em Otimização",
    description: "Uma organização melhora continuamente seus processos com base em um entendimento quantitativo das causas comuns de variação inerentes aos processos.",
  },
]

export default function DiagnosisResultScreen() {
  // Simulating a result. In a real app, this would come from the previous answers
  const [result] = useState(maturityLevels[2]) // Example: Level 3 - Definido

  const onViewNextSteps = () => {
    console.log("Navegar para a tela de Próximos Passos")
    window.location.href = '/final2'
    // Implement navigation to Next Steps screen
  }

  const onShare = () => {
    console.log("Compartilhar resultado")
    // Implement share functionality
  }

  const onBack = () => {
    console.log("Voltar para a tela anterior")
    // Implement navigation to previous screen
  }

  return (
    <div className="flex flex-col h-screen max-h-[89vh] bg-red-50">
      {/* Barra superior */}
      <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-6">
            <CardTitle className="text-2xl font-bold text-center">Resultado do Diagnóstico</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Nível {result.level} - {result.title}
              </h2>
              <div className="w-full bg-primary/20 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${(result.level / 5) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-600">{result.description}</p>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              onClick={onViewNextSteps}
            >
              Ver Próximos Passos
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary font-semibold py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              onClick={onShare}
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar Resultado
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Barra de navegação inferior */}
      <Menu/>
    </div>
  )
}