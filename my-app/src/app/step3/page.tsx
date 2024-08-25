"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    text: "Como o processo é documentado?",
    options: [
      { value: "1", label: "Não é documentado" },
      { value: "2", label: "Documentação básica existe" },
      { value: "3", label: "Processo bem documentado" },
      { value: "4", label: "Documentação detalhada e atualizada regularmente" },
      { value: "5", label: "Documentação completa, integrada e otimizada" }
    ]
  },
  {
    id: 2,
    text: "Como o processo é medido e controlado?",
    options: [
      { value: "1", label: "Não é medido" },
      { value: "2", label: "Medições básicas são realizadas" },
      { value: "3", label: "Métricas definidas e monitoradas regularmente" },
      { value: "4", label: "Controle estatístico do processo" },
      { value: "5", label: "Melhoria contínua baseada em métricas" }
    ]
  },
  // Adicione mais perguntas conforme necessário
]

export default function SpecificQuestionsScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  //@ts-ignore
  const onAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      console.log("Respostas finais:", answers)
      // Aqui você implementaria a lógica para finalizar o questionário
      window.location.href = '/final'
    }
  }

  const onBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      console.log('Voltar para a tela anterior')
      // Aqui você implementaria a lógica para voltar à tela anterior
    }
  }

  return (
    <div className="flex flex-col h-screen bg-red-50">
      {/* Barra superior */}
      <header className="bg-red-600 text-white p-4 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack} 
          className="mr-2 text-white hover:bg-red-500 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold flex-1 text-center">MaturApp</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-red-600 text-white p-6">
            <CardTitle className="text-2xl font-bold text-center">Avaliação do Processo</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-700">
                {questions[currentQuestion].text}
              </p>
              <RadioGroup
                onValueChange={onAnswer}

                //@ts-ignore
                value={answers[questions[currentQuestion].id]}
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 p-2">
                    <RadioGroupItem
                      value={option.value}
                      id={`option-${option.value}`}
                      className="border-2 border-red-200 text-red-600"
                    />
                    <Label
                      htmlFor={`option-${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                //@ts-ignore
                onClick={() => onAnswer(answers[questions[currentQuestion].id])}
                //@ts-ignore
                disabled={!answers[questions[currentQuestion].id]}
              >
                {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Avaliação"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Barra de navegação inferior */}
      <nav className="bg-white border-t border-red-200">
        <div className="flex justify-around">
          <Button variant="ghost" className="flex-1 py-4 text-red-600 hover:bg-red-50">
            <Home className="h-6 w-6" />
            <span className="sr-only">Início</span>
          </Button>
          <Button variant="ghost" className="flex-1 py-4 text-red-600 hover:bg-red-50">
            <User className="h-6 w-6" />
            <span className="sr-only">Perfil</span>
          </Button>
          <Button variant="ghost" className="flex-1 py-4 text-red-600 hover:bg-red-50">
            <BarChart className="h-6 w-6" />
            <span className="sr-only">Relatórios</span>
          </Button>
          <Button variant="ghost" className="flex-1 py-4 text-red-600 hover:bg-red-50">
            <Settings className="h-6 w-6" />
            <span className="sr-only">Configurações</span>
          </Button>
        </div>
      </nav>

      {/* Botão de ajuda flutuante */}
      <Button
        variant="secondary"
        size="icon"
        className="fixed bottom-20 right-4 rounded-full bg-white text-red-600 shadow-lg hover:bg-red-100"
      >
        <HelpCircle className="h-6 w-6" />
        <span className="sr-only">Ajuda</span>
      </Button>
    </div>
  )
}