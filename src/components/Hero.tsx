import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern gym equipment and training" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-1 h-4 bg-primary"></div>
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">NO EXCUSES, ONLY RESULTS.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-heading leading-[0.85] text-white mb-6 uppercase"
            >
              BUILD YOUR<br />
              <span className="text-gradient">STRONGEST</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 mb-10 max-w-xl font-medium leading-relaxed"
            >
              Engineered for those who refuse to settle. Join a community forged in grit, discipline, and relentless progress. We provide the iron; you provide the will.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="bg-primary text-zinc-950 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3">
                Start Your Journey
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#programs" className="border border-zinc-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                View Classes
              </a>
            </motion.div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-6 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 border-l-4 border-l-primary"
            >
              <div className="text-5xl md:text-6xl font-heading text-white mb-2 leading-none">4.5<span className="text-3xl text-zinc-500">/5</span></div>
              <div className="text-xs tracking-widest text-zinc-400 uppercase font-bold">Member Rating</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 border-l-4 border-l-accent"
            >
              <div className="text-5xl md:text-6xl font-heading text-white mb-2 leading-none">381+</div>
              <div className="text-xs tracking-widest text-zinc-400 uppercase font-bold">Verified Reviews</div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Bottom slanted edge */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-zinc-950 clip-slant z-20 translate-y-[2px]"></div>
    </section>
  );
}
