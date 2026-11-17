import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Funcionalidades from './pages/Funcionalidades'
import Tecnologias from './pages/Tecnologias'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'
const titles = {
  '/': 'Aprender transforma caminhos',
  '/sobre': 'Sobre o projeto',
  '/funcionalidades': 'Funcionalidades e demonstração',
  '/tecnologias': 'Arquitetura e tecnologias',
  '/contato': 'Equipe e contato',
}
function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = `EduGuru — ${titles[pathname] || 'Página não encontrada'}`
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname, hash])
  return null
}
export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Navbar />
      <RouteEffects />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
