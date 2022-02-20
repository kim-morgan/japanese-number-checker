const SourceParser = require("./sourceParser")

let sourceParser = new SourceParser("第1四半期に1億円稼ぎました");

describe("Checker", () => {

  it("should be able to extract multiple numbers from a string", () => {
    expect(sourceParser.extractNumbers()).toEqual(["1", "1"]);
  });

  it("should be able to extract relevant numerical information", () => {
    expect(sourceParser.extractNumericalInformation()).toEqual(["第1", "1億"]);
  });

  it("should be able to extract Japanese years", () => {
    let sourceParserYears = new SourceParser("今年は令和4年です");
    sourceParserYears.extractNumbers()
    expect(sourceParserYears.extractNumericalInformation()).toEqual(["令和4"]);
  });

  it("should function correctly if a number is at the end of the string", () => {
    let sourceParserEnd = new SourceParser("安全第1");
    sourceParserEnd.extractNumbers();
    expect(sourceParserEnd.extractNumericalInformation()).toEqual(["第1"]);
  })

});