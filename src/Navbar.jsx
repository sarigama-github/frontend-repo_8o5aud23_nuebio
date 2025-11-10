import { useState } from 'react'
import { Search, MapPin, ChevronDown, ShoppingCart, User, Package2, Menu } from 'lucide-react'

function CategoryTag({ label }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
      {label}
    </span>
  )
}

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3">
            <button className="p-2 rounded-md hover:bg-white/10 lg:hidden" aria-label="Open menu">
              <Menu size={22} />
            </button>

            <a href="/" className="flex items-center gap-2 font-semibold text-lg">
              <Package2 className="text-red-400" />
              <span>ShopFlow</span>
            </a>

            <div className="hidden md:flex items-center gap-2 ml-2 text-sm text-zinc-200">
              <MapPin size={16} className="text-red-300" />
              <span>Deliver to</span>
              <button className="font-medium hover:underline underline-offset-4">Your Location</button>
              <ChevronDown size={14} />
            </div>

            <form onSubmit={submit} className="flex-1 hidden md:flex max-w-3xl mx-auto">
              <div className="flex w-full bg-white rounded-md overflow-hidden ring-2 ring-transparent focus-within:ring-red-400 transition">
                <select className="hidden sm:block bg-zinc-100 px-3 text-sm text-zinc-600 outline-none">
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                  <option>Accessories</option>
                  <option>Kitchen</option>
                </select>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 px-3 py-2 text-zinc-800 placeholder-zinc-400 outline-none"
                  placeholder="Search for products, brands and more"
                />
                <button type="submit" className="px-4 bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
                  <Search size={18} />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </form>

            <div className="ml-auto flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10">
                <User size={20} />
                <span className="text-sm">Sign In</span>
              </button>
              <button className="hidden md:flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10">
                <span className="text-sm">Orders</span>
              </button>
              <button className="relative flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10">
                <ShoppingCart size={20} />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 rounded-full w-5 h-5 grid place-items-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 text-zinc-100 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm py-2 overflow-x-auto no-scrollbar">
            {['Deals', 'Best Sellers', 'Mobiles', 'Fashion', 'Electronics', 'Home', 'Beauty', 'Books', 'Toys'].map((c) => (
              <CategoryTag key={c} label={c} />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
