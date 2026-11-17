import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, ArrowUpRight } from 'lucide-react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import SectionHeader from '../components/SectionHeader'
import QuizDemo from '../components/QuizDemo'
import { modules as localModules } from '../data/content'
import { getModules } from '../services/api'
export default function Funcionalidades() {
  const [modules, setModules] = useState(localModules)
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [source, setSource] = useState('local')
  const [params, setParams] = useSearchParams()
  const selected = modules.find((item) => item.id === params.get('modulo'))
  useEffect(() => {
    const controller = new AbortController()
    getModules({ signal: controller.signal })
      .then((result) => {
        setModules(result.data)
        setSource(result.source)
      })
      .catch(() => {})
    return () => controller.abort()
  }, [])
  const categories = ['Todos', ...new Set(modules.map((item) => item.category))]
  const normalize = (value) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  const filtered = modules.filter(
    (item) =>
      (category === 'Todos' || item.category === category) &&
      normalize(`${item.title} ${item.text}`).includes(normalize(search)),
  )
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">FUNCIONALIDADES & DEMONSTRAÇÃO</span>
        <h1>
          Conhecimento em movimento.
          <br />
          <span>Recursos que se conectam.</span>
        </h1>
        <p>
          Explore os módulos implementados no EduGuru e experimente uma pequena parte da jornada,
          direto no navegador.
        </p>
      </section>
      <section className="container section compact-top">
        <SectionHeader eyebrow="POR DENTRO DA PLATAFORMA" title="Encontre seu próximo recurso." />
        <div className="filter-toolbar">
          <div className="filter-buttons" role="group" aria-label="Filtrar por categoria">
            {categories.map((item) => (
              <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Search size={18} />
            <span className="sr-only">Buscar funcionalidades</span>
            <input
              placeholder="Buscar recurso..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
        <p className="results-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'recurso encontrado' : 'recursos encontrados'}{' '}
          ·{' '}
          {source === 'api'
            ? 'Catálogo conectado'
            : source === 'fallback'
              ? 'API indisponível. Catálogo local em uso.'
              : 'Catálogo local'}
        </p>
        <div className="grid three modules-grid">
          {filtered.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title}>
              <span className="category-label">{item.category}</span>
              <p>{item.text}</p>
              <button
                className="card-link"
                onClick={() => setParams({ modulo: item.id }, { preventScrollReset: true })}
                aria-label={`Ver detalhes: ${item.title}`}
              >
                Ver detalhes <ArrowUpRight size={17} />
              </button>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty-state">
            <Search size={28} />
            <h3>Nenhum recurso por aqui.</h3>
            <p>Tente outro termo ou limpe os filtros.</p>
            <button
              className="text-button"
              onClick={() => {
                setSearch('')
                setCategory('Todos')
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>
      <div className="soft-section">
        <div className="container section">
          <QuizDemo />
        </div>
      </div>
      {selected && (
        <Modal title={selected.title} onClose={() => setParams({}, { preventScrollReset: true })}>
          <span className="pill">{selected.category}</span>
          <p>{selected.detail}</p>
          <div className="modal-note">
            Funcionalidade constatada no projeto original. Este portal oferece uma apresentação
            estática independente.
          </div>
        </Modal>
      )}
    </>
  )
}
