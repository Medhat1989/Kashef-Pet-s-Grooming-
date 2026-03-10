import React, { useState } from 'react';
import { X, Calendar, Clock, User, PawPrint, Scissors, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'Dog',
    service: 'Grooming',
    date: '',
    time: '',
    ownerName: '',
    ownerPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "201017907718";
    const message = encodeURIComponent(
      `*New Appointment Booking - KASHEF*\n\n` +
      `*Owner:* ${formData.ownerName}\n` +
      `*Phone:* ${formData.ownerPhone}\n` +
      `*Pet Name:* ${formData.petName}\n` +
      `*Pet Type:* ${formData.petType}\n` +
      `*Service:* ${formData.service}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
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
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-lg h-fit max-h-[90vh] glass-liquid z-50 shadow-2xl rounded-3xl overflow-hidden flex flex-col border border-white/40"
          >
            <div className="p-6 border-b border-white/20 flex items-center justify-between bg-white/10">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2 text-neutral-900" />
                <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Book Appointment</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors shadow-sm">
                <X size={24} className="text-neutral-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                    <User size={12} className="mr-1" /> Owner Name
                  </label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                    placeholder="John Doe"
                    value={formData.ownerName}
                    onChange={e => setFormData({...formData, ownerName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                    <Phone size={12} className="mr-1" /> Phone
                  </label>
                  <input 
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                    placeholder="+20..."
                    value={formData.ownerPhone}
                    onChange={e => setFormData({...formData, ownerPhone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                    <PawPrint size={12} className="mr-1" /> Pet Name
                  </label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                    placeholder="Buddy"
                    value={formData.petName}
                    onChange={e => setFormData({...formData, petName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                    <PawPrint size={12} className="mr-1" /> Pet Type
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                    value={formData.petType}
                    onChange={e => setFormData({...formData, petType: e.target.value})}
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                  <Scissors size={12} className="mr-1" /> Service
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option>Grooming</option>
                  <option>SPA</option>
                  <option>Both (Grooming & SPA)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                    <Calendar size={12} className="mr-1" /> Date
                  </label>
                  <input 
                    required
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center">
                    <Clock size={12} className="mr-1" /> Time
                  </label>
                  <input 
                    required
                    type="time"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 focus:bg-white/40 focus:border-white/60 focus:ring-0 transition-all text-sm backdrop-blur-sm"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 glass-liquid-dark light-sweep text-white rounded-2xl font-bold hover:scale-[1.02] transition-all active:scale-[0.98] mt-4 shadow-lg shadow-neutral-200"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
