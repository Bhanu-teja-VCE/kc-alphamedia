import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { text: "KCALPHAMEDIA turned our social presence into a 24/7 lead machine.", author: "Rajesh K." },
  { text: "The most technical agency we've ever partnered with. Pure revenue engineering.", author: "Sarah M." },
  { text: "We went from ₹10L to ₹1.5Cr monthly in 9 months. Absolute game-changers.", author: "Vikram S." },
  { text: "Their AI-first approach eliminated every bottleneck in our funnel.", author: "Priya D." },
  { text: "10 years of data behind every decision. You can feel the difference.", author: "Anand R." },
  { text: "No fluff, no vanity metrics. Just revenue. That's why we stayed 3 years.", author: "Meera T." },
  { text: "They scaled our D2C brand from launch to ₹5Cr ARR in under a year.", author: "Arjun P." },
  { text: "The only agency that understands Real Estate lead quality at this level.", author: "Kavitha N." },
  { text: "Their attribution modeling saved us 40% on wasted ad spend overnight.", author: "James L." },
  { text: "We've tried 6 agencies. KCALPHAMEDIA is the first one that actually delivered.", author: "Ravi M." },
  { text: "The team operates like an extension of our business. Truly embedded.", author: "Sneha G." },
  { text: "From strategy to execution — everything is data-backed and transparent.", author: "Farhan A." },
  { text: "Our CAC dropped 60% in the first quarter. Insane efficiency.", author: "Deepa V." },
  { text: "They don't just manage campaigns — they engineer entire revenue systems.", author: "Nikhil B." },
  { text: "Best decision we made was switching to KCALPHAMEDIA. Period.", author: "Aisha K." }
];

export default function ProofOfWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="proof" className="py-32 px-6 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // PROOF OF WORK
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            THE DATA <br />
            <span className="text-gradient">DOESN'T LIE.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="text-6xl font-black font-display text-white mb-2 tracking-tighter group-hover:text-accent transition-colors">340%</span>
            <span className="text-sm font-bold tracking-widest text-accent uppercase group-hover:text-white transition-colors">AVG ROAS FOR D2C PARTNERS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="text-6xl font-black font-display text-white mb-2 tracking-tighter group-hover:text-accent transition-colors">12K+</span>
            <span className="text-sm font-bold tracking-widest text-accent uppercase group-hover:text-white transition-colors">PRE-QUALIFIED REAL ESTATE LEADS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="text-6xl font-black font-display text-white mb-2 tracking-tighter group-hover:text-accent transition-colors">MoM</span>
            <span className="text-sm font-bold tracking-widest text-accent uppercase group-hover:text-white transition-colors">GROWTH: Jan, Mar, May, Jul, Sep, Nov</span>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-12 rounded-2xl flex flex-col items-center text-center"
            >
              <Quote className="w-12 h-12 text-accent/50 mb-8" />
              <p className="text-2xl md:text-3xl text-text-secondary font-light leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-black font-bold text-xl">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <span className="text-white font-medium tracking-wide uppercase text-lg">
                  — {testimonials[currentIndex].author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
