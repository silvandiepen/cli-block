import {
  BLOCK_START,
  BLOCK_LINE,
  CREATE_BLOCK_LINE_SUCCESS,
  BLOCK_LINE_SUCCESS,
  BLOCK,
  CREATE_BLOCK,
  CREATE_BLOCK_START,
  CREATE_BLOCK_LINE,
} from "./";

import { dim, green, yellow, red } from "kleur";
import { BlockType } from "./blocks.model";

const stdOutSpy = jest.spyOn(process.stdout, "write").mockImplementation();

describe("BlockLine", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render", () => {
    const expected = `     ${dim(
      "┃"
    )}                                                                                ${dim(
      "┃"
    )}`;

    expect(CREATE_BLOCK_LINE()).toEqual([expected]);
  });

  it("Should Log", () => {
    process.stdout.write = jest.fn();
    const expected = `     ${dim(
      "┃"
    )}                                                                                ${dim(
      "┃"
    )}\n`;

    BLOCK_LINE();

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("BlockLine - With text", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render", () => {
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}`;

    expect(CREATE_BLOCK_LINE("test")).toEqual([expected]);
  });

  it("Should Log", () => {
    // const consoleSpy = jest.spyOn(console, "log");
    process.stdout.write = jest.fn();
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}\n`;

    BLOCK_LINE("test");

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("Block Start", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render", () => {
    const expected = [
      "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m",
    ];
    expect(CREATE_BLOCK_START()).toEqual(expected);
  });

  it("Should Log", () => {
    const expected =
      "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m\n";

    BLOCK_START();

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("Block Line Types", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render - Success", () => {
    const expected = [
      `     ${dim("┃")}        ${green(
        "✔"
      )} My Victory                                                            ${dim(
        "┃"
      )}`,
    ];
    expect(CREATE_BLOCK_LINE_SUCCESS("My Victory")).toEqual(expected);
  });

  it("Should Log - Success", () => {
    const expected = `     ${dim("┃")}        ${green(
      "✔"
    )} My Victory                                                            ${dim(
      "┃"
    )}\n`;

    BLOCK_LINE_SUCCESS("My Victory");

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("Blocks", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render - Block Line", async () => {
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}`;

    const result = await CREATE_BLOCK(BlockType.LINE, "test");

    expect(result).toEqual([expected]);
  });

  it("Should Log - Block Line", () => {
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}\n`;

    BLOCK(BlockType.LINE, "test");

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});
