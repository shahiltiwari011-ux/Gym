import { motion } from 'framer-motion';

const placeholders = [
  {
    text: "Great gym with amazing equipment. The trainers are very helpful and the environment is highly motivating. The powerlifting platforms are top tier.",
    name: "ALEXANDER M."
  },
  {
    text: "Best place for CrossFit and weight training. Clean facility, well-maintained machines, and a community that actually pushes you to be better.",
    name: "SARAH K."
  },
  {
    text: "Joined for the Metcon classes. The programming is brutal but effective. I've never been stronger or faster in my life.",
    name: "MARCUS T."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">The Proof</div>
            <h2 className="text-5xl md:text-6xl font-heading text-white uppercase tracking-wider mb-4">
              IRON TESTIMONY
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-heading text-primary tracking-wider">4.5<span className="text-zinc-500 text-xl">/5</span></div>
              <div className="w-px h-6 bg-zinc-800"></div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-xs">381 Verified Reviews</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://maps.google.com/?q=TITAN+FORGE+Placeholder+City" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white border border-zinc-700 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-colors"
            >
              View All Reviews
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 p-8 border border-zinc-800 border-t-2 border-t-primary flex flex-col"
            >
              <div className="text-4xl font-heading text-zinc-800 mb-4">"</div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow uppercase tracking-wide">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-primary font-heading text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold text-xs uppercase tracking-widest">{review.name}</div>
                  <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 mt-1">
                    Google Review
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
