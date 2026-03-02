import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: "STRATEGY",
    title: "The Death of Vanity Metrics: Why Likes No Longer Correlate to Revenue.",
    link: "#"
  },
  {
    category: "REAL ESTATE",
    title: "Scaling Real Estate: Why Your Lead Form is Killing Your Conversion.",
    link: "#"
  },
  {
    category: "D2C",
    title: "The D2C Survival Guide: Navigating Performance Marketing in 2026.",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section className="py-32 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // AUTONOMOUS INSIGHTS
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            FROM THE <br />
            <span className="text-gradient">WAR ROOM.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.a
              href={insight.link}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors relative overflow-hidden h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest text-accent uppercase mb-4 block">
                  {insight.category}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                  {insight.title}
                </h3>
              </div>
              
              <div className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors mt-8">
                READ <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
