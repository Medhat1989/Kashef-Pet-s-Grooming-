import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group glass-liquid rounded-2xl border border-white/30 overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-neutral-50/50 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="glass-liquid px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-600 border border-white/40">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors">{product.name}</h3>
        <p className="text-xs text-neutral-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-neutral-900">{product.price.toFixed(2)} EGP</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 rounded-xl glass-liquid-dark light-sweep text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
