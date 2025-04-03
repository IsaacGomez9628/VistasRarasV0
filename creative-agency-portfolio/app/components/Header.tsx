"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Simulación de autenticación - en un caso real esto vendría de tu sistema de auth
  const isAuthenticated = false
  const user = isAuthenticated ? { name: "Usuario", email: "usuario@ejemplo.com" } : null

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-blue-50">
      {/* Parte superior: Logos, buscador e icono de menú */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center space-x-3">
          <img
            src="/placeholder.svg?height=56&width=150"
            alt="Logo Secretaría de Educación"
            className="h-14 object-contain"
          />
          <img src="/placeholder.svg?height=48&width=120" alt="Logo CEATyCC" className="h-12 object-contain" />
        </Link>

        <div className="flex items-center space-x-6">
          {/* Buscador con animación */}
          <div className="relative flex items-center" ref={searchRef}>
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mr-2"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Buscar noticias..."
                      className="w-64 pl-10 pr-4 py-2 rounded-full border-2 border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      autoFocus
                    />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded-full p-2 hover:bg-blue-50 transition-colors"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </Button>
          </div>

          {/* Menú hamburguesa */}
          <div className="relative" ref={menuRef}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 hover:bg-blue-50 transition-colors"
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </Button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-100 overflow-hidden"
                >
                  {isAuthenticated ? (
                    // Opciones para usuario autenticado
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-700">{user?.name || "Usuario"}</p>
                        <p className="text-xs text-gray-500 truncate mt-1">{user?.email}</p>
                      </div>
                    </>
                  ) : (
                    // Opciones para usuario no autenticado
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700">Menú</p>
                    </div>
                  )}

                  {/* Opciones comunes para todos los usuarios */}
                  <Link href="/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors">
                    Inicio
                  </Link>
                  <Link
                    href="/noticias"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                  >
                    Noticias
                  </Link>
                  <Link
                    href="/eventos"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                  >
                    Eventos
                  </Link>
                  <Link
                    href="/quienes-somos"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                  >
                    Quiénes Somos
                  </Link>

                  {isAuthenticated ? (
                    // Opciones adicionales para usuario autenticado
                    <>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/mis-asistencias"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                          Mis asistencias
                        </Link>
                        <button className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors">
                          Cerrar sesión
                        </button>
                      </div>
                    </>
                  ) : (
                    // Opciones de autenticación para usuario no autenticado
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/login"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                      >
                        Iniciar sesión
                      </Link>
                      <Link
                        href="/registro"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                      >
                        Registrarse
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}

