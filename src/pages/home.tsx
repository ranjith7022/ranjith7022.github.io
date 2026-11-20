import { ModeToggle } from "@/components/mode-toggle";
import { CommandPrompt } from "@/components/command-prompt";
import { Neofetch } from "@/components/neofetch";
import { Prompt } from "@/components/prompt";
import { StatusBar } from "@/components/status-bar";
import { careerYears } from "@/lib/career";

const experience = [
  {
    hash: "a1c2f3d",
    date: "Aug 2025 - Present",
    author: "Infosys for Microsoft",
    subject: "Power Platform / Copilot Studio Developer",
    body: [
      "Working on the Power CAT Copilot Studio Kit, a Microsoft open-source toolkit that helps makers develop, govern, test, and monitor custom Copilot Studio agents.",
      "Contributing across agent testing, governance workflows, prompt quality, and analytics for agent performance and usage visibility.",
      "Delivered through Infosys, building directly in the Microsoft ecosystem on Copilot Studio and Power Platform.",
    ],
  },
  {
    hash: "7e4b918",
    date: "2025",
    author: "Central Bank",
    subject: "Dynamics 365 Developer",
    body: [
      "Implemented account-type onboarding journeys inside Dynamics 365.",
      "Built marketing emails and configured consent management so customers only receive opted-in communications.",
      "Unified customer and financial data in Customer Insights Data to create meaningful audience segments.",
    ],
  },
  {
    hash: "3d8a022",
    date: "2022 - 2024",
    author: "TCS for Humana",
    subject: "Dynamics 365 Developer",
    body: [
      "Customized forms with JavaScript to improve user experience inside Dynamics 365.",
      "Built workflow integrations with external APIs, including address verification systems.",
      "Automated lead agent assignment to streamline lead management and improve operational efficiency.",
    ],
  },
  {
    hash: "0f5c7b1",
    date: "ongoing",
    author: "self",
    subject: "Data & machine learning foundation",
    body: [
      "Hands-on with NumPy, pandas, scikit-learn, seaborn, and NLTK for business-oriented analysis.",
      "Recognized as High Talent; completed TCS Wings1 certifications in Machine First and Intelligent Business Automation.",
    ],
  },
];

const skillColumns: { name: string; items: string[] }[] = [
  {
    name: "microsoft",
    items: [
      "dynamics-365",
      "power-platform",
      "copilot-studio",
      "power-automate",
      "customer-insights",
      "power-bi",
      "canvas-apps",
      "dataverse",
      "power-apps-code-apps",
    ],
  },
  {
    name: "engineering",
    items: [
      "react",
      "javascript",
      "typescript",
      "c#",
      "python",
      "sql",
      "vite",
      "tailwind-css",
      "shadcn-ui",
      "react-router",
      "zustand",
      "tanstack-query",
      "tanstack-table",
    ],
  },
  {
    name: "data-ml",
    items: ["numpy", "pandas", "scikit-learn", "seaborn", "nltk"],
  },
  {
    name: "delivery",
    items: [
      "workflow-automation",
      "data-integration",
      "audience-segmentation",
      "linux-fundamentals",
      "governance",
    ],
  },
];

const skillCount = skillColumns.reduce((n, c) => n + c.items.length, 0);

const certifications = [
  "Power Platform Developer Associate (PL-400)",
  "Power Automate RPA Developer Associate (PL-500)",
  "Dynamics 365 Fundamentals (MB-910)",
];

