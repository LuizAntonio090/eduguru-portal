# EduGuru — Portal institucional interativo

Atividade avaliativa **independente** de **Programação para Internet**, no contexto de Sistemas de Informação da Universidade de Mogi das Cruzes (UMC). Apresenta o EduGuru a partir da leitura do projeto local.

**Responsável por esta atividade:** preencher nome e RGM antes da entrega.

O EduGuru original é um PFC/TCC. Este portal é outro projeto, em outra pasta, com dependências próprias. Não requer o repositório original para instalar, executar ou publicar. Nenhuma configuração, credencial ou arquivo de ambiente do EduGuru foi copiado. Nenhum comando Git foi executado durante a implementação.

## Executar

Requer Node.js 22.12+ (recomendado: Node.js 24 LTS) e npm.

```powershell
cd C:\Users\Melas\Desktop\eduguru-portal-react
npm install
npm run dev
```

Abra o endereço exibido pelo Vite. Para uma instalação reproduzível após obter o código, use `npm ci` com o `package-lock.json` incluído.

```powershell
npm test
npm run build
npm run preview
```

- `npm test`: testes das regras de pontuação, limite de aproveitamento, validação e uso de dados locais.
- `npm run build`: gera o site estático em `dist/`.
- `npm run preview`: serve a compilação para conferência local.
- Formatar código: `npm exec prettier -- --write src tests`.

## Páginas

| Rota                      | Conteúdo e interação                                            |
| ------------------------- | --------------------------------------------------------------- |
| `/`                       | Proposta de valor, prévia de painel com abas, etapas e recursos |
| `/sobre`                  | Problema, justificativa, objetivos, público e funcionamento     |
| `/funcionalidades`        | Nove módulos, filtros, busca, modal e quiz demonstrativo        |
| `/tecnologias`            | Stack original, diagrama das camadas e integrações              |
| `/contato`                | Equipe original, orientadores e formulário com validação        |
| Qualquer rota inexistente | Página 404 com retorno ao início                                |

## Estrutura

```text
public/favicon.svg
src/
  components/
    Button.jsx             Link ou botão com variantes visuais
    Card.jsx               Cartão reutilizável
    Footer.jsx             Rodapé e contexto acadêmico
    Icon.jsx               Registro de ícones Lucide
    JourneyPreview.jsx     Abas da jornada com navegação por teclado
    Modal.jsx              Dialog nativo, Escape e restauração do foco
    Navbar.jsx             Menu responsivo e rota ativa
    QuizDemo.jsx           Estado da rodada, dicas e resultado
    SectionHeader.jsx      Abertura reutilizável de seções
  data/content.js          Módulos, perguntas, equipe e tecnologias
  pages/                   Home, Sobre, Funcionalidades, Tecnologias, Contato, NotFound
  services/
    api.js                 Adaptador REST futuro e fallback local
    rules.js               Cálculo do resultado e validação do formulário
  styles/global.css        Paleta, componentes e adaptações responsivas
  App.jsx                  BrowserRouter, rotas, foco e título por página
  main.jsx                 Inicialização do React
 tests/rules.test.js
vercel.json
vite.config.js
```

## React e interatividade

O portal usa React com **JavaScript**, Vite, `react-router-dom`, Lucide e CSS próprio. O projeto original usa **TypeScript**; a distinção aparece na página de tecnologias.

- `useState`: aba da prévia, menu móvel, filtros, campos, modal via parâmetro da URL, questões, feedback e resultado.
- `useEffect`: título e foco a cada rota, limpeza da consulta ao sair da página e ciclo do modal.
- Quiz com cinco perguntas demonstrativas, uma resposta confirmada por questão e feedback imediato. Dificuldade fácil: 10 pontos; média: 20; difícil: 30. Dica 50/50 disponível uma vez por rodada, sem reduzir a pontuação nesta simulação.
- O resultado abaixo de 60% indica revisão. Questões e gabaritos são locais porque esta é uma demonstração; no EduGuru real, o banco corrige as respostas e protege o gabarito.
- Reiniciar limpa a rodada. Atualizar a página também limpa o estado. Não há persistência de notas, pontos ou formulários.
- Busca ignora diferenças entre maiúsculas e acentos; filtros podem ser combinados com a busca.
- Contato valida nome, e-mail, assunto, mensagem e confirmação de que se trata de demonstração. O primeiro campo inválido recebe foco.
- O formulário **não envia e-mail, não grava dados e não alcança a equipe**. A confirmação informa exatamente isso.

Há HTML semântico, labels, foco visível, link para pular ao conteúdo, `aria-live`, modal nativo e respeito à preferência por movimento reduzido. As grades, o menu e os formulários se adaptam a telas pequenas; a página de arquitetura empilha suas camadas no celular.

## Preparação para uma API futura

