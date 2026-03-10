import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center mb-6">
            <div className="glass-liquid p-2 rounded-xl border border-white/10 shadow-sm">
              <img 
                src="https://i.ibb.co/jkSTbtZq/kashef-logo-removebg-preview.png" 
                alt="KASHEF" 
                className="h-8 w-8 object-contain brightness-0 invert"
              />
            </div>
            <span className="ml-3 text-xl font-bold text-white tracking-tight">KASHEF</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium pet grooming and SPA services in Alexandria. We treat your pets like royalty with the finest care and products.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-neutral-500 shrink-0" />
              <span>Saba Basha, Alexandria, Egypt</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-neutral-500 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+201017907718" className="hover:text-white transition-colors">+20 101 790 7718</a>
                <a href="tel:035822308" className="hover:text-white transition-colors">03 582 2308</a>
              </div>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-neutral-500 shrink-0" />
              <a href="mailto:Kashef.grooming@gmail.com" className="hover:text-white transition-colors">Kashef.grooming@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors text-white">
              <Facebook size={20} />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-xs text-neutral-600">
              © {new Date().getFullYear()} KASHEF Pet Grooming & SPA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
