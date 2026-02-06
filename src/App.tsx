import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FinTechCaseStudy from './pages/FinTechCaseStudy'
import JapaneseAppCaseStudy from './pages/JapaneseAppCaseStudy'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/fintech-dashboard" element={<FinTechCaseStudy />} />
      <Route path="/work/japanese-learning-app" element={<JapaneseAppCaseStudy />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
