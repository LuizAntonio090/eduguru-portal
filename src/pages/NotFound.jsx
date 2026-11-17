import Button from '../components/Button'
export default function NotFound() {
  return (
    <section className="container page-hero not-found">
      <span className="eyebrow">ERRO 404</span>
      <h1>
        Este caminho ainda
        <br />
        <span>não existe.</span>
      </h1>
      <p>Continue explorando o projeto a partir da página inicial.</p>
      <Button to="/">Voltar ao início</Button>
    </section>
  )
}
