import { Element, FileType } from "./Element";
import nodeFileSystem from "node:fs/promises";

interface FileSystem {
  writeFile: (name: string, data: string) => Promise<void>;
}

export async function render(
  element: Element,
  { fs = nodeFileSystem }: { fs?: FileSystem } = {},
) {
  if (element.type === FileType) {
    await fs.writeFile(element.props.name, element.props.content);
  }
}
