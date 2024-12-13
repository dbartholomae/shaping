import { FileType } from "./Element";
import { Node } from "./Node";
import nodeFileSystem from "node:fs/promises";

interface FileSystem {
  writeFile: (name: string, data: string) => Promise<void>;
}

export async function render(
  node: Node,
  { fs = nodeFileSystem }: { fs?: FileSystem } = {},
) {
  if (!node) {
    return;
  }

  if (Array.isArray(node)) {
    return;
  }

  if (node.type === FileType) {
    await fs.writeFile(node.props.name, node.props.content);
    return;
  }

  if (typeof node.type === "function") {
    return render(node.type(node.props), { fs });
  }
}
