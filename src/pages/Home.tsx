import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-background-dark text-slate-200 font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}
