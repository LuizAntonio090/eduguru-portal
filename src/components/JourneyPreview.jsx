import { useState } from 'react'
import { journey } from '../data/content'
import { Icon } from './Icon'
export default function JourneyPreview() {
  const [active, setActive] = useState(0)
  return (
    <div className="journey-preview">
      <div className="preview-topline">
        <span className="preview-dot" /> MINHA EVOLUÇÃO{' '}
        <span className="preview-label">PRÉVIA ILUSTRATIVA</span>
      </div>
      <div className="preview-welcome">
        <span>O próximo passo começa aqui.</span>
        <h2>
          Pequenos avanços.
          <br />
          Novas possibilidades<span>.</span>
        </h2>
      </div>
      <div className="preview-tabs" role="tablist" aria-label="Etapas da jornada">
        {journey.map((step, i) => (
          <button
            key={step.title}
            id={`journey-tab-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls="journey-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return
              e.preventDefault()
              const next =
                e.key === 'Home'
                  ? 0
                  : e.key === 'End'
                    ? 3
                    : (active + (e.key === 'ArrowRight' ? 1 : 3)) % 4
              setActive(next)
              document.getElementById(`journey-tab-${next}`)?.focus()
            }}
          >
            <Icon name={step.icon} size={18} />
            <span>{step.title}</span>
          </button>
        ))}
      </div>
      <div
        className="preview-panel"
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${active}`}
      >
        <div className="preview-panel-heading">
          <span className="mini-icon">
            <Icon name={journey[active].icon} size={18} />
          </span>
          <strong>{journey[active].title} no seu ritmo</strong>
          <span className="tiny-badge">0{active + 1}</span>
        </div>
        <p>{journey[active].text}</p>
        {active === 0 ? (
          <div className="subject-bars">
            {[
              ['Programação para Internet', 80],
              ['Banco de Dados', 60],
              ['Redes de Computadores', 40],
            ].map(([name, value]) => (
              <div key={name}>
                <div>
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>
                <div className="bar-track">
                  <span style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="preview-insight">
            <Icon name={journey[active].icon} size={32} />
            <p>
              {
                [
                  '',
                  'Um novo olhar sobre o que você ainda pode aprender.',
                  'Interesses abrem caminhos. A Bússola ajuda a explorá-los.',
                  'Aprendizagem e interesses se encontram com a carreira.',
                ][active]
              }
            </p>
          </div>
        )}
      </div>
      <div className="preview-bottom">
        <span className="green-dot" /> Cada descoberta conta. Continue evoluindo.
      </div>
      <div className="floating-note">
        <span className="note-spark">✦</span>
        <div>
          <strong>Seu caminho, mais claro.</strong>
          <span>Aprender é uma jornada.</span>
        </div>
      </div>
    </div>
  )
}
