import { motion } from 'framer-motion';

const features = [
  {
    title: "COMPETITION GRADE EQUIPMENT",
    description: "Calibrated plates, specialty bars, and heavy-duty racks designed for maximum load and safety.",
    number: "01"
  },
  {
    title: "NO WAIT TIMES",
    description: "Strict member caps ensure you never have to queue for a squat rack or bench during peak hours.",
    number: "02"
  },
  {
    title: "RECOVERY ZONE",
    description: "Ice baths, infrared saunas, and targeted mobility tools to keep your CNS and muscles primed.",
    number: "03"
  },
  {
    title: "BIOMECHANICS ANALYSIS",
    description: "Advanced camera setups and coaching feedback loops to dial in your technique perfectly.",
    number: "04"
  },
  {
    title: "IRON BROTHERHOOD",
    description: "A culture of accountability. When you PR, the whole room stops to celebrate with you.",
    number: "05"
  },
  {
    title: "24/7 UNRESTRICTED ACCESS",
    description: "Train at 2 AM or 2 PM. Your keycard grants you full access to the facility year-round.",
    number: "06"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-zinc-950 relative border-t border-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <div className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">The Standard</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wider leading-none"
          >
            NO COMPROMISES.<br />
            <span className="text-zinc-700">PURE PERFORMANCE.</span><br />
            <span className="text-primary">ELITE ENVIRONMENT.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 p-8 border border-zinc-800/50 hover:bg-zinc-900 hover:border-primary transition-all duration-300 group"
            >
              <div className="text-4xl font-heading text-zinc-800 group-hover:text-primary/20 transition-colors mb-6">
                {feature.number}
              </div>
              <h3 className="text-2xl font-heading text-white tracking-wider mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
