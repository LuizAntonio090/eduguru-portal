import { ArrowUpRight, Check, Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import JourneyPreview from '../components/JourneyPreview'
import { Arrow, Icon } from '../components/Icon'
import { journey, modules } from '../data/content'
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="pill">
            <span className="purple-dot" /> CONHECIMENTO QUE ABRE CAMINHOS
          </span>
          <h1>
            Seu aprendizado.
            <br />
            Sua evolução.
            <br />
            <span>Seu próximo passo.</span>
          </h1>
          <p>
            Da primeira descoberta às oportunidades na tecnologia. O EduGuru conecta sua jornada
            acadêmica ao futuro que você quer construir.
          </p>
          <div className="hero-actions">
            <Button to="/funcionalidades#demo">
              Explorar demonstração <Arrow />
            </Button>
            <Button to="/sobre" variant="ghost">
              <span className="play-icon">
                <Play size={12} fill="currentColor" />
              </span>{' '}
              Conhecer o projeto
            </Button>
          </div>
          <div className="hero-footnote">
            <span className="check-small">
              <Check size={12} />
            </span>{' '}
            Feito para estudantes. Pensado para evoluir.
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="visual-star star-one">✦</span>
          <span className="visual-star star-two">✧</span>
          <JourneyPreview />
        </div>
      </section>
      <div className="academic-strip">
        <div className="container strip-inner">
          <span>UM PROJETO ACADÊMICO COM PROPÓSITO</span>
          <div>
            <strong>UMC</strong>
            <span className="strip-divider" />
            <span>Universidade de Mogi das Cruzes</span>
          </div>
          <span>
            Sistemas de Informação <span className="purple-dot" /> PFC / TCC
          </span>
        </div>
      </div>
      <section className="section container">
        <div className="section-top">
          <SectionHeader
            eyebrow="MAIS CLAREZA EM CADA ETAPA"
            title={
              <>
                Aprender é só o começo.
                <br />
                Evoluir é a jornada.
              </>
            }
          >
            Quatro etapas conectadas para entender onde você está e descobrir para onde pode ir.
          </SectionHeader>
          <Link to="/sobre" className="inline-link">
            Entenda a proposta <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="journey-grid">
          {journey.map((step, i) => (
            <article className="journey-step" key={step.title}>
              <div className="step-top">
                <span className={`step-icon step-${i}`}>
                  <Icon name={step.icon} size={24} />
                </span>
                <span className="step-number">0{i + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="soft-section">
        <div className="container section">
          <div className="section-top">
            <SectionHeader
              eyebrow="UM ECOSSISTEMA PARA SUA EVOLUÇÃO"
              title="Cada recurso, um novo impulso."
            >
              Do estudo à carreira, ferramentas que fazem sentido juntas.
            </SectionHeader>
            <Link to="/funcionalidades" className="inline-link">
              Todos os recursos <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid three">
            {[modules[0], modules[2], modules[3]].map((item) => (
              <Card key={item.id} icon={item.icon} title={item.title}>
                <p>{item.text}</p>
                <Link to={`/funcionalidades?modulo=${item.id}`} className="card-link">
                  Conhecer recurso <ArrowUpRight size={17} />
                </Link>
              </Card>
            ))}
          </div>
          <div className="privacy-line">
            <Icon name="ShieldCheck" size={18} />
            <span>No EduGuru, privacidade e segurança também fazem parte da jornada.</span>
            <Link to="/tecnologias">
              Conheça a arquitetura <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="cta-banner">
          <div>
            <span className="eyebrow">
              <Sparkles size={16} /> DO CONCEITO À EXPERIÊNCIA
            </span>
            <h2>O próximo passo é experimentar.</h2>
            <p>Conheça a lógica do EduGuru em uma demonstração interativa.</p>
          </div>
          <Button to="/funcionalidades#demo" variant="light">
            Experimentar agora <Arrow />
          </Button>
        </div>
      </section>
    </>
  )
}
