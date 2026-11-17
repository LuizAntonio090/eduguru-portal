import { ArrowRight, ArrowDown } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { Icon } from '../components/Icon'
import { technologies } from '../data/content'
export default function Tecnologias() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">ARQUITETURA & TECNOLOGIAS</span>
        <h1>
          Uma experiência simples.
          <br />
          <span>Uma base bem conectada.</span>
        </h1>
        <p>
          Conheça as tecnologias e o caminho dos dados no EduGuru original, da interação na tela às
          regras de negócio no banco.
        </p>
      </section>
      <section className="container section compact-top">
        <SectionHeader eyebrow="DO CLIQUE AO DADO" title="Três camadas, uma experiência.">
          O navegador conversa com os serviços do Supabase. As regras sensíveis são verificadas no
          banco de dados.
        </SectionHeader>
        <div
          className="architecture"
          aria-label="Fluxo bidirecional: interface React, API e autenticação Supabase, banco PostgreSQL e arquivos Storage"
        >
          {[
            {
              icon: 'Code2',
              label: '01 · INTERFACE',
              title: 'Front-end',
              text: 'React · TypeScript · Vite',
              detail: 'Telas, navegação, estado e validações de conforto.',
            },
            {
              icon: 'Layers',
              label: '02 · SERVIÇOS',
              title: 'API + Auth',
              text: 'Supabase · REST · RPC',
              detail: 'Consultas, sessão autenticada e execução de funções.',
            },
            {
              icon: 'Database',
              label: '03 · PERSISTÊNCIA',
              title: 'Dados + arquivos',
              text: 'PostgreSQL · RLS · Storage',
              detail: 'Correção, pontos, permissões e materiais privados.',
            },
          ].map((item, i) => (
            <div className="architecture-item" key={item.title}>
              <article>
                <Icon name={item.icon} size={30} />
                <span className="eyebrow">{item.label}</span>
                <h3>{item.title}</h3>
                <strong>{item.text}</strong>
                <p>{item.detail}</p>
              </article>
              {i < 2 && (
                <div className="architecture-arrow">
                  <ArrowRight />
                  <ArrowRight className="reverse-arrow" />
                  <ArrowDown className="mobile-arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flow-example">
          <strong>Exemplo real: responder ao quiz</strong>
          <ol>
            <li>O aluno escolhe uma alternativa na interface.</li>
            <li>
              O cliente chama a função autenticada <code>responder_pergunta</code>.
            </li>
            <li>O PostgreSQL corrige e calcula os pontos; a tela apresenta o retorno.</li>
          </ol>
          <p>O gabarito não é disponibilizado ao aluno antes da resposta.</p>
        </div>
      </section>
      <section className="soft-section">
        <div className="container section">
          <SectionHeader
            eyebrow="STACK DO PROJETO ORIGINAL"
            title="As peças por trás do EduGuru."
          />
          <div className="grid three">
            {technologies.map((item) => (
              <Card key={item.name} icon={item.icon} title={item.name}>
                <span className="category-label">{item.layer}</span>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="container section split-section">
        <div>
          <SectionHeader eyebrow="INTEGRAÇÕES CONSTATADAS" title="Conexões com um papel claro." />
          <div className="integration-list">
            {[
              ['API do GitHub', 'Vagas das comunidades backend-br e frontendbr.'],
              ['ViaCEP', 'Preenchimento opcional de cidade e estado no cadastro.'],
              ['Cloudflare Turnstile', 'Captcha no login, cadastro e recuperação de senha.'],
              [
                'Brevo + pg_net',
                'E-mails transacionais e código por e-mail em aparelho novo, quando habilitado.',
              ],
              ['pg_cron', 'Rotinas agendadas, incluindo limpeza de logs antigos.'],
            ].map(([title, text]) => (
              <div key={title}>
                <span className="purple-dot" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="portal-stack">
          <span className="eyebrow">ESTE PORTAL INDEPENDENTE</span>
          <h2>
            A apresentação tem
            <br />
            sua própria estrutura.
          </h2>
          <p>
            React com JavaScript, Vite, React Router e CSS próprio. Navegação SPA, componentes
            reutilizáveis e uma camada de serviços preparada para um endpoint REST futuro.
          </p>
          <div className="tag-row">
            <span>React</span>
            <span>Vite</span>
            <span>React Router</span>
            <span>CSS</span>
          </div>
          <hr />
          <p>
            Funciona com dados locais e publicação estática na Vercel. Não utiliza credenciais,
            contas ou banco do EduGuru.
          </p>
          <span className="source-note">
            O EduGuru original utiliza TypeScript e publicação no GitHub Pages. O portal é uma
            entrega separada.
          </span>
        </div>
      </section>
    </>
  )
}
