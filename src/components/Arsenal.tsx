import { motion } from 'motion/react';

const services = [
  { id: "01", title: "SOCIAL MEDIA STRATEGY", desc: "Data-driven social blueprints engineered for revenue, not reach." },
  { id: "02", title: "SOCIAL MEDIA MANAGEMENT", desc: "End-to-end management across all platforms with 24/7 AI monitoring." },
  { id: "03", title: "SOCIAL CONTENT PRODUCTION", desc: "Viral-loop content designed for authority building and audience velocity." },
  { id: "04", title: "PAID ADVERTISING", desc: "Meta, Google, LinkedIn, TikTok & YouTube with deep attribution tracking." },
  { id: "05", title: "INFLUENCER MARKETING", desc: "Strategic partnerships with ROI-tracked influencer collaborations." },
  { id: "06", title: "SOCIAL MEDIA CONSULTING", desc: "Advisory services backed by 10 years of market-tested data." },
  { id: "07", title: "OUTBOUND ENGAGEMENT", desc: "Proactive outreach systems that convert cold audiences to warm leads." },
  { id: "08", title: "DATA ANALYSIS & ROI MODELING", desc: "Advanced analytics and predictive modeling for every campaign." },
  { id: "09", title: "SEO", desc: "Technical and content SEO engineered for sustainable organic growth." },
  { id: "10", title: "COPYWRITING", desc: "Conversion-focused copy for ads, landing pages, and email sequences." },
  { id: "11", title: "LEAD GENERATION", desc: "Full-funnel lead systems for B2B, Real Estate, and SaaS verticals." },
  { id: "12", title: "GOOGLE & META & LINKEDIN ADS", desc: "Cross-platform paid media with unified attribution and budget optimization." },
  { id: "13", title: "CONVERSION RATE OPTIMISATION", desc: "A/B testing, funnel analysis, and UX improvements that boost revenue." },
  { id: "14", title: "CONTENT MARKETING", desc: "Authority-building content ecosystems that drive inbound demand." },
  { id: "15", title: "WEB DESIGN", desc: "High-conversion websites and landing pages built for performance." },
  { id: "16", title: "GRAPHIC DESIGNING", desc: "Brand-aligned visual assets for ads, social, and print." },
  { id: "17", title: "LOGO DESIGNING", desc: "Identity systems that communicate authority and trust." },
  { id: "18", title: "VIDEO EDITING", desc: "Raw assets to polished ad creatives engineered for conversion." }
];

export default function Arsenal() {
  return (
    <section className="py-32 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
            // THE ARSENAL
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            18 SERVICES. <br />
            <span className="text-gradient">ONE MISSION.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative pl-12 border-l border-white/10 hover:border-accent transition-colors"
            >
              <div className="absolute -left-px top-0 w-px h-0 bg-accent group-hover:h-full transition-all duration-500" />
              <span className="absolute -left-6 top-0 text-3xl font-black font-display text-white/10 group-hover:text-accent transition-colors">
                {service.id}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
