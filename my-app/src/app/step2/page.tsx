"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle } from 'lucide-react'

export default function ProcessEvaluationScreen() {
  const [process, setProcess] = useState('')
  const [description, setDescription] = useState('')

  const onContinue = () => {
    console.log('Processo:', process)
    console.log('Descrição:', description)
    window.location.href = '/step3'
    // Aqui você implementaria a lógica para avançar para a próxima tela
  }

  const onBack = () => {
    console.log('Voltar')
    // Aqui você implementaria a lógica para voltar à tela anterior
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
            <form onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="process" className="block text-lg font-medium text-gray-700 mb-2">
                    Qual o processo da empresa a ser avaliado?
                  </label>
                  <Input
                    id="process"
                    placeholder="Ex: Gestão de Vendas, Recrutamento, etc."
                    value={process}
                    onChange={(e) => setProcess(e.target.value)}
                    className="w-full p-4 bg-white border-2 border-red-200 rounded-2xl focus:ring-red-500 focus:border-red-500 placeholder-gray-400"
                    
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
                    Descreva brevemente este processo:
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Detalhe as principais etapas ou características do processo..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-4 bg-white border-2 border-red-200 rounded-2xl focus:ring-red-500 focus:border-red-500 placeholder-gray-400 min-h-[120px]"
                    
                  />
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
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