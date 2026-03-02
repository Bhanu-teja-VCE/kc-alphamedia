import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

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
            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center"
          >
            <span className="text-6xl font-black font-display text-white mb-2 tracking-tighter">340%</span>
            <span className="text-sm font-bold tracking-widest text-accent uppercase">AVG ROAS FOR D2C PARTNERS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center"
          >
            <span className="text-6xl font-black font-display text-white mb-2 tracking-tighter">12K+</span>
            <span className="text-sm font-bold tracking-widest text-accent uppercase">PRE-QUALIFIED REAL ESTATE LEADS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center"
          >
            <span className="text-6xl font-black font-display text-white mb-2 tracking-tighter">MoM</span>
            <span className="text-sm font-bold tracking-widest text-accent uppercase">GROWTH: Jan, Mar, May, Jul, Sep, Nov</span>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass p-8 rounded-2xl break-inside-avoid hover:bg-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <span className="text-white font-medium tracking-wide uppercase text-sm">
                  — {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
