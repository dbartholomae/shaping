import type { ElementConstructor } from "./ElementConstructor";

export const ShFileType = "shFile" as const;

export type Type = ElementConstructor<any> | typeof ShFileType;

export interface Element<
  P = unknown,
  T extends Type = Type,
> {
  type: T;
  props: P;
  key: string | null;
}
