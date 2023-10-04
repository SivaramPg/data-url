import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 right-0 w-full h-16 z-50 border-b border-b-slate-100 shadow bg-white px-4">
      <nav className="h-full container mx-auto flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 hover:drop-shadow-md duration-100"
        >
          <div className="font-bold text-2xl md:text-3xl">
            Visualize Data URLs
          </div>
        </Link>
      </nav>
    </header>
  )
}
