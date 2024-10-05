"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle } from 'lucide-react'
import Menu from '../_components/menu'
import Header from '../_components/header'

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
    <div className="flex flex-col h-screen max-h-[89vh] bg-red-50">
      <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-6">
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
                    className="w-full p-4 bg-white border-2 border-primary rounded-2xl focus:ring-primary focus:border-primary placeholder-gray-400"
                    
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
                    className="w-full p-4 bg-white border-2 border-primary rounded-2xl focus:ring-primary focus:border-primary placeholder-primary min-h-[120px]"
                    
                  />
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
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