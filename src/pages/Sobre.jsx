import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import { Arrow, Icon } from '../components/Icon'
import { journey } from '../data/content'
export default function Sobre() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">SOBRE O PROJETO</span>
        <h1>
          Aprender com direção.
          <br />
          <span>Evoluir com propósito.</span>
        </h1>
        <p>
          Uma plataforma acadêmica que aproxima o que o estudante aprende, o que precisa revisar e
          os caminhos que pode seguir na tecnologia.
        </p>
      </section>
      <section className="container section split-section">
        <div className="editorial-block">
          <span className="eyebrow">O PONTO DE PARTIDA</span>
          <h2>
            Entre a sala de aula
            <br />e o próximo passo.
          </h2>
          <p>
            Notas, materiais de estudo e oportunidades de carreira costumam aparecer em lugares
            diferentes. O aluno pode saber sua média sem ter uma visão clara de quais conteúdos
            precisa retomar ou de como o aprendizado se relaciona com seus interesses.
          </p>
          <p>
            O EduGuru responde a esse contexto reunindo prática, acompanhamento e orientação em uma
            mesma jornada. A gamificação incentiva a participação; a evolução da aprendizagem
            continua sendo o foco.
          </p>
        </div>
        <div className="quote-panel">
          <Icon name="GraduationCap" size={42} />
          <blockquote>O aluno e a evolução da aprendizagem no centro.</blockquote>
          <span>PRINCÍPIO DOCUMENTADO NO EDUGURU</span>
          <p>
            Projeto Final de Curso de Sistemas de Informação
            <br />
            Universidade de Mogi das Cruzes
          </p>
        </div>
      </section>
      <section className="soft-section">
        <div className="container section">
          <SectionHeader eyebrow="OBJETIVOS" title="Tornar o aprendizado mais visível.">
            Acompanhar e personalizar a jornada acadêmica, conectando desempenho, revisão e
            interesses profissionais.
          </SectionHeader>
          <div className="grid three">
            <Card icon="ChartNoAxesCombined" title="Acompanhar">
              <p>
                Dar visibilidade ao aproveitamento por disciplina e aos conteúdos que merecem
                atenção.
              </p>
            </Card>
            <Card icon="Lightbulb" title="Apoiar a revisão">
              <p>
                Oferecer prática com feedback e indicar materiais a partir das necessidades de
                aprendizagem.
              </p>
            </Card>
            <Card icon="Compass" title="Ampliar horizontes">
              <p>Aproximar interesses, conhecimentos e oportunidades nas áreas da tecnologia.</p>
            </Card>
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionHeader
          eyebrow="COMO A PLATAFORMA FUNCIONA"
          title="Um ciclo contínuo de descoberta."
        >
          A metodologia observada no código combina prática, feedback imediato, revisão orientada e
          autoavaliação de interesses.
        </SectionHeader>
        <div className="method-list">
          {journey.map((step, i) => (
            <article key={step.title}>
              <span className="method-number">0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <Icon name={step.icon} size={28} />
            </article>
          ))}
        </div>
        <p className="source-note">
          A Bússola é uma autoavaliação de interesses, não um teste vocacional. As recomendações do
          Guru são baseadas em regras de desempenho.
        </p>
      </section>
      <section className="soft-section">
        <div className="container section">
          <SectionHeader eyebrow="PARA QUEM" title="Estudantes e quem cuida da experiência." />
          <div className="grid two">
            <Card icon="GraduationCap" title="Alunos da UMC">
              <p>
                Estudantes de Sistemas de Informação, Análise e Desenvolvimento de Sistemas e
                Engenharia de Software. Praticam, acompanham notas e evolução, compartilham
                materiais e exploram carreiras.
              </p>
              <div className="tag-row">
                <span>SI</span>
                <span>ADS</span>
                <span>Engenharia de Software</span>
              </div>
            </Card>
            <Card icon="Settings2" title="Administradores">
              <p>
                Responsáveis pela gestão de usuários, disciplinas e perguntas, pela moderação dos
                materiais e pela consulta a indicadores e registros de auditoria.
              </p>
              <div className="tag-row">
                <span>Gestão</span>
                <span>Moderação</span>
                <span>Segurança</span>
              </div>
            </Card>
          </div>
          <div className="independence-note">
            <strong>Duas entregas, contextos distintos.</strong>
            <p>
              O EduGuru original é um PFC/TCC. Este portal de apresentação é uma atividade
              independente de Programação para Internet, sem conexão com o banco da plataforma.
            </p>
          </div>
          <Button to="/funcionalidades">
            Ver o projeto em ação <Arrow />
          </Button>
        </div>
      </section>
    </>
  )
}
