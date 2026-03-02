import { motion } from 'motion/react';
import { Database, Cpu, Target, Globe2, Users2, Eye, ShieldCheck } from 'lucide-react';

const advantages = [
  { id: "01", title: "DECADE OF DATA", desc: "10 years of market-tested strategies powering every decision we make.", icon: <Database className="w-6 h-6 text-accent" /> },
  { id: "02", title: "AI-FIRST INFRASTRUCTURE", desc: "19 specialized AI departments running 24/7 for maximum efficiency and scale.", icon: <Cpu className="w-6 h-6 text-accent" /> },
  { id: "03", title: "ROI OBSESSED", desc: "We only care about your bank account, not just likes. Revenue is the only metric.", icon: <Target className="w-6 h-6 text-accent" /> },
  { id: "04", title: "GLOBAL REACH", desc: "Battle-tested experience across UAE, US, and Indian markets.", icon: <Globe2 className="w-6 h-6 text-accent" /> },
  { id: "05", title: "SCALABLE PRODUCTION", desc: "A powerhouse team of 40+ specialized editors and growth strategists.", icon: <Users2 className="w-6 h-6 text-accent" /> },
  { id: "06", title: "RADICAL TRANSPARENCY", desc: "Real-time data dashboards and clear reporting. No smoke, no mirrors.", icon: <Eye className="w-6 h-6 text-accent" /> },
  { id: "07", title: "ZERO RISK EXECUTION", desc: "Proven frameworks that eliminate the guesswork. We deploy what works.", icon: <ShieldCheck className="w-6 h-6 text-accent" /> }
];

export default function Advantage() {
  return (
    <section className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // THE ADVANTAGE
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            WHY <br />
            <span className="text-gradient">KCALPHAMEDIA.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass p-8 rounded-2xl flex flex-col gap-6 group hover:bg-white/10 transition-colors ${index === 6 ? 'lg:col-span-3 md:col-span-2' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-black/50 rounded-xl border border-white/5">
                  {adv.icon}
                </div>
                <span className="text-4xl font-black font-display text-white/10 group-hover:text-accent/20 transition-colors">
                  {adv.id}
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase">
                  {adv.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