export default function HomePage() {
  return (
    <div className="page">
      <div className="term-window">
        {/* titlebar */}
        <div className="titlebar">
          <span className="tb-dots" aria-hidden="true">
            <span className="tb-dot r" />
            <span className="tb-dot y" />
            <span className="tb-dot g" />
          </span>
          <span className="tb-title">
            <span className="tb-host">ranjith</span>
            <span className="tb-sep">:</span>
            <span className="tb-path">~/site</span>
            <span className="tb-sep"> — bash — 220×48</span>
          </span>
          <span className="tb-actions">
            <ModeToggle />
          </span>
        </div>

        {/* body */}
        <div className="term-body">
          {/* hero */}
          <div id="home" className="hero-grid">
            <div>
              <Prompt cmd="whoami" typed />
              <div className="output hero-out">
                <h1 className="hero-name">Ranjith Kumar M</h1>
                <p className="hero-role">
                  Dynamics 365 &amp; Power Platform Developer
                  <span className="cursor" aria-hidden="true" />
                </p>
              </div>

              <Prompt cmd="cat ./summary.md" />
              <div className="output">
                <p className="summary">
                  <span className="tok-h"># summary</span>
                  <br />
                  Building smoother customer journeys with Dynamics 365, Power Platform, and
                  data-driven automation. Currently working on Microsoft's Copilot Studio Kit via
                  Infosys: agent testing, governance, prompt quality, and analytics.
                </p>
              </div>
            </div>

            <div>
              <Prompt cmd="neofetch" />
              <div className="output">
                <Neofetch />
              </div>
            </div>
          </div>

          {/* interactive shell */}
          <CommandPrompt />

          <hr className="hr" />

          {/* about */}
          <section id="about" className="section">
            <Prompt cmd="cat about.md" />
            <div className="output">
              <h2 className="section-h">
                <span className="tok-h"># about</span>
              </h2>
              <p className="section-desc">
                I turn Microsoft business-application tools into workflows that are easier to
                operate, easier to trust, and easier to scale — across healthcare, banking, and
                Microsoft-ecosystem delivery at TCS and Infosys.
              </p>
              <div className="statline">
                <span>
                  <b>{careerYears}+</b> yrs in d365 &amp; power platform
                </span>
                <span>
                  <b>3</b> enterprise programs
                </span>
                <span>
                  <b>3</b> microsoft certs
                </span>
                <span>
                  stack: <b>copilot studio, power platform, c#, dataverse</b>
                </span>
              </div>
            </div>
          </section>

          {/* experience */}
          <section id="experience" className="section">
            <Prompt cmd="git log --graph" />
            <div className="output">
              <h2 className="section-h">
                <span className="tok-h"># experience</span>
              </h2>
              <p className="section-desc">
                From healthcare lead workflows to banking onboarding journeys, built in high-stakes
                client environments where data quality, communication accuracy, and operational
                speed all matter.
              </p>
              <ol className="graph">
                {experience.map((c, i) => (
                  <li key={c.hash} className="commit">
                    <div className="commit-line">
                      <span className="graph-node" aria-hidden="true">
                        *
                      </span>
                      <span className="commit-hash">commit {c.hash}</span>
                      {i === 0 && (
                        <span className="commit-head">
                          {" ("}
                          <span className="commit-head-ref">HEAD -&gt; main</span>
                          {")"}
                        </span>
                      )}
                    </div>
                    <div className="commit-meta">
                      <span className="commit-k">Author:</span> Ranjith Kumar M &lt;{c.author}&gt;
                    </div>
                    <div className="commit-meta">
                      <span className="commit-k">Date:</span> {c.date}
                    </div>
                    <h3 className="commit-subject">{c.subject}</h3>
                    <ul className="commit-body">
                      {c.body.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* skills */}
          <section id="skills" className="section">
            <Prompt cmd="tree skills/" />
            <div className="output">
              <h2 className="section-h">
                <span className="tok-h"># skills</span>
              </h2>
              <p className="section-desc">
                A balanced toolkit for customer-facing systems that also need clean logic,
                integrations, and data awareness behind the scenes.
              </p>
              <div className="tree">
                <div className="tree-root">skills/</div>
                <div className="tree-cols">
                  {skillColumns.map((col, ci) => {
                    const lastCol = ci === skillColumns.length - 1;
                    return (
                      <div key={col.name} className="tree-col">
                        <div className="tree-head">
                          <span className="tree-glyph" aria-hidden="true">
                            {lastCol ? "└── " : "├── "}
                          </span>
                          {col.name}/
                        </div>
                        <ul className="tree-items">
                          {col.items.map((it, ii) => (
                            <li key={it} className="tree-item">
                              <span className="tree-glyph" aria-hidden="true">
                                {lastCol ? "    " : "│   "}
                                {ii === col.items.length - 1 ? "└── " : "├── "}
                              </span>
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="tree-summary">
                  {skillColumns.length} directories, {skillCount} files
                </div>
              </div>
            </div>
          </section>

          {/* certs & education */}
          <section className="section">
            <Prompt cmd="ls creds/" />
            <div className="output">
              <div className="creds">
                <div className="cred-block">
                  <div className="cred-head">certs.txt</div>
                  <ul className="cred-list">
                    {certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="cred-block">
                  <div className="cred-head">education.txt</div>
                  <p className="edu-row">
                    <b>Rajalakshmi Engineering College</b>
                  </p>
                  <p className="edu-row">
                    <span className="k">B.Tech</span>
                    <span className="k">2017 - 2021</span>
                    <span className="k">CGPA</span>
                    <span>8.7</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* contact */}
          <section id="contact" className="section">
            <Prompt cmd="./hire-me" />
            <div className="output">
              <h2 className="section-h">
                <span className="tok-h"># contact</span>
              </h2>
              <p className="section-desc">
                <span className="comment">{"> "}</span>
                open to roles where dynamics 365 / power platform can create real customer impact.
                crm, automation, or customer data work in the microsoft ecosystem — reach out.
              </p>
              <div className="links">
                <a className="tlink" href="mailto:mailranjith7022@gmail.com">
                  <span className="tlink-k">[email]</span>
                  <span>mailranjith7022@gmail.com</span>
                </a>
                <a
                  className="tlink"
                  href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="tlink-k">[linkedin]</span>
                  <span>/in/ranjith-kumar-m-739505154</span>
                </a>
                <a
                  className="tlink"
                  href="https://github.com/ranjith7022"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="tlink-k">[github]</span>
                  <span>/ranjith7022</span>
                </a>
                <a
                  className="tlink"
                  href="/Ranjith-Kumar-Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="tlink-k">[resume]</span>
                  <span>pdf ↗</span>
                </a>
              </div>
            </div>
          </section>

          <hr className="hr-solid" />
          <Prompt cmd="exit" />
          <div className="output muted">
            <pre>logout — connection closed.</pre>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} ranjith kumar m</span>
        <span>built with react, vite, tailwind</span>
      </footer>

      <StatusBar />
    </div>
  );
}
