import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  count?: number
}

export function NavLink({ href, children, count }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="group flex items-center justify-between text-2xl font-medium text-white transition-colors hover:text-[#4F46E5]"
    >
      <span>{children}</span>
      {count && (
        <span className="ml-2 rounded-full bg-white/10 px-2 py-1 text-sm">
          {count}
        </span>
      )}
    </Link>
  )
}

