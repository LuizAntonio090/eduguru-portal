export const journey = [
  {
    title: 'Aprender',
    icon: 'BookOpen',
    text: 'Pratique as disciplinas em quizzes com correção imediata.',
  },
  {
    title: 'Revisar',
    icon: 'Lightbulb',
    text: 'Encontre materiais indicados pelo Guru para o que precisa de atenção.',
  },
  {
    title: 'Descobrir',
    icon: 'Compass',
    text: 'Explore seus interesses e afinidades com as áreas da tecnologia.',
  },
  {
    title: 'Direcionar',
    icon: 'Briefcase',
    text: 'Conecte o que você aprende a oportunidades de carreira.',
  },
]
export const modules = [
  {
    id: 'evolucao',
    title: 'Minha evolução',
    category: 'Aprendizagem',
    icon: 'ChartNoAxesCombined',
    text: 'Uma visão clara do seu próximo passo.',
    detail:
      'O painel reúne aproveitamento por disciplina, conteúdos dominados, pontos de revisão, médias e a jornada de aprendizagem. Disciplinas com 60% ou mais de acertos entram no grupo de domínio; com menos de cinco respostas, ainda estão em andamento.',
  },
  {
    id: 'quiz',
    title: 'Quiz e ranking',
    category: 'Aprendizagem',
    icon: 'Zap',
    text: 'Pratique, receba feedback e avance.',
    detail:
      'Rodadas de até 10 perguntas, alternativas embaralhadas e prioridade para questões ainda não acertadas. O primeiro acerto vale 10, 20 ou 30 pontos conforme a dificuldade. Há dica 50/50 e ranking geral ou por disciplina, com opção de anonimato.',
  },
  {
    id: 'guru',
    title: 'Recomendações do Guru',
    category: 'Aprendizagem',
    icon: 'Lightbulb',
    text: 'Revisão guiada pelo seu desempenho.',
    detail:
      'Abaixo de 60% de aproveitamento em uma disciplina, o Guru indica materiais para revisão. A recomendação usa regras de desempenho; o código inspecionado não demonstra um modelo de inteligência artificial generativa.',
  },
  {
    id: 'bussola',
    title: 'Bússola EduGuru',
    category: 'Carreira',
    icon: 'Compass',
    text: 'Descubra o que desperta sua curiosidade.',
    detail:
      'Autoavaliação opcional com 16 afirmações, respondidas de 1 a 5. As respostas geram afinidade com áreas da tecnologia. É uma orientação de interesses, sem caráter de teste vocacional.',
  },
  {
    id: 'carreiras',
    title: 'EduGuru Carreiras',
    category: 'Carreira',
    icon: 'Briefcase',
    text: 'Do aprendizado às oportunidades.',
    detail:
      'Consulta vagas públicas das comunidades backend-br e frontendbr pela API do GitHub. Combina interesses e desempenho, com filtros por área, nível e localidade. O padrão prioriza trabalho remoto e São Paulo.',
  },
  {
    id: 'notas',
    title: 'Notas e faltas',
    category: 'Organização',
    icon: 'ClipboardList',
    text: 'Sua trajetória acadêmica organizada.',
    detail:
      'Registro de M1, ND, NI, MS e exame, com cálculo de M2, MD e MF conforme as regras implementadas. M2 = ND × 0,7 + NI × 0,3 e MD = (M1 + 2 × M2) ÷ 3. O sistema considera o limite de 40 faltas.',
  },
  {
    id: 'materiais',
    title: 'Materiais da comunidade',
    category: 'Organização',
    icon: 'Library',
    text: 'Conhecimento que circula entre colegas.',
    detail:
      'Alunos compartilham links e arquivos. Há filtro automático, denúncia e moderação; arquivos de alunos e links de sites novos aguardam análise. O administrador gerencia os materiais, os sites permitidos e os termos bloqueados.',
  },
  {
    id: 'seguranca',
    title: 'Segurança e privacidade',
    category: 'Gestão',
    icon: 'ShieldCheck',
    text: 'Controle sobre a conta e os dados.',
    detail:
      'Supabase Auth, políticas RLS, registros de auditoria com retenção de 90 dias e aceite versionado de termos. MFA é opcional para alunos e obrigatório para administradores. Minha conta permite corrigir, baixar e excluir dados, trocar senha e sair do ranking.',
  },
  {
    id: 'admin',
    title: 'Painel administrativo',
    category: 'Gestão',
    icon: 'Settings2',
    text: 'Ferramentas para cuidar da plataforma.',
    detail:
      'O perfil administrador gerencia usuários, disciplinas, perguntas, moderação e listas do filtro de materiais, além de consultar indicadores e logs. As permissões são verificadas na interface e no banco de dados.',
  },
]
export const team = [
  { name: 'João Pedro', initials: 'JP' },
  { name: 'Luiz Antonio', initials: 'LA' },
  { name: 'Thiago', initials: 'TH' },
]
export const questions = [
  {
    id: 1,
    subject: 'Programação para Internet',
    level: 'Fácil',
    points: 10,
    text: 'Qual elemento HTML cria um link para outra página?',
    options: ['<a>', '<p>', '<section>', '<span>'],
    answer: 0,
    explanation:
      'O elemento <a>, com o atributo href, cria um hiperlink. HTML semântico torna o conteúdo mais compreensível e acessível.',
  },
  {
    id: 2,
    subject: 'Programação para Internet',
    level: 'Médio',
    points: 20,
    text: 'Qual Hook do React permite guardar um valor e atualizar a interface quando ele muda?',
    options: ['useEffect', 'useState', 'useRef', 'useId'],
    answer: 1,
    explanation:
      'useState guarda o estado do componente. A função de atualização solicita uma nova renderização com o novo valor.',
  },
  {
    id: 3,
    subject: 'Banco de Dados',
    level: 'Fácil',
    points: 10,
    text: 'Qual cláusula SQL filtra as linhas retornadas por uma consulta?',
    options: ['ORDER BY', 'GROUP BY', 'WHERE', 'JOIN'],
    answer: 2,
    explanation:
      'WHERE define uma condição para selecionar linhas. ORDER BY ordena os resultados, enquanto JOIN combina tabelas.',
  },
  {
    id: 4,
    subject: 'Segurança da Informação',
    level: 'Médio',
    points: 20,
    text: 'Qual prática adiciona uma segunda verificação ao acesso de uma conta?',
    options: [
      'Reutilizar a senha',
      'Desativar os logs',
      'Compartilhar o código',
      'Ativar a autenticação em dois fatores',
    ],
    answer: 3,
    explanation:
      'A autenticação em dois fatores combina a senha com uma segunda verificação. No EduGuru, é obrigatória para administradores e opcional para alunos.',
  },
  {
    id: 5,
    subject: 'Programação para Internet',
    level: 'Difícil',
    points: 30,
    text: 'Onde devem ficar as regras que impedem um aluno de alterar a própria pontuação?',
    options: [
      'Somente no CSS',
      'No banco ou serviço autenticado',
      'Em um campo oculto',
      'Apenas em useState',
    ],
    answer: 1,
    explanation:
      'Regras de segurança precisam ser verificadas no servidor ou banco autenticado. No EduGuru real, a correção e os pontos são calculados por funções PostgreSQL.',
  },
]
export const technologies = [
  {
    name: 'React + TypeScript',
    layer: 'Interface',
    icon: 'Code2',
    text: 'Componentes, tipagem e estado para construir as telas do EduGuru.',
  },
  {
    name: 'Vite',
    layer: 'Desenvolvimento',
    icon: 'Zap',
    text: 'Servidor de desenvolvimento e geração dos arquivos de produção.',
  },
  {
    name: 'Supabase Auth',
    layer: 'Identidade',
    icon: 'Fingerprint',
    text: 'Autenticação, recuperação de senha e verificação em duas etapas.',
  },
  {
    name: 'PostgreSQL + RLS',
    layer: 'Dados e regras',
    icon: 'Database',
    text: 'Dados relacionais, correção do quiz, pontuação e permissões por linha.',
  },
  {
    name: 'Supabase Storage',
    layer: 'Arquivos',
    icon: 'FolderOpen',
    text: 'Armazenamento privado dos materiais compartilhados na plataforma.',
  },
  {
    name: 'Vitest',
    layer: 'Qualidade',
    icon: 'CheckCheck',
    text: 'Testes das regras puras, como notas, filtros e afinidade de interesses.',
  },
]
