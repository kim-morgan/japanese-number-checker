const Month = require("./month");

let january = new Month(1);

describe("Month", () => {
  it("can convert January to English", () => {
    expect(january.getAcceptableOutput()).toEqual("Jan");
  });
});