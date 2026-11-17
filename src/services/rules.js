export function summarizeAnswers(answers, questions) {
  const correct = answers.filter((answer, i) => answer === questions[i].answer).length
  return {
    correct,
    percent: Math.round((correct / questions.length) * 100),
    points: answers.reduce(
      (sum, answer, i) => sum + (answer === questions[i].answer ? questions[i].points : 0),
      0,
    ),
  }
}
export function validateFeedback(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Informe seu nome com pelo menos 2 caracteres.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Informe um e-mail válido.'
  if (!values.subject) errors.subject = 'Selecione o assunto.'
  if (values.message.trim().length < 10)
    errors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
  if (!values.consent) errors.consent = 'Confirme que entendeu como a demonstração funciona.'
  return errors
}
