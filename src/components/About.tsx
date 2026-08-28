import { motion } from 'framer-motion';
import { Dumbbell, Flame, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden clip-slant-top -mt-8 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden bg-zinc-900 border border-zinc-800 p-2">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym philosophy" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Content with Grid Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative p-8 lg:p-12 grid-bg border border-zinc-800/50"
          >
            <div className="mb-8 inline-block">
              <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-wider mb-2">
                Our Philosophy
              </h2>
              <div className="h-1 w-full bg-primary"></div>
            </div>
            
            <p className="text-zinc-400 text-sm md:text-base mb-12 leading-relaxed">
              We believe that true strength is built in the shadows, away from the noise. It's the daily, unglamorous grind that forges champions. Our facility is designed not for comfort, but for transformation.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start border border-zinc-800 p-6 bg-zinc-950/80 backdrop-blur-sm border-l-2 border-l-primary hover:bg-zinc-900 transition-colors">
                <Dumbbell className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-white font-heading text-xl tracking-wider mb-1">Functional Dominance</h3>
                  <p className="text-zinc-500 text-xs">Train movements, not just muscles. Built for real-world application.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start border border-zinc-800 p-6 bg-zinc-950/80 backdrop-blur-sm border-l-2 border-l-accent hover:bg-zinc-900 transition-colors">
                <Flame className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-white font-heading text-xl tracking-wider mb-1">Relentless Intensity</h3>
                  <p className="text-zinc-500 text-xs">Push beyond perceived limits in a supportive, high-energy environment.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start border border-zinc-800 p-6 bg-zinc-950/80 backdrop-blur-sm border-l-2 border-l-zinc-500 hover:bg-zinc-900 transition-colors">
                <Users className="w-6 h-6 text-zinc-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-heading text-xl tracking-wider mb-1">Iron Brotherhood</h3>
                  <p className="text-zinc-500 text-xs">A community that holds you accountable and celebrates your PRs.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
