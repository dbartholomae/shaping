import type { Node } from "./Node";

export type ElementConstructor<P> = (props: P) => Node;
