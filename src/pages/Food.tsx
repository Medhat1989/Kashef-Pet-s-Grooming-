import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const FOOD_PRODUCTS: Product[] = [
  {
    id: 'f1',
    name: 'Premium Adult Dog Food',
    price: 450,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    description: 'High-protein formula with real chicken and vegetables for active dogs.'
  },
  {
    id: 'f2',
    name: 'Gourmet Cat Salmon Pate',
    price: 85,
    image: 'https://images.unsplash.com/photo-1585499193151-0f50d54c4e1c?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    description: 'Delicious wet food rich in Omega-3 for a shiny coat and healthy heart.'
  },
  {
    id: 'f3',
    name: 'Puppy Growth Formula',
    price: 520,
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    description: 'Essential nutrients and DHA for healthy brain development in puppies.'
  },
  {
    id: 'f4',
    name: 'Organic Rabbit Treats',
    price: 120,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    description: '100% natural, grain-free treats perfect for training and rewarding.'
  },
  {
    id: 'f5',
    name: 'Sensitive Stomach Kibble',
    price: 480,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    description: 'Easily digestible ingredients for pets with food sensitivities.'
  },
  {
    id: 'f6',
    name: 'Senior Pet Vitality Mix',
    price: 460,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    description: 'Joint support and antioxidants tailored for aging pets.'
  }
];

export default function Food({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">Pet's Food</h1>
        <p className="text-neutral-500 max-w-2xl">
          Discover our curated selection of high-quality, nutritious food for dogs and cats of all ages and breeds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FOOD_PRODUCTS.map((product) => (
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
