import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface WorkCardProps {
  title: string
  tags: string[]
  imageUrl: string
  isLatest?: boolean
}

export function WorkCard({ title, tags, imageUrl, isLatest }: WorkCardProps) {
  return (
    <div className="relative min-w-[85vw] overflow-hidden rounded-3xl md:min-w-[600px]">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        {isLatest && (
          <Badge 
            className="absolute right-4 top-4 bg-[#4F46E5] hover:bg-[#4338CA]"
          >
            Latest
          </Badge>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>
        <div className="mt-4 flex gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag}
              variant="secondary" 
              className="bg-white/10 hover:bg-white/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

