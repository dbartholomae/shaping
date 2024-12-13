import { Element } from "./Element";

export type Node = Element | Array<Node> | null | undefined;
