import { useTheme } from "@/hooks/use-theme";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const next = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
  const label = theme === "system" ? "system" : theme;

  return (
    <button
      type="button"
      className="tb-theme"
      onClick={() => setTheme(next)}
      aria-label={`theme: ${label}. click to switch to ${next}`}
      title={`theme: ${label} → ${next}`}
    >
      <span className="tb-theme-k">theme:</span>
      <span className="tb-theme-v">{label}</span>
      <span className="tb-theme-arrow" aria-hidden="true">
        ⇄
      </span>
    </button>
  );
}
