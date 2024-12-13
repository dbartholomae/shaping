import { FileElement } from "./Element";

export {};

declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      children: {}; // specify children name to use
    }
    interface IntrinsicElements {
      shFile: FileElement["props"];
    }
  }
}
