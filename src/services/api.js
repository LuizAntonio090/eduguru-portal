import { modules } from '../data/content.js'
const baseUrl = (import.meta.env?.VITE_API_BASE_URL || '').trim().replace(/\/$/, '')

function validModules(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (item) =>
        item &&
        ['id', 'title', 'category', 'icon', 'text', 'detail'].every(
          (key) => typeof item[key] === 'string',
        ),
    )
  )
}

export async function getModules({ signal } = {}) {
  if (!baseUrl) return { data: modules, source: 'local' }
  const timeout = AbortSignal.timeout(5000)
  try {
    const response = await fetch(`${baseUrl}/modules`, {
      signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
    })
    if (!response.ok) throw new Error('Falha ao consultar módulos')
    const data = await response.json()
    if (!validModules(data)) throw new Error('Contrato de módulos inválido')
    return { data, source: 'api' }
  } catch (error) {
    if (signal?.aborted) throw error
    return { data: modules, source: 'fallback' }
  }
}

export async function submitFeedback() {
  await new Promise((resolve) => setTimeout(resolve, 450))
  return { mode: 'demo' }
}
