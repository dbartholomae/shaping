import { createElement } from "../createElement";
import { JSONFile } from "./JSONFile";

interface Props {
  name: string;
}

function PackageJSON({ name }: { name: string }) {
  return <JSONFile name="package.json" content={{ name }} />;
}

export function TypeScriptProject({ name }: Props) {
  return <PackageJSON name={name} />;
}
