const Year = require("./year");

let heiseiThree = new Year("平成", 3);

let showaThirty = new Year("昭和", 30);

let reiwaFour = new Year("令和", 4);

let taishoThree = new Year("大正", 3);

let meijiThirty = new Year("明治", 30);

describe("Year", () => {
  it("should be able to convert heisei years to western years", () => {
    expect(heiseiThree.getAcceptableOutput()).toEqual(1991);
  });

  it("should be able to convert showa years to western years", () => {
    expect(showaThirty.getAcceptableOutput()).toEqual(1955);
  });

  it("should be able to convert reiwa years to western years", () => {
    expect(reiwaFour.getAcceptableOutput()).toEqual(2022);
  });

  it("should be able to convert taisho years to western years", () => {
    expect(taishoThree.getAcceptableOutput()).toEqual(1914);
  });

  it("should be able to convert meiji years to western years", () => {
    expect(meijiThirty.getAcceptableOutput()).toEqual(1897);
  });
});