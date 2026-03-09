import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import profileImg from './assets/img/pfp.JPEG'
import tarefasGif from './assets/img/GerenciamentoDeTarefas.gif'
import hotelGif from './assets/img/HotelManagement.gif'
import aeroportoGif from './assets/img/GerenciamentoAeroporto.gif'
import {
  Github,
  User,
  Phone,
  Briefcase,
  Monitor,
  Mail,
  Instagram,
  Linkedin,
  Menu,
  X,
  Loader2,
} from 'lucide-react'

// ─── Constantes ─────────────────────────────────────────────────────────────

const GREEN = '#A3C552'
const BLUE  = '#2323C8'

// ─── Traduções ──────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      contacts: 'Contacts',
      experience: 'Experience',
    },
    footer: '© 2026 Bernardo Gomes. All rights reserved.',
    about: {
      heroTitle: 'Software\nEngineer.',
      heroSub:
        'I build scalable software solutions and manage complex projects across multilingual environments.',
      stat1:
        'Skilled in JavaScript, C, HTML/CSS and data analysis tools (SPSS, Excel, Qualtrics).',
      stat2:
        'Experience managing multilingual research projects, ensuring quality and deadline compliance.',
      title: 'About me',
      bio1:
        'Software Engineering undergraduate with a solid background in Project Management and Programming within the Market Research industry. Experienced in managing multiple simultaneous projects in multilingual environments (English and Spanish), ensuring deadlines and quality standards are consistently met.',
      bio2:
        "Currently pursuing a Bachelor's degree in Software Engineering at PUC Minas (expected December 2027). Skilled in JavaScript, C, HTML, and CSS, with hands-on expertise in data analysis tools (SPSS, Excel), research platforms (Qualtrics), and process automation — bringing both technical and managerial perspectives to every project.",
      hobbiesTitle: 'Hobbies and interests',
      hobbiesText:
        'Outside the development environment, I pursue an active lifestyle connected with the world. I am a big sports enthusiast, especially competitive ones, where I find the challenge and discipline I also apply in my career. When I want to relax, I like to spend time with friends, play video games, or listen to music throughout the day. I am also passionate about traveling and discovering new cultures, always seeking experiences that broaden my worldview. On the creative side, I keep exploring the possibilities of Artificial Intelligence, combining technology and innovation in an organic way.',
    },
    projects: {
      title: 'My Projects',
      loadMore: 'Load more...',
    },
    experience: {
      title: 'Experience',
    },
    contact: {
      title: 'Contact Me',
      description:
        "Feel free to reach out! Whether it's a project opportunity, a collaboration idea, or just a conversation about tech and research — I'd love to hear from you.",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      errors: {
        nameRequired: 'Name is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Please enter a valid email.',
        subjectRequired: 'Subject is required.',
        messageRequired: 'Message is required.',
      },
    },
    experienceData: [
      {
        company: 'Offerwise',
        period: 'May 2025 – Present',
        title: 'Programming & Project Management Intern',
        description:
          'Managed the lifecycle of multiple simultaneous market research projects, ensuring quality and deadline compliance. Maintained direct communication with national and international clients for expectation alignment and status reporting. Developed complex survey logic on platforms such as Qualtrics. Handled cross-quota data analysis using SPSS and Excel. Worked on projects conducted entirely in English (Advanced) and Spanish (Intermediate).',
      },
    ],
  },
  pt: {
    nav: {
      projects: 'Projetos',
      about: 'Sobre',
      contacts: 'Contato',
      experience: 'Experiência',
    },
    footer: '© 2026 Bernardo Gomes. Todos os direitos reservados.',
    about: {
      heroTitle: 'Engenheiro\nde Software.',
      heroSub:
        'Desenvolvo soluções de software escaláveis e gerencio projetos complexos em ambientes multilíngues.',
      stat1:
        'Habilidades em JavaScript, C, HTML/CSS e ferramentas de análise de dados (SPSS, Excel, Qualtrics).',
      stat2:
        'Experiência em gestão de projetos de pesquisa multilíngues, garantindo qualidade e prazos.',
      title: 'Sobre mim',
      bio1:
        'Graduando em Engenharia de Software com atuação sólida em Gestão de Projetos e Programação na área de Pesquisa de Mercado. Experiência na administração de múltiplos projetos simultâneos em ambientes multilíngues (Inglês e Espanhol), garantindo prazos e padrões de qualidade.',
      bio2:
        'Cursando Bacharelado em Engenharia de Software na PUC Minas, com previsão de formatura em dezembro de 2027. Habilidades em JavaScript, C, HTML e CSS, com domínio em ferramentas de análise de dados (SPSS, Excel), plataformas de pesquisa (Qualtrics) e automação de processos.',
      hobbiesTitle: 'Hobbies e interesses',
      hobbiesText:
        'Fora do ambiente de desenvolvimento, busco um estilo de vida ativo e conectado com o mundo. Sou um grande entusiasta de esportes, especialmente os competitivos, onde encontro o desafio e a disciplina que também aplico na minha carreira. Quando quero relaxar, gosto de passar tempo com meus amigos, jogar videogame ou escutar música para acompanhar o dia. Além disso, sou apaixonado por viajar e conhecer novas culturas, sempre buscando experiências que ampliem minha visão de mundo. No lado criativo, continuo explorando as possibilidades da Inteligência Artificial, unindo tecnologia e inovação de forma espontânea.',
    },
    projects: {
      title: 'Meus Projetos',
      loadMore: 'Carregar mais...',
    },
    experience: {
      title: 'Experiência',
    },
    contact: {
      title: 'Contato',
      description:
        'Fique à vontade para entrar em contato! Seja para uma oportunidade de projeto, colaboração ou apenas para conversar sobre tecnologia e pesquisa — adoraria ouvir você.',
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar',
      sending: 'Enviando...',
      errors: {
        nameRequired: 'O nome é obrigatório.',
        emailRequired: 'O e-mail é obrigatório.',
        emailInvalid: 'Insira um e-mail válido.',
        subjectRequired: 'O assunto é obrigatório.',
        messageRequired: 'A mensagem é obrigatória.',
      },
    },
    experienceData: [
      {
        company: 'Offerwise',
        period: 'Mai. 2025 – Presente',
        title: 'Estagiário em Programação e Gestão de Projetos',
        description:
          'Administração do ciclo de vida de múltiplos projetos simultâneos de pesquisa de mercado, garantindo cumprimento de cronogramas e requisitos de qualidade. Comunicação direta com clientes nacionais e internacionais para alinhamento de expectativas e apresentação de status reports. Desenvolvimento e lógica de questionários em plataformas como Qualtrics. Manipulação de bases de dados complexas e controle de cotas cruzadas utilizando SPSS e Excel. Atuação em projetos em Inglês (Avançado) e Espanhol (Intermediário).',
      },
    ],
  },
}

