import { Element } from "../Element";

interface Props {
  children: Element[] | Element;
  name: string;
}

export function TypeScriptProject({ children, name }: Props) {
  return { type: "file", props: {}, key: null };
}
