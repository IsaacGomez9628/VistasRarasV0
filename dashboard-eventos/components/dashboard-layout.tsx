"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import {
  LayoutDashboard,
  Ticket,
  Heart,
  Users,
  Compass,
  Settings,
  LogOut,
  Bell,
  Sun,
  Moon,
  Search,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardLayoutProps {
  children: React.ReactNode
  setCurrentView: (view: string) => void
  currentView: string
}

export function DashboardLayout({ children, setCurrentView, currentView }: DashboardLayoutProps) {
  const [userName, setUserName] = useState("Usuario")
  const [userEmail, setUserEmail] = useState("usuario@ejemplo.com")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(3)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Asegurarse de que el componente está montado para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const NavItem = ({
    icon: Icon,
    label,
    isActive,
    onClick,
  }: {
    icon: React.ElementType
    label: string
    isActive?: boolean
    onClick?: () => void
  }) => (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={cn(
        "w-full justify-start gap-3 my-1 py-6",
        isActive
          ? "bg-gradient-to-r from-vibrant-blue to-vibrant-purple text-white hover:opacity-90"
          : "hover:bg-white/80 dark:hover:bg-gray-800/80",
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Button>
  )

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-18 items-center gap-4 border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 md:px-8 py-4">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px] bg-white dark:bg-gray-900">
              <div className="flex flex-col gap-6 py-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9 border-2 border-vibrant-blue">
                    <AvatarImage src="/placeholder.svg" alt={userName} />
                    <AvatarFallback className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white">
                      {userName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{userName}</span>
                    <span className="text-xs text-muted-foreground">{userEmail}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <NavItem
                    icon={LayoutDashboard}
                    label="Dashboard"
                    isActive={currentView === "dashboard"}
                    onClick={() => {
                      setCurrentView("dashboard")
                      setIsMobileMenuOpen(false)
                    }}
                  />
                  <NavItem
                    icon={Ticket}
                    label="Mis Asistencias"
                    isActive={currentView === "mis-asistencias"}
                    onClick={() => {
                      setCurrentView("mis-asistencias")
                      setIsMobileMenuOpen(false)
                    }}
                  />
                  <NavItem icon={Heart} label="Me gustaron" />
                  <NavItem icon={Users} label="Siguiendo" />
                  <NavItem icon={Compass} label="Intereses" />
                </div>
                <div className="space-y-1">
                  <NavItem icon={Settings} label="Ajustes de la cuenta" />
                  <NavItem icon={LogOut} label="Cerrar sesión" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-1 flex items-center gap-2">
          <h1 className="text-lg font-semibold gradient-text">Dashboard de Eventos</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-vibrant-blue" />
            )}
            <span className="sr-only">Cambiar tema</span>
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5 text-vibrant-purple" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-vibrant-pink to-vibrant-red text-white">
                {notifications}
              </Badge>
            )}
            <span className="sr-only">Notificaciones</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8 border border-vibrant-blue/30">
                  <AvatarImage src="/placeholder.svg" alt={userName} />
                  <AvatarFallback className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white">
                    {userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <Avatar className="h-8 w-8 border border-vibrant-blue/30">
                  <AvatarImage src="/placeholder.svg" alt={userName} />
                  <AvatarFallback className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white">
                    {userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-0.5 leading-none">
                  <p className="font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground">{userEmail}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4 text-vibrant-blue" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4 text-vibrant-purple" />
                <span>Ajustes</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-vibrant-red focus:text-vibrant-red">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar (desktop only) */}
        <aside className="hidden w-72 flex-col border-r bg-white/80 dark:bg-gray-900/80 backdrop-blur-md md:flex">
          <div className="flex h-16 items-center border-b px-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input placeholder="Buscar..." className="pl-10 h-10 bg-muted/50 border-none w-full" />
            </div>
          </div>
          <div className="flex-1 overflow-auto py-6 px-6">
            <div className="space-y-2">
              <NavItem
                icon={LayoutDashboard}
                label="Dashboard"
                isActive={currentView === "dashboard"}
                onClick={() => setCurrentView("dashboard")}
              />
              <NavItem
                icon={Ticket}
                label="Mis Asistencias"
                isActive={currentView === "mis-asistencias"}
                onClick={() => setCurrentView("mis-asistencias")}
              />
              <NavItem icon={Heart} label="Me gustaron" />
              <NavItem icon={Users} label="Siguiendo" />
              <NavItem icon={Compass} label="Intereses" />
            </div>
          </div>
          <div className="border-t p-6">
            <div className="space-y-2">
              <NavItem icon={Settings} label="Ajustes de la cuenta" />
              <NavItem icon={LogOut} label="Cerrar sesión" />
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6 md:p-8 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

