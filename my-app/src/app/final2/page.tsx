"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Share2, PlayCircle } from 'lucide-react'
import Menu from '../_components/menu'
import Header from '../_components/header'

export default function NextStepsScreen() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    "https://www.youtube.com/embed/11KwSkjwAyI?si=w7avf1OJtuI9mouw",
    "https://www.youtube.com/embed/ERSUPHFbGU4?si=c-vgSODRL7HGy789",
    "https://www.youtube.com/embed/oTlVrXg6DCs?si=L9vX0sjViFuVxc4R",
    "https://www.youtube.com/embed/WeGvfZtPdug?si=tkZEFQ8Q30SATEU0",
    "https://www.youtube.com/embed/sxguufzRJXE?si=4-yns8Kis3i3wJ47",
    "https://www.youtube.com/embed/7GXHPRxGQ2A?si=X3L6gb17OkDsj5uB"
  ]

  const onPlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const nextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
      setIsVideoPlaying(false) // Reset video playing state
    }
  }

  const previousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
      setIsVideoPlaying(false) // Reset video playing state
    }
  }

  const onBackToStart = () => {
    console.log("Voltar para o início")
  }

  const onShare = () => {
    console.log("Compartilhar resultado")
  }

  return (
    <div className="flex flex-col h-full min-h-screen pb-16 bg-red-50">
      {/* Barra superior */}
      <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4 pb-16">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-6">
            <CardTitle className="text-2xl font-bold text-center">Próximos Passos</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="relative bg-gray-200 rounded-xl overflow-hidden">
              {isVideoPlaying ? (
                <iframe
                  src={videos[currentVideoIndex]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[200px]"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-[200px]">
                  <Button
                    onClick={onPlayVideo}
                    className="bg-primary hover:bg-primary text-white rounded-full p-4 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <PlayCircle className="h-12 w-12" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center space-x-4">
              <Button
                onClick={previousVideo}
                disabled={currentVideoIndex === 0}
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              <span className="text-gray-700">{`Vídeo ${currentVideoIndex + 1} de ${videos.length}`}</span>
              <Button
                onClick={nextVideo}
                disabled={currentVideoIndex === videos.length - 1}
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Como avançar para o próximo nível</h3>
              <p className="text-gray-600">
                Estes vídeos explicativos fornecem orientações detalhadas sobre como sua organização pode 
                progredir para o próximo nível de maturidade. Assista para obter insights valiosos e 
                estratégias práticas para melhorar seus processos.
              </p>
            </div>
            <div className="space-y-4">
              <Button 
                className="w-full bg-primary hover:bg-primary text-white font-semibold py-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                onClick={onBackToStart}
              >
                Voltar para o início
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary font-semibold py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
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
      <Menu/>
    </div>
  )
}
