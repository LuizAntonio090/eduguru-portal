import { Link } from 'react-router-dom'
import { GraduationCap, ArrowUpRight } from 'lucide-react'
import { navigation } from './Navbar'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link to="/" className="brand">
            <GraduationCap size={26} />
            <span>EduGuru</span>
          </Link>
          <p>
            Aprendizado com propósito.
            <br />
            Tecnologia com possibilidades.
          </p>
        </div>
        <div className="footer-links">
          {navigation.slice(1).map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label} <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>
        <div className="academic-note">
          <span className="eyebrow">UMC · SISTEMAS DE INFORMAÇÃO</span>
          <p>
            Portal independente da disciplina
            <br />
            <strong>Programação para Internet.</strong>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 EduGuru · Apresentação acadêmica</span>
        <span>Protótipo estático · Dados demonstrativos</span>
      </div>
    </footer>
  )
}
