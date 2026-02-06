import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const skills = [
  { label: 'UI/UX Design', percent: 95 },
  { label: 'Figma & Prototyping', percent: 90 },
  { label: 'HTML/CSS/Tailwind', percent: 80 },
  { label: 'User Research', percent: 85 },
]

const skillPills = ['Adobe CC', 'Jira', 'Agile', 'Motion']

const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'Professional' },
  { name: 'French', level: 'Conversational' },
]

const jobs = [
  {
    title: 'Senior Product Designer',
    company: 'TechFlow Inc.',
    period: 'Jan 2020 - Present',
    primary: true,
    bullets: [
      'Spearheaded the redesign of the core SaaS dashboard, resulting in a 25% increase in user engagement and a 15% reduction in churn.',
      'Established and maintained the company-wide Design System, improving design-to-development handoff efficiency by 40%.',
      'Mentored 3 junior designers and facilitated weekly design critique sessions to foster a culture of excellence.',
      'Collaborated closely with Product Managers to define roadmap priorities based on user research and business goals.',
    ],
  },
  {
    title: 'UX Designer',
    company: 'Creative Agency NYC',
    period: 'Mar 2017 - Dec 2019',
    primary: false,
    bullets: [
      'Designed responsive websites and mobile apps for diverse clients including FinTech, Healthcare, and E-commerce brands.',
      'Conducted comprehensive user research, including interviews, surveys, and usability testing to validate design decisions.',
      'Created high-fidelity interactive prototypes in ProtoPie to demonstrate complex interaction models to stakeholders.',
    ],
  },
  {
    title: 'Junior Web Designer',
    company: 'StartUp Hub',
    period: 'Jun 2015 - Feb 2017',
    primary: false,
    bullets: [
      'Assisted in the visual design of marketing materials and landing pages.',
      'Worked with HTML/CSS to implement design changes on the company website.',
      'Participated in brainstorming sessions for new product features.',
    ],
  },
]

const certifications = [
  { name: 'Google UX Design Certificate', issuer: 'Coursera, 2021' },
  { name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance, 2019' },
]

export default function Resume() {
  useEffect(() => {
    document.title = 'Alex Morgan - Resume'
    return () => {
      document.title = 'Modern Creative Portfolio'
    }
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-[#1a2634]/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-800 dark:text-white">
            <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined text-2xl">description</span>
            </div>
            <h1 className="font-bold text-lg hidden sm:block">
              Alex Morgan <span className="text-slate-400 font-normal mx-2">/</span> Resume
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/30"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white dark:bg-[#1a2634] shadow-xl shadow-slate-200/50 dark:shadow-black/20 rounded-xl overflow-hidden min-h-[1000px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
            {/* Left Sidebar */}
            <aside className="lg:col-span-4 bg-slate-50 dark:bg-[#15202b] border-r border-slate-100 dark:border-slate-700/50 p-8 flex flex-col gap-10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative group">
                  <div
                    className="size-40 rounded-full bg-cover bg-center border-4 border-white dark:border-[#1a2634] shadow-lg"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC67nTLXaxQGsI7PsnN_aHvNtfs-JrghYUYwRhjVSCJ_U81I7F6dzFI1XTsuZ1xdaxk82mcxXb8xUS04t7HhMf-7lR7DXB2XDGLmtXljpLpblXXF5HQZZVpo-nU34HC1amxTSkz6E6o9m4UrjWfH3PNPFyUm3PegNrTRoaAyPeMDfMmmJyL_Xm1Y5EpNznVEoNCsDHH3EsPNp9r1vqvgL0K8D9IZTaJwXTSJCo9opqDRk7JBb4ZRuCxeFCCcbaHFrPjxuEW_tf36c4')",
                    }}
                    aria-hidden
                  />
                  <div
                    className="absolute bottom-2 right-2 size-4 bg-green-500 border-2 border-white dark:border-[#1a2634] rounded-full"
                    title="Available for work"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Alex Morgan</h2>
                  <p className="text-primary font-medium mt-1">Senior Product Designer</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                  Contact
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Email</span>
                    <a className="font-medium hover:text-primary transition-colors" href="mailto:alex@example.com">
                      alex@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Phone</span>
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Location</span>
                    <span className="font-medium">New York, USA</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">language</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Website</span>
                    <a className="font-medium hover:text-primary transition-colors" href="#">
                      alexmorgan.design
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                  Skills
                </h3>
                <div className="flex flex-col gap-3">
                  {skills.map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill.label}</span>
                        <span className="text-primary font-bold">{skill.percent}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-300"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                  Languages
                </h3>
                <ul className="flex flex-col gap-2">
                  {languages.map((lang, i) => (
                    <li
                      key={lang.name}
                      className={`flex justify-between text-sm pb-2 ${
                        i < languages.length - 1 ? 'border-b border-dashed border-slate-200 dark:border-slate-700' : ''
                      }`}
                    >
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-slate-500 text-xs">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Main Content */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col gap-10">
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="p-1 rounded bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </span>
                  Profile Summary
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  Creative and detail-oriented Senior Product Designer with over 8 years of experience in building
                  user-centric digital products. I specialize in bridging the gap between design and engineering,
                  ensuring feasible yet innovative solutions. Proven track record of leading design teams, optimizing
                  user flows, and delivering award-winning interfaces for SaaS platforms and mobile applications.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="p-1 rounded bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">work</span>
                  </span>
                  Work Experience
                </h2>
                <div className="relative timeline-line pl-8 flex flex-col gap-8">
                  {jobs.map((job) => (
                    <div key={`${job.company}-${job.period}`} className="relative z-10">
                      <div
                        className={`absolute -left-[39px] top-1 h-4 w-4 rounded-full border-[3px] border-white dark:border-[#1a2634] ${
                          job.primary ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                        }`}
                      />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.title}</h3>
                          <p className={job.primary ? 'text-primary font-medium' : 'text-slate-500 font-medium'}>
                            {job.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 mt-1 sm:mt-0">
                          {job.period}
                        </span>
                      </div>
                      <ul
                        className={`list-disc list-outside ml-4 text-slate-600 dark:text-slate-300 text-sm space-y-1.5 ${
                          job.primary ? 'marker:text-primary' : 'marker:text-slate-400'
                        }`}
                      >
                        {job.bullets.map((bullet) => (
                          <li key={bullet.slice(0, 40)}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="p-1 rounded bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-xl">school</span>
                    </span>
                    Education
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-[#15202b] p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      <h3 className="font-bold text-slate-900 dark:text-white">B.F.A in Interaction Design</h3>
                      <p className="text-sm text-slate-500 mt-1">Parsons School of Design</p>
                      <p className="text-xs text-slate-400 mt-2">2011 - 2015</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="p-1 rounded bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-xl">verified</span>
                    </span>
                    Certifications
                  </h2>
                  <div className="space-y-3">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors"
                      >
                        <div className="mt-0.5 text-primary">
                          <span className="material-symbols-outlined text-lg">workspace_premium</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                          <p className="text-xs text-slate-500">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <footer className="max-w-6xl mx-auto py-8 text-center text-slate-400 text-sm">
          <p>© 2023 Alex Morgan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