O portal funciona sem `.env` e sem serviços externos. Para preparar um endpoint futuro, copie `.env.example` para `.env.local` **nesta pasta** e configure:

```dotenv
VITE_API_BASE_URL=https://sua-api.exemplo.com
```

Esse endereço é apenas um exemplo, não um serviço existente. O adaptador consulta `GET /modules`, com timeout de cinco segundos, validação do formato e fallback para os dados locais em erro de rede, status HTTP inválido ou resposta incompatível.

Contrato esperado: array não vazio de objetos com `id`, `title`, `category`, `icon`, `text` e `detail`, todos strings. Os nomes de ícones conhecidos estão em `src/components/Icon.jsx`. `src/data/content.js` serve como referência do formato.

A API deve permitir o domínio publicado nas regras CORS. Não foi inventado um endpoint do EduGuru: uma integração real exige definir o contrato e as permissões. O formulário permanece uma simulação mesmo quando `VITE_API_BASE_URL` é configurada; `submitFeedback()` é o ponto de substituição para uma futura operação real.

Variáveis `VITE_` aparecem no código entregue ao navegador. Nunca inclua senhas, tokens privados ou chave `service_role` do Supabase.

## Fidelidade ao projeto original

Fontes consultadas por leitura no EduGuru local:

- `README.md`: proposta, módulos e jornada Aprender → Revisar → Descobrir → Direcionar.
- `docs/MAPA_DO_CODIGO.md`: camadas, funções do banco e fluxos.
- `package.json`: React, TypeScript, Vite, Supabase, Lucide e Vitest.
- `src/funcionalidades/inicio/Inicio.tsx`: recursos e público-alvo.
- `src/compartilhado/estilos/global.css`: roxo `#8257e5`, escuro `#121214`, superfícies `#202024` e tema claro.
- `src/Rotas.tsx`: áreas de aluno e administrador.
- `src/funcionalidades/lgpd/Privacidade.tsx`: autores e orientadores.

Autores do EduGuru original: **João Pedro, Luiz Antonio e Thiago**. Orientação: **Prof. Oscar Alves Evangelista**. Coorientação: **Prof. Alessandro Aparecido da Silva Horas**. Não foram atribuídos sobrenomes, fotografias, funções individuais ou contatos que não constavam dos arquivos.

Stack original apresentada: React/TypeScript/Vite, CSS próprio, Supabase Auth, PostgreSQL/RLS, Storage, pg_cron, GitHub Pages/Actions, Vitest, APIs GitHub e ViaCEP, Turnstile e Brevo/pg_net. As recomendações do Guru são regras de desempenho; a Bússola não é teste vocacional. As barras da Home são ilustrativas.

## GitHub — comandos para execução manual

**Nenhum destes comandos foi executado pelo assistente.** Execute somente dentro da pasta nova. Antes, entre em [Criar repositório no GitHub](https://github.com/new), escolha a conta `nickk-eng`, o nome `eduguru-portal-react` e crie o repositório vazio, sem README, licença ou `.gitignore` automáticos.

```powershell
cd C:\Users\Melas\Desktop\eduguru-portal-react
git init
git add .
git commit -m "feat: cria portal institucional independente do EduGuru"
git branch -M main
git remote add origin https://github.com/nickk-eng/eduguru-portal-react.git
git push -u origin main
```

Se escolher outro nome no GitHub, altere apenas o nome do repositório na URL. A autenticação será feita por você no próprio terminal/GitHub.

## Vercel — publicação manual

1. Publique o repositório novo seguindo os passos anteriores.
2. Acesse [Vercel](https://vercel.com/new), entre na sua conta e escolha importar um repositório Git.
3. Selecione `nickk-eng/eduguru-portal-react`. Autorize acesso a esse repositório se solicitado.
4. Confirme **Framework Preset: Vite**, **Root Directory: raiz do repositório**, **Build Command: npm run build** e **Output Directory: dist**.
5. Se houver seleção da versão do Node, use 24.x. Não é necessário configurar variáveis de ambiente para o modo estático.
6. Clique em **Deploy** e abra a URL fornecida.
7. Visite `/sobre`, `/funcionalidades`, `/tecnologias` e `/contato` diretamente e atualize cada página. Teste o quiz e o formulário também no celular.

O arquivo `vercel.json` já contém o rewrite SPA solicitado:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Esse rewrite permite que o React Router resolva os endereços internos ao recarregar. Documentação oficial: [Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite).

## Revisão antes da entrega

- Preencher nome e RGM do autor desta atividade.
- Revisar textos e registrar a URL publicada, se exigida pela disciplina.
- Confirmar as cinco páginas na publicação, inclusive recarga de rota interna.
- Manter a distinção entre a equipe do PFC e a autoria desta atividade independente.
- A publicação na Vercel e o envio ao GitHub são manuais; não foram realizados pelo assistente.
