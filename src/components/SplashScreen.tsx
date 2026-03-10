import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00688f]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ 
          scale: exit ? 1.5 : 1, 
          opacity: exit ? 0 : 1,
          rotate: 0 
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut",
          scale: { duration: 1, ease: "easeInOut" }
        }}
        className="relative flex flex-col items-center"
      >
        <img 
          src="https://i.ibb.co/jkSTbtZq/kashef-logo-removebg-preview.png" 
          alt="KASHEF Logo" 
          className="w-64 h-64 object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        />
      </motion.div>
    </motion.div>
  );
}
