const Year = require("./year");

let heiseiThree = new Year("平成", 3);

describe("Year", () => {
  it("should be able to convert heisei years to western years", () => {
    expect(heiseiThree.acceptableOutput).toEqual(1991);
  });
});