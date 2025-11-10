import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className="group bg-white rounded-xl shadow-sm ring-1 ring-zinc-200 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-zinc-400">No Image</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-zinc-900 line-clamp-2 min-h-[2.5rem]">{product.title}</h3>
        {product.rating && (
          <div className="mt-1 flex items-center gap-1 text-amber-500 text-xs">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        )}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-zinc-900">${product.price.toFixed(2)}</p>
          <button className="px-3 py-1.5 text-sm rounded-md bg-zinc-900 text-white hover:bg-zinc-800">Add to Cart</button>
        </div>
      </div>
    </motion.a>
  )
}
