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
  children?: React.ReactNode;
};

export function Prompt({ user, path, branch, cmd, children }: PromptProps) {
  return (
    <div className="prompt">
      <PromptPrefix user={user} path={path} branch={branch} />
      <span className="p-cmd">{cmd}</span>
      {children}
    </div>
  );
}
