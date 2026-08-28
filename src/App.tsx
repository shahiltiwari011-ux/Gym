import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import TrainingExperience from './components/TrainingExperience';
import Reviews from './components/Reviews';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <TrainingExperience />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      
      {/* Mobile Sticky Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t-2 border-primary z-40">
        <div className="flex text-[10px] font-bold uppercase tracking-widest">
          <a href="tel:+917000917618" className="flex-1 py-4 text-center text-zinc-300 hover:text-white border-r border-zinc-800">
            Call Now
          </a>
          <a href="#contact" className="flex-1 py-4 text-center text-zinc-950 bg-primary hover:bg-white transition-colors">
            Join Now
          </a>
          <a href="https://maps.google.com/?q=FITNESS+WORLD+Satna" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 text-center text-zinc-300 hover:text-white">
            Directions
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
