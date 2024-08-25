"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle, Share2, PlayCircle } from 'lucide-react'

export default function NextStepsScreen() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const onPlayVideo = () => {
    setIsVideoPlaying(true)
    // In a real implementation, you would trigger the video to play here
  }

  const onBackToStart = () => {
    console.log("Voltar para o início")
    // Implement navigation to the start screen
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
            <CardTitle className="text-2xl font-bold text-center">Próximos Passos</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
              {isVideoPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Button
                    onClick={onPlayVideo}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <PlayCircle className="h-12 w-12" />
                  </Button>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Como avançar para o próximo nível</h3>
              <p className="text-gray-600">
                Este vídeo explicativo fornece orientações detalhadas sobre como sua organização pode 
                progredir para o próximo nível de maturidade. Assista para obter insights valiosos e 
                estratégias práticas para melhorar seus processos.
              </p>
            </div>
            <div className="space-y-4">
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={onBackToStart}
              >
                Voltar para o início
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-red-600 text-red-600 font-semibold py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={onShare}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Compartilhar resultado
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