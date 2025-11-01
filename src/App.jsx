import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.PROD ? import.meta.env.BASE_URL : '/';
  
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
