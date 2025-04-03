"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TeamMemberCard from "./TeamMemberCard"
import { Button } from "@/components/ui/button"

interface TeamMember {
  id: number
  image: string
  name: string
  title: string
  location: string
  description: string
}

interface TeamCarouselProps {
  teamMembers: TeamMember[]
}

export default function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2

      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })

      // Pequeño retraso para permitir que el scroll se complete antes de verificar
      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <div className="relative py-10 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un grupo dinámico de individuos apasionados por lo que hacemos y dedicados a entregar los mejores
            resultados para nuestros clientes.
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white hover:bg-black/80 shadow-md rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar"
            onScroll={checkScrollButtons}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 px-4">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  id={member.id}
                  image={member.image}
                  name={member.name}
                  title={member.title}
                  location={member.location}
                  description={member.description}
                />
              ))}
            </div>
          </div>

          {canScrollRight && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white hover:bg-black/80 shadow-md rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

