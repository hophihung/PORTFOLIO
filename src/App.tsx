import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FinTechCaseStudy from './pages/FinTechCaseStudy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/fintech-dashboard" element={<FinTechCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