// ─── Utilitários ────────────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ─── Repositórios Estáticos ──────────────────────────────────────────────────

const STATIC_REPOS = [
  {
    title: 'GerenciamentoDeTarefas',
    year: '2024',
    category: 'Frontend',
    tags: ['JavaScript'],
    description: 'Projeto de software visando contribuir com a organização e gerenciamento de tarefas no dia a dia.',
    github: 'https://github.com/bernardogomes25/GerenciamentoDeTarefas',
    gif: tarefasGif,
  },
  {
    title: 'HotelManagement',
    year: '2024',
    category: 'Systems',
    tags: ['C'],
    description: 'Software de gestão para hotéis. Trabalho interdisciplinar das disciplinas de Algoritmos e Estruturas de Dados I e Fundamentos da Engenharia de Software.',
    github: 'https://github.com/bernardogomes25/HotelManagement',
    gif: hotelGif,
  },
  {
    title: 'GerenciamentoDeAeroporto',
    year: '2024',
    category: 'Backend',
    tags: ['Java'],
    description: 'Este projeto é um sistema de gestão para uma agência de viagens, permitindo o cadastro de funcionários, companhias aéreas, aeroportos e passagens aéreas. O sistema também possibilita a compra de passagens e a emissão de bilhetes para viajantes. Desenvolvido em Java, o projeto segue o paradigma da Programação Orientada a Objetos (POO).',
    github: 'https://github.com/bernardogomes25/GerenciamentoDeAeroporto',
    gif: aeroportoGif,
  },
]

// ─── Fundo Spline ───────────────────────────────────────────────────────────

const SplineLazy = lazy(() => import('@splinetool/react-spline'))

