import { useState, type ReactNode } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  DatabaseZap,
  GraduationCap,
  Github,
  Mail,
  MapPin,
  Linkedin,
  Menu,
  Sparkles,
  X,
} from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useInView } from "@/hooks/use-in-view"

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const careerStartDate = new Date(2022, 1, 12)

function getCompletedCareerYears(currentDate = new Date()) {
  const yearDifference = currentDate.getFullYear() - careerStartDate.getFullYear()
  const hasReachedAnniversary =
    currentDate.getMonth() > careerStartDate.getMonth() ||
    (currentDate.getMonth() === careerStartDate.getMonth() &&
      currentDate.getDate() >= careerStartDate.getDate())

  return hasReachedAnniversary ? yearDifference : yearDifference - 1
}

const focusAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Business applications delivery",
    description:
      "Designs CRM and customer journey experiences that connect operations, marketing, and service teams.",
  },
  {
    icon: DatabaseZap,
    title: "Data unification and segmentation",
    description:
      "Uses Customer Insights Data and consent-aware communication flows to create cleaner, more useful audiences.",
  },
  {
    icon: BrainCircuit,
    title: "Automation with an ML mindset",
    description:
      "Brings Python, analytics, and machine learning fundamentals into practical business problem-solving.",
  },
]

const experience = [
  {
    period: "Aug 2025 - Present",
    client: "Infosys for Microsoft",
    title: "Power Platform / Copilot Studio Developer",
    points: [
      "Working on the Power CAT Copilot Studio Kit, a Microsoft open-source toolkit that helps makers develop, govern, test, and monitor custom Copilot Studio agents.",
      "Contributing across capabilities tied to agent testing, governance workflows, prompt quality, and analytics for agent performance and usage visibility.",
      "Delivering this work through Infosys while building directly in the Microsoft ecosystem on Copilot Studio and Power Platform solutions.",
    ],
  },
  {
    period: "2025",
    client: "Central Bank",
    title: "Dynamics 365 Developer",
    points: [
      "Implemented onboarding journeys based on account type inside Dynamics 365.",
      "Developed marketing emails and configured consent management so customers only receive opted-in communications.",
      "Unified customer and financial data in Customer Insights Data to create meaningful audience segments.",
    ],
  },
  {
    period: "2022 - 2024",
    client: "Humana",
    title: "Dynamics 365 Developer",
    points: [
      "Customized forms with JavaScript to improve user experience inside Dynamics 365.",
      "Built workflow integrations with external APIs, including address verification systems.",
      "Automated lead agent assignment to streamline lead management and improve operational efficiency.",
    ],
  },
  {
    period: "Additional strength",
    client: "Data and machine learning foundation",
    title: "Analytical problem solver",
    points: [
      "Hands-on with NumPy, pandas, scikit-learn, seaborn, and NLTK for business-oriented analysis.",
      "Recognized as High Talent and completed TCS Wings1 certifications in Machine First and Intelligent Business Automation.",
    ],
  },
]

const skillGroups = [
  {
    title: "Microsoft stack",
    items: ["Dynamics 365", "Power Platform", "Power Automate", "Customer Insights", "Power BI", "Canvas Apps"],
  },
  {
    title: "Engineering",
    items: ["React", "JavaScript", "C#", "Python", "SQL"],
  },
  {
    title: "Data and ML",
    items: ["NumPy", "pandas", "scikit-learn", "seaborn", "NLTK"],
  },
  {
    title: "Delivery strengths",
    items: ["Workflow automation", "Data integration", "Audience segmentation", "Linux fundamentals"],
  },
]

const certifications = [
  "Power Platform Developer Associate (PL-400)",
  "Power Automate RPA Developer Associate (PL-500)",
  "Dynamics 365 Fundamentals (MB-910)",
]

