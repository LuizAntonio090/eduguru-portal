import { useRef, useState } from 'react'
import { Check, RotateCcw, Sparkles, X } from 'lucide-react'
import { questions } from '../data/content'
import { summarizeAnswers } from '../services/rules'
import Button from './Button'
import { Arrow, Icon } from './Icon'

export default function QuizDemo() {
  const [answers, setAnswers] = useState([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)
  const [hintUsed, setHintUsed] = useState(false)
  const [eliminated, setEliminated] = useState([])
  const heading = useRef(null)
  const question = questions[index]
  const answered = answers.length > index
  const result = summarizeAnswers(answers, questions)
  function confirm() {
    if (selected === null || answered) return
    setAnswers((previous) => [...previous, selected])
  }
  function next() {
    if (index === questions.length - 1) setFinished(true)
    else {
      setIndex((previous) => previous + 1)
      setSelected(null)
      setEliminated([])
    }
    requestAnimationFrame(() => heading.current?.focus())
  }
  function reset() {
    setAnswers([])
    setIndex(0)
    setSelected(null)
    setFinished(false)
    setHintUsed(false)
    setEliminated([])
    requestAnimationFrame(() => heading.current?.focus())
  }
  function hint() {
    if (hintUsed || answered) return
    const wrong = question.options
      .map((_, i) => i)
      .filter((i) => i !== question.answer)
      .slice(0, 2)
    setEliminated(wrong)
    setHintUsed(true)
    if (wrong.includes(selected)) setSelected(null)
  }
  return (
    <section className="demo-section" id="demo" aria-labelledby="demo-heading">
      <div className="demo-description">
        <span className="eyebrow">EXPERIMENTE NA PRÁTICA</span>
        <h2 id="demo-heading">
          Uma pergunta.
          <br />
          Uma nova descoberta.
        </h2>
        <p>
          Experimente uma rodada de cinco questões e veja como o feedback ajuda a transformar erros
          em próximos passos.
        </p>
        <div className="demo-rule">
          <Icon name="Lightbulb" />
          <p>
            <strong>A lógica do Guru</strong>
            <br />
            Abaixo de 60%? Hora de revisar. A partir de 60%, continue aprofundando.
          </p>
        </div>
        <small>
          Simulação local e educativa. A pontuação não integra o ranking real. No EduGuru, a
          correção é feita no banco de dados.
        </small>
      </div>
      <div className="quiz-card">
        <div className="quiz-top">
          <span>
            <Icon name="Zap" size={17} /> QUIZ DEMONSTRATIVO
          </span>
          <span>{finished ? 'Resultado' : `${index + 1} de ${questions.length}`}</span>
        </div>
        <div className="quiz-progress">
          <span style={{ width: `${(finished ? 1 : index / questions.length) * 100}%` }} />
        </div>
        {finished ? (
          <div className="quiz-result">
            <span className="result-icon">
              <Sparkles size={32} />
            </span>
            <h3 ref={heading} tabIndex={-1}>
              Rodada concluída!
            </h3>
            <p>
              Você acertou {result.correct} de {questions.length} questões.
            </p>
            <div className="result-numbers">
              <div>
                <strong>{result.percent}%</strong>
                <span>aproveitamento</span>
              </div>
              <div>
                <strong>{result.points}</strong>
                <span>pontos nesta rodada</span>
              </div>
            </div>
            <div className="result-recommendation">
              <Icon name="Lightbulb" />
              <p>
                {result.percent < 60
                  ? 'O Guru sugere revisar HTML semântico, estado em React e filtros SQL antes de tentar novamente.'
                  : 'Bom caminho! Continue praticando e explore como interfaces se conectam a dados com segurança.'}
              </p>
            </div>
            <Button onClick={reset} variant="secondary">
              <RotateCcw size={17} /> Tentar novamente
            </Button>
          </div>
        ) : (
          <>
            <div className="question-meta">
              <span>{question.subject}</span>
              <span>
                {question.level} · {question.points} pts
              </span>
            </div>
            <h3 ref={heading} tabIndex={-1}>
              {question.text}
            </h3>
            <fieldset className="quiz-options" disabled={answered}>
              <legend className="sr-only">Selecione uma resposta</legend>
              {question.options.map((option, i) => (
                <label
                  key={option}
                  className={`quiz-option ${selected === i ? 'selected' : ''} ${eliminated.includes(i) ? 'eliminated' : ''} ${answered && i === question.answer ? 'correct' : ''} ${answered && selected === i && i !== question.answer ? 'incorrect' : ''}`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={i}
                    checked={selected === i}
                    disabled={eliminated.includes(i)}
                    onChange={() => setSelected(i)}
                  />
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{option}</span>
                  {answered && i === question.answer && <Check size={18} />}
                  {answered && selected === i && i !== question.answer && <X size={18} />}
                </label>
              ))}
            </fieldset>
            <div aria-live="polite">
              {answered && (
                <div className={`quiz-feedback ${selected === question.answer ? 'success' : ''}`}>
                  <strong>
                    {selected === question.answer
                      ? 'Muito bem! Você acertou.'
                      : 'Mais uma oportunidade de aprender.'}
                  </strong>
                  <p>{question.explanation}</p>
                </div>
              )}
            </div>
            <div className="quiz-actions">
              <button className="text-button" onClick={hint} disabled={hintUsed || answered}>
                <Sparkles size={15} /> {hintUsed ? 'Dica utilizada' : 'Dica 50/50'}
              </button>
              {answered ? (
                <Button onClick={next}>
                  {index === questions.length - 1 ? 'Ver resultado' : 'Próxima questão'} <Arrow />
                </Button>
              ) : (
                <Button onClick={confirm} disabled={selected === null}>
                  Confirmar resposta <Arrow />
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
