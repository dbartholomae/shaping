export {}

declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      children: {}; // specify children name to use
    }
    interface IntrinsicElements {
      shFile: {
        name: string;
        content: string;
      }
    }
  }
}