const marqueeItems = [
  "Dynamics 365", "Power Platform", "Copilot Studio", "Power Automate",
  "Customer Insights", "Power BI", "React", "C#", "Python", "SQL",
  "NumPy", "pandas", "scikit-learn",
]

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const careerYears = getCompletedCareerYears()
  const quickStats = [
    { value: `${careerYears}+`, label: "Years building in Dynamics 365 and Power Platform" },
    { value: "3", label: "Enterprise programs across healthcare, banking, and Microsoft ecosystems" },
    { value: "3", label: "Microsoft certifications across Power Platform and Dynamics 365" },
  ]

  return (
    <div>
      <div className="bg-wash" />
      <div className="bg-dots" />

      <div className="container-main">
        {/* ── Nav ── */}
        <nav className="nav">
          <a href="#top" className="nav-brand" aria-label="Ranjith Kumar home">
            <span className="nav-brand-icon">RK</span>
            <div>
              <div className="nav-brand-text">Ranjith Kumar M</div>
              <div className="nav-brand-sub">Dynamics Developer</div>
            </div>
          </a>

          <div className={`nav-links ${mobileNavOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={() => setMobileNavOpen(false)}>About</a>
            <a href="#experience" onClick={() => setMobileNavOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMobileNavOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
          </div>

          <div className="nav-actions">
            <ModeToggle />
            <button
              className="nav-toggle"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section id="top" className="hero">
          <Reveal>
            <div className="hero-content">
              <div className="hero-status">
                <span className="status-dot" />
                {careerYears}+ years in Microsoft business applications
              </div>

              <h1 className="hero-name">
                Ranjith<br />Kumar M
              </h1>

              <p className="hero-role">
                Dynamics 365 &amp; Power Platform Developer
              </p>

              <p className="hero-desc">
                Building smoother customer journeys with Dynamics&nbsp;365, Power Platform,
                and data&#8209;driven automation — and now working on Microsoft's Copilot Studio Kit.
              </p>

              <div className="hero-buttons">
                <a className="btn-primary" href="mailto:Mailranjith7022@gmail.com">
                  <span>Start a conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  className="btn-outline"
                  href="/Ranjith-Kumar-Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Download resume
                </a>
              </div>

              <div className="hero-links">
                <a className="hero-link" href="mailto:Mailranjith7022@gmail.com">
                  <Mail className="h-3.5 w-3.5" />
                  Mailranjith7022@gmail.com
                </a>
                <a className="hero-link" href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/" target="_blank" rel="noreferrer noopener">
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
                <a className="hero-link" href="https://github.com/ranjith7022" target="_blank" rel="noreferrer noopener">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <span className="hero-link">
                  <MapPin className="h-3.5 w-3.5" />
                  Chennai, Tamil Nadu
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="hero-panel">
              <div className="bento-card-label">Current Focus</div>
              <h2 className="hero-panel-title">
                Copilot Studio &amp; Power Platform work for Microsoft
              </h2>
              <p className="hero-panel-desc">
                Current delivery includes the Power CAT Copilot Studio Kit — working on
                agent testing, governance workflows, prompt quality, and analytics for
                agent performance and usage visibility.
              </p>

              <div className="hero-mini-grid">
                <div className="hero-mini-card">
                  <span>Current project</span>
                  <strong>Power CAT Copilot Studio Kit</strong>
                </div>
                <div className="hero-mini-card">
                  <span>Role</span>
                  <strong>Infosys for Microsoft</strong>
                </div>
                <div className="hero-mini-card">
                  <span>Experience</span>
                  <strong>{careerYears}+ years</strong>
                </div>
                <div className="hero-mini-card">
                  <span>Stack</span>
                  <strong>Copilot Studio, Power Platform, C#, Dataverse</strong>
                </div>
              </div>

              <a
                className="bento-link"
                href="https://github.com/microsoft/Power-CAT-Copilot-Studio-Kit"
                target="_blank"
                rel="noreferrer noopener"
              >
                View Microsoft project <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </aside>
          </Reveal>
        </section>
      </div>

      {/* ── Marquee (full-bleed) ── */}
      <Reveal>
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container-main" style={{ paddingTop: 0 }}>
        {/* ── Bento: About + Stats + Focus ── */}
        <section id="about" className="section">
          <Reveal>
            <div>
              <p className="section-label">About</p>
              <h2 className="section-title">
                Practical business applications, delivered with a builder&apos;s mindset.
              </h2>
              <p className="section-desc">
                Ranjith specializes in turning Microsoft business application tools into workflows
                that are easier to operate, easier to trust, and easier to scale.
              </p>
            </div>
          </Reveal>

          <div className="bento">
            {/* Stat: Years */}
            <Reveal delay={80}>
              <div className="glass-card bento-card">
                <div className="bento-stat-value">{quickStats[0].value}</div>
                <p className="bento-stat-label">{quickStats[0].label}</p>
              </div>
            </Reveal>

            {/* Stat: Programs */}
            <Reveal delay={120}>
              <div className="glass-card bento-card">
                <div className="bento-stat-value">{quickStats[1].value}</div>
                <p className="bento-stat-label">{quickStats[1].label}</p>
              </div>
            </Reveal>

            {/* Stat: Certifications */}
            <Reveal delay={160}>
              <div className="glass-card bento-card">
                <div className="bento-stat-value">{quickStats[2].value}</div>
                <p className="bento-stat-label">{quickStats[2].label}</p>
              </div>
            </Reveal>

            {/* Focus Areas */}
            {focusAreas.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={200 + i * 60}>
                <div className={`glass-card bento-card${i === focusAreas.length - 1 ? " bento-wide" : ""}`}>
                  <div className="bento-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="bento-card-title">{title}</h3>
                  <p className="bento-card-desc">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="section">
          <Reveal>
            <div>
              <p className="section-label">Experience</p>
              <h2 className="section-title">
                From healthcare lead workflows to banking onboarding journeys.
              </h2>
              <p className="section-desc">
                Built across Tata Consultancy Services and Infosys in high-stakes client
                environments where data quality, communication accuracy, governance, and
                operational speed all matter.
              </p>
            </div>
          </Reveal>

          <div className="exp-grid">
            {experience.map((role, i) => (
              <Reveal key={role.client} delay={i * 80} className="exp-item">
                <article className="glass-card exp-card">
                  <div>
                    <span className="exp-period">{role.period}</span>
                    <h3 className="exp-client">{role.client}</h3>
                    <p className="exp-role">{role.title}</p>
                  </div>
                  <ul className="exp-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section">
          <Reveal>
            <div>
              <p className="section-label">Skills</p>
              <h2 className="section-title">
                Strong across platform delivery, engineering fundamentals, and analytics.
              </h2>
              <p className="section-desc">
                A balanced toolkit for building customer-facing systems that also need
                clean logic, integrations, and data awareness behind the scenes.
              </p>
            </div>
          </Reveal>

          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <div className="glass-card">
                  <h3 className="skill-title">{group.title}</h3>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={350}>
            <div className="glass-card insight-card">
              <div className="insight-head">
                <ChartNoAxesCombined className="h-5 w-5" />
                <h3>What stands out</h3>
              </div>
              <p>
                This profile combines Microsoft business applications expertise with hands-on
                analytics and machine learning exposure — especially useful when customer
                journeys depend on smarter data decisions.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ── Certifications and Education ── */}
        <section className="section">
          <div className="creds-grid">
            <Reveal>
              <div className="glass-card">
                <div className="cred-head">
                  <BadgeCheck className="h-5 w-5" />
                  <h2>Certifications</h2>
                </div>
                <ul className="cred-list">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass-card">
                <div className="cred-head">
                  <GraduationCap className="h-5 w-5" />
                  <h2>Education</h2>
                </div>
                <p className="edu-school">Rajalakshmi Engineering College</p>
                <p className="edu-detail">B.Tech, 2017 - 2021</p>
                <p className="edu-detail">CGPA: 8.7</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <Reveal>
          <section id="contact" className="cta">
            <p className="section-label">
              <Sparkles className="h-3.5 w-3.5" />
              Contact
            </p>
            <h2 className="section-title">
              Let&apos;s build something that matters.
            </h2>
            <p className="section-desc">
              Open to roles where Dynamics 365 and Power Platform can create measurable
              customer impact. If you&apos;re hiring for CRM, automation, or customer data
              work inside the Microsoft ecosystem — let&apos;s talk.
            </p>
            <div className="cta-actions">
              <a className="btn-primary" href="mailto:Mailranjith7022@gmail.com">
                <span>Email Ranjith</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="btn-outline"
                href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
              <a
                className="btn-outline"
                href="https://github.com/ranjith7022"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </div>
          </section>
        </Reveal>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Ranjith Kumar M</p>
          <p>Built with React, Tailwind CSS, and shadcn/ui</p>
        </footer>
      </div>
    </div>
  )
}
