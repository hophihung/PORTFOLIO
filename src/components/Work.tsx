import { Link } from 'react-router-dom'

const projects = [
  {
    tags: [
      { label: 'Education', class: 'bg-blue-500/10 text-blue-400' },
      { label: 'Next.js', class: 'bg-purple-500/10 text-purple-400' },
    ],
    title: 'Japanese Learning App',
    description:
      'Ứng dụng học tiếng Nhật thông minh, hỗ trợ luyện tập từ vựng và ngữ pháp với lộ trình cá nhân hóa. Tech: React, Tailwind CSS, Supabase.',
    bullets: [
      'Hệ thống Flashcards thông minh (SRS)',
      'Bài tập trắc nghiệm ngữ pháp JLPT',
    ],
    image:
      "url('https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80')",
    imageFirst: false,
    caseStudyPath: '/work/japanese-learning-app',
  },
  {
    tags: [
      { label: 'E-commerce', class: 'bg-green-500/10 text-green-400' },
      { label: 'Next.js 16', class: 'bg-emerald-500/10 text-emerald-400' },
      { label: 'Supabase', class: 'bg-teal-500/10 text-teal-400' },
    ],
    title: 'Ong Hut Co Bang',
    description:
      'Hệ thống thương mại điện tử hiện đại bán ống hút cỏ bàng. Next.js 16 App Router kết hợp Supabase quản lý dữ liệu và xác thực. Tech: Next.js 16, TypeScript, Tailwind, Supabase.',
    bullets: [
      'Tích hợp cổng thanh toán PayOS (QR Code)',
      'Đăng nhập Google OAuth qua Supabase',
      'Quản lý giỏ hàng & Realtime Database',
    ],
    image:
      "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80')",
    imageFirst: true,
    caseStudyPath: '/work/ong-hut-co-bang',
  },
  {
    tags: [
      { label: 'AI EdTech', class: 'bg-violet-500/10 text-violet-400' },
      { label: 'OpenAI Integration', class: 'bg-indigo-500/10 text-indigo-400' },
      { label: 'Next.js App Router', class: 'bg-purple-500/10 text-purple-400' },
    ],
    title: 'Japalyze',
    description:
      'Nền tảng học tiếng Nhật tích hợp AI: phân tích ngữ pháp chuyên sâu, tự động tạo Flashcard từ bài học và luyện hội thoại Role-play với AI. Tech: Next.js (App Router), TypeScript, OpenAI API, Prisma, Tailwind CSS.',
    bullets: [
      'AI Role-play: Luyện hội thoại thực tế ảo',
      'Auto-gen Flashcards: Tạo thẻ học tự động từ nội dung bài',
      'Grammar Analysis: Phân tích cấu trúc câu bằng AI',
    ],
    image:
      "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80')",
    imageFirst: false,
    caseStudyPath: '/work/japalyze',
  },
  {
    tags: [
      { label: 'Education', class: 'bg-blue-500/10 text-blue-400' },
      { label: 'Next.js', class: 'bg-cyan-500/10 text-cyan-400' },
      { label: 'Quiz Engine', class: 'bg-amber-500/10 text-amber-400' },
    ],
    title: 'F-IELTS',
    description:
      'Website luyện thi IELTS toàn diện với kho đề thi cập nhật, giao diện thi thử mô phỏng thực tế và chấm điểm tự động. Tech: Next.js, TypeScript, Tailwind CSS, Vercel.',
    bullets: [
      'Mô phỏng giao diện thi Computer-based IELTS',
      'Tính năng bấm giờ (Timer) và tính điểm Band Score tự động',
      'Tối ưu hóa SEO và tốc độ tải trang với Next.js',
    ],
    image:
      "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80')",
    imageFirst: true,
    caseStudyPath: '/work/f-ielts',
  },
  {
    tags: [
      { label: 'E-commerce', class: 'bg-green-500/10 text-green-400' },
      { label: 'React', class: 'bg-sky-500/10 text-sky-400' },
      { label: 'TypeScript', class: 'bg-blue-500/10 text-blue-400' },
      { label: 'Vite', class: 'bg-amber-500/10 text-amber-400' },
    ],
    title: 'CellphoneS E-commerce Clone',
    description:
      'Giao diện web thương mại điện tử mô phỏng CellphoneS với tốc độ tải cực nhanh nhờ Vite. Tích hợp đăng nhập Google và quản lý giỏ hàng. Tech: React, TypeScript, Vite, ESLint Strict Typing.',
    bullets: [
      'Xây dựng giao diện Pixel-perfect theo thiết kế gốc',
      'Tích hợp Google OAuth (Login) và kết nối RESTful API',
      'Tối ưu hiệu suất với Vite & TypeScript',
    ],
    image:
      "url('https://images.unsplash.com/photo-1592286927505-d6d2a8b5c87a?w=1200&q=80')",
    imageFirst: false,
    caseStudyPath: '/work/cellphones-clone',
  },
  {
    tags: [
      { label: 'EdTech', class: 'bg-rose-500/10 text-rose-400' },
      { label: 'Next.js', class: 'bg-purple-500/10 text-purple-400' },
      { label: 'Interactive Learning', class: 'bg-amber-500/10 text-amber-400' },
    ],
    title: 'Class Struggle (Đấu tranh giai cấp)',
    description:
      'Ứng dụng web giáo dục tương tác, giúp đơn giản hóa các khái niệm triết học và chính trị phức tạp qua giao diện trực quan. Tech: Next.js (App Router), Geist Font, Tailwind CSS, Vercel.',
    bullets: [
      'Tối ưu trải nghiệm đọc với font Geist (Vercel)',
      'Giao diện Interactive Learning tăng hứng thú học tập',
      'Hiệu suất cao nhờ Next.js App Router',
    ],
    image:
      "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80')",
    imageFirst: true,
    caseStudyPath: '/work/class-struggle',
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
