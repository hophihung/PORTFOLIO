import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f7f8] dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden antialiased" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#233648] px-6 lg:px-10 py-4 bg-[#f6f7f8]/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-4 text-slate-900 dark:text-white">
          <div className="size-8 text-[#3994ef]">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">Portfolio</h2>
        </Link>
        <Link
          to="/#contact"
          className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-[#3994ef] hover:bg-[#3994ef]/90 transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-lg shadow-[#3994ef]/20"
        >
          <span className="truncate">Contact</span>
        </Link>
      </header>

      <main className="relative flex flex-1 flex-col items-center justify-center p-4 lg:p-10 w-full overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern" />
        <div className="absolute inset-0 flex items-center justify-center z-0 select-none overflow-hidden pointer-events-none">
          <span className="text-[20rem] sm:text-[30rem] lg:text-[40rem] font-bold text-slate-200 dark:text-[#182635] opacity-50 blur-sm translate-y-10 lg:translate-y-20">
            404
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center gap-8">
          <div className="w-full flex justify-center mb-4">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <div className="absolute inset-0 bg-[#3994ef]/20 blur-3xl rounded-full scale-110" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPYBQ9slT3iScgyjEG1gA4WNSLiBYLemoWMMTjR_HK8ox2u8gFMRvxHkhbfU4MpB8pZTOJiEPU_4D6PB92ct4jLwWz5K-TaZCWdvw1oq6Y-pKbDgl7AzPenyA_N_K53faMjTkuenOm-0sJ-Qsdxq87I2HvWpfnOh4gsas4QIcCQ4qkr5fKxx5zKsZOGXqA4Kr6c3lr-XsqTI4t0Nbpn2zRitiFW5OHIjV_If-G39RIKyZ2jBz02DOcIzKeelPm5UsPgmJaqyubQ9s"
                alt="Lost Astronaut floating in space"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-[#233648] relative z-10"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#233648] rounded-full border border-slate-700 flex items-center justify-center animate-bounce">
                <span className="material-symbols-outlined text-gray-500 text-sm">satellite_alt</span>
              </div>
              <div className="absolute bottom-8 -left-8 w-10 h-10 bg-[#3994ef]/20 backdrop-blur-sm rounded-lg border border-[#3994ef]/30 flex items-center justify-center animate-pulse-slow">
                <span className="material-symbols-outlined text-[#3994ef] text-lg">warning</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white drop-shadow-sm">
              Oops! This page is <span className="text-[#3994ef]">off the grid.</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-lg">
              The coordinates you entered don't exist in this solar system. Let's get you back to base safely.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link
              to="/"
              className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-8 bg-[#3994ef] hover:bg-[#3994ef]/90 transition-all hover:scale-105 active:scale-95 text-white text-base font-bold shadow-lg shadow-[#3994ef]/25"
            >
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
              <span className="truncate">Back to Home</span>
            </Link>
            <Link
              to="/#work"
              className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-8 bg-white dark:bg-[#1c2a38] border border-slate-200 dark:border-[#2f455a] hover:border-[#3994ef]/50 text-slate-900 dark:text-white text-base font-bold transition-all hover:bg-slate-50 dark:hover:bg-[#233648]"
            >
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
              <span className="truncate">View Projects</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="flex flex-col gap-6 px-5 py-8 text-center border-t border-slate-200 dark:border-[#233648] bg-[#f6f7f8] dark:bg-background-dark z-20">
        <div className="flex flex-wrap justify-center gap-6">
          <a className="group" href="#">
            <div className="text-slate-400 group-hover:text-[#3994ef] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#1c2a38]">
              <span className="material-symbols-outlined text-[24px]">share</span>
            </div>
          </a>
          <a className="group" href="#">
            <div className="text-slate-400 group-hover:text-[#3994ef] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#1c2a38]">
              <span className="material-symbols-outlined text-[24px]">connect_without_contact</span>
            </div>
          </a>
          <a className="group" href="#">
            <div className="text-slate-400 group-hover:text-[#3994ef] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#1c2a38]">
              <span className="material-symbols-outlined text-[24px]">commit</span>
            </div>
          </a>
          <a className="group" href="#">
            <div className="text-slate-400 group-hover:text-[#3994ef] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#1c2a38]">
              <span className="material-symbols-outlined text-[24px]">design_services</span>
            </div>
          </a>
        </div>
        <p className="text-slate-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
          © 2024 Portfolio Name. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
