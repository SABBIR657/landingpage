interface SocialLinkProps {
  href: string
  children: React.ReactNode
}

export function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="text-sm text-white/60 transition-colors hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

