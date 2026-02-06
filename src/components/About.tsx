const skills = [
  {
    icon: 'brush',
    title: 'UI Design',
    desc: 'Creating pixel-perfect interfaces that delight users and drive engagement.',
  },
  {
    icon: 'manage_search',
    title: 'UX Research',
    desc: 'Understanding user needs through deep research, personas, and testing.',
  },
  {
    icon: 'devices',
    title: 'Prototyping',
    desc: 'Bringing static designs to life with high-fidelity interactive motion.',
  },
  {
    icon: 'code',
    title: 'Frontend Basics',
    desc: 'Understanding HTML/CSS to bridge the gap between design and dev.',
  },
]

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#0d141b]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Creative Thinker. <span className="text-slate-500">Problem Solver.</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVVf9DkhANqdHNc4rEQxmDNzlKlhjVMiv31DAN2nsZVuY5dXvno4FvWIMbXqB270xikTpYlWRyoh6pqZgoCYl-GNBX0LBWyBSHADpwIczwI17H3GOlSyOoghQC-PGwMuZpdXI-sz5VWSLytRyNwmiIj-MbRO0frplEdicg6LAUoOqEy9b6rr-TnDlcEg9xVkbeI6uGnqLLr86GkNJ9nPeAyWnO7wkIeno86z3bI2UwL0lhboGSF2H61BF1mlMNEA32ksQhQuI-JU"
                alt="Professional headshot of a designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-0 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 md:right-[-20px] bg-[#182430] p-6 rounded-xl border border-white/10 shadow-xl z-20 max-w-[200px]">
              <p className="text-3xl font-bold text-white mb-1">5+</p>
              <p className="text-sm text-slate-400">Years of experience in digital product design.</p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-10">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a multidisciplinary designer with a passion for creating meaningful digital products. I combine
              aesthetic sensibility with user-centered design principles to solve complex problems. My work bridges the
              gap between functional utility and emotional connection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 rounded-lg bg-[#182430] border border-white/5 hover:border-primary/50 transition-colors group"
                >
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:scale-110 transition-transform block">
                    {skill.icon}
                  </span>
                  <h4 className="text-white font-bold text-lg mb-2">{skill.title}</h4>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
