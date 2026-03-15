import { useState, type ReactNode } from "react"
import {
  ArrowRight,
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

const quickStats = [
  { value: "3+", label: "Years building in Dynamics 365 and Power Platform" },
  { value: "3", label: "Enterprise programs across healthcare, banking, and Microsoft ecosystems" },
  { value: "3", label: "Microsoft certifications across Power Platform and Dynamics 365" },
]

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
    items: ["Dynamics 365", "Power Platform", "Power Automate", "Customer Insights", "Power BI", "Code Apps"],
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

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="portfolio-shell">
      <div className="ambient-blob ambient-blob-one" />
      <div className="ambient-blob ambient-blob-two" />
      <div className="ambient-blob ambient-blob-three" />
      <div className="grain-overlay" />

      <section className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        {/* ── Nav ── */}
        <nav className="site-nav">
          <div className="nav-top-row">
            <a href="#top" className="brand-mark" aria-label="Ranjith Kumar home">
              <span>RK</span>
              <div>
                <p>Ranjith Kumar M</p>
                <p>Dynamics Developer</p>
              </div>
            </a>

            <div className="nav-right-group">
              <div className={`nav-links ${mobileNavOpen ? "nav-links-open" : ""}`}>
                <a href="#about" onClick={() => setMobileNavOpen(false)}>About</a>
                <a href="#experience" onClick={() => setMobileNavOpen(false)}>Experience</a>
                <a href="#skills" onClick={() => setMobileNavOpen(false)}>Skills</a>
                <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
              </div>
              <ModeToggle />
              <button
                className="mobile-nav-toggle"
                onClick={() => setMobileNavOpen((v) => !v)}
                aria-label="Toggle navigation"
              >
                {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <div id="top" className="hero-grid">
          <Reveal>
            <div className="space-y-8">
              <div className="hero-copy-block">
                <span className="eyebrow">
                  <Sparkles className="h-4 w-4" />
                  Infosys engineer working on Microsoft ecosystem projects
                </span>

                <h1 className="hero-title">
                  Building smoother customer journeys with Dynamics&nbsp;365, Power Platform, and data&#8209;driven automation.
                </h1>

                <p className="hero-description">
                  Ranjith Kumar M is an Infosys developer with 3+ years of experience across Dynamics 365, Power
                  Platform, customer insights, workflow automation, and now Microsoft-facing Copilot Studio work.
                </p>
              </div>

              <div className="hero-actions">
                <a className="primary-cta" href="mailto:Mailranjith7022@gmail.com">
                  <span>Start a conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  className="secondary-cta"
                  href="/Ranjith-Kumar-Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Download resume
                </a>
              </div>

              <div className="contact-strip">
                <a href="mailto:Mailranjith7022@gmail.com">
                  <Mail className="h-4 w-4" />
                  Mailranjith7022@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/" target="_blank" rel="noreferrer noopener">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/ranjith7022" target="_blank" rel="noreferrer noopener">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <span>
                  <MapPin className="h-4 w-4" />
                  Chennai, Tamil Nadu
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="hero-panel">
              <p className="panel-label">Current focus</p>
              <h2>Copilot Studio and Power Platform work for Microsoft, backed by strong CRM delivery experience.</h2>
              <p>
                Current delivery includes the Power CAT Copilot Studio Kit, alongside prior work in onboarding flows,
                form customization, API integrations, consent management, and Customer Insights segmentation.
              </p>

              <div className="mini-grid">
                <div className="mini-card">
                  <span>Current project</span>
                  <strong>Power CAT Copilot Studio Kit</strong>
                </div>
                <div className="mini-card">
                  <span>Role</span>
                  <strong>Infosys working with Microsoft</strong>
                </div>
                <div className="mini-card">
                  <span>Stack</span>
                  <strong>Copilot Studio, Power Platform, Dynamics 365, React</strong>
                </div>
              </div>

              <a
                className="secondary-cta w-fit"
                href="https://github.com/microsoft/Power-CAT-Copilot-Studio-Kit"
                target="_blank"
                rel="noreferrer noopener"
              >
                View Microsoft project
              </a>
            </aside>
          </Reveal>
        </div>

        {/* ── Stats ── */}
        <div className="stats-grid">
          {quickStats.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <article className="stat-card">
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── About ── */}
        <section id="about" className="section-panel section-spacing">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">About</p>
              <h2>Practical business applications, delivered with a builder&apos;s mindset.</h2>
              <p>
                Ranjith specializes in turning Microsoft business application tools into workflows that are easier to
                operate, easier to trust, and easier to scale, from CRM process automation to agent governance and
                testing workflows.
              </p>
            </div>
          </Reveal>

          <div className="feature-grid">
            {focusAreas.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="feature-card">
                  <div className="feature-icon-wrap">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="section-panel section-spacing">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">Experience</p>
              <h2>From healthcare lead workflows to banking onboarding journeys.</h2>
              <p>
                Built across Tata Consultancy Services and Infosys in high-stakes client environments where data quality,
                communication accuracy, governance, and operational speed all matter.
              </p>
            </div>
          </Reveal>

          <div className="timeline">
            {experience.map((role, i) => (
              <Reveal key={role.client} delay={i * 80}>
                <article className="timeline-card">
                  <div className="timeline-meta">
                    <span>{role.period}</span>
                    <h3>{role.client}</h3>
                    <p>{role.title}</p>
                  </div>

                  <ul>
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
        <section id="skills" className="section-panel section-spacing">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">Skills</p>
              <h2>Strong across platform delivery, engineering fundamentals, and analytics.</h2>
              <p>
                A balanced toolkit for building customer-facing systems that also need clean logic, integrations, and
                data awareness behind the scenes.
              </p>
            </div>
          </Reveal>

          <div className="skills-layout">
            <div className="skill-group-grid">
              {skillGroups.map((group, i) => (
                <Reveal key={group.title} delay={i * 80}>
                  <article className="skill-group-card">
                    <h3>{group.title}</h3>
                    <div className="chip-row">
                      {group.items.map((item) => (
                        <span key={item} className="skill-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="insight-card">
                <div className="insight-head">
                  <ChartNoAxesCombined className="h-5 w-5" />
                  <h3>What stands out</h3>
                </div>
                <p>
                  This profile combines Microsoft business applications expertise with hands-on analytics and machine
                  learning exposure, which is especially useful when customer journeys depend on smarter data decisions.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Certifications and Education ── */}
        <section className="section-panel section-spacing split-panel">
          <Reveal>
            <article className="info-card">
              <div className="info-head">
                <BadgeCheck className="h-5 w-5" />
                <h2>Certifications</h2>
              </div>
              <ul className="simple-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="info-card">
              <div className="info-head">
                <GraduationCap className="h-5 w-5" />
                <h2>Education</h2>
              </div>
              <p className="education-school">Rajalakshmi Engineering College</p>
              <p>B.Tech, 2017 - 2021</p>
              <p>CGPA: 8.7</p>
            </article>
          </Reveal>
        </section>

        {/* ── Contact CTA ── */}
        <Reveal>
          <section id="contact" className="cta-panel">
            <p className="section-kicker">Contact</p>
            <h2>Open to roles where Dynamics 365 and Power Platform can create measurable customer impact.</h2>
            <p>
              If you&apos;re hiring for CRM, automation, or customer data work inside the Microsoft ecosystem, this site
              is ready to start that conversation.
            </p>

            <div className="hero-actions">
              <a className="primary-cta" href="mailto:Mailranjith7022@gmail.com">
                <span>Email Ranjith</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="secondary-cta"
                href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
              <a
                className="secondary-cta"
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
      </section>
    </div>
  )
}
