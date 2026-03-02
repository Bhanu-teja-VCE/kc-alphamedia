import { motion } from 'motion/react';
import { ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="audit" className="bg-surface relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
              // TAKE ACTION
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              BOOK A <br />
              <span className="text-gradient">REVENUE AUDIT.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-md">
              30 minutes. Zero fluff. We'll audit your current growth stack and show you exactly where revenue is leaking.
            </p>
            
            <div className="space-y-8">
              <div>
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">
                  // LET'S BUILD
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white">
                  READY TO SCALE?
                </h3>
              </div>
              
              <form className="space-y-4 max-w-md">
                <input type="text" placeholder="NAME" className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors font-mono uppercase text-sm tracking-widest" />
                <input type="email" placeholder="EMAIL" className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors font-mono uppercase text-sm tracking-widest" />
                <input type="tel" placeholder="PHONE" className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors font-mono uppercase text-sm tracking-widest" />
                <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-gray-500 focus:outline-none focus:border-accent transition-colors font-mono uppercase text-sm tracking-widest appearance-none">
                  <option value="" disabled>MONTHLY BUDGET</option>
                  <option value="10k-50k">₹10L - ₹50L</option>
                  <option value="50k-100k">₹50L - ₹1Cr</option>
                  <option value="100k+">₹1Cr+</option>
                </select>
                
                <button type="button" className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-sm transition-transform hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center gap-2">
                    SUBMIT & BOOK CALL
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="glass p-12 rounded-2xl flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-sm flex items-center justify-center">
                    <span className="font-display font-bold text-black text-2xl">K</span>
                  </div>
                  <span className="font-display font-black tracking-widest text-2xl text-white">KCALPHAMEDIA</span>
                </div>
                <p className="text-gray-400 font-light text-sm tracking-widest uppercase mb-2">
                  FOUNDED BY KODATI HARSHA VARDHAN & CHEPYALA VISHAL
                </p>
                <p className="text-accent font-bold text-sm tracking-widest uppercase">
                  10 YEARS OF ENGINEERING REVENUE
                </p>
              </div>
              
              <div className="w-full h-px bg-white/10" />
              
              <div className="space-y-4">
                <a href="mailto:harshakodati@kcalphamedia.com" className="block text-gray-300 hover:text-accent transition-colors font-mono text-sm tracking-wider">
                  harshakodati@kcalphamedia.com
                </a>
                <a href="mailto:vishal.chepyala@kcalphamedia.com" className="block text-gray-300 hover:text-accent transition-colors font-mono text-sm tracking-wider">
                  vishal.chepyala@kcalphamedia.com
                </a>
                <p className="text-gray-300 font-mono text-sm tracking-wider">
                  +91 8125692258 | +91 6305732069
                </p>
              </div>
              
              <div className="w-full h-px bg-white/10" />
              
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-500 font-bold text-xs tracking-[0.2em] uppercase">
                  TELANGANA, INDIA · GLOBAL AGENCY
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center lg:text-right">
              <p className="text-gray-600 font-bold text-xs tracking-[0.2em] uppercase">
                © 2026 KCALPHAMEDIA. BUILT FOR SCALE.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
