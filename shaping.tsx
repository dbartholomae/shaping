/** @jsx createElement */

import createElement, {
  render,
  TypeScriptProject,
  Prettier,
  Git,
  UnitTestingJestTypeScript,
} from "./src";

render(
  <TypeScriptProject name="shaping">
    <Git />
    <Prettier />
    <UnitTestingJestTypeScript />
  </TypeScriptProject>,
);
