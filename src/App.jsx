import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import TopUp from './pages/TopUp'
import Footer from './components/Footer'
import MagneticCursor from './components/MagneticCursor'

function App() {
  return (
    <Router>
      <MagneticCursor />
      <ScrollToTop />
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/topup" element={<TopUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
