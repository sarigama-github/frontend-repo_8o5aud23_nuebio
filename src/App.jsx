import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [q, setQ] = useState('')

  const load = async (query = '') => {
    try {
      setLoading(true)
      setError('')
      const url = new URL(`/api/products`, BACKEND)
      if (query) url.searchParams.set('q', query)
      const res = await fetch(url, { headers: { 'Content-Type': 'application/json' } })
      if (!res.ok) throw new Error('Failed to fetch products')
      const data = await res.json()
      setProducts(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSearch={(val) => { setQ(val); load(val) }} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 id="trending" className="text-xl sm:text-2xl font-bold text-zinc-900">Trending Products</h2>
          {q && <p className="text-sm text-zinc-500">Showing results for "{q}"</p>}
        </div>

        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 bg-zinc-100 rounded-xl animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="p-4 rounded-md bg-red-50 text-red-700 ring-1 ring-red-200">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <section id="deals" className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-4">Today’s Deals</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl h-28 ring-1 ring-zinc-200" />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 bg-zinc-900 text-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Get to Know Us</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Careers</li>
              <li>Blog</li>
              <li>About</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Make Money</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Sell on ShopFlow</li>
              <li>Affiliate</li>
              <li>Advertise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Payment</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
              <li>EMI</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Let Us Help You</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-white/70">© {new Date().getFullYear()} ShopFlow</div>
      </footer>
    </div>
  )
}
