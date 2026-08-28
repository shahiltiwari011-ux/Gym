import { motion } from 'framer-motion';

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-zinc-950 relative clip-slant-top -mt-8 pt-32 pb-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2">The Programming</div>
            <h2 className="text-5xl md:text-6xl font-heading text-white uppercase tracking-wider">
              Featured Classes
            </h2>
          </div>
          <a href="#schedule" className="hidden sm:flex items-center text-xs font-bold text-white tracking-widest uppercase hover:text-primary transition-colors">
            View Schedule
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative h-[500px] border border-zinc-800 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-zinc-950 z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Raw Strength" 
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-zinc-950 to-transparent">
              <div className="flex gap-2 mb-3">
                <span className="border border-primary text-primary text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-zinc-950/50">Powerlifting</span>
                <span className="border border-zinc-600 text-zinc-300 text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-zinc-950/50">Strength</span>
              </div>
              <h3 className="text-4xl font-heading text-white uppercase tracking-wider mb-2">
                Raw Strength
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
                Master the big three: Squat, Bench, Deadlift. Pure force production in a structured, progressive overload system.
              </p>
            </div>
          </motion.div>

          {/* Right Column Smaller Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-[238px] border border-zinc-800 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-zinc-950 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop" 
                alt="Metcon Overdrive" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-zinc-950 to-transparent">
                <span className="border border-accent text-accent text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-zinc-950/50 mb-3 inline-block">Conditioning</span>
                <h3 className="text-2xl font-heading text-white uppercase tracking-wider">
                  Metcon Overdrive
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[238px] border border-zinc-800 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-zinc-950 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop" 
                alt="Tactical Mobility" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-zinc-950 to-transparent">
                <span className="border border-zinc-500 text-zinc-300 text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-zinc-950/50 mb-3 inline-block">Recovery</span>
                <h3 className="text-2xl font-heading text-white uppercase tracking-wider">
                  Tactical Mobility
                </h3>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
