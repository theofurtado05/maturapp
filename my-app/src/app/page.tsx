"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:', { email, password })
    // Implement login logic here
  }

  const onForgotPassword = () => {
    console.log('Forgot password')
    // Implement forgot password logic here
  }

  const onRegister = () => {
    console.log('Navigate to register screen')
    // Implement navigation to register screen here
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md rounded-3xl shadow-lg overflow-hidden">
          <CardHeader className="bg-primary text-white p-6">
            <CardTitle className="text-2xl font-bold text-center">MaturApp</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <form onSubmit={onLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  E-mail
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border-2 border-primary/30 rounded-xl focus:ring-red-500 focus:border-red-500"
                    
                  />
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 py-2 w-full border-2 border-primary/30 rounded-xl focus:ring-red-500 focus:border-red-500"
                    
                  />
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 h-5 w-5" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-red-500" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-red-500" />
                    )}
                  </Button>
                </div>
              </div>
              
                <Button 
                  onClick={()=>{window.location.href = '/step1'}}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Entrar
                </Button>
              
            </form>
            <div className="space-y-4">
              <Button
                variant="link"
                onClick={onForgotPassword}
                className="w-full text-red-600 hover:text-red-700"
              >
                Esqueceu sua senha?
              </Button>
              <div className="text-center">
                <span className="text-gray-600">Não tem uma conta? </span>
                <Button
                  variant="link"
                  onClick={onRegister}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Cadastre-se
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}