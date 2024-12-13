# shaping

`shaping` allows you to both scaffold and update project files based on TypeScript files 

## Usage

1. Install this project, TypeScript and `ts-node` as global dependencies.
2. Create a files-as-code definition file in an empty folder.
3. Run the file with `ts-node`.

Here's the definition file for this project.
```tsx
import { render, TypeScriptProject, Prettier } from "shaping"

render(
  <TypeScriptProject name="shaping">
    <Git />
    <Prettier />
    <UnitTestingJestTypeScript />
  </TypeScriptProject>
);
```

Here's an example for a more complicated definition file of a monorepo:
```tsx
import { render, TypeScriptProject, Prettier,  } from "shaping"

function MiddlewareProject({ name }: { name: string }) {
  return (
    <TypeScriptProject name={name}>
      <EslintTypeScript />
      <UnitTestingJestTypeScript />
    </TypeScriptProject>
  );
}

render(
  <RushMonorepo>
    <StaticFolder name="assets" />
    <RushGroup name="internal">
      <TypeScriptProject name="e2e-tests" />
    </RushGroup>
    <RushGroup name="packages">
      <TypeScriptProject name="class-validator" />
      <TypeScriptProject name="compose" />
      <TypeScriptProject name="cors" />
      <TypeScriptProject name="do-not-wait" />
      <TypeScriptProject name="frameguard" />
      <TypeScriptProject name="http-error-handler" />
      <TypeScriptProject name="http-header-normalizer" />
      <TypeScriptProject name="ie-no-open" />
      <TypeScriptProject name="json-deserializer" />
      <TypeScriptProject name="json-serializer" />
      <TypeScriptProject name="jwt-auth" />
      <TypeScriptProject name="middy-adaptor" />
      <TypeScriptProject name="no-sniff" />
      <TypeScriptProject name="utils" />
    </RushGroup>
  </RushMonorepo>
);
```

The second example also showcases some of the main benefits of this approach:
1. When updating e.g. linting, it can be done in one place and will be updated for all projects.
2. It is easy to rely on best-practices for project setups without needing to manually update all the time.

## Inspirations

* There are a lot of scaffolding and templating solutions out there, but they don't solve the problem of
  automatically updating created files when the templates change.
* [projen](https://github.com/projen/projen) has a similar goal as this project, but currently focuses less
  on composability, and while its usage of jsii allows usage in other languages than TypeScript, this also limits
  how many TypeScript features can be used.
* [jsx-readme](https://github.com/dbartholomae/jsx-readme), one of my previous projects, uses similar ideas
  to automatically create a `README.md` file and keep it up-to-date.