import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FinTechCaseStudy() {
  useEffect(() => {
    document.title = 'FinTech Dashboard Redesign - Case Study'
    return () => {
      document.title = 'Modern Creative Portfolio'
    }
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark transition-colors duration-200 min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 lg:px-10 py-3">
        <Link to="/" className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Alex.Design</h2>
        </Link>
        <div className="flex flex-1 justify-end items-center gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/#work" className="text-sm font-medium hover:text-primary transition-colors">
              Work
            </Link>
            <Link to="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Resume
            </a>
            <Link to="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            to="/#contact"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors"
          >
            <span className="truncate">Get in Touch</span>
          </Link>
        </div>
      </header>

      <div className="fixed top-[60px] left-0 h-1 bg-primary z-40 w-1/3" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row gap-12 relative">
        <aside className="hidden md:flex flex-col w-56 shrink-0 sticky top-28 h-fit">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="text-base font-bold leading-normal mb-1">Table of Contents</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs font-normal">Jump to section</p>
            </div>
            <nav className="flex flex-col space-y-1">
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary border-l-4 border-primary"
                href="#overview"
              >
                <span className="text-sm font-medium">Overview</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-all border-l-4 border-transparent"
                href="#research"
              >
                <span className="text-sm font-medium">Research & Process</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-all border-l-4 border-transparent"
                href="#solution"
              >
                <span className="text-sm font-medium">Solution</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-all border-l-4 border-transparent"
                href="#results"
              >
                <span className="text-sm font-medium">Final Results</span>
              </a>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2 text-sm font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            >
              <span>Next Project</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2 truncate">Travel App Redesign</p>
          </div>
        </aside>

        <main className="flex-1 min-w-0 flex flex-col gap-16 md:gap-24">
          {/* Hero */}
          <section className="flex flex-col gap-8 animate-fade-in" id="overview">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-semibold uppercase tracking-wider">
                  UX Research
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-semibold uppercase tracking-wider">
                  UI Design
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-semibold uppercase tracking-wider">
                  Prototyping
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-text-main-light dark:text-text-main-dark">
                FinTech Dashboard Redesign
              </h1>
              <p className="text-xl text-text-muted-light dark:text-text-muted-dark font-light leading-relaxed max-w-2xl">
                Designing a clearer, more intuitive financial future for Small and Medium Businesses (SMBs) to track
                growth and expenses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                  Role
                </span>
                <span className="font-medium">Lead Product Designer</span>
              </div>
              <div className="flex flex-col gap-1 sm:border-l sm:border-slate-100 dark:sm:border-slate-800 sm:pl-6">
                <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                  Timeline
                </span>
                <span className="font-medium">4 Weeks (Jan 2024)</span>
              </div>
              <div className="flex flex-col gap-1 sm:border-l sm:border-slate-100 dark:sm:border-slate-800 sm:pl-6">
                <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                  Tools
                </span>
                <span className="font-medium">Figma, React, Maze</span>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group bg-slate-200 dark:bg-slate-800">
              <div
                className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrO6Mmdy4hjqEio10C0yCe93PupQcNUjm7wZ7OHeRSzc8M-lfq9zENNQSg8LshlbEdCQLyFpBQQ5r9EmL_sTFktO1SYOSF8gvMRKnj4N2B14XJce6B8QxHzEvo2mM_OtkmmFd7nGBWrGAgh-Pi4uSvhgZPm2WqVfKlyYaSzsgq5Pnbq68Fa-NZjlA2LnbhVzXaWQ-f02f1AOVYezTZ4v5OrzgsHrXEQKBElM-52s-K1yNbbNiJO8QLZtNDIIGYhlxrE1Uo-MYEPlw')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbMGY6zchfX6pBqsJZV-HQwvWGVE7XgDm635bqriE3fIvjAW-XrW6AY3aTpoOrWB-NCxuUduVhsC0B0tX2teo5Aq3sZur9ZUy57txHSJ7TSL7ZFM7orbV4RmjUcWZIWF4NKQmJ6Rj0t5AOxA9hgmCCRHMbyV3VWJK1X26Ujcdx2Q-YKZXcG_GacC2yyeQn0FqOVMM9VU0PG23PHC6ACir2k7vR1ImWj8S1bivHLLknn6lzV-QGPXiih3ixueKs6LVmZ9Fovcc6I3c"
                alt="High fidelity mockup of the fintech dashboard on a laptop screen with data visualization charts"
                className="object-cover w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-2">The Challenge</h3>
              </div>
              <div className="md:col-span-8 space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                <p>
                  Small business owners struggle to understand their financial health at a glance. The existing
                  dashboard was cluttered, filled with jargon, and buried critical actionable insights under layers of
                  navigation.
                </p>
                <p>
                  <strong className="text-text-main-light dark:text-text-main-dark">The Goal:</strong> Create a
                  simplified, modular dashboard that empowers users to make data-driven decisions in under 30 seconds.
                </p>
              </div>
            </div>
          </section>

          {/* Research */}
          <section
            className="flex flex-col gap-12 pt-12 border-t border-slate-200 dark:border-slate-800"
            id="research"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase">
                <span className="w-8 h-[2px] bg-primary" />
                01. Research & Process
              </div>
              <h2 className="text-3xl font-bold">Understanding the User</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnrifvB7HUaAZDUoJrRsVuK2dSgRoeTuQj6afZY-1ihVWnDfOliKoNJVrE7clLkcEAJvd3c8VOM0-iGfF05yHnCRFNX1vMaRetxJR_DdlPJZvgzzUPQAtpyNvMqIyEZCSJ1Fe1kW80I89kXzfho_RILvwqXe7-itC47CB6RkvN7u0Ov501gjuHTBC8Yt1HCq2A89694gKlxPNYsK9mN8J9cFRZLS5D_LXQvxYLj5gtqPgGb_2ocFCtQjXIkpj8C3uUe1Da0Yq2wgg"
                      alt="Portrait of a professional woman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Busy Barbara</h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Small Business Owner</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark italic">
                  &quot;I don&apos;t have time to decipher complex spreadsheets. I just need to know if I&apos;m profitable
                  this month.&quot;
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded text-text-muted-light dark:text-text-muted-dark">
                    Pain Point: Time
                  </span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded text-text-muted-light dark:text-text-muted-dark">
                    Goal: Clarity
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6YHnqon675Vyb3rlikBTZHmHYuQR1s_pXDDuwjPj4JQeG0Q_vvi9IvhlxDNs9p5B5_K5ImYz1ImHzasLK_kMTd3FHlqFwdSmOHfPrd0Z9yxcJHGJFHEXKKfGWyUuflIBPdNf-dVRJ0TjwyO5XU3Ij9a5aFgUyDE6goucpU85olGkGvcHhO8vBIL0dc7YG3fgKXwesofG4tphaIrVWy5VbgRy0nIeIadPGxnOg52AtX7NtAuHGcPwvgzC4ygrNi6fOpQ62mjluSU"
                      alt="Portrait of a man in a suit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Analyst Andy</h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Freelance Accountant</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark italic">
                  &quot;My clients need reports that are easy to export and share. Formatting takes up half my
                  day.&quot;
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded text-text-muted-light dark:text-text-muted-dark">
                    Pain Point: Exporting
                  </span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded text-text-muted-light dark:text-text-muted-dark">
                    Goal: Efficiency
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Low-Fidelity Wireframes</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark max-w-3xl">
                I started with quick sketches to layout the modular grid system. The focus was on hierarchy: primary
                metrics at the top, followed by interactive charts and recent transactions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-100 dark:bg-slate-800 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 relative overflow-hidden group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCqgzBPI76bIyn9v6OkW6Zc_fdoaP9VSnw5tXhh2-fkVgf8_bXcFP6WWQ3gqUQuxL6Z_8gYQ9g89BsZBk2E_oiizpcyQcIbIJg2BIqevKnpzPBbIsNqMJqywuYp0vvR_9YjxvSq2XQgsXipAG20aKP_XRRmpJhcxtweV59YjE5spFIgkwEpV3jXQHbLaf_AQXwOg6ty3SbnL81_E_NWY1b_8EMc2IvszF9Vm_Tat68BBYd5OEt5J1_dAVW0cUEiaYPn06qKVi02nA"
                    alt="Sketch of dashboard layout on paper"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded text-xs font-bold shadow-sm">
                    Sketch V1
                  </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 relative overflow-hidden group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi9K6_bq0Ri3xW9wK05HIqbmI549s-7MPvF62B7Y3aczhRvI_d2naPAdAajlRNGENAXb7d2ZJjtMQtPghpU0RReTw-VmYnTF6lXfvn0Iyly_m1NSWuak0pL8IlmXWrUShILw5mGKU3Deac0d3o97-httSZOle7j6ZDxkS6GUjuVHGm7qzoABklrWfokE-Z6FKKXc04lKBfX97luVD7CuHu8hXtBhBccKnXSM9gQBYz-9ady7cg9vtIgSIWGPjCmCNZG4VBh6Upczc"
                    alt="Digital wireframe of dashboard on tablet"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded text-xs font-bold shadow-sm">
                    Digital Lo-Fi
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section
            className="flex flex-col gap-16 pt-12 border-t border-slate-200 dark:border-slate-800"
            id="solution"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase">
                <span className="w-8 h-[2px] bg-primary" />
                02. The Solution
              </div>
              <h2 className="text-3xl font-bold">Key Features</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-4">
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="text-2xl font-bold">Real-time Analytics</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  Users can now see their cash flow in real-time. We introduced a &quot;Snapshot&quot; card that
                  aggregates data from all connected accounts, reducing the cognitive load of checking multiple banks.
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Consolidated balance view
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Visual expense categorization
                  </li>
                </ul>
              </div>
              <div className="flex-1 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-2 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSwUFUsHWEimq5rBy00wCkT2AQIBJlBkxLyVwdBxNVgtX4kdKMRfTXx_mPdNJ0WJCaEgmIXyWwP_1-9AT6wbFCzAy4QRUPN5Hdj0WcWQB6OqyiB_1if8MUp1Vb2zR9nnBkBhjSMuY0u-02yp2fOJ3WraG9AttU0vwnGwEEfcI9MCJguJR__6sqkcAwZFQXLSHgASSFYwKeFEtm-d6MvuNPCbqs7R8-cEdeTNvw7NM7Bdwvwbf_j75DCzX5RQWzh3FiBULX6RFN6yc"
                  alt="Detailed view of the analytics chart UI"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="flex-1 space-y-4">
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <h3 className="text-2xl font-bold">Simplified Onboarding</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  The old process took 15 minutes. The new flow uses a progressive step-by-step wizard that feels
                  lightweight and encouraging.
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Smart bank integration
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Reduced form fields by 40%
                  </li>
                </ul>
              </div>
              <div className="flex-1 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-2 transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyRfd7xkl2VKM3R4fcOgq3U8FTC5u0MROq2RumAjirM5PYo9KDjJiTd9d2e4tX05uWJbJtwOhHN_9VEayf3nt8DuZM2ArMWAvO62t6QPkZcXfXzypBs2QeBOnEcbZ7hhfLpO-PTWQMnv_1jy6K7Z-1-GejpaohlUlDcKf5Jgpei8pAq8YEWWlYTd9JGNmasY0-BWInKkR2IsO8yzZ-Ayw3f3X875ooP45BN0sPOURR1CN-yED2P-8fryrogB5eJ2m__dz7TI5Lwf0"
                  alt="Onboarding screens with progress bar"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Results */}
          <section
            className="flex flex-col gap-12 pt-12 border-t border-slate-200 dark:border-slate-800"
            id="results"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase">
                <span className="w-8 h-[2px] bg-primary" />
                03. Final Outcomes
              </div>
              <h2 className="text-3xl font-bold">The Results</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl">
                After launching the redesign to a beta group of 500 users, we saw immediate improvements in engagement
                and satisfaction metrics.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '+20%', label: 'Conversion Rate' },
                { value: '-45%', label: 'Support Tickets' },
                { value: '4.8', label: 'App Store Rating' },
                { value: '2m', label: 'Avg Session' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 bg-primary/5 rounded-xl border border-primary/10 flex flex-col items-center justify-center text-center gap-2"
                >
                  <span className="text-3xl md:text-4xl font-black text-primary">{metric.value}</span>
                  <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Design Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvH9-E62X_AdwsaKDIeaqaquVQkjBUNPSR-o_JjO3ZE1tjcnEXjJGJVRizZtUzIAdeKBL5LohiM5esId3J6bJ4-Dcg4vX14QGU_Q_aXu_suxMQHLaIHikm0LXskL2c58Sv6RNBF8Rp_C0AnqI5yrDiqxJyF843JpiNqVkA7f92WWQ-Y1asHQr3nqrHRezr6Hfx8JYvwtwbj_75_kU2m3VEaQFyypy8IImMtPPNv7wedBQM9Hh_RjeAuX-L-S8hIXXVdDPKR5Eu0pE"
                    alt="Full view of the dashboard home screen"
                    className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfwo_mDjDbWS7bIUuXSU7fiPKvGy8s2fo_VlvMqN0qmSzQV-t5ivuhJ9E_LO9E_BlcE3_djiHFeNppCV_l2KjWmpNkB2xTLduM8mMuM5Huxkm43YfhrXoJM7BVAuaCk4AOMpKnqx0KZwcQhQGMOoEkSYpivtNbRe99DXboUVFzv3QBx_3QDXK2tAVjmaNaAJHYvL38DvYKALxLuP6YvNabHW0aSj8VlPD6p3RNeMwU2J8gZfK0D2uIGm9rP6sXxogcTqUCOZuHRMk"
                    alt="Mobile view of the application"
                    className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-2 rounded-xl overflow-hidden shadow-md group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDqfLA9aKsLo3L60MyETyw1FOnyTtBdCYB80K6MnPH-tIMoXSHvSF8IYguKChNaSo-mGcawa9ugoe9-M4N7XQ-26YMF9vTTp4rK-Jk2mGLnSRNplM0vdGPUIZ6SLt-sx3AN1XrZ41lyX2_QQbD8llxzlmzWsGVyEf4wZzqW_pQz-KboUqpmKR5jUUXX9HwuJpxlyY-obyHo3_x5krgwhNhJZa_xv7-TjL2dtjdzSFfxcaGXqZ1Ou65EINVz4afSX4LGCTLkH1-GsI"
                    alt="Three devices showing the app ecosystem"
                    className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link
              to="/#work"
              className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="text-sm font-medium">Previous Project</span>
            </Link>
            <button
              type="button"
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="text-xs text-text-muted-light dark:text-text-muted-dark">Next Up</span>
              <div className="flex items-center gap-2 text-lg font-bold group-hover:text-primary transition-colors">
                Travel App Redesign
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </button>
          </div>
        </main>
      </div>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12">
        <div className="max-w-[960px] mx-auto px-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Let&apos;s build something amazing together.</h2>
          <Link
            to="/#contact"
            className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-slate-50 text-base font-bold shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all"
          >
            Get in Touch
          </Link>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/h%C3%B9ng-h%E1%BB%93-phi-4015052b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/hung.hophi.3110/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
            >
              Facebook
            </a>
          </div>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-8">
            © 2024 Alex Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
