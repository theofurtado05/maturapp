"use client"
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle, Share2 } from 'lucide-react'
import Header from '../_components/header'
import Menu from '../_components/menu'
import Cookies from 'cookies-js'

export default function DiagnosisResultScreen() {
  // Simulating a result. In a real app, this would come from the previous answers
  // const [result] = useState(maturityLevels[2]) // Example: Level 3 - Definido

  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    const savedPoints = localStorage.getItem('totalPoints')
    setTotalPoints(savedPoints ? parseInt(savedPoints, 10) : 0)
  }, [])

  //@ts-ignore
  const getMaturityLevel = (points: any) => {
    if (points >= 0 && points <= 10) {
      //@ts-ignore
      localStorage.setItem('video', "https://www.youtube.com/embed/11KwSkjwAyI?si=Nw6294PAqUl1cjgR")
      Cookies.set('video', "https://www.youtube.com/embed/11KwSkjwAyI?si=Nw6294PAqUl1cjgR")
      return {
        level: 1,
        title: "Inicial",
        link: "https://www.youtube.com/embed/11KwSkjwAyI?si=Nw6294PAqUl1cjgR",
        description: "Você está operando em um ambiente onde os processos são informais, imprevisíveis e, às vezes, até caóticos, devido sua instabilidade. O sucesso da sua organização depende muito da competência e heroísmo dos funcionários, e pode parecer que você está sempre 'apagando incêndios'. Não há uma padronização clara ou previsibilidade nos resultados. A comunicação entre áreas não é tão eficaz, e a gestão dos processos acaba sendo mais reativa. Pode ser frustrante, mas é importante reconhecer que sem uma base sólida, o controle e a estabilidade nos processos são difíceis de alcançar."
      }
    } else if (points >= 11 && points <= 15) {
      //@ts-ignore
      localStorage.setItem('video', "https://www.youtube.com/embed/ERSUPHFbGU4?si=BOBgLzt5vSdlnf3s")
      Cookies.set('video', "https://www.youtube.com/embed/ERSUPHFbGU4?si=BOBgLzt5vSdlnf3s")
      return {
        level: 2,
        title: "Processo em desenvolvimento",
        link: "https://www.youtube.com/embed/ERSUPHFbGU4?si=BOBgLzt5vSdlnf3s",
        description: "Você está começando a construir uma base mais estável para os seus processos. Aqui, você já começa a identificar os principais processos e repetir práticas de sucesso de projetos anteriores em aplicações similares. Destaca-se que ele pode não ser permitido para todos os projetos da organização. Os gerentes começam a ter ferramentas para planejar e controlar os custos, prazos e escopo, e você começa a ver acordos de projetos e responsabilidades sendo estruturados. Ainda assim, o sucesso muitas vezes depende do trabalho individual."        
      }
    } else if (points >= 16 && points <= 20) {
      //@ts-ignore
      localStorage.setItem('video', "https://www.youtube.com/embed/oTlVrXg6DCs?si=gnjbVDHot0HHQBTL")
      Cookies.set('video', "https://www.youtube.com/embed/oTlVrXg6DCs?si=gnjbVDHot0HHQBTL")
      return {
        level: 3,
        title: "Médio",
        link: "https://www.youtube.com/embed/oTlVrXg6DCs?si=gnjbVDHot0HHQBTL",
        description: "Você chegou a um ponto em que os processos são mais consistentes, padronizados e documentados, de forma a fornecer orientação entre os projetos. Agora, sua organização opera com um conjunto integrado de práticas, onde os processos não pertencem mais aos projetos, e sim à empresa. As equipes trabalham de forma mais colaborativa, e o treinamento é planejado conforme as necessidades de cada perfil. Isso traz mais segurança e eficiência para as operações, mas lembre-se de que ainda há caminhos a serem explorados."
      }
    } else if (points >= 21 && points <= 25) {
      //@ts-ignore
      localStorage.setItem('video', "https://www.youtube.com/embed/WeGvfZtPdug?si=0-reb1Dm0UdBWcKL")
      Cookies.set('video', "https://www.youtube.com/embed/WeGvfZtPdug?si=0-reb1Dm0UdBWcKL")
      return {
        level: 4,
        title: "Gerenciado",
        link: "https://www.youtube.com/embed/WeGvfZtPdug?si=0-reb1Dm0UdBWcKL",
        description: "Você alcançou um estágio onde os processos são bem estáveis e conhecidos por todos. A organização agora pode gerar indicadores para avaliar e monitorar o desempenho e a qualidade dos processos. Com o envolvimento forte das equipes e a alocação correta de recursos, será possível gerenciar os processos com mais precisão, de forma quantitativa a partir das métricas. Ainda assim, o foco deve ser em continuar melhorando e ajustando conforme as análises de desempenho mostram os caminhos a seguir."
      }
    } else if (points >= 26 && points <= 30) {
      //@ts-ignore
      localStorage.setItem('video', "https://www.youtube.com/embed/sxguufzRJXE?si=FiAH3RerLCVruz7X")
      Cookies.set('video', "https://www.youtube.com/embed/sxguufzRJXE?si=FiAH3RerLCVruz7X")
      return {
        level: 5,
        title: "Otimizado",
        link: "https://www.youtube.com/embed/sxguufzRJXE?si=FiAH3RerLCVruz7X",
        description: "Parabéns, você chegou ao topo! Sua organização agora foca em melhorias contínuas, aprendendo com cada projeto e utilizando indicadores para refinar processos. As inovações tecnológicas são introduzidas para otimizar ainda mais as operações. A cultura de melhoria contínua está enraizada, e todos os processos são sistematicamente aprimorados, de forma que sejam flexíveis e capazes de responder às oportunidades e mudanças. Parabéns, você faz parte de uma organização que atingiu o mais alto nível de maturidade em processos, com uma infraestrutura consolidada que apoia o desenvolvimento e a mudança constante."
      }
    } else {
      //@ts-ignore
      localStorage.setItem('video', "https://www.youtube.com/embed/11KwSkjwAyI?si=Nw6294PAqUl1cjgR")
      Cookies.set('video', "https://www.youtube.com/embed/11KwSkjwAyI?si=Nw6294PAqUl1cjgR")
      return {
        level: 0,
        title: "Calculando...",
        link: "https://www.youtube.com/embed/11KwSkjwAyI?si=Nw6294PAqUl1cjgR",
        description: "Estamos calculando seu resultado, por favor aguarde..."
      }
    }
  }

  const [result, setResult] = useState<any>({})
  useEffect(() => {
    const result = getMaturityLevel(totalPoints)
    setResult(result)
  }, [totalPoints])


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