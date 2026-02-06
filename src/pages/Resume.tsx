import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const skills = [
  { label: 'HTML/CSS/JavaScript', percent: 85 },
  { label: 'ReactJS', percent: 80 },
  { label: 'MySQL / SQL Server', percent: 75 },
]

const skillPills = [
  'Project Management',
  'Leadership',
  'Teamwork',
  'Effective Communication',
  'Logical & Problem Solving',
  'Presentation',
]

const languages = [
  { name: 'English', level: 'Working' },
  { name: 'Japanese', level: 'Basic' },
]

const jobs = [
  {
    title: 'Event Support & Open Day Organizer',
    company: 'Lab Room, Software Engineering Department, FPT University Quy Nhon',
    period: 'Mar - Apr 2025',
    primary: true,
    bullets: [
      'Supported the organization of Open Day events; coordinated with the team to ensure events ran smoothly and professionally.',
      'Prepared communication content and interacted directly with guests and students, demonstrating effective communication and teamwork.',
      'Contributed creative ideas to event activities to improve the participant experience.',
      'Carried out assigned tasks with a high sense of responsibility, on schedule and with quality.',
    ],
  },
]

const certificationsAndAwards = [
  {
    title: 'Software Development Lifecycle',
    issuer: 'Coursera',
    issued: '2024',
    icon: 'code',
    iconColor: 'text-blue-500',
    hoverIcon: 'verified',
    linkLabel: 'Verify',
  },
  {
    title: 'CertNexus Certified Ethical Emerging Technologist',
    issuer: 'CertNexus',
    issued: '2024',
    icon: 'verified_user',
    iconColor: 'text-emerald-500',
    hoverIcon: 'verified',
    linkLabel: 'Verify',
  },
  {
    title: 'Academic Skills for University Success',
    issuer: 'Coursera',
    issued: '2024',
    icon: 'school',
    iconColor: 'text-orange-500',
    hoverIcon: 'verified',
    linkLabel: 'Verify',
  },
  {
    title: 'Web Design for Everybody Basics',
    issuer: 'Coursera',
    issued: '2024',
    icon: 'palette',
    iconColor: 'text-purple-500',
    hoverIcon: 'verified',
    linkLabel: 'View',
  },
]

export default function Resume() {
  useEffect(() => {
    document.title = 'Ho Phi Hung - Resume'
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
              Ho Phi Hung <span className="text-slate-400 font-normal mx-2">/</span> Resume
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/cv.pdf"
              download="Ho-Phi-Hung-CV.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/30"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Download PDF</span>
            </a>
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
                      backgroundImage: "url('/anhDaiDien.png')",
                    }}
                    role="img"
                    aria-label="Ảnh đại diện Ho Phi Hung"
                  />
                  <div
                    className="absolute bottom-2 right-2 size-4 bg-green-500 border-2 border-white dark:border-[#1a2634] rounded-full"
                    title="Available for work"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Ho Phi Hung</h2>
                  <p className="text-primary font-medium mt-1">Software Engineering Student</p>
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
                    <a className="font-medium hover:text-primary transition-colors" href="mailto:hophihunghh123@gmail.com">
                      hophihunghh123@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Phone</span>
                    <a className="font-medium hover:text-primary transition-colors" href="tel:0339791274">033 979 1274</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Location</span>
                    <span className="font-medium">Mang Yang, Gia Lai</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 flex items-center justify-center rounded bg-white dark:bg-[#1e293b] text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-lg">language</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Facebook</span>
                    <a className="font-medium hover:text-primary transition-colors" href="https://www.facebook.com/hung.hophi.3110/" target="_blank" rel="noopener noreferrer">
                      facebook.com/hung.hophi.3110
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
                  Third-year Software Engineering student at FPT University with a solid foundation in web technologies
                  (HTML/CSS/JS, ReactJS) and databases (MySQL, SQL Server). Experienced in supporting university events
                  and Open Day coordination. Eager to apply technical and teamwork skills in a professional environment
                  and continue learning through real-world projects.
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

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="p-1 rounded bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">school</span>
                  </span>
                  Education
                </h2>
                <div className="bg-slate-50 dark:bg-[#15202b] p-6 rounded-xl border border-slate-100 dark:border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400">
                      <span className="material-symbols-outlined text-2xl">account_balance</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">Software Engineering</h3>
                      <p className="text-slate-500 font-medium">FPT University</p>
                      <p className="text-xs text-slate-400 mt-1">Third year student · GPA: 3.1/4.0</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 self-start md:self-center">
                    2022 - 2026
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="p-1 rounded bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  </span>
                  Certifications &amp; Awards
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  {certificationsAndAwards.map((item) => (
                    <div
                      key={item.title}
                      className="group flex flex-col bg-slate-50 dark:bg-[#15202b] border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-primary transition-colors duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-primary/20 text-6xl transform rotate-12 translate-x-2 -translate-y-2">
                          {item.hoverIcon}
                        </span>
                      </div>
                      <div className="flex items-start justify-between mb-4 z-10">
                        <div
                          className={`size-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 text-2xl ${item.iconColor}`}
                        >
                          <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-primary transition-colors z-20"
                          title={item.linkLabel === 'Verify' ? 'Verify Credential' : 'View Award'}
                        >
                          <span className="material-symbols-outlined">open_in_new</span>
                        </a>
                      </div>
                      <div className="grow z-10">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">{item.issuer}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between text-xs text-slate-400 z-10">
                        <span>Issued: {item.issued}</span>
                        <span className="flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.linkLabel} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer className="max-w-6xl mx-auto py-8 text-center text-slate-400 text-sm">
          <p>© 2025 Ho Phi Hung. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
