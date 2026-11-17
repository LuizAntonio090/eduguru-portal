import test from 'node:test'
import assert from 'node:assert/strict'
import { questions } from '../src/data/content.js'
import { summarizeAnswers, validateFeedback } from '../src/services/rules.js'
import { getModules, submitFeedback } from '../src/services/api.js'

test('rodada perfeita soma os pontos de dificuldade e atinge 100%', () => {
  assert.deepEqual(summarizeAnswers([0, 1, 2, 3, 1], questions), {
    correct: 5,
    percent: 100,
    points: 90,
  })
})
test('limite de revisão distingue 40% de 60%', () => {
  assert.equal(summarizeAnswers([0, 1, 0, 0, 0], questions).percent, 40)
  assert.equal(summarizeAnswers([0, 1, 2, 0, 0], questions).percent, 60)
})
test('respostas erradas não geram pontos', () => {
  assert.deepEqual(summarizeAnswers([1, 0, 0, 0, 0], questions), {
    correct: 0,
    percent: 0,
    points: 0,
  })
})
test('feedback rejeita campos vazios, e-mail inválido e ausência de confirmação', () => {
  const errors = validateFeedback({
    name: ' ',
    email: 'a@',
    subject: '',
    message: 'curta',
    consent: false,
  })
  assert.deepEqual(Object.keys(errors), ['name', 'email', 'subject', 'message', 'consent'])
})
test('feedback válido aceita espaços nas extremidades', () => {
  assert.deepEqual(
    validateFeedback({
      name: ' Maria ',
      email: ' maria@exemplo.com ',
      subject: 'feedback',
      message: 'Uma sugestão para a plataforma.',
      consent: true,
    }),
    {},
  )
})
test('portal funciona com catálogo local sem configurar API', async () => {
  const result = await getModules()
  assert.equal(result.source, 'local')
  assert.equal(result.data.length, 9)
  assert.equal((await submitFeedback()).mode, 'demo')
})
