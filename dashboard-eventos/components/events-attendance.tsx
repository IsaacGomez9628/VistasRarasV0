import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, ArrowRight, Clock, User, Search, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function EventsAttendance() {
  return (
    <div className="space-y-12 px-2 md:px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6">
        <div className="flex items-center gap-6">
          <Avatar className="h-16 w-16 border-2 border-vibrant-blue shadow-lg">
            <AvatarImage src="/placeholder.svg" alt="Usuario" />
            <AvatarFallback className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white">
              U
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold mb-3 gradient-text">Usuario</h2>
            <div className="flex items-center gap-8 text-sm text-muted-foreground mt-1">
              <div className="flex items-center">
                <div className="icon-wrapper icon-purple mr-3">
                  <Ticket className="h-4 w-4 text-vibrant-purple" />
                </div>
                <span>2 eventos</span>
              </div>
              <div className="flex items-center">
                <div className="icon-wrapper icon-blue mr-3">
                  <Calendar className="h-4 w-4 text-vibrant-blue" />
                </div>
                <span>0 completados</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:opacity-90 transition-opacity">
          <span>Buscar más eventos</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="asistencias" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <TabsList className="bg-white dark:bg-gray-800 p-1 shadow-md">
              <TabsTrigger
                value="asistencias"
                className="px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-vibrant-blue data-[state=active]:to-vibrant-purple data-[state=active]:text-white"
              >
                Mis Asistencias
              </TabsTrigger>
              <TabsTrigger
                value="historial"
                className="px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-vibrant-blue data-[state=active]:to-vibrant-purple data-[state=active]:text-white"
              >
                Historial
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Buscar evento..."
                  className="pl-10 h-10 w-[220px] bg-white dark:bg-gray-800 shadow-sm"
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="default" className="gap-2 px-4 bg-white dark:bg-gray-800 shadow-sm">
                    <div className="icon-wrapper icon-purple">
                      <Filter className="h-4 w-4" />
                    </div>
                    <span>Filtrar</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Todos los eventos</DropdownMenuItem>
                  <DropdownMenuItem>Pendientes</DropdownMenuItem>
                  <DropdownMenuItem>Completados</DropdownMenuItem>
                  <DropdownMenuItem>Cancelados</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <TabsContent value="asistencias" className="mt-0">
            <div className="grid gap-12">
              <EventCard
                title="Encuentro Gastronómico de Querétaro"
                date="25 de mayo de 2025"
                time="10:00 AM - 6:00 PM"
                location="Centro Cultural de San Juan del Río"
                attendees={120}
                tags={[
                  { name: "Gastronomía", color: "orange" },
                  { name: "Cultural", color: "purple" },
                  { name: "Networking", color: "blue" },
                ]}
                color="orange"
              />

              <EventCard
                title="Querétaro Tech Summit"
                date="25 de abril de 2025"
                time="9:00 AM - 5:00 PM"
                location="Centro Cultural de Tequisquiapan"
                attendees={250}
                tags={[
                  { name: "Tecnología", color: "blue" },
                  { name: "Innovación", color: "green" },
                  { name: "Conferencias", color: "teal" },
                ]}
                color="blue"
              />
            </div>
          </TabsContent>

          <TabsContent value="historial" className="mt-0">
            <Card className="text-center p-10 border-dashed bg-white dark:bg-gray-800">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8 mb-6 shadow-inner">
                  <Ticket className="h-12 w-12 text-vibrant-purple opacity-70" />
                </div>
                <CardTitle className="text-xl mb-3 text-vibrant-blue">No hay eventos completados</CardTitle>
                <CardDescription className="mb-6 text-base">
                  Aún no has asistido a ningún evento. Cuando asistas a un evento, aparecerá aquí.
                </CardDescription>
                <Button className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:opacity-90 transition-opacity">
                  Explorar eventos
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  attendees: number
  tags: { name: string; color: string }[]
  color: "blue" | "purple" | "orange" | "green" | "teal"
}

function EventCard({ title, date, time, location, attendees, tags, color }: EventCardProps) {
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
    <Card className={`dashboard-event-card ${colorMap[color].accent}`}>
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
          <span className="status-badge status-completed">Asistido</span>
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
              <User className="h-4 w-4 flex-shrink-0" />
            </div>
            <span>{attendees} asistentes confirmados</span>
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

