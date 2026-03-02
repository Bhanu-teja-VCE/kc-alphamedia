import { motion } from 'motion/react';

const stats = [
  { value: "10+", label: "YEARS EXPERIENCE" },
  { value: "₹50Cr+", label: "AD SPEND MANAGED" },
  { value: "1,200+", label: "CAMPAIGNS LAUNCHED" },
  { value: "24/7", label: "AI-DRIVEN MONITORING" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-surface/50 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl md:text-5xl font-black font-display text-white mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
