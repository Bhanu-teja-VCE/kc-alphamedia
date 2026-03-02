import { motion } from 'motion/react';
import { Building2, ShoppingBag, Briefcase, Globe, Smartphone, BarChart3, Store } from 'lucide-react';

const sectors = [
  {
    title: "B2B",
    desc: "Enterprise lead generation & account-based marketing",
    icon: <Briefcase className="w-8 h-8 text-accent" />,
  },
  {
    title: "B2C",
    desc: "Consumer acquisition at scale with data-driven creative",
    icon: <Globe className="w-8 h-8 text-accent" />,
  },
  {
    title: "ECOMMERCE",
    desc: "Full-funnel ROAS optimization & catalog advertising",
    icon: <ShoppingBag className="w-8 h-8 text-accent" />,
  },
  {
    title: "REAL ESTATE",
    desc: "Pre-qualified lead systems for developers & agents",
    icon: <Building2 className="w-8 h-8 text-accent" />,
  },
  {
    title: "D2C",
    desc: "Brand-to-revenue pipelines with retention loops",
    icon: <Smartphone className="w-8 h-8 text-accent" />,
  },
  {
    title: "SAAS",
    desc: "Trial-to-paid conversion engines & PLG strategies",
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
  },
  {
    title: "LOCAL BUSINESS",
    desc: "Hyperlocal targeting & reputation-driven growth",
    icon: <Store className="w-8 h-8 text-accent" />,
  },
];

export default function Sectors() {
  return (
    <section className="py-32 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // BATTLE-TESTED
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            SECTORS WE <br />
            <span className="text-gradient">DOMINATE.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/10 transition-colors group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-black/50 rounded-xl inline-block border border-white/5">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">
                  {sector.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
