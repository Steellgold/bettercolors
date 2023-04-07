import { describe, it, expect } from "vitest";
import { getColorByType } from "./bcolors.utils";

describe("Types colors", () => {
  it("success should be green", () => {
    expect(getColorByType("success")).toBe("\x1b[32m");
  });

  it("error should be red", () => {
    expect(getColorByType("error")).toBe("\x1b[31m");
  });

  it("info should be blue", () => {
    expect(getColorByType("info")).toBe("\x1b[34m");
  });

  it("debug should be magenta", () => {
    expect(getColorByType("debug")).toBe("\x1b[35m");
  });

  it("log should be cyan", () => {
    expect(getColorByType("log")).toBe("\x1b[36m");
  });

  it("warn should be yellow", () => {
    expect(getColorByType("warn")).toBe("\x1b[33m");
  });

  it("default should be white", () => {
    expect(getColorByType("default")).toBe("\x1b[37m");
  });
});