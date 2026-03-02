import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-dark rounded-sm flex items-center justify-center">
          <span className="font-display font-bold text-black text-lg">K</span>
        </div>
        <span className="font-display font-bold tracking-widest text-lg">KCALPHAMEDIA</span>
      </div>
      
      <a 
        href="#audit" 
        className="hidden md:flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors group"
      >
        FREE REVENUE AUDIT 
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.nav>
  );
}
