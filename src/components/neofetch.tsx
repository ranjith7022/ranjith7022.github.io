import { careerYears } from "@/lib/career";

// 7-row bitmap of "RK"; 1 = R pixel, 2 = K pixel
const LOGO = [
  "11110 20002",
  "10001 20020",
  "10001 20200",
  "11110 22000",
  "10100 20200",
  "10010 20020",
  "10001 20002",
];

const SWATCHES = ["red", "yellow", "green", "cyan", "blue", "purple", "magenta", "pink"];

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}

export function Neofetch() {
  return (
    <div className="neofetch">
      <div className="nf-art" aria-hidden="true">
        {LOGO.flatMap((row, r) =>
          row
            .split("")
            .map((px, c) => (
              <span
                key={`${r}-${c}`}
                className={px === "1" ? "px r" : px === "2" ? "px k" : "px"}
              />
            )),
        )}
      </div>
      <div className="nf-info">
        <div className="nf-title">
          <span className="p-user">ranjith</span>
          <span className="dim">@</span>
          <span className="p-path">site</span>
        </div>
        <div className="nf-rule" aria-hidden="true">
          ------------
        </div>
        <dl className="nf-list">
          <dt>Host</dt>
          <dd>Infosys, on Microsoft's Copilot Studio Kit</dd>
          <dt>Uptime</dt>
          <dd>
            <span className="num">{careerYears}+</span> years in D365 &amp; Power Platform
          </dd>
          <dt>Certs</dt>
          <dd>PL-400, PL-500, MB-910</dd>
          <dt>Location</dt>
          <dd>Chennai, Tamil Nadu</dd>
          <dt>Email</dt>
          <dd>
            <a href="mailto:mailranjith7022@gmail.com">mailranjith7022@gmail.com</a>
          </dd>
          <dt>LinkedIn</dt>
          <dd>
            <Ext href="https://www.linkedin.com/in/ranjith-kumar-m-739505154/">
              /in/ranjith-kumar-m-739505154
            </Ext>
          </dd>
          <dt>GitHub</dt>
          <dd>
            <Ext href="https://github.com/ranjith7022">/ranjith7022</Ext>
          </dd>
          <dt>Resume</dt>
          <dd>
            <Ext href="/Ranjith-Kumar-Resume.pdf">Ranjith-Kumar-Resume.pdf ↗</Ext>
          </dd>
          <dt>Status</dt>
          <dd className="nf-status">open to roles</dd>
        </dl>
        <div className="nf-swatches" aria-hidden="true">
          {SWATCHES.map((c) => (
            <span key={c} style={{ background: `var(--c-${c})` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
