const Checker = require("./checker")

let checker = new Checker();

describe("Checker", () => {
  it("should be able to extract numbers from a string", () => {
    expect(checker.extractNumbers("1億円稼ぎました")).toBe(1);
  })
})