"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2, PlayCircle } from 'lucide-react'
import Menu from '../_components/menu'
import Header from '../_components/header'


export default function NextStepsScreen() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoUrl, setVideoUrl] = useState("")

  useEffect(() => {
    const video = localStorage.getItem('video')
    if (video) {
      setVideoUrl(video)
    }
  }, [])

  const onPlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const onBackToStart = () => {
    console.log("Voltar para o início")
    window.location.href = "/";
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
                  src={videoUrl}
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
