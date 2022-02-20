const SourceParser = require("./sourceParser")

let sourceParser = new SourceParser("第1四半期に1億円稼ぎました");

describe("Checker", () => {

  it("should be able to extract multiple numbers from a string", () => {
    expect(sourceParser.extractNumbers()).toEqual(["1", "1"]);
  });

  it("should be able to extract relevant numerical information", () => {
    expect(sourceParser.extractNumericalInformation()).toEqual(["第1", "1億"]);
  });

})