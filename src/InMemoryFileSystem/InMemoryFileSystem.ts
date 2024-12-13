export class InMemoryFileSystem {
  #files = new Map();

  async writeFile(file: string, data: string): Promise<void> {
    this.#files.set(file, data);
  }

  async readFile(file: string): Promise<string> {
    return this.#files.get(file);
  }
}
