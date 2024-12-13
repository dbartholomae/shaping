import { beforeEach, describe, expect, it } from "@jest/globals";
import { InMemoryFileSystem } from "./InMemoryFileSystem";

describe("InMemoryFileSystem", () => {
  let fs: InMemoryFileSystem;

  beforeEach(() => {
    fs = new InMemoryFileSystem();
  });

  describe("#readFile", () => {
    describe("with a written file", () => {
      const fileName = "file.txt";
      const content = "Hello World!";

      beforeEach(async () => {
        await fs.writeFile(fileName, content);
      });

      it("returns the file content", async () => {
        expect(await fs.readFile(fileName)).toBe(content);
      });
    });
  });
});
