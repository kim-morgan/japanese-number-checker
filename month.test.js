const Month = require("./month");

let january = new Month(1);
let february = new Month(2);
let march = new Month(3);
let april = new Month(4);
let may = new Month(5);
let june = new Month(6);
let july = new Month(7);
let august = new Month(8);
let september = new Month(9);
let october = new Month(10);
let november = new Month(11);
let december = new Month(12);
let invalidMonth = new Month(134);

describe("Month", () => {
  it("can convert January to English", () => {
    expect(january.getAcceptableOutput()).toEqual("Jan");
  });

  it("can convert February to English", () => {
    expect(february.getAcceptableOutput()).toEqual("Feb");
  });

  it("can convert March to English", () => {
    expect(march.getAcceptableOutput()).toEqual("Mar");
  });

  it("can convert April to English", () => {
    expect(april.getAcceptableOutput()).toEqual("Apr");
  });

  it("can convert May to English", () => {
    expect(may.getAcceptableOutput()).toEqual("May");
  });

  it("can convert June to English", () => {
    expect(june.getAcceptableOutput()).toEqual("Jun");
  });

  it("can convert July to English", () => {
    expect(july.getAcceptableOutput()).toEqual("Jul");
  });

  it("can convert August to English", () => {
    expect(august.getAcceptableOutput()).toEqual("Aug");
  });

  it("can convert September to English", () => {
    expect(september.getAcceptableOutput()).toEqual("Sep");
  });

  it("can convert October to English", () => {
    expect(october.getAcceptableOutput()).toEqual("Oct");
  });

  it("can convert November to English", () => {
    expect(november.getAcceptableOutput()).toEqual("Nov");
  });

  it("can convert December to English", () => {
    expect(december.getAcceptableOutput()).toEqual("Dec");
  });

  it("returns an empty string for invalid input", () => {
    expect(invalidMonth.getAcceptableOutput()).toEqual("");
  })
});