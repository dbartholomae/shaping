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
    await render(<shFile name={fileName} content={fileContent} />, { fs });

    expect(await fs.readFile(fileName)).toStrictEqual(fileContent);
  });
});
