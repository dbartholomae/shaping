/** @jsx createElement */
import { createElement } from "./createElement";

import { describe, expect, it } from "@jest/globals";
import { InMemoryFileSystem } from "./InMemoryFileSystem/InMemoryFileSystem";
import { render } from "./render";

describe("render", () => {
  it("creates a file for a file element", async () => {
    const fs = new InMemoryFileSystem();

    const fileName = "test.txt";
    const fileContent = "Hello World!";
    await render(<file name={fileName} content={fileContent} />, { fs });

    expect(await fs.readFile(fileName)).toStrictEqual(fileContent);
  });

  it("parses the result of executing a component for a functional component", async () => {
    const fs = new InMemoryFileSystem();

    const fileName = "test.txt";
    const fileContent = "Hello World!";

    function Wrapper() {
      return <file name={fileName} content={fileContent} />;
    }

    await render(<Wrapper />, { fs });

    expect(await fs.readFile(fileName)).toStrictEqual(fileContent);
  });
});
