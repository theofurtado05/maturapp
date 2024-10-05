"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Header from '../_components/header'
import Menu from '../_components/menu'

const questions = [
  {
    id: 1,
    text: "1. Como você descreveria a padronização e documentação dos processos na sua organização?​​",
    options: [
      { value: "1", label: "Não há padronização e documentação formalizada na organização." },
      { value: "2", label: "Os processos estão padronizados e documentados de forma básica, mas a documentação não é suficiente para garantir consistência na execução." },
      { value: "3", label: "A maioria dos processos está padronizada e bem documentada, mas a adesão da documentação varia de acordo com cada colaborador." },
      { value: "4", label: "Todos os processos estão padronizados e documentados, mas a documentação não é acessível aos colaboradores." },
      { value: "5", label: "Todos os processos estão padronizados e documentados, de forma acessível aos colaboradores." }
    ]
  },
  {
    id: 2,
    text: "2. Qual é o nível de automação dos processos na sua organização?​​",
    options: [
      { value: "1", label: "Não há automação, todos os processos são realizados de forma manual." },
      { value: "2", label: "Poucos processos são automatizados, mas a maioria é realizado de forma manual." },
      { value: "3", label: "Muitos processos são automatizados, mas alguns ainda requerem intervenção manual significativa." },
      { value: "4", label: "Os processos críticos para a operação da empresa são totalmente automatizados." },
      { value: "5", label: "A automação é implementada em toda a organização, com integração completa entre processos e sistemas." }
    ]
  },
  {
    id: 3,
    text: "3. Qual o nível de mapeamento dos processos da empresa?​​",
    options: [
      { value: "1", label: "Não há mapeamento formal dos processos da empresa." },
      { value: "2", label: "Alguns processos são mapeados, mas sem padrão definido devido à ausência de formalização e conhecimento sobre o mapeamento de processos." },
      { value: "3", label: "A maioria dos processos possui mapeamento, ajudando na identificação de melhorias." },
      { value: "4", label: "Realizamos o mapeamento completo dos processos." },
      { value: "5", label: "O mapeamento de processos é detalhado e revisado continuamente para aplicação de melhorias contínuas." }
    ]
  },
  {
    id: 4,
    text: "4. Como a organização lida com a medição e monitoramento dos processos?​​",
    options: [
      { value: "1", label: "Não há medição ou monitoramento formal dos processos na empresa." },
      { value: "2", label: "São usados indicadores em alguns processos, mas sem análise aprofundada dessa métrica." },
      { value: "3", label: "A maioria dos processos tem métricas definidas, já a periodicidade do monitoramento, não." },
      { value: "4", label: "Todos os processos são medidos e monitorados regularmente, com análise de dados." },
      { value: "5", label: "Há um sistema de medição e monitoramento contínuo, com análises detalhadas e ações de melhoria, utilizando as 4 perspectivas do BSC." }
    ]
  },
  {
    id: 5,
    text: "5. De que forma a organização trata a melhoria contínua dos processos?​​",
    options: [
      { value: "1", label: "Os colaboradores não têm conhecimento acerca das melhorias nos processos." },
      { value: "2", label: "Melhorias são feitas de forma reativa, sem um plano estruturado e formalizado." },
      { value: "3", label: "Os colaboradores já ouviram falar sobre melhoria contínua, mas não sabem aplicar nos processos." },
      { value: "4", label: "Há colaboradores qualificados para implementar a melhoria contínua nos processos." },
      { value: "5", label: "Existe uma cultura de melhoria contínua na organização, com revisões frequentes dos processos da empresa." }
    ]
  },
  {
    id: 6,
    text: "6. Como a organização avalia e garante a confiabilidade dos seus processos?​​",
    options: [
      { value: "1", label: "Não há procedimentos formais para avaliar a confiabilidade dos processos." },
      { value: "2", label: "As avaliações de confiabilidade são conduzidas sem critérios formalizados, dificultando a identificação de melhorias." },
      { value: "3", label: "A confiabilidade dos processos é avaliada periodicamente." },
      { value: "4", label: "A confiabilidade dos processos é avaliada de forma estruturada, com critérios e métricas bem definidos." },
      { value: "5", label: "A confiabilidade dos processos é garantida por meio de avaliações contínuas, utilizando metodologias definidas." }
    ]
  }
];


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
      window.location.href = '/final'
    }
  }

  const onBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      console.log('Voltar para a tela anterior')
    }
  }

  return (
    <div className="flex flex-col h-screen max-h-[89vh] bg-red-50">
      {/* Barra superior */}
      <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-6">
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
                      className="h-6 w-6 border-2 border-primary/50 text-primary" // Define um tamanho fixo para o RadioGroupItem
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

              <div className="flex justify-between">
                <Button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  onClick={onBack}
                  disabled={currentQuestion === 0} // Desabilitar o botão se estiver na primeira pergunta
                >
                  Voltar
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary text-white font-semibold py-4 px-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  //@ts-ignore
                  onClick={() => onAnswer(answers[questions[currentQuestion].id])}
                  //@ts-ignore
                  disabled={!answers[questions[currentQuestion].id]}
                >
                  {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Avaliação"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Barra de navegação inferior */}
      <Menu/>
    </div>
  )
}
