import { Link } from 'react-router-dom'

const projects = [
  {
    tags: [
      { label: 'Fintech', class: 'bg-blue-500/10 text-blue-400' },
      { label: 'Mobile App', class: 'bg-purple-500/10 text-purple-400' },
    ],
    title: 'Nova Finance',
    description:
      'A comprehensive financial management app designed to help millennials track spending, invest, and save for future goals.',
    bullets: ['Increased user retention by 40%', 'Simplified onboarding flow'],
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLT1Cwuczfb5Y0WB8RQCHVI5FeKQDddBOpjcuKKZ11oyVee6v7T2ehsest2ynO-8pzcgdJuYR7W3q-olcJjD8efPC0HNcNmLPHe4MwqcKde1fPiKsCVijirXarXUqDCUBurNG2AKyZiyhy29YRcZ83Uj81LOzh_1KD9yfTnUu8Eq8Idb_RkRGeJxQValjcEeEbB13ozantrGbx6r5Obq8xq-bpw6o5DDoNu5QqZIiA1YE4ularBwwUetFu9YVclFCbiG7Rn55aF8k')",
    imageFirst: false,
    caseStudyPath: '/work/fintech-dashboard',
  },
  {
    tags: [
      { label: 'SaaS', class: 'bg-green-500/10 text-green-400' },
      { label: 'Dashboard', class: 'bg-orange-500/10 text-orange-400' },
    ],
    title: 'Vortex Analytics',
    description:
      'An enterprise-grade analytics dashboard tailored for marketing teams to visualize campaign performance in real-time.',
    bullets: ['Custom data visualization library', 'Dark/Light mode system'],
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2VU2h1wqRUCkLRClY0GTHqi4xoW3ddaQQt2fY16qestzOzIBlI2Tj6dzX2HX0rBr0-WvvAqnluda9g3wTNMI4MiE0FxSRHh17e_rt-N6WgbekvMke4JQV0IQhUmA11ORfnvZyD1O9ROqfqHfYfd_BdFcbDbFLVD65SCYI4wSoywoNQbyOPQ8hU9TYONQ_nJEt5wR1bJv3Ch7vc-8mIrs2Zf3lJ_vEjjAHxR_9xWfkcNfbfYNWN1jSs1lZz_LFJcuCR3E1UF1bAAQ')",
    imageFirst: true,
  },
  {
    tags: [
      { label: 'Branding', class: 'bg-pink-500/10 text-pink-400' },
      { label: 'Web Design', class: 'bg-yellow-500/10 text-yellow-400' },
    ],
    title: 'Lumina Identity',
    description:
      'A complete rebrand and website overhaul for a leading lighting architecture firm, focusing on minimalism and photography.',
    bullets: ['Brand guidelines & design system', 'Award-winning website layout'],
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlNWcMZxghwWC5fFBOS1ODz7VYf7LFttGmdsP11jXpGg3wZRH0SmP32M2SR-m3_ZW6vAhnb3YWGeNuJRbA4_BNuW8umxh26LotHL3uAw2bm222AD71I-_KDm6QCLpqdFRPu2xhYxLm7kJ4bQXUY-djHOLeskj1D0iK-xpoUUvmEvFP8rwQAtKuQAZ_hUwyzBQFMlpC2u1nhUbSMeX54Xbv-oWQRuM9c4RDpC2xv0Uva383q63r3UE4inG_ip3jjhjOibaCECqOmSc')",
    imageFirst: false,
  },
]

export default function Work() {
  return (
    <section className="py-24 px-6 bg-[#101922] relative overflow-hidden" id="work">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Projects</h3>
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-white hover:text-primary font-medium transition-colors"
            href="#"
          >
            View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div
                className={`lg:col-span-5 flex flex-col gap-6 ${project.imageFirst ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3 py-1 ${tag.class} text-xs font-bold uppercase rounded tracking-wider`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
                <ul className="flex flex-col gap-2 text-slate-300 text-sm">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  {project.caseStudyPath ? (
                    <Link
                      to={project.caseStudyPath}
                      className="inline-flex items-center text-white font-bold border-b border-white hover:border-primary hover:text-primary pb-1 transition-all"
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <a
                      className="inline-flex items-center text-white font-bold border-b border-white hover:border-primary hover:text-primary pb-1 transition-all"
                      href="#"
                    >
                      View Case Study
                    </a>
                  )}
                </div>
              </div>
              <div className={`lg:col-span-7 ${project.imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="rounded-xl overflow-hidden bg-[#182430] border border-white/5 aspect-video relative group-hover:shadow-[0_20px_50px_rgba(19,127,236,0.15)] transition-all duration-500 transform group-hover:-translate-y-2">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:bg-transparent transition-colors"
                    style={{ backgroundImage: project.image }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5"
            href="#"
          >
            View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
