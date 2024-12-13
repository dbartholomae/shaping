import { createElement } from "../createElement";

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export function JSONFile({
  name,
  children,
}: {
  name: string;
  children: JSONValue;
}) {
  return <file name={name} content={JSON.stringify(children, null, 2)} />;
}
