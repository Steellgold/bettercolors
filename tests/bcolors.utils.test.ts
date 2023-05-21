import { Configuration } from "$core/bcolors.types";
import { format } from "$core/bcolors.utils";
import { DayJS } from "$core/utils/day-js";
import { describe, it, expect } from "vitest";

const defaultConfiguration: Configuration = {
  date: {
    surrounded: "[]",
    format: "DD/MM/YYYY HH:mm:ss",
    timezone: "Europe/Paris"
  }
};

const configurationDateParenthesis: Configuration = {
  date: { surrounded: "()", format: "DD/MM/YYYY HH:mm:ss" }
};

const configurationCompare: Configuration = {
  date: { surrounded: "<>", format: "DD/MM/YYYY HH:mm:ss" }
};

const configurationAccolade: Configuration = {
  date: { surrounded: "{}", format: "DD/MM/YYYY HH:mm:ss" }
};

describe("[] date format", () => {
  it("should date format with [] green", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "success")
    ).toBe(`\x1b[30m[${now}] \x1b[32mtest\x1b[32m`);
  });

  it("should date format with [] red", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "error")
    ).toBe(`\x1b[30m[${now}] \x1b[31mtest\x1b[31m`);
  });

  it("should date format with [] yellow", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "warn")
    ).toBe(`\x1b[30m[${now}] \x1b[33mtest\x1b[33m`);
  });

  it("should date format with [] blue", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "info")
    ).toBe(`\x1b[30m[${now}] \x1b[34mtest\x1b[34m`);
  });

  it("should date format with [] magenta", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "debug")
    ).toBe(`\x1b[30m[${now}] \x1b[35mtest\x1b[35m`);
  });

  it("should date format with [] cyan", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "log")
    ).toBe(`\x1b[30m[${now}] \x1b[36mtest\x1b[36m`);
  });

  it("should date format with [] white", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", defaultConfiguration, "default")
    ).toBe(`\x1b[30m[${now}] \x1b[37mtest\x1b[37m`);
  });
});

describe("() date format", () => {
  it("should date format with () green", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "success")
    ).toBe(`\x1b[30m(${now}) \x1b[32mtest\x1b[32m`);
  });

  it("should date format with () red", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "error")
    ).toBe(`\x1b[30m(${now}) \x1b[31mtest\x1b[31m`);
  });

  it("should date format with () yellow", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "warn")
    ).toBe(`\x1b[30m(${now}) \x1b[33mtest\x1b[33m`);
  });

  it("should date format with () blue", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "info")
    ).toBe(`\x1b[30m(${now}) \x1b[34mtest\x1b[34m`);
  });

  it("should date format with () magenta", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "debug")
    ).toBe(`\x1b[30m(${now}) \x1b[35mtest\x1b[35m`);
  });

  it("should date format with () cyan", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "log")
    ).toBe(`\x1b[30m(${now}) \x1b[36mtest\x1b[36m`);
  });

  it("should date format with () white", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationDateParenthesis, "default")
    ).toBe(`\x1b[30m(${now}) \x1b[37mtest\x1b[37m`);
  });
});

describe("<> date format", () => {
  it("should date format with <> green", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "success")
    ).toBe(`\x1b[30m<${now}> \x1b[32mtest\x1b[32m`);
  });

  it("should date format with <> red", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "error")
    ).toBe(`\x1b[30m<${now}> \x1b[31mtest\x1b[31m`);
  });

  it("should date format with <> yellow", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "warn")
    ).toBe(`\x1b[30m<${now}> \x1b[33mtest\x1b[33m`);
  });

  it("should date format with <> blue", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "info")
    ).toBe(`\x1b[30m<${now}> \x1b[34mtest\x1b[34m`);
  });

  it("should date format with <> magenta", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "debug")
    ).toBe(`\x1b[30m<${now}> \x1b[35mtest\x1b[35m`);
  });

  it("should date format with <> cyan", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "log")
    ).toBe(`\x1b[30m<${now}> \x1b[36mtest\x1b[36m`);
  });

  it("should date format with <> white", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationCompare, "default")
    ).toBe(`\x1b[30m<${now}> \x1b[37mtest\x1b[37m`);
  });
});

describe("{} date format", () => {
  it("should date format with {} green", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "success")
    ).toBe(`\x1b[30m{${now}} \x1b[32mtest\x1b[32m`);
  });

  it("should date format with {} red", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "error")
    ).toBe(`\x1b[30m{${now}} \x1b[31mtest\x1b[31m`);
  });

  it("should date format with {} yellow", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "warn")
    ).toBe(`\x1b[30m{${now}} \x1b[33mtest\x1b[33m`);
  });

  it("should date format with {} blue", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "info")
    ).toBe(`\x1b[30m{${now}} \x1b[34mtest\x1b[34m`);
  });

  it("should date format with {} magenta", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "debug")
    ).toBe(`\x1b[30m{${now}} \x1b[35mtest\x1b[35m`);
  });

  it("should date format with {} cyan", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "log")
    ).toBe(`\x1b[30m{${now}} \x1b[36mtest\x1b[36m`);
  });

  it("should date format with {} white", () => {
    const now = DayJS().format("DD/MM/YYYY HH:mm:ss");
    expect(
      format("test", configurationAccolade, "default")
    ).toBe(`\x1b[30m{${now}} \x1b[37mtest\x1b[37m`);
  });
});