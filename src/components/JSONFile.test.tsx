import { describe, expect, it } from "@jest/globals";
import { createElement } from "../createElement";
import { JSONFile } from "./JSONFile";

describe("JSONFile", () => {
  it("returns a file element with the stringified text content", () => {
    expect(
      JSONFile({
        name: "test.json",
        children: {
          foo: "bar",
        },
      }),
    ).toEqual(
      <file
        name={"test.json"}
        content={`{
  "foo": "bar"
}`}
      />,
    );
  });
});
