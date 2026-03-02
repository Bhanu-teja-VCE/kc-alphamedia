import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["ALL", "STRATEGY", "CONTENT", "PAID MEDIA", "ORGANIC", "TECH"];
const industries = ["ALL", "B2B", "B2C", "ECOMMERCE", "REAL ESTATE", "D2C", "SAAS", "LOCAL"];

const services = [
  { id: "01", title: "SOCIAL MEDIA STRATEGY", desc: "Data-driven social blueprints engineered for revenue, not reach.", category: "STRATEGY", industries: ["ALL"] },
  { id: "02", title: "SOCIAL MEDIA MANAGEMENT", desc: "End-to-end management across all platforms with 24/7 AI monitoring.", category: "CONTENT", industries: ["ALL"] },
  { id: "03", title: "SOCIAL CONTENT PRODUCTION", desc: "Viral-loop content designed for authority building and audience velocity.", category: "CONTENT", industries: ["ALL"] },
  { id: "04", title: "PAID ADVERTISING", desc: "Meta, Google, LinkedIn, TikTok & YouTube with deep attribution tracking.", category: "PAID MEDIA", industries: ["ALL"] },
  { id: "05", title: "INFLUENCER MARKETING", desc: "Strategic partnerships with ROI-tracked influencer collaborations.", category: "PAID MEDIA", industries: ["B2C", "ECOMMERCE", "D2C"] },
  { id: "06", title: "SOCIAL MEDIA CONSULTING", desc: "Advisory services backed by 10 years of market-tested data.", category: "STRATEGY", industries: ["ALL"] },
  { id: "07", title: "OUTBOUND ENGAGEMENT", desc: "Proactive outreach systems that convert cold audiences to warm leads.", category: "STRATEGY", industries: ["B2B", "SAAS", "REAL ESTATE"] },
  { id: "08", title: "DATA ANALYSIS & ROI MODELING", desc: "Advanced analytics and predictive modeling for every campaign.", category: "STRATEGY", industries: ["ALL"] },
  { id: "09", title: "SEO", desc: "Technical and content SEO engineered for sustainable organic growth.", category: "ORGANIC", industries: ["ALL"] },
  { id: "10", title: "COPYWRITING", desc: "Conversion-focused copy for ads, landing pages, and email sequences.", category: "CONTENT", industries: ["ALL"] },
  { id: "11", title: "LEAD GENERATION", desc: "Full-funnel lead systems for B2B, Real Estate, and SaaS verticals.", category: "PAID MEDIA", industries: ["B2B", "REAL ESTATE", "SAAS"] },
  { id: "12", title: "GOOGLE & META & LINKEDIN ADS", desc: "Cross-platform paid media with unified attribution and budget optimization.", category: "PAID MEDIA", industries: ["ALL"] },
  { id: "13", title: "CONVERSION RATE OPTIMISATION", desc: "A/B testing, funnel analysis, and UX improvements that boost revenue.", category: "TECH", industries: ["ECOMMERCE", "D2C", "SAAS"] },
  { id: "14", title: "CONTENT MARKETING", desc: "Authority-building content ecosystems that drive inbound demand.", category: "ORGANIC", industries: ["ALL"] },
  { id: "15", title: "WEB DESIGN", desc: "High-conversion websites and landing pages built for performance.", category: "TECH", industries: ["ALL"] },
  { id: "16", title: "GRAPHIC DESIGNING", desc: "Brand-aligned visual assets for ads, social, and print.", category: "CONTENT", industries: ["ALL"] },
  { id: "17", title: "LOGO DESIGNING", desc: "Identity systems that communicate authority and trust.", category: "CONTENT", industries: ["ALL"] },
  { id: "18", title: "VIDEO EDITING", desc: "Raw assets to polished ad creatives engineered for conversion.", category: "CONTENT", industries: ["ALL"] }
];

export default function Arsenal() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeIndustry, setActiveIndustry] = useState("ALL");

  const filteredServices = services.filter(service => {
    const matchCategory = activeCategory === "ALL" || service.category === activeCategory;
    const matchIndustry = activeIndustry === "ALL" || service.industries.includes("ALL") || service.industries.includes(activeIndustry);
    return matchCategory && matchIndustry;
  });

  return (
    <section className="py-32 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // THE ARSENAL
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            18 SERVICES. <br />
            <span className="text-gradient">ONE MISSION.</span>
          </h2>
        </motion.div>

        <div className="mb-12 space-y-6">
          <div>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3 block">Filter by Category</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${
                    activeCategory === cat 
                      ? 'bg-accent text-black' 
                      : 'bg-surface hover:bg-surface-hover border-border text-text-secondary hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3 block">Filter by Industry</span>
            <div className="flex flex-wrap gap-2">
              {industries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${
                    activeIndustry === ind 
                      ? 'bg-accent-dark text-white' 
                      : 'bg-surface hover:bg-surface-hover border-border text-text-secondary hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative pl-12 py-2 border-l border-white/10 hover:border-accent transition-colors cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -left-px top-0 w-px h-0 bg-accent group-hover:h-full transition-all duration-500" />
                <span className="absolute -left-6 top-0 text-3xl font-black font-display text-white/10 group-hover:text-accent transition-colors">
                  {service.id}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase relative z-10">
                  {service.title}
                </h3>
                <p className="text-text-secondary font-light leading-relaxed text-sm relative z-10">
                  {service.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                  <span className="text-[10px] px-2 py-1 rounded-sm bg-surface hover:bg-surface-hover border-border text-text-secondary uppercase tracking-widest font-bold">
                    {service.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-text-secondary font-mono text-sm tracking-widest uppercase"
          >
            No services found for the selected filters.
          </motion.div>
        )}
      </div>
    </section>
  );
}
