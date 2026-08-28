import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-zinc-900 clip-slant-top -mt-8 z-30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-1 bg-primary"></div>
          <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">Your Move</span>
          <div className="w-8 h-1 bg-primary"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-heading text-white uppercase tracking-wider mb-6 leading-none"
        >
          READY TO BE <span className="text-gradient">UNSTOPPABLE?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm uppercase tracking-widest text-zinc-400 mb-12 max-w-2xl mx-auto font-bold"
        >
          The iron is waiting. Make the decision today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#plans" className="bg-primary text-zinc-950 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors">
            JOIN TITAN FORGE
          </a>
          <a href="tel:+919876543210" className="border border-zinc-700 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            CALL 98765 43210
          </a>
        </motion.div>
      </div>
    </section>
  );
}
