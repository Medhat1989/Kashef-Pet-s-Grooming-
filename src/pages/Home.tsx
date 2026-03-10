import { Scissors, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home({ onBookClick }: { onBookClick: () => void }) {
  const services = [
    {
      title: "Pet's Grooming",
      description: "Our professional grooming service is designed to keep your furry friends looking and feeling their best. From precision haircuts and deep-cleansing baths to nail trimming and ear cleaning, our expert groomers use gentle techniques and premium products tailored to your pet's specific coat type and skin needs. We ensure a stress-free environment where safety and comfort are our top priorities.",
      icon: <Scissors className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pet's SPA",
      description: "Indulge your pet in the ultimate relaxation experience with our luxury SPA treatments. Our SPA packages include therapeutic massages, aromatic bubble baths, moisturizing paw balms, and specialized skin treatments that promote wellness and vitality. It's more than just a wash; it's a rejuvenating journey that relieves stress and leaves your pet with a radiant, healthy glow and a wagging tail.",
      icon: <Sparkles className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1920" 
            alt="Happy Dog" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Premium Pet Care
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Where Pets <br />
              <span className="text-neutral-300 italic">Feel Royal.</span>
            </h1>
            <p className="text-lg text-neutral-200 mb-10 max-w-lg leading-relaxed">
              Experience the finest pet grooming and SPA treatments in Alexandria. At KASHEF, we combine professional expertise with genuine love for animals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onBookClick}
                className="px-8 py-4 glass-liquid light-sweep text-neutral-900 rounded-2xl font-bold hover:scale-105 transition-all active:scale-95"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 glass-liquid-dark light-sweep text-white rounded-2xl font-bold hover:scale-105 transition-all active:scale-95"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">Our Premium Services</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            We offer a range of specialized services to ensure your pet is healthy, clean, and happy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group glass-liquid rounded-3xl overflow-hidden border border-white/30 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 w-14 h-14 glass-liquid rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg border border-white/40">
                  {service.icon}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <button 
                  onClick={onBookClick}
                  className="px-6 py-3 glass-liquid-dark light-sweep text-white rounded-xl text-sm font-bold uppercase tracking-widest flex items-center group/btn hover:scale-105 transition-all"
                >
                  Book Now 
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">Loved by Pets</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We create a calm and loving environment that pets actually enjoy visiting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">Certified Experts</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Our team consists of highly trained professionals with years of experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm mx-auto mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">Premium Products</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We only use organic and pet-safe products for all our grooming and SPA sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
