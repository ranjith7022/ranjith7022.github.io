import { ModeToggle } from "@/components/mode-toggle";
import { CommandPrompt } from "@/components/command-prompt";
import { Prompt } from "@/components/prompt";
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
          <div className="hero-grid">
            <div>
              <Prompt cmd="whoami" />
              <div className="output">
                <h1 className="hero-name">Ranjith Kumar M</h1>
                <p className="hero-role">
                  Dynamics 365 &amp; Power Platform Developer
                  <span className="cursor" aria-hidden="true" />
                </p>
              </div>

              <Prompt cmd="cat ./summary.md" />
              <div className="output">
                <pre>
                  <span className="tok-h"># summary</span>
                  {"\n"}
                  Building smoother customer journeys with Dynamics 365, Power Platform, and
                  data-driven automation. Currently working on Microsoft's Copilot Studio Kit via
                  Infosys — agent testing, governance, prompt quality, and analytics.
                </pre>
              </div>
            </div>

            <div>
              <Prompt cmd="./contact --info" />
              <div className="output">
                <dl className="info">
                  <dt>email</dt>
                  <dd>
                    <a href="mailto:mailranjith7022@gmail.com">mailranjith7022@gmail.com</a>
                  </dd>
                  <dt>linkedin</dt>
                  <dd>
                    <a
                      href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      /in/ranjith-kumar-m-739505154
                    </a>
                  </dd>
                  <dt>github</dt>
                  <dd>
                    <a
                      href="https://github.com/ranjith7022"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      /ranjith7022
                    </a>
                  </dd>
                  <dt>location</dt>
                  <dd>Chennai, Tamil Nadu</dd>
                  <dt>resume</dt>
                  <dd>
                    <a href="/Ranjith-Kumar-Resume.pdf" target="_blank" rel="noreferrer noopener">
                      Ranjith-Kumar-Resume.pdf ↗
                    </a>
                  </dd>
                  <dt>status</dt>
                  <dd>
                    open to roles · <span className="num">{careerYears}+</span> yrs ·{" "}
                    <span className="num">3</span> certs
                  </dd>
                </dl>
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
            <Prompt cmd="git log --oneline" />
            <div className="output">
              <h2 className="section-h">
                <span className="tok-h"># experience</span>
              </h2>
              <p className="section-desc">
                From healthcare lead workflows to banking onboarding journeys — built in high-stakes
                client environments where data quality, communication accuracy, and operational
                speed all matter.
              </p>
              <div className="commits">
                {experience.map((c, i) => (
                  <article key={c.hash} className="commit">
                    <div>
                      <span className="commit-hash">commit {c.hash}</span>
                      {i === 0 && <span className="commit-head">(HEAD -&gt; main)</span>}
                      <span className="commit-date">{c.date}</span>
                    </div>
                    <div className="commit-author">
                      Author: <b>Ranjith Kumar M</b> &lt;{c.author}&gt;
                    </div>
                    <div className="commit-subject">{c.subject}</div>
                    <ul className="commit-body">
                      {c.body.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
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
                {skillColumns.map((col) => (
                  <div key={col.name} className="tree-col">
                    <div className="tree-head">
                      {col.name}
                      <span className="tree-slash">/</span>
                    </div>
                    {col.items.map((it) => (
                      <div key={it} className="tree-item">
                        {it}
                      </div>
                    ))}
                  </div>
                ))}
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
        <span>built with react · vite · tailwind</span>
      </footer>
    </div>
  );
}
