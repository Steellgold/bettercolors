import { describe, it, expect } from "vitest";
import { getColor } from "./bcolors.types";

describe("Colors", () => {
  it("should be gray", () => {
    expect(getColor("gray")).toBe("\x1b[30m");
  });

  it("should be red", () => {
    expect(getColor("red")).toBe("\x1b[31m");
  });

  it("should be green", () => {
    expect(getColor("green")).toBe("\x1b[32m");
  });

  it("should be yellow", () => {
    expect(getColor("yellow")).toBe("\x1b[33m");
  });

  it("should be blue", () => {
    expect(getColor("blue")).toBe("\x1b[34m");
  });

  it("should be magenta", () => {
    expect(getColor("magenta")).toBe("\x1b[35m");
  });

  it("should be cyan", () => {
    expect(getColor("cyan")).toBe("\x1b[36m");
  });
});