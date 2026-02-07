/**
 * TV Presentation Landing Screen – full-screen page for displays.
 * Uses local QR and project images from public/.
 */

const PROJECTS = [
  { name: 'Japanese App', image: '/Japanese App.png' },
  { name: 'Ong Hut Co Bang', image: '/ong-hut-co-bang.png' },
  { name: 'Japalyze', image: '/japalyze-web.png' },
  { name: 'F-IELTS', image: '/httpsf-ielts.vercel.app.png' },
  { name: 'CellphoneS', image: '/httpsfrontend-cellphones-i6hv.png' },
] as const

const CENTRAL_QR = {
  name: 'Class Struggle (Đấu tranh giai cấp)',
  image: '/dau-tranh-giai-cap-blond.png',
}

export default function TVLanding() {
  return (
    <div className="bg-black text-white h-screen w-full overflow-hidden flex flex-col font-display">
      <main className="flex-1 flex flex-col items-center justify-center relative w-full h-full px-6">
        <div className="flex flex-col items-center gap-12 z-10 w-full max-w-4xl mx-auto">
          {/* QR code card with glow */}
          <div className="relative group">
            <div
              className="absolute -inset-4 rounded-3xl blur-3xl animate-[breathe_4s_ease-in-out_infinite]"
              style={{
                background: 'rgba(19, 200, 236, 0.4)',
                boxShadow: '0 0 80px 20px rgba(19, 200, 236, 0.3)',
              }}
            />
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl flex items-center justify-center aspect-square w-70 h-70 md:w-90 md:h-90 lg:w-105 lg:h-105">
              <img
                src={CENTRAL_QR.image}
                alt={CENTRAL_QR.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-center space-y-4 max-w-3xl">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight drop-shadow-lg">
              {CENTRAL_QR.name}
            </h1>
          </div>
        </div>

        {/* Footer with project names and thumbnails */}
        <div className="absolute bottom-12 left-0 w-full px-8">
          <div className="flex justify-center items-center">
            <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-400 font-medium text-lg md:text-xl tracking-wide opacity-80">
              {PROJECTS.map((project, i) => (
                <li key={project.name} className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <img
                      src={project.image}
                      alt=""
                      className="w-8 h-8 rounded-lg object-cover shrink-0"
                    />
                    <span>{project.name}</span>
                  </span>
                  {i < PROJECTS.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </div>
  )
}
