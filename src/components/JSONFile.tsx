import { createElement } from "../createElement";

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export function JSONFile({
  name,
  content,
}: {
  name: string;
  content: JSONValue;
}) {
  return <file name={name} content={JSON.stringify(content, null, 2)} />;
}
