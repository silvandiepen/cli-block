"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const border_1 = require("./border");
const border_model_1 = require("./border.model");
const kleur_1 = require("kleur");
describe("Default borders", () => {
    // Assert
    // let settings = { borderColor: "yellow" };
    let settings = {};
    it("should render a midLine, without color", () => {
        expect(border_1.border(border_model_1.BorderElement.midLine, settings)).toBe(kleur_1.dim("─"));
    });
    it("should render a startLine, without color", () => {
        expect(border_1.border(border_model_1.BorderElement.startLine, settings)).toBe(kleur_1.dim("━"));
    });
    it("should render a endLine, without color", () => {
        expect(border_1.border(border_model_1.BorderElement.endLine, settings)).toBe(kleur_1.dim("━"));
    });
});
describe("Default borders - without settings", () => {
    it("should render a midline, without color", () => {
        expect(border_1.border(border_model_1.BorderElement.midLine)).toBe(kleur_1.dim("─"));
    });
    it("should render a startLine, without color", () => {
        expect(border_1.border(border_model_1.BorderElement.startLine)).toBe(kleur_1.dim("━"));
    });
    it("should render a endLine, without color", () => {
        expect(border_1.border(border_model_1.BorderElement.endLine)).toBe(kleur_1.dim("━"));
    });
});
describe("Red borders", () => {
    let settings = {
        borderColor: border_model_1.BorderColor.red,
    };
    it("should render a midline, red", () => {
        expect(border_1.border(border_model_1.BorderElement.midLine, settings)).toBe(kleur_1.red("─"));
    });
    it("should render a startLine, red", () => {
        expect(border_1.border(border_model_1.BorderElement.startLine, settings)).toBe(kleur_1.red("━"));
    });
    it("should render a endLine, red", () => {
        expect(border_1.border(border_model_1.BorderElement.endLine, settings)).toBe(kleur_1.red("━"));
    });
});
//# sourceMappingURL=border.test.js.map