import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
      aria-label={theme === 'dark' ? 'Chuyển sang theme sáng' : 'Chuyển sang theme tối'}
    >
      {theme === 'dark' ? (
        <span className="material-symbols-outlined">light_mode</span>
      ) : (
        <span className="material-symbols-outlined">dark_mode</span>
      )}
    </button>
  )
}
