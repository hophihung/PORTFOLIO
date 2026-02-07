import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FinTechCaseStudy from './pages/FinTechCaseStudy'
import JapaneseAppCaseStudy from './pages/JapaneseAppCaseStudy'
import OngHutCoBangCaseStudy from './pages/OngHutCoBangCaseStudy'
import JapalyzeCaseStudy from './pages/JapalyzeCaseStudy'
import FIELTSCaseStudy from './pages/FIELTSCaseStudy'
import CellphonesCaseStudy from './pages/CellphonesCaseStudy'
import ClassStruggleCaseStudy from './pages/ClassStruggleCaseStudy'
import TVLanding from './pages/TVLanding'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/fintech-dashboard" element={<FinTechCaseStudy />} />
      <Route path="/work/japanese-learning-app" element={<JapaneseAppCaseStudy />} />
      <Route path="/work/ong-hut-co-bang" element={<OngHutCoBangCaseStudy />} />
      <Route path="/work/japalyze" element={<JapalyzeCaseStudy />} />
      <Route path="/work/f-ielts" element={<FIELTSCaseStudy />} />
      <Route path="/work/cellphones-clone" element={<CellphonesCaseStudy />} />
      <Route path="/work/class-struggle" element={<ClassStruggleCaseStudy />} />
      <Route path="/tv" element={<TVLanding />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
