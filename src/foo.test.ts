import { describe, expect, it } from "@jest/globals";
import { foo } from "./foo";

describe("foo", () => {
  it("is foo", () => {
    expect(foo).toBe("foo");
  });
});
