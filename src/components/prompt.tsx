type PromptPrefixProps = {
  user?: string;
  path?: string;
  branch?: string;
};

export function PromptPrefix({
  user = "ranjith",
  path = "~/site",
  branch = "main",
}: PromptPrefixProps) {
  return (
    <>
      <span className="p-user">{user}</span>
      <span className="p-path">{path}</span>
      <span className="p-branch">{branch}</span>
      <span className="p-char">❯</span>
    </>
  );
}

type PromptProps = PromptPrefixProps & {
  cmd: string;
  typed?: boolean;
  children?: React.ReactNode;
};

export function Prompt({ user, path, branch, cmd, typed, children }: PromptProps) {
  return (
    <div className="prompt">
      <PromptPrefix user={user} path={path} branch={branch} />
      <span
        className={typed ? "p-cmd typed" : "p-cmd"}
        style={typed ? ({ "--chars": cmd.length } as React.CSSProperties) : undefined}
      >
        {cmd}
      </span>
      {children}
    </div>
  );
}
