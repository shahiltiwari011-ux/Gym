import { motion } from 'framer-motion';

export default function TrainingExperience() {
  return (
    <section className="bg-zinc-950 relative clip-slant -mt-8 pb-16 z-20">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full border-r-4 border-r-primary">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
            alt="Intense training session" 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-zinc-950/40"></div>
          
          <div className="absolute bottom-8 left-8 bg-zinc-950 p-6 border border-zinc-800 hidden md:block">
            <div className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Methodology</div>
            <div className="text-3xl font-heading text-white uppercase tracking-wider">PROGRESSIVE OVERLOAD</div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex items-center p-8 sm:p-12 lg:p-20 bg-zinc-950 grid-bg">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">The Grind</div>
            <h2 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-wider mb-8 leading-none">
              EVERY <span className="text-primary text-gradient">REP</span> COUNTS.
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base mb-10 leading-relaxed">
              At FITNESS WORLD, we believe in putting in the work. No shortcuts, no magic formulas—just a dedicated environment where you can focus on building a stronger, healthier version of yourself through scientific programming and brutal consistency.
            </p>
            
            <div className="space-y-4 mb-12">
              {[
                "HYPERTROPHY & MUSCLE ENDURANCE",
                "MAXIMUM FORCE PRODUCTION",
                "AEROBIC & ANAEROBIC CONDITIONING",
                "TECHNICAL MOVEMENT PROFICIENCY"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-zinc-300 font-bold tracking-widest uppercase text-xs">
                  <div className="w-1.5 h-1.5 bg-primary mr-4 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-block bg-white text-zinc-950 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors">
              Start The Grind
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
