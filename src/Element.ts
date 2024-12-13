import type { ElementConstructor } from "./ElementConstructor";

export const FileType = "file" as const;

export type Type = ElementConstructor<any> | typeof FileType;

export interface BaseElement<P = unknown, T extends Type = Type> {
  type: T;
  props: P;
  key: string | null;
}

export interface FileElement {
  type: typeof FileType;
  props: {
    name: string;
    content: string;
  };
  key: string | null;
}

export interface ComponentElement<Props> {
  type: ElementConstructor<Props>;
  props: Props;
  key: string | null;
}

export type Element = FileElement | ComponentElement<unknown>;
