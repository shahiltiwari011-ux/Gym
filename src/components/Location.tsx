import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Headquarters</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-heading text-white uppercase tracking-wider"
          >
            THE PROVING GROUND
          </motion.h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-zinc-800">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-zinc-900/80 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-800"
          >
            <div className="mb-10">
              <h3 className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-[0.2em]">Location</h3>
              <p className="text-white text-lg font-heading tracking-widest leading-relaxed">
                3rd Floor, RS Tower,<br />
                Circuit House Sq, Above Jockey Showroom,<br />
                Railway Colony, Satna,<br />
                Madhya Pradesh 485001
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-[0.2em]">Contact</h3>
              <a href="tel:+917000917618" className="text-primary text-4xl font-heading tracking-widest hover:text-white transition-colors">
                70009 17618
              </a>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto">
              <a 
                href="https://maps.google.com/?q=3rd+Floor,+RS+Tower,+Circuit+House+Sq,+Above+Jockey+Showroom,+Railway+Colony,+Satna,+Madhya+Pradesh+485001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-zinc-950 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors text-center"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[400px] lg:h-auto bg-zinc-950 relative overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-zinc-950/60 backdrop-blur-sm pointer-events-none border-l-4 border-l-primary m-8">
              <div className="text-primary font-heading text-2xl mb-2 tracking-wider">MAP EMBED PLACEHOLDER</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Replace with Google Maps Iframe</div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-20 grayscale contrast-150"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
