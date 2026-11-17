import { useRef, useState } from 'react'
import { Check, Mail, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { team } from '../data/content'
import { validateFeedback } from '../services/rules'
import { submitFeedback } from '../services/api'
const initialValues = { name: '', email: '', subject: '', message: '', consent: false }
export default function Contato() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef(null)
  const confirmationRef = useRef(null)
  function change(event) {
    const { name, value, type, checked } = event.target
    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
  }
  async function submit(event) {
    event.preventDefault()
    if (status === 'sending') return
    const validation = validateFeedback(values)
    setErrors(validation)
    if (Object.keys(validation).length) {
      formRef.current.elements.namedItem(Object.keys(validation)[0])?.focus()
      return
    }
    setStatus('sending')
    setSubmitError('')
    try {
      await submitFeedback()
      setValues(initialValues)
      setStatus('success')
      requestAnimationFrame(() => confirmationRef.current?.focus())
    } catch {
      setSubmitError('Não foi possível concluir a simulação. Tente novamente.')
      setStatus('idle')
    }
  }
  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: change,
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })
  const error = (name) =>
    errors[name] && (
      <span id={`${name}-error`} className="field-error">
        {errors[name]}
      </span>
    )
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">EQUIPE & CONTATO</span>
        <h1>
          Construído por pessoas.
          <br />
          <span>Movido por aprendizado.</span>
        </h1>
        <p>
          Conheça a equipe do EduGuru original e deixe sua impressão sobre esta apresentação
          interativa.
        </p>
      </section>
      <section className="container section compact-top">
        <SectionHeader eyebrow="AUTORES DO EDUGURU" title="Ideias que se encontram na UMC.">
          Estudantes de Sistemas de Informação da Universidade de Mogi das Cruzes.
        </SectionHeader>
        <div className="grid three team-grid">
          {team.map((person, i) => (
            <article className="team-card" key={person.name}>
              <span className={`avatar avatar-${i}`}>{person.initials}</span>
              <h3>{person.name}</h3>
              <p>Integrante do projeto EduGuru</p>
              <span>SISTEMAS DE INFORMAÇÃO · UMC</span>
            </article>
          ))}
        </div>
        <div className="advisors">
          <p>
            <strong>Orientação</strong>Prof. Oscar Alves Evangelista
          </p>
          <p>
            <strong>Coorientação</strong>Prof. Alessandro Aparecido da Silva Horas
          </p>
        </div>
        <p className="source-note">
          Créditos extraídos da Política de Privacidade do projeto local. A autoria desta atividade
          independente deve ser preenchida no README pelo responsável pela entrega.
        </p>
      </section>
      <section className="soft-section">
        <div className="container section contact-layout">
          <div className="contact-copy">
            <span className="icon-tile">
              <Mail />
            </span>
            <SectionHeader
              eyebrow="VAMOS CONVERSAR"
              title={
                <>
                  Sua perspectiva também
                  <br />
                  faz parte da evolução.
                </>
              }
            >
              Sugestões, dúvidas e novas ideias ajudam a pensar em uma experiência de aprendizagem
              melhor.
            </SectionHeader>
            <div className="contact-info">
              <strong>Um espaço para experimentar.</strong>
              <p>
                Este formulário demonstra validação e confirmação em React. Nenhuma mensagem é
                enviada à equipe e nenhum dado é armazenado.
              </p>
            </div>
            <p className="source-note">
              Para contato real com os autores, utilize o canal informado ao orientador do projeto.
              Não foi encontrado um e-mail público nos arquivos consultados.
            </p>
          </div>
          <div className="contact-form-panel">
            {status === 'success' ? (
              <div className="form-success" role="status" ref={confirmationRef} tabIndex={-1}>
                <span className="result-icon">
                  <Check size={34} />
                </span>
                <h2>Simulação concluída!</h2>
                <p>
                  Os campos foram validados com sucesso. Nenhuma mensagem foi enviada e seus dados
                  não foram salvos.
                </p>
                <Button
                  onClick={() => {
                    setStatus('idle')
                    requestAnimationFrame(() => document.getElementById('name')?.focus())
                  }}
                  variant="secondary"
                >
                  Preencher novamente <ArrowRight size={18} />
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={submit} noValidate>
                <h3>Compartilhe seu feedback</h3>
                <p className="form-intro">Todos os campos são obrigatórios.</p>
                <fieldset disabled={status === 'sending'} className="form-fields">
                  <legend className="sr-only">Dados do feedback demonstrativo</legend>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Nome</label>
                      <input
                        {...fieldProps('name')}
                        autoComplete="name"
                        required
                        maxLength={100}
                        placeholder="Como podemos chamar você?"
                      />
                      {error('name')}
                    </div>
                    <div className="field">
                      <label htmlFor="email">E-mail</label>
                      <input
                        {...fieldProps('email')}
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        placeholder="voce@exemplo.com"
                      />
                      {error('email')}
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="subject">Assunto</label>
                    <select {...fieldProps('subject')} required>
                      <option value="">Selecione uma opção</option>
                      <option value="sugestao">Sugestão de melhoria</option>
                      <option value="duvida">Dúvida sobre o projeto</option>
                      <option value="feedback">Feedback da demonstração</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                    {error('subject')}
                  </div>
                  <div className="field">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      {...fieldProps('message')}
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={5}
                      placeholder="Conte sua ideia ou experiência..."
                    />
                    {error('message')}
                    <span className="character-count">{values.message.length}/2000</span>
                  </div>
                  <div className="consent-field">
                    <label>
                      <input
                        id="consent"
                        type="checkbox"
                        name="consent"
                        checked={values.consent}
                        onChange={change}
                        required
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                      />
                      <span>
                        Entendo que este é um formulário demonstrativo, sem envio ou armazenamento
                        dos dados.
                      </span>
                    </label>
                    {error('consent')}
                  </div>
                  <Button type="submit" className="full-width" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Validando simulação...' : 'Concluir simulação'}{' '}
                    <ArrowRight size={18} />
                  </Button>
                </fieldset>
                {submitError && (
                  <p role="alert" className="field-error">
                    {submitError}
                  </p>
                )}
                <p className="form-disclaimer">Demonstração acadêmica · sem envio de e-mail</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
