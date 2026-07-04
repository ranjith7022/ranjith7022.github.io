import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";

type Line = { id: number; node: ReactNode };

const PROMPT = <span className="p-user">ranjith</span>;
const PATH = <span className="p-path">~/site</span>;
const BRANCH = <span className="p-branch">main</span>;
const CHAR = <span className="p-char">❯</span>;

function PromptPrefix() {
  return (
    <>
      {PROMPT}
      {PATH}
      {BRANCH}
      {CHAR}
    </>
  );
}

const FILES: Record<string, string> = {
  about:
    "Dynamics 365 & Power Platform developer. 3+ yrs building customer journeys, automation, and audience segmentation. Currently on Microsoft's Copilot Studio Kit via Infosys.",
  experience:
    "Aug 2025 - Present: Infosys for Microsoft — Copilot Studio Kit. 2025: Central Bank — D365 onboarding + Customer Insights. 2022-2024: Humana — D365 customization + integrations.",
  skills:
    "microsoft: d365, power platform, copilot studio, power automate, customer insights, power bi, canvas apps | engineering: react, javascript, c#, python, sql | data-ml: numpy, pandas, scikit-learn, seaborn, nltk",
  certs: "PL-400, PL-500, MB-910. Education: B.Tech, Rajalakshmi Engineering College, CGPA 8.7.",
  contact:
    "email Mailranjith7022@gmail.com | linkedin /in/ranjith-kumar-m-739505154 | github /ranjith7022 | chennai, tn",
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CommandPrompt() {
  const { theme, setTheme } = useTheme();
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  const push = (node: ReactNode) => {
    setLines((prev) => [...prev, { id: idRef.current++, node }]);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const focus = () => inputRef.current?.focus({ preventScroll: true });

  const run = (raw: string) => {
    const input = raw.trim();
    push(
      <div className="ok">
        <PromptPrefix /> <span>{input}</span>
      </div>,
    );
    if (!input) return;
    setHistory((h) => [...h, input]);
    setHIndex(-1);

    const [cmd, ...args] = input.split(/\s+/);
    const arg = args.join(" ");

    switch (cmd) {
      case "help":
        push(
          <div>
            available commands:
            <br />
            <span className="muted">
              help, ls, cat &lt;file&gt;, about, experience, skills, contact, whoami, social, date,
              echo &lt;text&gt;, theme &lt;dark|light|system&gt;, clear
            </span>
          </div>,
        );
        break;
      case "ls":
        push(
          <div>
            {Object.keys(FILES).join("  ")}
            <span className="dim"> ./resume.pdf</span>
          </div>,
        );
        break;
      case "cat": {
        if (!arg) {
          push(<div className="err">usage: cat &lt;file&gt;. try `ls`.</div>);
          break;
        }
        const f = FILES[arg.toLowerCase().replace(/\.(md|txt)$/, "")];
        if (f) push(<div>{f}</div>);
        else push(<div className="err">cat: {arg}: no such file</div>);
        break;
      }
      case "about":
        push(<div>opening about…</div>);
        scrollTo("about");
        break;
      case "experience":
      case "exp":
        push(<div>opening experience…</div>);
        scrollTo("experience");
        break;
      case "skills":
        push(<div>opening skills…</div>);
        scrollTo("skills");
        break;
      case "contact":
      case "hire":
        push(<div>opening contact…</div>);
        scrollTo("contact");
        break;
      case "whoami":
        push(<div>Ranjith Kumar M — Dynamics 365 &amp; Power Platform developer</div>);
        break;
      case "social":
        push(
          <div>
            <span className="kwd">email</span> Mailranjith7022@gmail.com
            <br />
            <span className="kwd">linkedin</span> /in/ranjith-kumar-m-739505154
            <br />
            <span className="kwd">github</span> /ranjith7022
          </div>,
        );
        break;
      case "date":
        push(<div>{new Date().toString()}</div>);
        break;
      case "echo":
        push(<div>{arg || ""}</div>);
        break;
      case "theme": {
        if (arg === "dark" || arg === "light" || arg === "system") {
          setTheme(arg);
          push(<div>theme set to {arg}</div>);
        } else {
          push(<div className="err">usage: theme &lt;dark|light|system&gt;. current: {theme}</div>);
        }
        break;
      }
      case "clear":
        setLines([]);
        break;
      case "sudo":
        push(
          <div className="err">
            ranjith is not in the sudoers file. this incident will be reported.
          </div>,
        );
        break;
      case "exit":
        push(<div className="muted">logout</div>);
        push(<div className="muted">connection closed.</div>);
        break;
      default:
        push(<div className="err">{cmd}: command not found. type `help`.</div>);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = hIndex === -1 ? history.length - 1 : Math.max(0, hIndex - 1);
      setHIndex(next);
      setValue(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIndex === -1) return;
      const next = hIndex + 1;
      if (next >= history.length) {
        setHIndex(-1);
        setValue("");
      } else {
        setHIndex(next);
        setValue(history[next] ?? "");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="shell" onClick={focus}>
      <div className="scrollback" ref={scrollRef} aria-live="polite">
        {lines.map((l) => (
          <div key={l.id}>{l.node}</div>
        ))}
      </div>
      <div className="input-row">
        <PromptPrefix />
        <input
          ref={inputRef}
          className="cmd-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          aria-label="terminal command input"
          aria-describedby="cmd-hint"
        />
      </div>
      <div id="cmd-hint" className="cmd-hint">
        type <span className="kwd">help</span> · ctrl+l clears · ↑/↓ history
      </div>
    </div>
  );
}
