import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  Code2, Download, Github, Globe2, Languages, Mail, MapPin, Menu, X,
  Database, Search, Terminal, Workflow,
} from 'lucide-react'
import './styles.css'

const copy = {
  en: {
    nav: ['About', 'Experience', 'Projects', 'Skills'],
    availability: 'OPEN TO OPPORTUNITIES',
    eyebrow: 'FULL STACK DEVELOPER · MAÓ, MENORCA',
    headlineA: 'I build for the', headlineB: 'web — from API', headlineC: 'to interface.',
    intro: 'Developer focused on backend systems, data workflows and modern web applications. I enjoy turning complex problems into clear, maintainable solutions.',
    viewProjects: 'Explore projects', contact: 'Get in touch', scroll: 'SCROLL TO EXPLORE',
    aboutLabel: '01 / ABOUT', aboutTitle: 'Curious by nature.\nPractical by design.',
    aboutText: 'I’m a Full Stack Developer with hands-on experience in Python, Django, relational databases and Elasticsearch, built through an internship and personal projects. I care about clean logic, useful interfaces and software that is straightforward to maintain.',
    location: 'Based in Maó, Menorca, Spain', languages: 'Arabic & Amazigh (native) · Spanish (professional) · English & Catalan (intermediate) · French (basic)',
    experienceLabel: '02 / EXPERIENCE', experienceTitle: 'Where I’ve contributed',
    role: 'Backend Developer Intern', company: 'Mabrian Technologies', date: 'MAR — JUN 2026',
    exp: ['Developed and maintained backend features using Python and Django.', 'Processed, validated and automated CSV and JSON data workflows.', 'Implemented advanced search capabilities using Elasticsearch.', 'Worked with relational databases and business logic implementation.', 'Collaborated with development teams using Git-based workflows and GitLab.'],
    projectsLabel: '03 / SELECTED WORK', projectsTitle: 'Built to learn.\nMade to work.',
    projectsIntro: 'A growing collection of personal work. Project details and repositories will be added as each build is ready to share.',
    searchPlaceholder: 'Search projects or technologies…', all: 'All', fullstack: 'Full stack', noResults: 'No projects match that search.',
    projectTitle: 'Full Stack Web Applications', projectDesc: 'Personal applications built with PHP, JavaScript, React and MariaDB, including authentication, CRUD systems and API integrations.',
    projectStatus: 'PERSONAL PROJECTS', projectFoot: 'Project details coming soon',
    skillsLabel: '04 / TOOLKIT', skillsTitle: 'Tools I work with', skillsIntro: 'Technologies listed in my current CV. I keep this list honest and focused on what I’ve worked with.',
    backend: 'BACKEND & DATA', frontend: 'FRONTEND', tools: 'TOOLS & CLOUD',
    education: 'EDUCATION', diploma: 'Higher Vocational Diploma in Web Application Development (DAW)', school: 'IES Joan Ramis i Ramis', years: '2024 — 2026',
    languagesTitle: 'LANGUAGES', contactLabel: '05 / CONTACT', contactTitle: 'Have something\nin mind?', contactText: 'I’m interested in opportunities where I can keep learning, contribute to a team and build useful software.',
    emailMe: 'Email me', downloadCv: 'Download CV', footer: 'Designed & built with React', backTop: 'Back to top', copied: 'Email copied',
    githubNote: 'Update the GitHub link in src/main.jsx with your profile URL.',
  },
  es: {
    nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Tecnologías'],
    availability: 'ABIERTO A OPORTUNIDADES',
    eyebrow: 'DESARROLLADOR FULL STACK · MAÓ, MENORCA',
    headlineA: 'Construyo para', headlineB: 'la web: de la API', headlineC: 'a la interfaz.',
    intro: 'Desarrollador centrado en sistemas backend, flujos de datos y aplicaciones web modernas. Me gusta convertir problemas complejos en soluciones claras y fáciles de mantener.',
    viewProjects: 'Ver proyectos', contact: 'Contactar', scroll: 'DESLIZA PARA EXPLORAR',
    aboutLabel: '01 / SOBRE MÍ', aboutTitle: 'Curiosidad natural.\nDiseño práctico.',
    aboutText: 'Soy desarrollador Full Stack con experiencia práctica en Python, Django, bases de datos relacionales y Elasticsearch, adquirida durante unas prácticas y mediante proyectos personales. Me importan la lógica clara, las interfaces útiles y el software fácil de mantener.',
    location: 'Vivo en Maó, Menorca, España', languages: 'Árabe y amazigh (nativos) · Español (profesional) · Inglés y catalán (intermedio) · Francés (básico)',
    experienceLabel: '02 / EXPERIENCIA', experienceTitle: 'Mi experiencia',
    role: 'Prácticas de desarrollo backend', company: 'Mabrian Technologies', date: 'MAR — JUN 2026',
    exp: ['Desarrollo y mantenimiento de funcionalidades backend con Python y Django.', 'Procesamiento, validación y automatización de flujos de datos CSV y JSON.', 'Implementación de capacidades de búsqueda avanzada con Elasticsearch.', 'Trabajo con bases de datos relacionales y lógica de negocio.', 'Colaboración con equipos de desarrollo mediante Git y GitLab.'],
    projectsLabel: '03 / PROYECTOS', projectsTitle: 'Aprender creando.\nConstruir para usar.',
    projectsIntro: 'Una colección de proyectos personales en crecimiento. Añadiré detalles y repositorios cuando cada proyecto esté listo para compartir.',
    searchPlaceholder: 'Buscar proyectos o tecnologías…', all: 'Todos', fullstack: 'Full stack', noResults: 'No hay proyectos que coincidan con la búsqueda.',
    projectTitle: 'Aplicaciones web Full Stack', projectDesc: 'Aplicaciones personales desarrolladas con PHP, JavaScript, React y MariaDB, con autenticación, sistemas CRUD e integración de APIs.',
    projectStatus: 'PROYECTOS PERSONALES', projectFoot: 'Detalles del proyecto próximamente',
    skillsLabel: '04 / TECNOLOGÍAS', skillsTitle: 'Mi caja de herramientas', skillsIntro: 'Tecnologías que aparecen en mi CV actual. Mantengo la lista centrada en herramientas con las que he trabajado.',
    backend: 'BACKEND Y DATOS', frontend: 'FRONTEND', tools: 'HERRAMIENTAS Y CLOUD',
    education: 'FORMACIÓN', diploma: 'Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW)', school: 'IES Joan Ramis i Ramis', years: '2024 — 2026',
    languagesTitle: 'IDIOMAS', contactLabel: '05 / CONTACTO', contactTitle: '¿Hablamos de\nuna idea?', contactText: 'Me interesan oportunidades para seguir aprendiendo, colaborar con un equipo y crear software útil.',
    emailMe: 'Escríbeme', downloadCv: 'Descargar CV', footer: 'Diseñado y construido con React', backTop: 'Volver arriba', copied: 'Correo copiado',
    githubNote: 'Actualiza el enlace de GitHub en src/main.jsx con la URL de tu perfil.',
  },
}

