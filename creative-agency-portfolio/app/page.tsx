"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NewsCard from "./components/NewsCard"
import EventCard from "./components/EventCard"
import NewsSlider from "./components/NewsSlider"
import Notification from "./components/Notification"
import TeamCarousel from "./components/TeamCarousel"
import MissionVisionSection from "./components/MissionVisionSection"

export default function Home() {
  // Estado para notificaciones
  const [showLoginSuccess, setShowLoginSuccess] = useState(false)
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false)

  // Efecto para detectar parámetros de URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    // Verificar parámetros de URL para login
    if (urlParams.get("login_success") === "true") {
      setShowLoginSuccess(true)

      // Limpiar la URL
      const newUrl = window.location.pathname
      window.history.replaceState({}, document.title, newUrl)
    }

    // Verificar parámetros de URL para logout
    if (urlParams.get("logout_success") === "true") {
      setShowLogoutSuccess(true)

      // Limpiar la URL
      const newUrl = window.location.pathname
      window.history.replaceState({}, document.title, newUrl)
    }
  }, [])

  // Noticias para la sección "Presentando"
  const newsArticles = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=800",
      category: "Tech News",
      readTime: "3 min read",
      title: "IA en la industria",
      description: "Descubre como es que la IA esta reformando diferentes industrias tecnologicas.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=800",
      category: "Gadget Reviews",
      readTime: "4 min read",
      title: "Mejores Smartphones del 2025",
      description: "Descubre cuales estan siendo los mejores smartphones de este año.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=800",
      category: "Cybersecurity",
      readTime: "5 min read",
      title: "¿Como estar protegido al navegar en la web?",
      description: "Aprende sobre las ultimas formas de protegerte ante amenzas web.",
    },
  ]

  // Artículos para la sección "Lo más nuevo"
  const latestArticles = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      category: "Últimos Avances",
      readTime: "5 min de lectura",
      title: "Nanotecnología en la Medicina",
      description:
        "Explora cómo la nanotecnología está revolucionando los tratamientos médicos y la detección de enfermedades.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      category: "Ciencia y Tecnología",
      readTime: "6 min de lectura",
      title: "El avance de los materiales inteligentes",
      description:
        "Descubre cómo los materiales inteligentes están transformando la industria con sus propiedades adaptativas.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      category: "Espacio y Exploración",
      readTime: "4 min de lectura",
      title: "Misión a Marte: ¿Qué sigue?",
      description: "Un vistazo a los próximos planes y tecnologías clave para la exploración del planeta rojo.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600",
      category: "Tecnología de Consumo",
      readTime: "5 min de lectura",
      title: "El futuro de los smartphones plegables",
      description: "Analiza cómo los dispositivos plegables están evolucionando y qué esperar en los próximos años.",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=600",
      category: "Energía y Medio Ambiente",
      readTime: "4 min de lectura",
      title: "Baterías de estado sólido: La revolución energética",
      description:
        "Explora cómo esta tecnología promete mejorar la eficiencia y seguridad de las baterías en el futuro.",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=600",
      category: "Automoción",
      readTime: "5 min de lectura",
      title: "Autos eléctricos con mayor autonomía",
      description:
        "Conoce las innovaciones en baterías y motores eléctricos que están redefiniendo la movilidad sostenible.",
    },
  ]

  // Artículos para la sección "Tendencia"
  const trendArticles = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      category: "Tendencias Globales",
      readTime: "5 min de lectura",
      title: "La evolución del 5G en 2025",
      description:
        "Descubre cómo el 5G seguirá transformando la conectividad y la industria tecnológica en los próximos años.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      category: "Tendencias Globales",
      readTime: "6 min de lectura",
      title: "El auge de la Web3",
      description:
        "Explora cómo la Web3 está cambiando la forma en que interactuamos con el internet y los servicios descentralizados.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      category: "Inteligencia Artificial",
      readTime: "4 min de lectura",
      title: "El impacto de la IA en el empleo",
      description:
        "Conoce cómo la inteligencia artificial está redefiniendo los roles laborales y creando nuevas oportunidades.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600",
      category: "Tendencias Globales",
      readTime: "5 min de lectura",
      title: "Realidad Virtual en la educación",
      description:
        "Analiza cómo la realidad virtual está revolucionando la enseñanza y el aprendizaje en todo el mundo.",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=600",
      category: "Energías",
      readTime: "4 min de lectura",
      title: "El futuro de la energía renovable",
      description:
        "Descubre los últimos avances en energía solar, eólica y otras fuentes sostenibles para un planeta más verde.",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=600",
      category: "Innovación Tecnológica",
      readTime: "5 min de lectura",
      title: "Computación Cuántica: La próxima revolución",
      description:
        "Explora cómo la computación cuántica está transformando la ciencia y la tecnología con su poder de procesamiento sin precedentes.",
    },
  ]

  // Eventos
  const events = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "Conferencia de Tecnología",
      description: "Únete a nosotros para explorar las últimas tendencias en tecnología.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "Workshop de Desarrollo Web",
      description: "Aprende las mejores prácticas para el desarrollo web moderno.",
    },
  ]

  // Miembros del equipo
  const teamMembers = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=300",
      name: "Ana Laura Lira Cortes",
      title: "Investigadora",
      location: "Querétaro, México",
      description:
        "La Dra. Ana Laura Lira Cortes es una destacada académica mexicana. Estudió en la Universidad Autónoma de Querétaro, obteniendo su doctorado en Innovación, Tecnología y Hábitat. Su investigación se enfoca en problemas complejos que afectan la calidad de vida, utilizando tecnología para su abordaje.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=300",
      name: "Hugo Rodríguez Reséndiz",
      title: "Profesor-Investigador",
      location: "Querétaro, México",
      description:
        "Hugo Rodríguez-Reséndiz, originario de Querétaro, México, tiene estudios en humanidades con enfoque en educación, filosofía de la ciencia, ética y bioética. Ha trabajado en innovación tecnológica, gestión del conocimiento y proyectos comunitarios.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=300",
      name: "Maribel Leyva Gaxiola",
      title: "Investigadora",
      location: "Hidalgo, México",
      description:
        "La licenciada en Sistemas Computacionales por la UAEH (2004-2008) continuó su formación con una maestría y doctorado en Gestión Tecnológica e Innovación en la UAQ. Su investigación se enfoca en Prospectiva y Difusión de Tecnologías.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=300",
      name: "Carlos Alberto Olmos Trejo",
      title: "Director General de Bibliotecas",
      location: "Querétaro, México",
      description:
        "Carlos Alberto Olmos Trejo es profesor de tiempo completo en la Facultad de Informática de la Universidad Autónoma de Querétaro. Actualmente, es Director General de Bibliotecas y Servicios Digitales de Información desde enero de 2024.",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=300",
      name: "Juan Manuel Peña Aguilar",
      title: "Coordinador de Posgrado",
      location: "Querétaro, México",
      description:
        "Juan Manuel Peña Aguilar cuenta con un Doctorado en Gestión Tecnológica e Innovación y varias maestrías en ingeniería y finanzas. Ha sido reconocido con el 1er Lugar del Premio Nacional de ADIAT a la Innovación Tecnológica 2017.",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=300",
      name: "Victor Alegandro Gonzáles Huitrón",
      title: "Profesor-Investigador",
      location: "Querétaro, México",
      description:
        "El doctor Victor Alejandro obtuvo su licenciatura en Ingeniería en Comunicaciones y Electrónica en 2009, seguida de una maestría en Microelectrónica en 2013 y un doctorado en Comunicaciones y Electrónica en 2017.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notificaciones */}
      <Notification
        type="success"
        title="¡Bienvenido!"
        message="Inicio de sesión exitoso"
        show={showLoginSuccess}
        onClose={() => setShowLoginSuccess(false)}
      />

      <Notification
        type="info"
        title="¡Hasta pronto!"
        message="Sesión cerrada correctamente"
        show={showLogoutSuccess}
        onClose={() => setShowLogoutSuccess(false)}
      />

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList className="bg-blue-100 p-1 rounded-full">
            <TabsTrigger
              value="featured"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Presentando
            </TabsTrigger>
            <TabsTrigger
              value="latest"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Lo más nuevo
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Tendencia
            </TabsTrigger>
          </TabsList>

          {/* Contenido para "Presentando" */}
          <TabsContent value="featured">
            <NewsSlider articles={newsArticles} />
          </TabsContent>

          {/* Contenido para "Lo más nuevo" */}
          <TabsContent value="latest">
            <div className="grid md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  id={article.id}
                  image={article.image}
                  category={article.category}
                  readTime={article.readTime}
                  title={article.title}
                  description={article.description}
                />
              ))}
            </div>
          </TabsContent>

          {/* Contenido para "Tendencia" */}
          <TabsContent value="trending">
            <div className="grid md:grid-cols-2 gap-6">
              {trendArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  id={article.id}
                  image={article.image}
                  category={article.category}
                  readTime={article.readTime}
                  title={article.title}
                  description={article.description}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Sección de eventos */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Próximos Eventos</h2>
            <Link href="/eventos">
              <Button variant="outline">Ver Todos</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
        </section>

        {/* Sección de Misión, Visión y Objetivos */}
        <MissionVisionSection />

        {/* Sección de Quiénes Somos */}
        <TeamCarousel teamMembers={teamMembers} />
      </main>
    </div>
  )
}

