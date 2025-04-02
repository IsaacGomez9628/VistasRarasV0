import type React from "react"
import { Card, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, FileText, Clock, MapPin, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function DashboardContent() {
  return (
    <div className="space-y-12 px-2 md:px-4">
      <div className="mt-6">
        <h2 className="text-3xl font-bold tracking-tight mb-3 gradient-text">Bienvenido, Usuario</h2>
        <p className="text-muted-foreground">Aquí puedes administrar tus eventos, noticias y más.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Eventos Disponibles"
          value="12"
          icon={<Calendar className="h-6 w-6" />}
          description="+2 desde la semana pasada"
          color="blue"
        />

        <StatCard
          title="Mis Asistencias"
          value="2"
          icon={<Users className="h-6 w-6" />}
          description="Próximo evento: 25 de mayo"
          color="purple"
        />

        <StatCard
          title="Noticias Recientes"
          value="8"
          icon={<FileText className="h-6 w-6" />}
          description="Última actualización: hoy"
          color="orange"
        />

        <StatCard
          title="Próximos Eventos"
          value="3"
          icon={<Clock className="h-6 w-6" />}
          description="En los próximos 30 días"
          color="green"
        />
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-8 text-vibrant-blue dark:text-vibrant-teal">
          Mis Registros a Eventos
        </h3>
        <div className="space-y-12">
          <EventCard
            title="Encuentro Gastronómico de Querétaro"
            date="25 de mayo de 2025"
            time="10:00 AM - 6:00 PM"
            location="Centro Cultural de San Juan del Río"
            tags={[
              { name: "Gastronomía", color: "orange" },
              { name: "Cultural", color: "purple" },
              { name: "Networking", color: "blue" },
            ]}
            status="Pendiente"
            color="orange"
          />

          <EventCard
            title="Querétaro Tech Summit"
            date="25 de abril de 2025"
            time="9:00 AM - 5:00 PM"
            location="Centro Cultural de Tequisquiapan"
            tags={[
              { name: "Tecnología", color: "blue" },
              { name: "Innovación", color: "green" },
              { name: "Conferencias", color: "teal" },
            ]}
            status="Pendiente"
            color="blue"
          />
        </div>

        <div className="mt-12 flex justify-end">
          <Button className="gap-2 bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:opacity-90 transition-opacity">
            <span>Ver todos los eventos</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description: string
  color: "blue" | "purple" | "orange" | "green"
}

function StatCard({ title, value, icon, description, color }: StatCardProps) {
  const colorMap = {
    blue: {
      bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-100 dark:border-blue-800",
      shadow: "shadow-blue-100 dark:shadow-none",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      lightBg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-100 dark:border-purple-800",
      shadow: "shadow-purple-100 dark:shadow-none",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500 to-pink-600",
      lightBg: "bg-orange-50 dark:bg-orange-900/20",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-100 dark:border-orange-800",
      shadow: "shadow-orange-100 dark:shadow-none",
    },
    green: {
      bg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50 dark:bg-emerald-900/20",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-100 dark:border-emerald-800",
      shadow: "shadow-emerald-100 dark:shadow-none",
    },
  }

  return (
    <Card
      className={`dashboard-stat-card p-8 ${colorMap[color].border} ${colorMap[color].shadow} hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`dashboard-stat-icon ${colorMap[color].bg} text-white`}>
          <div>{icon}</div>
        </div>
      </div>
      <div className="mt-3">
        <div className={`text-4xl font-bold ${colorMap[color].text}`}>{value}</div>
        <p className="text-xs text-muted-foreground mt-2">
          <span>{description}</span>
        </p>
      </div>
      <CardFooter className="p-0 pt-4">
        <Button variant="link" className={`h-auto p-0 text-sm ${colorMap[color].text}`}>
          Ver detalles
          <ArrowRight className="h-3 w-3 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  tags: { name: string; color: string }[]
  status: "Pendiente" | "Completado" | "Cancelado"
  color: "blue" | "purple" | "orange" | "green" | "teal"
}

function EventCard({ title, date, time, location, tags, status, color }: EventCardProps) {
  const statusClass =
    status === "Pendiente" ? "status-pending" : status === "Completado" ? "status-completed" : "status-cancelled"

  const colorMap = {
    blue: {
      accent: "border-l-8 border-l-blue-500",
      title: "text-blue-700 dark:text-blue-400",
      lightBg: "bg-blue-50 dark:bg-blue-900/20",
      icon: "icon-blue",
    },
    purple: {
      accent: "border-l-8 border-l-purple-500",
      title: "text-purple-700 dark:text-purple-400",
      lightBg: "bg-purple-50 dark:bg-purple-900/20",
      icon: "icon-purple",
    },
    orange: {
      accent: "border-l-8 border-l-orange-500",
      title: "text-orange-700 dark:text-orange-400",
      lightBg: "bg-orange-50 dark:bg-orange-900/20",
      icon: "icon-orange",
    },
    green: {
      accent: "border-l-8 border-l-emerald-500",
      title: "text-emerald-700 dark:text-emerald-400",
      lightBg: "bg-emerald-50 dark:bg-emerald-900/20",
      icon: "icon-green",
    },
    teal: {
      accent: "border-l-8 border-l-teal-500",
      title: "text-teal-700 dark:text-teal-400",
      lightBg: "bg-teal-50 dark:bg-teal-900/20",
      icon: "icon-teal",
    },
  }

  return (
    <Card className={`dashboard-event-card ml-10 ${colorMap[color].accent}`}>
      <div className="dashboard-event-header">
        <div className="flex flex-col">
          <h4 className={`text-xl font-medium ${colorMap[color].title} mb-4`}>{title}</h4>
          <div className="flex items-center text-sm text-muted-foreground mt-3 space-x-6">
            <div className="flex items-center">
              <div className={`icon-wrapper ${colorMap[color].icon} mr-3`}>
                <Calendar className="h-4 w-4" />
              </div>
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <div className={`icon-wrapper ${colorMap[color].icon} mr-3`}>
                <Clock className="h-4 w-4" />
              </div>
              <span>{time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className={`status-badge ${statusClass}`}>{status}</span>
        </div>
      </div>
      <div className="dashboard-event-content">
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <div className={`icon-wrapper ${colorMap[color].icon} mr-3`}>
              <MapPin className="h-4 w-4 flex-shrink-0" />
            </div>
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className={`icon-wrapper ${colorMap[color].icon} mr-3`}>
              <Users className="h-4 w-4 flex-shrink-0" />
            </div>
            <span>{tags.length > 2 ? "120" : "250"} asistentes confirmados</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-6">
          {tags.map((tag) => (
            <Badge key={tag.name} className={`px-5 py-2 text-sm tag-${tag.color}`}>
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="dashboard-event-footer">
        <Button
          variant="outline"
          size="lg"
          className={`px-8 py-6 mt-2 mb-2 hover:bg-${color}-50 hover:text-${color}-700 dark:hover:bg-${color}-900/20 dark:hover:text-${color}-400`}
        >
          Ver detalles
        </Button>
      </div>
    </Card>
  )
}