function SplineBackground({ scrollY }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          bottom: '-10%',
          left: 0,
          right: 0,
          transform: `translateY(${scrollY * 0.04}px)`,
          willChange: 'transform',
        }}
      >
        <Suspense fallback={null}>
          <SplineLazy
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(35,35,200,0.68) 0%, rgba(8,8,45,0.82) 100%)',
        }}
      />
    </div>
  )
}

// ─── Formas SVG Decorativas ────────────────────────────────────────────────

function DotGrid({ cols = 8, rows = 4, gap = 18, r = 2.5, color }) {
  const w = (cols - 1) * gap + r * 2
  const h = (rows - 1) * gap + r * 2
  const dots = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * gap + r}
          cy={row * gap + r}
          r={r}
          fill={color}
        />
      )
    }
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      {dots}
    </svg>
  )
}

function StairShape({ color, size = 48, steps = 4, direction = 'down-right' }) {
  const step = size / steps
  const lines = []
  for (let i = 0; i < steps; i++) {
    if (direction === 'down-right') {
      lines.push(
        <line key={`h${i}`} x1={i * step} y1={i * step} x2={(i + 1) * step} y2={i * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />,
        <line key={`v${i}`} x1={(i + 1) * step} y1={i * step} x2={(i + 1) * step} y2={(i + 1) * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      )
    } else {
      lines.push(
        <line key={`h${i}`} x1={size - i * step} y1={i * step} x2={size - (i + 1) * step} y2={i * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />,
        <line key={`v${i}`} x1={size - (i + 1) * step} y1={i * step} x2={size - (i + 1) * step} y2={(i + 1) * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      )
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" overflow="visible">
      {lines}
    </svg>
  )
}

function Squiggle({ color, width = 48 }) {
  return (
    <svg width={width} height="20" viewBox={`0 0 ${width} 20`} aria-hidden="true">
      <path
        d={`M0 10 Q${width * 0.25} 0 ${width * 0.5} 10 Q${width * 0.75} 20 ${width} 10`}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── Paralaxe ──────────────────────────────────────────────────────────────

function useParallax() {
  const [scrollY, setScrollY] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return scrollY
}

// ─── Barra de Navegação ─────────────────────────────────────────────────────

function Navbar({ lang, onToggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = TRANSLATIONS[lang].nav

  const NAV_LINKS = [
    { label: t.projects,   Icon: Monitor,   href: '#projects'   },
    { label: t.about,      Icon: User,      href: '#about'      },
    { label: t.contacts,   Icon: Phone,     href: '#contacts'   },
    { label: t.experience, Icon: Briefcase, href: '#experience' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: BLUE }}>
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        <a href="#about" className="font-extrabold text-xl tracking-tight select-none" style={{ color: GREEN }}>
          Bernardo Gomes
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex flex-col items-center gap-1 text-white hover:opacity-70 transition-opacity text-xs font-medium"
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Seletor de idioma + menu hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="font-bold text-xs border-2 rounded-full px-3 py-1 transition-colors"
            style={{ borderColor: GREEN, color: GREEN }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = GREEN; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = GREEN }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="md:hidden text-white hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t pb-3" style={{ borderColor: 'rgba(163,197,82,0.3)' }}>
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-white hover:opacity-70 transition-opacity"
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

// ─── Rodapé ─────────────────────────────────────────────────────────────────

function Footer({ lang }) {
  return (
    <footer className="flex items-center px-10 py-6 mt-0" style={{ backgroundColor: GREEN }}>
      <a
        href="https://github.com/bernardogomes25"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:opacity-60 transition-opacity"
      >
        <Github size={26} strokeWidth={1.8} />
      </a>
      <p className="flex-1 text-center text-black text-sm font-medium">{TRANSLATIONS[lang].footer}</p>
      <div className="w-7" aria-hidden="true" />
    </footer>
  )
}

// ─── Seção Hero / Sobre ─────────────────────────────────────────────────────

function AboutSection({ lang, scrollY }) {
  const t = TRANSLATIONS[lang].about
  const heroLines = t.heroTitle.split('\n')

  return (
    <>
      <section
        id="about"
        className="flex flex-col md:flex-row min-h-screen pt-[64px]"
        style={{ overflow: 'hidden' }}
      >
        {/* Painel esquerdo – azul */}
        <div
          className="relative flex flex-col justify-between px-8 sm:px-14 py-14 md:w-[58%]"
          style={{ backgroundColor: BLUE }}
        >
          <div
            className="absolute bottom-20 right-8 opacity-30 hidden md:block"
            style={{ transform: `translateY(${scrollY * 0.35}px)`, willChange: 'transform' }}
          >
            <StairShape color={GREEN} size={64} steps={4} direction="down-right" />
          </div>

          <div
            className="flex-1 flex flex-col justify-center"
            style={{ transform: `translateY(${-scrollY * 0.08}px)`, willChange: 'transform' }}
          >
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ color: GREEN, fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              {heroLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-white text-base sm:text-lg max-w-md leading-relaxed">
              {t.heroSub}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12">
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{t.stat1}</p>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{t.stat2}</p>
          </div>
        </div>

        {/* Painel direito – verde */}
        <div
          className="relative flex items-center justify-center overflow-hidden md:w-[42%] min-h-[50vh] md:min-h-0"
          style={{ backgroundColor: GREEN }}
        >
          <div
            className="absolute top-8 left-8 opacity-60"
            style={{ transform: `translateY(${-scrollY * 0.28}px)`, willChange: 'transform' }}
          >
            <DotGrid cols={8} rows={5} gap={16} r={2.5} color={BLUE} />
          </div>

          <div
            className="absolute left-6 top-1/2 opacity-60"
            style={{ transform: `translateY(calc(-50% + ${scrollY * 0.18}px))`, willChange: 'transform' }}
          >
            <Squiggle color={BLUE} width={44} />
          </div>

          <div
            className="absolute bottom-16 left-10 opacity-30"
            style={{ transform: `translateY(${scrollY * 0.28}px)`, willChange: 'transform' }}
          >
            <StairShape color={BLUE} size={56} steps={4} direction="down-right" />
          </div>

          <div
            className="absolute right-6 top-1/2 flex flex-col gap-3 items-center opacity-50"
            style={{ transform: `translateY(calc(-50% + ${-scrollY * 0.15}px))`, willChange: 'transform' }}
          >
            <div className="w-4 h-4 border-2" style={{ borderColor: BLUE }} />
            {[0,1,2,3].map(i => (
              <div key={i} className="w-2 h-2 rotate-45" style={{ backgroundColor: BLUE }} />
            ))}
          </div>

          <div
            className="relative z-10 m-12"
            style={{ transform: `translateY(${-scrollY * 0.1}px)`, willChange: 'transform' }}
          >
            <div
              className="absolute inset-0 border-2 border-white"
              style={{ transform: 'translate(12px, 12px)' }}
            />
            <img
              src={profileImg}
              alt="Bernardo Gomes"
              className="relative block w-52 sm:w-64 md:w-60 lg:w-72 object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="font-extrabold text-4xl sm:text-5xl mb-14" style={{ color: GREEN }}>{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <p className="text-white leading-relaxed text-sm sm:text-base">{t.bio1}</p>
          <p className="text-white leading-relaxed text-sm sm:text-base">{t.bio2}</p>
        </div>

        <div className="border-t pt-14" style={{ borderColor: 'rgba(163,197,82,0.3)' }}>
          <h3
            className="font-extrabold text-3xl sm:text-4xl mb-8"
            style={{ color: GREEN }}
          >
            {t.hobbiesTitle}
          </h3>
          <p className="text-white/80 max-w-3xl leading-relaxed text-sm sm:text-base">
            {t.hobbiesText}
          </p>
        </div>
      </section>
    </>
  )
}

// ─── Seção de Projetos ──────────────────────────────────────────────────────

function ProjectsSection({ lang }) {
  const t = TRANSLATIONS[lang].projects

  const grouped = STATIC_REPOS.reduce((acc, p) => {
    if (!acc.length || acc[acc.length - 1].year !== p.year) {
      acc.push({ year: p.year, items: [p] })
    } else {
      acc[acc.length - 1].items.push(p)
    }
    return acc
  }, [])

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <h2 className="font-extrabold text-4xl sm:text-5xl" style={{ color: GREEN }}>{t.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(163,197,82,0.3)' }} />
      </div>

      <div className="relative pl-16 sm:pl-24">
          <div
            className="absolute left-6 sm:left-10 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: GREEN, opacity: 0.5 }}
          />

          {grouped.map((group) => (
            <div key={group.year}>
              <div className="relative mb-6 flex items-center">
                <div
                  className="absolute w-4 h-4 rotate-45 z-10"
                  style={{ backgroundColor: GREEN, left: 'calc(-2.5rem - 2px)' }}
                />
                <span
                  className="text-xs font-bold px-3 py-0.5 rounded-full"
                  style={{ backgroundColor: GREEN, color: '#000' }}
                >
                  {group.year}
                </span>
              </div>

              <div className="space-y-5 mb-10">
                {group.items.map((project, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div
                      className="absolute w-3 h-3 rounded-full mt-5 z-10"
                      style={{
                        backgroundColor: GREEN,
                        border: `2px solid ${BLUE}`,
                        left: 'calc(-2.5rem + 1px)',
                      }}
                    />

                    <div
                      className="flex-1 flex flex-col sm:flex-row gap-4 rounded-2xl p-5 border transition-all hover:border-opacity-60"
                      style={{ backgroundColor: 'rgba(35,35,200,0.35)', borderColor: 'rgba(163,197,82,0.25)' }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-white text-lg font-bold">{project.title}</h3>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                            style={{ borderColor: GREEN, color: GREEN }}
                          >
                            {project.category}
                          </span>
                          <a
                            href={project.github}
                            aria-label="GitHub repository"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto hover:opacity-60 transition-opacity"
                            style={{ color: GREEN }}
                          >
                            <Github size={20} strokeWidth={1.8} />
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-black text-xs font-semibold px-3 py-0.5 rounded-full"
                              style={{ backgroundColor: GREEN }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                      </div>

                      {/* GIF do projeto */}
                      <div
                        className="flex-shrink-0 w-full sm:w-36 h-28 rounded-xl overflow-hidden border"
                        style={{ borderColor: 'rgba(163,197,82,0.2)', backgroundColor: 'rgba(35,35,200,0.4)' }}
                      >
                        <img
                          src={project.gif}
                          alt={`Preview de ${project.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

// ─── Seção de Experiência ───────────────────────────────────────────────────

function ExperienceSection({ lang }) {
  const t = TRANSLATIONS[lang].experience
  const experiences = TRANSLATIONS[lang].experienceData

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <h2 className="font-extrabold text-4xl sm:text-5xl" style={{ color: GREEN }}>{t.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(163,197,82,0.3)' }} />
      </div>

      <div className="relative pl-16 sm:pl-24">
        <div
          className="absolute left-6 sm:left-10 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: GREEN, opacity: 0.5 }}
        />
        <div
          className="absolute top-0 h-1 w-4 rounded-sm"
          style={{ backgroundColor: GREEN, left: 'calc(1.5rem - 8px)' }}
        />
        <div
          className="absolute bottom-0 h-1 w-4 rounded-sm"
          style={{ backgroundColor: GREEN, left: 'calc(1.5rem - 8px)' }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-start">
              <div
                className="absolute w-4 h-4 rounded-full z-10"
                style={{
                  backgroundColor: GREEN,
                  border: `3px solid ${BLUE}`,
                  left: 'calc(-2.5rem)',
                  top: '1.4rem',
                }}
              />

              <div
                className="flex-1 rounded-2xl p-5 sm:p-6 border"
                style={{ backgroundColor: GREEN, borderColor: GREEN }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3 flex-wrap">
                  <h3 className="text-black font-extrabold text-lg sm:text-xl">{exp.company}</h3>
                  <span className="text-black/70 text-xs sm:text-sm">{exp.period}</span>
                  <span
                    className="text-xs font-bold px-3 py-0.5 rounded-full self-start"
                    style={{ backgroundColor: BLUE, color: GREEN }}
                  >
                    {exp.title}
                  </span>
                </div>
                <p className="text-black/80 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Campo de Formulário ────────────────────────────────────────────────────

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-white/70 text-xs font-semibold uppercase tracking-wider">
        {label}
      </label>
      <div>
        {children}
        {error && <p className="text-red-400 text-xs mt-1 font-semibold">{error}</p>}
      </div>
    </div>
  )
}

// ─── Seção de Contato ───────────────────────────────────────────────────────

function ContactSection({ lang }) {
  const t = TRANSLATIONS[lang].contact
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())                  e.name    = t.errors.nameRequired
    if (!form.email.trim())                 e.email   = t.errors.emailRequired
    else if (!EMAIL_REGEX.test(form.email)) e.email   = t.errors.emailInvalid
    if (!form.subject.trim())               e.subject = t.errors.subjectRequired
    if (!form.message.trim())               e.message = t.errors.messageRequired
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSending(true)
    setSuccessMsg('')

    try {
      const FORMSPREE_ID = 'xdalvlya'
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || `HTTP ${res.status}`)
      }

      setSuccessMsg(lang === 'en' ? 'Message sent successfully!' : 'Mensagem enviada com sucesso!')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrors({
        submit:
          lang === 'en'
            ? `Something went wrong: ${err.message}. Try again.`
            : `Algo deu errado: ${err.message}. Tente novamente.`,
      })
    } finally {
      setIsSending(false)
    }
  }

  const inputCls =
    'w-full rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 border transition-colors'
  const inputStyle = { backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(163,197,82,0.3)' }

  return (
    <section id="contacts" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <h2 className="font-extrabold text-4xl sm:text-5xl" style={{ color: GREEN }}>{t.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(163,197,82,0.3)' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Coluna esquerda: descrição e redes sociais */}
        <div className="flex flex-col gap-8">
          <p className="text-white/80 leading-relaxed text-base">{t.description}</p>

          <div className="flex flex-col gap-4">
            {[
              { Icon: Mail,      text: 'be.gpereira25@gmail.com',    href: 'mailto:be.gpereira25@gmail.com' },
              { Icon: Instagram, text: '__bernardogomes',             href: 'https://instagram.com/__bernardogomes' },
              { Icon: Linkedin,  text: 'Bernardo Gomes',              href: 'https://www.linkedin.com/in/bernardogomespereira/' },
              { Icon: Github,    text: 'bernardogomes25',             href: 'https://github.com/bernardogomes25' },
            ].map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
                style={{ color: GREEN }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(163,197,82,0.15)' }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <span className="text-sm text-white group-hover:opacity-70 transition-opacity">{text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Coluna direita: formulário */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ backgroundColor: 'rgba(35,35,200,0.3)', borderColor: 'rgba(163,197,82,0.2)' }}
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field id="name" label={t.name} error={errors.name}>
                <input
                  id="name" type="text" name="name"
                  value={form.name} onChange={handleChange}
                  className={inputCls} style={inputStyle}
                />
              </Field>
              <Field id="email" label={t.email} error={errors.email}>
                <input
                  id="email" type="email" name="email"
                  value={form.email} onChange={handleChange}
                  className={inputCls} style={inputStyle}
                />
              </Field>
            </div>

            <Field id="subject" label={t.subject} error={errors.subject}>
              <input
                id="subject" type="text" name="subject"
                value={form.subject} onChange={handleChange}
                className={inputCls} style={inputStyle}
              />
            </Field>

            <Field id="message" label={t.message} error={errors.message}>
              <textarea
                id="message" name="message"
                value={form.message} onChange={handleChange}
                rows={5}
                className={`${inputCls} rounded-xl resize-none`}
                style={inputStyle}
              />
            </Field>

            {errors.submit && (
              <p className="text-red-400 text-sm font-semibold text-center">{errors.submit}</p>
            )}
            {successMsg && (
              <p className="font-semibold text-sm text-center" style={{ color: GREEN }}>{successMsg}</p>
            )}

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={isSending}
                className="flex items-center gap-2 font-bold px-10 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-black"
                style={{ backgroundColor: GREEN }}
              >
                {isSending && <Loader2 size={16} className="animate-spin" />}
                {isSending ? t.sending : t.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── App Principal ──────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState('en')
  const scrollY = useParallax()
  const toggleLang = () => setLang((l) => (l === 'en' ? 'pt' : 'en'))

  return (
    <div className="min-h-screen text-white" style={{ position: 'relative', backgroundColor: 'transparent' }}>
      <SplineBackground scrollY={scrollY} />
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main>
        <AboutSection lang={lang} scrollY={scrollY} />
        <div style={{ borderTop: '1px solid rgba(163,197,82,0.15)' }}>
          <ProjectsSection lang={lang} />
        </div>
        <div style={{ borderTop: '1px solid rgba(163,197,82,0.15)' }}>
          <ExperienceSection lang={lang} />
        </div>
        <div style={{ borderTop: '1px solid rgba(163,197,82,0.15)' }}>
          <ContactSection lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
