// The first year of each era
const years = {
  "大正": 1912,
  "昭和": 1926,
  "平成": 1989,
  "令和": 2019,
}
class Year {

  constructor(yearType, number) {
    this.yearType = yearType;
    this.number = number;
  }

  getAcceptableOutput = () => {
    return years[this.yearType] + this.number - 1;
  }

}

module.exports = Year;