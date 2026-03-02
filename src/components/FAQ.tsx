import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  "How do you track ROI?",
  "Do you handle ad spend?",
  "How fast can we scale?",
  "Do you provide scripts and creative?",
  "Why choose an AI-first agency over a freelancer?",
  "What industries do you work with?",
  "How do you handle the iOS 14+ tracking issues?",
  "What's your minimum engagement period?",
  "Do you work with international clients?",
  "What makes KCALPHAMEDIA different from other agencies?",
  "Can you integrate with our existing CRM?",
  "Do you offer performance guarantees?"
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-surface relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // 10-YEAR WISDOM
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            VETERAN <br />
            <span className="text-gradient">FAQ.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-surface hover:bg-surface-hover border-border transition-colors"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight text-white pr-8">
                  {faq}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-accent">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 text-text-secondary font-light leading-relaxed">
                      <p>
                        This is a placeholder answer. In a real implementation, this would contain the specific answer to the question "{faq}". Our 10 years of experience and AI-first approach ensure we have the precise systems and data to address this effectively.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
