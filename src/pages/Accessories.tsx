import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const ACCESSORY_PRODUCTS: Product[] = [
  {
    id: 'a1',
    name: 'Leather Comfort Collar',
    price: 280,
    image: 'https://images.unsplash.com/photo-1591284539444-13936347e289?auto=format&fit=crop&q=80&w=800',
    category: 'accessory',
    description: 'Handcrafted genuine leather collar with soft padding for ultimate comfort.'
  },
  {
    id: 'a2',
    name: 'Retractable Pro Leash',
    price: 350,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800',
    category: 'accessory',
    description: '5-meter durable leash with ergonomic handle and one-button lock system.'
  },
  {
    id: 'a3',
    name: 'Orthopedic Pet Bed',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1591338673325-6078a3952434?auto=format&fit=crop&q=80&w=800',
    category: 'accessory',
    description: 'Memory foam bed that provides superior support for joints and muscles.'
  },
  {
    id: 'a4',
    name: 'Interactive Puzzle Toy',
    price: 180,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800',
    category: 'accessory',
    description: 'Stimulate your pet\'s mind with this challenging and fun treat-dispensing toy.'
  },
  {
    id: 'a5',
    name: 'Professional Grooming Brush',
    price: 150,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    category: 'accessory',
    description: 'Self-cleaning slicker brush that gently removes loose hair and tangles.'
  },
  {
    id: 'a6',
    name: 'Travel Pet Carrier',
    price: 850,
    image: 'https://images.unsplash.com/photo-1544161515-4ad6ce6bd89b?auto=format&fit=crop&q=80&w=800',
    category: 'accessory',
    description: 'Breathable and secure carrier for safe travels with your small pets.'
  }
];

export default function Accessories({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">Pet's Accessories</h1>
        <p className="text-neutral-500 max-w-2xl">
          From stylish collars to comfortable beds, find the perfect accessories to enhance your pet's lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACCESSORY_PRODUCTS.map((product) => (
          <div key={product.id}>
            <ProductCard 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
