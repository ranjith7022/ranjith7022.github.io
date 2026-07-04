import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="errpage">
      <div>
        <div className="prompt">
          <span className="p-user">ranjith</span>
          <span className="p-path">~/site</span>
          <span className="p-branch">main</span>
          <span className="p-char">❯</span>
          <span className="p-cmd">cd /unknown-path</span>
        </div>
        <p className="output err" style={{ color: "var(--destructive)" }}>
          cd: no such directory — 404
        </p>
        <p className="muted">this isn't the page you're looking for.</p>
        <p>
          <Link to="/" className="tlink">
            <span className="tlink-k">[cd</span>
            <span>~</span>
            <span className="tlink-k">]</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
