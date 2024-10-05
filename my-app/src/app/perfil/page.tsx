"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Home, User, BarChart, Settings, HelpCircle, PaperclipIcon, Edit2Icon } from 'lucide-react'
import Header from '../_components/header'
import Menu from '../_components/menu'

// Simulated user data
const userData = {
  name: "João Silva",
  email: "joao.silva@example.com",
  company: "TechCorp Ltda.",
  role: "Gerente de Projetos"
}

// Simulated document list
const initialDocuments = [
  { id: 1, name: "Relatório Q1 2023", date: "2023-03-31" },
  { id: 2, name: "Plano Estratégico 2023", date: "2023-01-15" },
]

export default function ProfileScreen() {
  const [documents, setDocuments] = useState(initialDocuments)

  const onBack = () => {
    console.log("Voltar para a tela anterior")
    // Implement navigation to previous screen
  }

  const onEditProfile = () => {
    console.log("Editar perfil")
    // Implement profile editing functionality
  }

  const onAttachDocument = () => {
    // Simulating document attachment
    const newDoc = {
      id: documents.length + 1,
      name: `Novo Documento ${documents.length + 1}`,
      date: new Date().toISOString().split('T')[0]
    }
    setDocuments([...documents, newDoc])
  }

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      {/* Barra superior */}
        <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card className="w-full rounded-3xl shadow-lg overflow-hidden mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt={userData.name} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Empresa:</strong> {userData.company}</p>
              <p className="text-gray-700"><strong>Cargo:</strong> {userData.role}</p>
            </div>
            <Button 
              onClick={onEditProfile}
              className="mt-4 w-full bg-primary hover:bg-primary text-white font-semibold py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <Edit2Icon className="w-4 h-4 mr-2" />
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        <Card className="w-full rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-4">
            <CardTitle className="text-xl font-bold">Documentos Anexados</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {documents.map((doc) => (
                <Card key={doc.id} className="p-4 rounded-xl bg-white shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                      <p className="text-sm text-gray-600">Anexado em: {doc.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      <PaperclipIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <Button 
              onClick={onAttachDocument}
              className="mt-6 w-full bg-primary hover:bg-primary text-white font-semibold py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              <PaperclipIcon className="w-4 h-4 mr-2" />
              Anexar Novo Documento
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Barra de navegação inferior */}
      <Menu/>
    </div>
  )
}