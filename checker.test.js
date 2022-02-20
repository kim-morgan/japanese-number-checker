const Checker = require("./checker")

let checker = new Checker();

describe("Checker", () => {
  it("should be able to extract a number from a string", () => {
    expect(checker.extractNumbers("1億円稼ぎました")).toEqual(["1"]);
  });
  it("should be able to extract multiple numbers from a string", () => {
    expect(checker.extractNumbers("2021年に1億円稼ぎました")).toEqual(["2021", "1"])
  })
})