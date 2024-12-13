import type { ElementConstructor } from "./ElementConstructor";

export const ShFileType = "shFile" as const;

export type Type = ElementConstructor<any> | typeof ShFileType;

export interface BaseElement<P = unknown, T extends Type = Type> {
  type: T;
  props: P;
  key: string | null;
}

export interface FileElement {
  type: typeof ShFileType;
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
