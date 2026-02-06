export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Available for freelance</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
            DESIGNING THE <br />
            <span className="text-gradient">FUTURE</span> OF <br />
            DIGITAL.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mt-4">
            I craft intuitive and visually stunning experiences for web and mobile. Specializing in UI/UX and
            interaction design with a focus on details.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-all hover:scale-105"
              href="#work"
            >
              View Work
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
            <a
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 transition-all"
              href="#about"
            >
              About Me
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-4 justify-center relative">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 bg-[#182430] group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
            <div
              className="w-full h-full bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCb2nFReOL6DItV3jCkeSfqXHv2AIfrCtn4to3B2NbRCif9a_cogSRp1dfClKGSaGOUepY4ygDMOHm2o02jTkK-CGiHF7vOmzLljU2mv3YUwz3mW-So-szB49z7V0oQUXojF00H14VYegca9XnzJTC8upOiJjfOBjhDD0npbWohWe2TOkQDBoHS0IcNtCMGXES8H62esOSiAog3HgTkTYOzSyZQKhC4C6W1yAzTYdJDKRNvqzb47dqCU9QBfy_6YWNtlDPnkYhBFxg')",
              }}
              aria-hidden
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-primary text-lg">verified</span>
                <span className="text-xs font-bold">Top Rated Seller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <span className="material-symbols-outlined text-slate-500">keyboard_double_arrow_down</span>
      </div>
    </section>
  )
}
