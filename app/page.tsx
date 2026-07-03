import BackgroundFX from "./components/BackgroundFX";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavbarBrand from "./components/NavbarBrand";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 text-slate-900 sm:px-6 lg:px-8 lg:py-8">
      <BackgroundFX />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-slate-950/50 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:px-5">
          <NavbarBrand />

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-400 shadow-inner shadow-slate-950/40">
              <span className="text-cyan-300">⌕</span>
              <input
                type="text"
                placeholder="Search"
                className="w-24 bg-transparent outline-none placeholder:text-slate-500 sm:w-32"
              />
            </label>
            <nav className="flex gap-4 text-sm font-medium text-slate-300">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
