import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LIVE_DEMO_URL = 'https://ong-hut-co-bang.vercel.app/'
const GITHUB_URL = 'https://github.com/hophihung/OngHutCoBang'

const features = [
  {
    icon: 'payments',
    title: 'Thanh toán trực tuyến (PayOS)',
    desc: 'Tích hợp cổng thanh toán PayOS, tự động xử lý trạng thái đơn hàng (Success/Cancel).',
  },
  {
    icon: 'verified_user',
    title: 'Xác thực nâng cao (Supabase Auth)',
    desc: 'Hỗ trợ đăng nhập Google OAuth và Middleware bảo vệ Route.',
  },
  {
    icon: 'code',
    title: 'Kiến trúc Next.js 16',
    desc: 'Sử dụng App Router, Server Actions và Server Components tối ưu hiệu suất.',
  },
  {
    icon: 'sync',
    title: 'Realtime Data',
    desc: 'Cập nhật giỏ hàng và thông tin sản phẩm tức thì nhờ Supabase Realtime.',
  },
]

export default function OngHutCoBangCaseStudy() {
  useEffect(() => {
    document.title = 'Ong Hut Co Bang - Case Study'
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
              Tính năng chính
            </a>
            <a href="#structure" className="text-sm text-slate-400 hover:text-white py-1.5 border-l-2 border-transparent pl-3">
              Cấu trúc dự án
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
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold uppercase tracking-wider">
                E-commerce
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                Next.js 16
              </span>
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                Supabase
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
              Ong Hut Co Bang
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Nền tảng E-commerce trọn gói cho sản phẩm thân thiện môi trường.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#182430] rounded-xl border border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack</span>
                <span className="font-medium text-slate-200 text-sm">
                  Next.js 16 (App Router), Supabase, TypeScript, Tailwind CSS, PayOS
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
                  ong-hut-co-bang.vercel.app
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
                  hophihung/OngHutCoBang
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
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80"
                alt="Ong Hut Co Bang - E-commerce thân thiện môi trường"
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
              Xây dựng một website bán hàng hiệu suất cao, chuẩn SEO với trải nghiệm thanh toán mượt mà. Yêu cầu xử
              lý xác thực người dùng an toàn và cập nhật trạng thái đơn hàng theo thời gian thực.
            </p>
          </section>

          {/* Key Features */}
          <section className="pt-8 border-t border-slate-700/50" id="solution">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase mb-6">
              <span className="w-8 h-[2px] bg-primary" />
              02. Tính năng chính
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

          {/* Project Structure */}
          <section className="pt-8 border-t border-slate-700/50" id="structure">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm uppercase mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              03. Cấu trúc dự án
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Structure</h2>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-3xl">
              Dự án tổ chức rõ ràng với cấu hình Supabase tách biệt client/server và middleware quản lý phiên đăng
              nhập.
            </p>
            <div className="p-5 rounded-xl bg-[#182430] border border-white/5 font-mono text-sm text-slate-300 overflow-x-auto">
              <div className="text-slate-500"># Supabase & Auth</div>
              <div>src/lib/supabase.ts &nbsp;&nbsp;<span className="text-slate-500"># client / server config</span></div>
              <div className="mt-2 text-slate-500"># Session & Route protection</div>
              <div>middleware.ts &nbsp;&nbsp;<span className="text-slate-500"># session management</span></div>
            </div>
          </section>

          {/* CTA */}
          <section className="pt-12 border-t border-slate-700/50 flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-bold text-white">Trải nghiệm ứng dụng</h2>
            <p className="text-slate-400 max-w-md">
              Xem bản demo trực tuyến hoặc mở mã nguồn trên GitHub.
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
            <Link to="/work/japanese-learning-app" className="text-slate-400 hover:text-primary flex items-center gap-2 text-sm">
              Japanese Learning App
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
