import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export default function Cart({ isOpen, onClose, items, onRemove, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const phoneNumber = "201017907718";
    const message = encodeURIComponent(
      `*New Sale Request from KASHEF Website*\n\n` +
      items.map(item => `- ${item.name} (x${item.quantity}): ${item.price * item.quantity} EGP`).join('\n') +
      `\n\n*Total: ${total.toFixed(2)} EGP*`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass-liquid z-50 shadow-2xl flex flex-col border-l border-white/30"
          >
            <div className="p-6 border-b border-white/20 flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingBag size={20} className="mr-2 text-neutral-900" />
                <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={24} className="text-neutral-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400">
                  <ShoppingBag size={48} className="mb-4 opacity-20" />
                  <p className="text-sm font-medium">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-xl object-cover bg-neutral-50/50 shrink-0 border border-white/20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-900 truncate">{item.name}</h3>
                      <p className="text-sm text-neutral-500 mb-2">{item.price} EGP</p>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center glass-liquid rounded-lg overflow-hidden border border-white/30">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2 py-1 hover:bg-white/30 text-neutral-600"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-xs font-bold text-neutral-900 bg-white/20 border-x border-white/30">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2 py-1 hover:bg-white/30 text-neutral-600"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-red-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-neutral-900">{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/20 bg-white/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-neutral-500 font-medium">Total</span>
                  <span className="text-2xl font-bold text-neutral-900">{total.toFixed(2)} EGP</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 glass-liquid-dark light-sweep text-white rounded-2xl font-bold hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <span>Pay via WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-widest">
                  Secure checkout via WhatsApp Business
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
