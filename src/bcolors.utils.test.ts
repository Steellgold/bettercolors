import { describe, it, expect } from "vitest";
import { format } from "./bcolors.utils";
import DayJS from "dayjs";
import { Configuration } from "./bcolors.types";

const defaultConfiguration: Configuration = {
  date: {
    enabled: true,
    surrounded: "[]",
    format: "DD/MM/YYYY HH:mm:ss"
  }
};

describe("Date format", () => {
  it("should date format with []", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("Hello World", defaultConfiguration, "green")
    ).toBe(`\x1b[30m[${now}] \x1b[32mHello World\x1b[30m`);
  });

  it("should date format with ()", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("Hello World", { ...defaultConfiguration, date: { ...defaultConfiguration.date, surrounded: "()" } }, "green")
    ).toBe(`\x1b[30m(${now}) \x1b[32mHello World\x1b[30m`);
  });

  it("should date format with {}", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("Hello World", { ...defaultConfiguration, date: { ...defaultConfiguration.date, surrounded: "{}" } }, "green")
    ).toBe(`\x1b[30m{${now}} \x1b[32mHello World\x1b[30m`);
  });

  it("should date format with <>", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("Hello World", { ...defaultConfiguration, date: { ...defaultConfiguration.date, surrounded: "<>" } }, "green")
    ).toBe(`\x1b[30m<${now}> \x1b[32mHello World\x1b[30m`);
  });

  it("should date format with none", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("Hello World", { ...defaultConfiguration, date: { ...defaultConfiguration.date, surrounded: "none" } }, "green")
    ).toBe(`\x1b[30m${now} \x1b[32mHello World\x1b[30m`);
  });
});

describe("Format", () => {
  it("should format correctly green", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "green")).toBe(`\x1b[30m[${now}] \x1b[32mHello World\x1b[30m`);
  });

  it("should format correctly red", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "red")).toBe(`\x1b[30m[${now}] \x1b[31mHello World\x1b[30m`);
  });

  it("should format correctly yellow", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "yellow")).toBe(`\x1b[30m[${now}] \x1b[33mHello World\x1b[30m`);
  });

  it("should format correctly blue", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "blue")).toBe(`\x1b[30m[${now}] \x1b[34mHello World\x1b[30m`);
  });

  it("should format correctly magenta", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "magenta")).toBe(`\x1b[30m[${now}] \x1b[35mHello World\x1b[30m`);
  });

  it("should format correctly cyan", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "cyan")).toBe(`\x1b[30m[${now}] \x1b[36mHello World\x1b[30m`);
  });

  it("should format correctly gray", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(format("Hello World", defaultConfiguration, "gray")).toBe(`\x1b[30m[${now}] \x1b[30mHello World\x1b[30m`);
  });
});