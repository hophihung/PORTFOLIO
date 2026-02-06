import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LIVE_DEMO_URL = 'https://f-ielts.vercel.app/'
const GITHUB_URL = 'https://github.com/otisdoan/f-ielts'

const features = [
  {
    icon: 'quiz',
    title: 'Mock Tests',
    desc: 'Kho đề thi Listening/Reading phong phú với giao diện sát với bài thi thật (Computer-based IELTS).',
  },
  {
    icon: 'speed',
    title: 'Instant Scoring',
    desc: 'Hệ thống tự động chấm điểm và quy đổi ra IELTS Band Score ngay sau khi nộp bài.',
  },
  {
    icon: 'fact_check',
    title: 'Review Mode',
    desc: 'Xem lại đáp án chi tiết và giải thích lỗi sai để cải thiện kỹ năng.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design',
    desc: 'Ôn luyện mọi lúc mọi nơi trên cả máy tính và điện thoại.',
  },
]

export default function FIELTSCaseStudy() {
  useEffect(() => {
    document.title = 'F-IELTS Platform | Case Study'
    return () => {
      document.title = 'Modern Creative Portfolio'
    }
  }, [])

  return (
    <div className="bg-[#101922] text-slate-300 font-display min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-700/50 bg-[#101922]/90 backdrop-blur-md px-6 lg:px-10 py-3">
        <Link to="/" className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">Portfolio</h2>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/#work" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
              Work
            </Link>
            <Link to="/#about" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/resume" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
              Resume
            </Link>
            <Link to="/#contact" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            to="/#contact"
            className="flex min-w-[84px] items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-10 py-12 flex flex-col md:flex-row gap-12">
        <aside className="hidden md:flex flex-col w-48 shrink-0 sticky top-28 h-fit">
          <h3 className="text-sm font-bold text-slate-400 mb-2">Nội dung</h3>
          <nav className="flex flex-col space-y-1">
            <a href="#overview" className="text-sm text-primary font-medium py-1.5 border-l-2 border-primary pl-3">
              Tổng quan
            </a>
            <a href="#challenge" className="text-sm text-slate-400 hover:text-white py-1.5 border-l-2 border-transparent pl-3">
              Thách thức
            </a>
            <a href="#solution" className="text-sm text-slate-400 hover:text-white py-1.5 border-l-2 border-transparent pl-3">
              Giải pháp
            </a>
            <a href="#performance" className="text-sm text-slate-400 hover:text-white py-1.5 border-l-2 border-transparent pl-3">
              Hiệu năng
            </a>
          </nav>
          <div className="mt-8 pt-6 border-t border-slate-700">
            <Link to="/#work" className="text-sm text-slate-400 hover:text-primary flex items-center gap-1">
              ← Về Work
            </Link>
          </div>
        </aside>

        <main className="flex-1 min-w-0 flex flex-col gap-16 md:gap-20">
          {/* Hero */}
          <section className="flex flex-col gap-6 animate-fade-in" id="overview">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                Education
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                Quiz Engine
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
              F-IELTS Platform
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Hệ thống thi thử và luyện tập IELTS Online miễn phí.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#182430] rounded-xl border border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack</span>
                <span className="font-medium text-slate-200 text-sm">
                  Next.js (App Router), React, Tailwind CSS
                </span>
              </div>
              <div className="flex flex-col gap-1 sm:border-l sm:border-slate-700 sm:pl-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Demo</span>
                <a
                  href={LIVE_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  f-ielts.vercel.app
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:border-l sm:border-slate-700 sm:pl-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">GitHub</span>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  otisdoan/f-ielts
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={LIVE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                Live Demo
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#182430] border border-slate-600 text-white rounded-lg font-bold hover:border-primary/50 transition-colors"
              >
                <span className="material-symbols-outlined">code</span>
                GitHub
              </a>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#182430] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
                alt="F-IELTS - Luyện thi IELTS, học tập"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </section>

          {/* The Challenge */}
          <section className="pt-8 border-t border-slate-700/50" id="challenge">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              01. Thách thức
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              Chi phí thi thử IELTS tại trung tâm thường khá cao và học viên thiếu môi trường luyện tập trên máy tính
              (Computer-based) giống thực tế. Người học cần một nền tảng miễn phí, dễ tiếp cận để làm quen với áp lực
              thời gian.
            </p>
          </section>

          {/* The Solution - Key Features */}
          <section className="pt-8 border-t border-slate-700/50" id="solution">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase mb-6">
              <span className="w-8 h-[2px] bg-primary" />
              02. Giải pháp – Tính năng chính
            </div>
            <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
            <ul className="flex flex-col gap-6">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="flex gap-4 p-5 rounded-xl bg-[#182430] border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="size-12 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Performance */}
          <section className="pt-8 border-t border-slate-700/50" id="performance">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              03. Hiệu năng
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Performance</h2>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-3xl">
              Dự án sử dụng <strong className="text-slate-200">next/font (Geist)</strong> để tối ưu tải font, giảm
              layout shift và cải thiện trải nghiệm đọc. Triển khai trên <strong className="text-slate-200">Vercel Edge
              Network</strong> giúp truy cập nhanh từ mọi khu vực.
            </p>
            <div className="p-5 rounded-xl bg-[#182430] border border-white/5">
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  next/font (Geist) – tối ưu loading font
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Vercel Edge Network – tốc độ tải trang toàn cầu
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="pt-12 border-t border-slate-700/50 flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-bold text-white">Trải nghiệm ứng dụng</h2>
            <p className="text-slate-400 max-w-md">
              Làm bài thi thử IELTS miễn phí hoặc xem mã nguồn trên GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={LIVE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                Live Demo
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#182430] border border-slate-600 text-white rounded-xl font-bold text-lg hover:border-primary/50 hover:bg-white/5 transition-all"
              >
                <span className="material-symbols-outlined">code</span>
                View Code
              </a>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-slate-700/50">
            <Link to="/#work" className="text-slate-400 hover:text-primary flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Về Work
            </Link>
            <Link to="/work/japalyze" className="text-slate-400 hover:text-primary flex items-center gap-2 text-sm">
              Japalyze
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
