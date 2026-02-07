import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-background-dark/80 border-b border-slate-200/80 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">design_services</span>
          </div>
          <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
            ALEX<span className="text-primary">.DESIGN</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#work">Work</a>
          <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#about">About</a>
          <Link to="/resume" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Resume</Link>
          <a
            href="/tv-landing.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            title="TV Presentation"
          >
            <span className="material-symbols-outlined text-xl">tv</span>
            <span>TV</span>
          </a>
          <ThemeToggle />
          <a
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(19,127,236,0.3)] hover:shadow-[0_0_25px_rgba(19,127,236,0.5)]"
            href="/#contact"
          >
            Let's Talk
          </a>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button type="button" className="p-2 text-slate-700 dark:text-white" aria-label="Menu">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
