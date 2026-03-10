import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ activeTab, setActiveTab, cartCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'food', label: 'Pet Food' },
    { id: 'accessories', label: 'Accessories' },
  ];

  return (
    <nav className="sticky top-0 z-40 glass-liquid border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="glass-liquid p-2 rounded-xl border border-white/20 shadow-sm group-hover:scale-105 transition-transform">
              <img 
                src="https://i.ibb.co/jkSTbtZq/kashef-logo-removebg-preview.png" 
                alt="KASHEF" 
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold tracking-tight text-neutral-900 block leading-none">KASHEF</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">Grooming & SPA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-neutral-900",
                  activeTab === item.id ? "text-neutral-900" : "text-neutral-500"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-neutral-600"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                activeTab === item.id ? "bg-neutral-50 text-neutral-900" : "text-neutral-600 hover:bg-neutral-50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
