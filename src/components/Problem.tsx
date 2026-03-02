import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';

const problems = [
  {
    title: "REAL ESTATE",
    problem: "Tired of 'leads' who don't answer the phone?",
    solution: "We build pre-qualification funnels that only hand you motivated buyers.",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />
  },
  {
    title: "D2C BRANDS",
    problem: "Tired of ROAS that looks good but leaves you broke?",
    solution: "We optimize for Marketing Efficiency Ratio (MER) and Net Profit.",
    icon: <TrendingDown className="w-6 h-6 text-red-500" />
  },
  {
    title: "SERVICE",
    problem: "Tired of being a junior intern's 'learning project'?",
    solution: "At KC Alpha, every account is architected by 10-year veteran founders.",
    icon: <Users className="w-6 h-6 text-red-500" />
  }
];

export default function Problem() {
  return (
    <section className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block">
            // THE PROBLEM
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            WHY MOST SMMAs <br />
            <span className="text-red-500">FAIL YOU.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col gap-6 relative group border-red-500/10 hover:border-red-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold tracking-widest text-white uppercase">
                  {item.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-text-secondary font-medium italic">
                  "{item.problem}"
                </p>
                <div className="w-8 h-px bg-red-500/50" />
                <p className="text-text-secondary font-light leading-relaxed">
                  <strong className="text-white font-medium">Solution:</strong> {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
