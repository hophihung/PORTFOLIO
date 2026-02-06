import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FinTechCaseStudy from './pages/FinTechCaseStudy'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/fintech-dashboard" element={<FinTechCaseStudy />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
