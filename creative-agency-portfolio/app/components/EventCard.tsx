import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  id: number
  image: string
  title: string
  description: string
}

export default function EventCard({ id, image, title, description }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <Link href={`/eventos/${id}`}>
          <Button>Ver Detalles</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

