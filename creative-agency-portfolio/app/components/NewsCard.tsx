import { Bookmark } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NewsCardProps {
  id: number
  image: string
  category: string
  readTime: string
  title: string
  description: string
}

export default function NewsCard({ id, image, category, readTime, title, description }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>{category}</span>
          <span>• {readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="flex items-center space-x-4">
          <Button>Leer Más</Button>
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

