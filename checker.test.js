const Checker = require("./checker")

let checker = new Checker("2021年に1億円稼ぎました");

describe("Checker", () => {
  it("should be able to extract multiple numbers from a string", () => {
    expect(checker.extractNumbers()).toEqual(["2021", "1"])
  })
})