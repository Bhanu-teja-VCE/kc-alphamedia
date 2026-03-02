import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium tracking-widest uppercase text-text-secondary"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          10 YEARS OF DOMINANCE · ₹50Cr+ AD SPEND MANAGED
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6"
        >
          10 YEARS OF <br />
          <span className="text-gradient">ENGINEERING REVENUE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-text-secondary font-light max-w-3xl mb-12"
        >
          THE ALPHA STANDARD IN DIGITAL GROWTH.
          <br className="hidden md:block" />
          We don't just post — we engineer ecosystems. A Legacy Growth Firm powered by 19 AI-specialized departments automating revenue for brands that refuse to settle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#audit"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-sm transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              BOOK REVENUE AUDIT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="#proof"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-colors"
          >
            SEE THE DATA
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-text-secondary" />
      </motion.div>
    </section>
  );
}
