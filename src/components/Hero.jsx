import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[54vh] sm:h-[64vh] lg:h-[72vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-5 sm:p-7 shadow-lg ring-1 ring-white/40 max-w-2xl"
        >
          <p className="text-xs font-medium tracking-wide text-red-600 uppercase">New Season</p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mt-1">
            Everything you love about shopping, now with delightful motion
          </h1>
          <p className="mt-2 text-sm sm:text-base text-zinc-700">
            Explore thousands of products with fluid micro-interactions, buttery transitions and a modern, minimalist vibe.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#deals" className="px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800">Shop Deals</a>
            <a href="#trending" className="px-4 py-2 rounded-md bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50">Explore Trending</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
