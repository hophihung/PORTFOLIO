export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#101922]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a className="flex items-center gap-2 group" href="#">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">design_services</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            ALEX<span className="text-primary">.DESIGN</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#work">Work</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#resume">Resume</a>
          <a
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(19,127,236,0.3)] hover:shadow-[0_0_25px_rgba(19,127,236,0.5)]"
            href="#contact"
          >
            Let's Talk
          </a>
        </div>
        <button type="button" className="md:hidden text-white" aria-label="Menu">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  )
}
