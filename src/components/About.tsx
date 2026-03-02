import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // WHO WE ARE
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
            A LEGACY <br />
            <span className="text-gradient">GROWTH FIRM.</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">KCALPHAMEDIA</strong> isn't an agency — it's a revenue engineering institution. Built over a decade of relentless iteration, we operate 19 AI-specialized departments that automate, optimize, and scale revenue for our clients 24/7.
            </p>
            <p>
              We don't just post content. We engineer ecosystems — from acquisition funnels and attribution models to community flywheels and retention engines. Every system we deploy is market-tested across 1,200+ campaigns spanning B2B, D2C, Real Estate, SaaS, and E-commerce.
            </p>
            <p>
              With a powerhouse team of 40+ specialized editors and strategists, we bring global experience from UAE, US, and Indian markets — and we do it with zero guesswork.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden glass p-8 flex flex-col justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <div className="absolute top-8 right-8 w-32 h-32 bg-accent/20 blur-[60px] rounded-full" />
          
          <div className="relative z-10">
            <div className="text-6xl font-black text-white mb-2 tracking-tighter">19</div>
            <div className="text-xl font-bold text-accent uppercase tracking-widest">AI-Specialized Departments</div>
            <div className="w-full h-px bg-white/10 my-6" />
            <div className="text-6xl font-black text-white mb-2 tracking-tighter">40+</div>
            <div className="text-xl font-bold text-accent uppercase tracking-widest">Global Strategists</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
