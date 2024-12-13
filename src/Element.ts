import type { ElementConstructor } from "./ElementConstructor";

export interface Element<
  P = unknown,
  T extends string | ElementConstructor<any> = string | ElementConstructor<any>,
> {
  type: T;
  props: P;
  key: string | null;
}
