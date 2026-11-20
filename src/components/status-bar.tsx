import { useEffect, useState } from "react";

const WINDOWS = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

function formatClock(d: Date) {
  const time = d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const date = d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" });
  return `${time} ${date.replace(/ /g, "-")}`;
}

export function StatusBar() {
  const [active, setActive] = useState("home");
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const els = WINDOWS.map((w) => document.getElementById(w.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="tmux" aria-label="Sections">
      <span className="tmux-session" aria-hidden="true">
        [ranjith]
      </span>
      <ol className="tmux-windows">
        {WINDOWS.map((w, i) => {
          const isActive = w.id === active;
          return (
            <li key={w.id}>
              <a
                href={`#${w.id}`}
                className={isActive ? "tmux-win is-active" : "tmux-win"}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="tmux-idx">{i}:</span>
                {w.label}
                <span className="tmux-flag" aria-hidden="true">
                  {isActive ? "*" : ""}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
      <span className="tmux-right" aria-hidden="true">
        "chennai" {formatClock(now)}
      </span>
    </nav>
  );
}
