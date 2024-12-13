import { describe, expect, it } from "@jest/globals";
import { render } from "../render";
import { createElement } from "../createElement";
import { TypeScriptProject } from "./TypeScriptProject";
import { InMemoryFileSystem } from "../InMemoryFileSystem/InMemoryFileSystem";

describe("TypeScriptProject", () => {
  const name = "MyProject";

  it("creates a package.json file", async () => {
    const fs = new InMemoryFileSystem();
    await render(<TypeScriptProject name={name} />, { fs });

    expect(JSON.parse(await fs.readFile("package.json"))).toMatchObject({
      name,
    });
  });
});
