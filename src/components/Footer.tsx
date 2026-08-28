export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 border-b-4 border-b-primary relative clip-slant-top -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          <div className="flex-shrink-0">
            <a href="#" className="font-heading text-3xl tracking-wide text-primary">
              TITAN FORGE
            </a>
            <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-2">
              © 2026 TITAN FORGE. NO EXCUSES.
            </div>
          </div>
          
          <div className="flex gap-x-12 gap-y-4 flex-wrap text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="text-zinc-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-zinc-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-300 hover:text-white transition-colors">Newsletter</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}
