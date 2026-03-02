const services = [
  "SOCIAL MEDIA STRATEGY",
  "SOCIAL MEDIA MANAGEMENT",
  "CONTENT PRODUCTION",
  "PAID ADVERTISING",
  "INFLUENCER MARKETING",
  "CONSULTING",
  "OUTBOUND ENGAGEMENT",
  "DATA ANALYSIS",
  "SEO",
  "COPYWRITING",
  "LEAD GENERATION",
  "GOOGLE ADS",
  "META ADS",
  "LINKEDIN ADS",
  "CRO",
  "CONTENT MARKETING",
  "WEB DESIGN",
  "GRAPHIC DESIGN",
  "LOGO DESIGN",
  "VIDEO EDITING"
];

export default function Marquee() {
  return (
    <section className="py-8 bg-accent overflow-hidden flex whitespace-nowrap relative z-20">
      <div className="flex animate-[marquee_30s_linear_infinite]">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-black font-black text-2xl md:text-4xl uppercase tracking-tighter px-8">
              {service}
            </span>
            <span className="text-black/50 text-2xl md:text-4xl">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
