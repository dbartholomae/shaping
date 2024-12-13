import { Component } from "./Component";

export function createElement<Props>(
  component: Component<Props>,
  attributes: Omit<Props, "children">,
  ...children: Element[]
) {
  return {
    type: component,
    props: {
      ...attributes,
      children,
    },
    key: "",
  };
}
