import { describe, expect, it, vi } from "vite-plus/test";
import { renderToString } from "react-dom/server";
import App from "./App";

vi.stubGlobal("localStorage", {
  getItem: () => null,
  setItem: () => {},
});

describe("App", () => {
  it("renders the hero with name and role", () => {
    const html = renderToString(<App />);

    expect(html).toContain("Ranjith Kumar M");
    expect(html).toContain("Dynamics 365");
  });

  it("renders every section", () => {
    const html = renderToString(<App />);

    for (const id of ["about", "experience", "skills", "contact"]) {
      expect(html).toContain(`id="${id}"`);
    }
  });
});
