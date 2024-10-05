import { Button } from "@/components/ui/button";
import { BarChart, Home, Settings, User } from "lucide-react";
import Link from "next/link";

export default function Menu(){
    return (
        <nav className="fixed bottom-0 w-full bg-white border-t border-red-200">
        <div className="flex justify-around">
          <Button onClick={()=>{
            window.location.href = '/step1'
        }}  variant="ghost" className="flex-1 py-4 text-primary hover:text-white hover:bg-primary">
            <Home className="h-6 w-6" />
            <span className="sr-only">Início</span>
          </Button>
          
        <Button onClick={()=>{
            window.location.href = '/perfil'
        }} variant="ghost" className="flex-1 py-4 text-primary hover:text-white hover:bg-primary">
            <User className="h-6 w-6" />
            <span className="sr-only">Perfil</span>
        </Button>
          
          <Button variant="ghost" className="flex-1 py-4 text-primary hover:text-white hover:bg-primary">
            <BarChart className="h-6 w-6" />
            <span className="sr-only">Relatórios</span>
          </Button>
          <Button variant="ghost" className="flex-1 py-4 text-primary hover:text-white hover:bg-primary">
            <Settings className="h-6 w-6" />
            <span className="sr-only">Configurações</span>
          </Button>
        </div>
        </nav>
    )
}