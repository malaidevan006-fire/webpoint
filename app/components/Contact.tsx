export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.28)] backdrop-blur-2xl lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Ready to create something striking?</h2>
          <p className="mt-4 max-w-xl text-slate-400">Tell me about your next launch, your audience, and the feeling you want people to leave with.</p>
          <div className="mt-6 space-y-3 text-slate-300">
            <a href="mailto:hello@webpoint.co" className="block font-medium transition hover:text-cyan-300">hello@webpoint.co</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="block font-medium transition hover:text-cyan-300">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="block font-medium transition hover:text-cyan-300">LinkedIn</a>
          </div>
        </div>
        <form className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-inner shadow-slate-950/50">
          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">Name</label>
          <input id="name" className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Your name" />

          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">Email</label>
          <input id="email" type="email" className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="you@example.com" />

          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">Project brief</label>
          <textarea id="message" rows={4} className="mb-5 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Tell me about the idea..." />

          <button type="button" className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
