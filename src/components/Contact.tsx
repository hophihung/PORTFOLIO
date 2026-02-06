export default function Contact() {
  return (
    <section className="py-32 px-6 bg-[#0d141b] relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
          Let's build something <br /> <span className="text-gradient">great together.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          I'm currently available for new projects. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-[0_4px_20px_rgba(19,127,236,0.4)] hover:shadow-[0_4px_30px_rgba(19,127,236,0.6)] hover:-translate-y-1"
            href="mailto:hello@alex.design"
          >
            <span className="material-symbols-outlined">mail</span>
            hello@alex.design
          </a>
          <a
            className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/5 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </a>
        </div>
        <div className="flex items-center gap-8 mt-16 pt-16 border-t border-white/5 w-full justify-center">
          <a
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-white transition-colors p-2"
            href="#"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a aria-label="Dribbble" className="text-slate-500 hover:text-white transition-colors p-2" href="#">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.93-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.74-4.03-2.108-7.744-3.756 1.05-7.18 2.924-8.79 4.148 2.03 2.502 5.167 4.126 8.636 4.126 1.054 0 1.553-.133 2.262-.53zM5.216 16.58c1.786-1.144 5.394-2.84 9.27-3.805-1.15-2.146-2.5-4.11-3.952-5.776-3.792 3.486-5.183 8.35-5.318 9.58zm6.54-9.982c1.385 1.583 2.68 3.46 3.774 5.496.06-.008.12-.012.18-.016 3.107-.208 6.224.596 6.643.716-.628-3.05-2.78-5.59-5.545-6.86-.397 1.135-.694 1.258-5.052.664zM2.518 10.42c.118-.948 1.48-5.343 4.965-8.333C4.85 2.977 2.64 5.253 1.838 8.19c.758.91 3.515 4.39 5.86 6.31 0 0 .584-1.32.748-2.607-4.14-.997-5.928-1.474-5.928-1.474z" />
            </svg>
          </a>
          <a aria-label="Twitter" className="text-slate-500 hover:text-white transition-colors p-2" href="#">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
        <p className="text-slate-600 text-sm">© 2024 Alex Design. All rights reserved.</p>
      </div>
    </section>
  )
}