const skills = {
  backend: ['Python', 'Django', 'PHP', 'Java', 'SQL', 'MariaDB', 'Elasticsearch', 'REST APIs'],
  frontend: ['JavaScript', 'React', 'HTML5', 'CSS3'],
  tools: ['Docker', 'Git', 'GitLab', 'Linux', 'AWS'],
}

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const t = copy[lang]
  const projects = useMemo(() => [{
    title: t.projectTitle,
    description: t.projectDesc,
    tags: ['PHP', 'JavaScript', 'React', 'MariaDB', 'REST APIs'],
    category: 'fullstack',
  }], [t])
  const shownProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter
    const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase()
    return matchesFilter && haystack.includes(query.toLowerCase())
  })

  const closeMenu = () => setMenuOpen(false)
  const navIds = ['about', 'experience', 'projects', 'skills']

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Mohamed Ittioui home"><span className="brand-mark">mi<span>.</span></span><span className="brand-name">MOHAMED ITTIOUI</span></a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {t.nav.map((label, index) => <a key={label} href={`#${navIds[index]}`} onClick={closeMenu}>{label}</a>)}
          <a href="#contact" onClick={closeMenu}>{lang === 'en' ? 'Contact' : 'Contacto'}</a>
        </nav>
        <div className="top-actions">
          <button className="language-toggle" onClick={() => setLang(lang === 'en' ? 'es' : 'en')} aria-label="Switch language"><Globe2 size={15} /><span>{lang === 'en' ? 'EN' : 'ES'}</span><span className="toggle-divider">/</span><span className="muted-lang">{lang === 'en' ? 'ES' : 'EN'}</span></button>
          <a className="top-contact" href="#contact">{lang === 'en' ? 'Let’s talk' : 'Hablemos'} <ArrowUpRight size={15} /></a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" />{t.availability}</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.headlineA}<br />{t.headlineB}<br /><span>{t.headlineC}</span></h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-buttons"><a className="button button-primary" href="#projects">{t.viewProjects}<ArrowDownRight size={17} /></a><a className="button button-ghost" href="#contact">{t.contact}<ArrowUpRight size={16} /></a></div>
            <div className="hero-meta"><span><MapPin size={14} /> {t.location}</span><span className="meta-separator" /><span><Code2 size={14} /> Python · Django · React</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="window-lock">●</span></div>
              <div className="code-lines" aria-hidden="true">
                <div><span className="line-num">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-num">02</span>&nbsp;&nbsp;name: <span className="code-green">'Mohamed'</span>,</div>
                <div><span className="line-num">03</span>&nbsp;&nbsp;role: <span className="code-green">'Full Stack'</span>,</div>
                <div><span className="line-num">04</span>&nbsp;&nbsp;focus: [</div>
                <div><span className="line-num">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">'backend'</span>,</div>
                <div><span className="line-num">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">'data'</span>,</div>
                <div><span className="line-num">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">'web'</span></div>
                <div><span className="line-num">08</span>&nbsp;&nbsp;],</div>
                <div><span className="line-num">09</span>&nbsp;&nbsp;learning: <span className="code-purple">true</span></div>
                <div><span className="line-num">10</span>{'}'};</div>
                <div className="code-cursor-line"><span className="line-num">11</span><span className="code-purple">return</span> <span className="code-blue">buildSomethingUseful</span>();<span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="footer-dot" /> JavaScript</span><span>UTF-8&nbsp; · &nbsp;LF</span></div>
            </div>
            <div className="floating-chip chip-python"><span className="chip-icon">Py</span><span>Python</span></div>
            <div className="floating-chip chip-react"><span className="react-symbol">✳</span><span>React</span></div>
            <div className="floating-chip chip-api"><Workflow size={15} /><span>REST APIs</span></div>
            <div className="art-caption"><span className="caption-line" /> <span>THOUGHTFUL CODE. REAL-WORLD VALUE.</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" />{t.scroll}</a>
          <div className="hero-index">PORTFOLIO <span>—</span> 2026</div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">{t.aboutLabel}</div>
          <div className="about-grid"><h2>{t.aboutTitle.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2><div className="about-content"><p>{t.aboutText}</p><div className="about-facts"><div className="fact"><span className="fact-icon"><MapPin size={17} /></span><div><strong>{lang === 'en' ? 'LOCATION' : 'UBICACIÓN'}</strong><span>{t.location}</span></div></div><div className="fact"><span className="fact-icon"><Languages size={17} /></span><div><strong>{t.languagesTitle}</strong><span>{t.languages}</span></div></div></div></div></div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-heading"><div><div className="section-kicker">{t.experienceLabel}</div><h2>{t.experienceTitle}</h2></div><span className="heading-decoration">01 <span>—</span> 01</span></div>
          <article className="experience-card"><div className="experience-date"><span className="date-dot" />{t.date}</div><div className="experience-main"><div className="experience-title-row"><div><h3>{t.role}</h3><p className="company-name">{t.company}</p></div><span className="work-icon"><BriefcaseBusiness size={21} /></span></div><ul className="experience-list">{t.exp.map((item) => <li key={item}><Check size={15} /><span>{item}</span></li>)}</ul><div className="experience-tags"><span>Python</span><span>Django</span><span>Elasticsearch</span><span>SQL</span><span>GitLab</span></div></div></article>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading projects-heading"><div><div className="section-kicker">{t.projectsLabel}</div><h2>{t.projectsTitle.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2></div><p className="section-intro">{t.projectsIntro}</p></div>
          <div className="project-controls"><div className="filter-tabs"><button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>{t.all}</button><button className={filter === 'fullstack' ? 'active' : ''} onClick={() => setFilter('fullstack')}>{t.fullstack}</button></div><label className="project-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder} /></label></div>
          {shownProjects.length ? <div className="project-grid">{shownProjects.map((project, index) => <article className="project-card" key={project.title}><div className="project-visual"><div className="project-visual-top"><span className="visual-label">{t.projectStatus}</span><span className="visual-number">0{index + 1}</span></div><div className="project-graphic"><div className="graphic-sidebar"><i /><i /><i /><i /></div><div className="graphic-main"><div className="graphic-topline" /><div className="graphic-titleline" /><div className="graphic-panels"><i /><i /><i /></div><div className="graphic-bottomline" /></div><div className="graphic-code"><span>&lt;/&gt;</span></div></div><span className="visual-orb orb-left" /><span className="visual-orb orb-right" /></div><div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><span className="project-arrow"><ArrowUpRight size={18} /></span></div><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-card-footer"><span>{t.projectFoot}</span><Code2 size={15} /></div></div></article>)}</div> : <div className="empty-state"><Search size={20} /><p>{t.noResults}</p></div>}
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading"><div><div className="section-kicker">{t.skillsLabel}</div><h2>{t.skillsTitle}</h2></div><p className="section-intro">{t.skillsIntro}</p></div>
          <div className="skills-grid"><SkillGroup icon={<Terminal size={19} />} title={t.backend} items={skills.backend} number="01" /><SkillGroup icon={<Code2 size={19} />} title={t.frontend} items={skills.frontend} number="02" /><SkillGroup icon={<Database size={19} />} title={t.tools} items={skills.tools} number="03" /></div>
          <div className="education-grid"><div className="education-block"><span className="education-icon"><BriefcaseBusiness size={18} /></span><div><span className="mini-label">{t.education}</span><h3>{t.diploma}</h3><p>{t.school}</p></div><span className="education-years">{t.years}</span></div><div className="education-block language-block"><span className="education-icon"><Languages size={18} /></span><div><span className="mini-label">{t.languagesTitle}</span><h3>{lang === 'en' ? 'Multilingual communication' : 'Comunicación multilingüe'}</h3><p>{t.languages}</p></div></div></div>
        </section>

        <section className="contact section-wrap section-block" id="contact"><div className="contact-panel"><div className="contact-glow" /><div className="contact-copy"><div className="section-kicker">{t.contactLabel}</div><h2>{t.contactTitle.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2><p>{t.contactText}</p><a className="button button-primary" href="mailto:mkamalitioui2003@gmail.com">{t.emailMe}<ArrowUpRight size={17} /></a></div><div className="contact-details"><a href="mailto:mkamalitioui2003@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small><strong>mkamalitioui2003@gmail.com</strong></span><ArrowUpRight size={17} /></a><a href="https://github.com/mittioui22" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18} /></span><span><small>GITHUB</small><strong>github.com/mittioui22</strong></span><ArrowUpRight size={17} /></a><a href="./CV-Mohamed-Ittioui.pdf" target="_blank" rel="noreferrer"><span className="contact-icon"><Download size={18} /></span><span><small>CURRICULUM VITAE</small><strong>{t.downloadCv} (PDF)</strong></span><ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">mi<span>.</span></span></a><span>© {new Date().getFullYear()} Mohamed Ittioui</span><span className="footer-built">{t.footer} <span className="footer-heart">✳</span></span><a href="#home" className="back-top">{t.backTop} <ArrowUpRight size={14} /></a></footer>
      <div className="bottom-rule" />
    </div>
  )
}

function SkillGroup({ icon, title, items, number }) {
  return <article className="skill-group"><div className="skill-group-top"><span className="skill-icon">{icon}</span><span className="skill-number">{number}</span></div><h3>{title}</h3><div className="skill-chips">{items.map((item) => <span key={item}>{item}</span>)}</div></article>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
