const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
const UNITS = ["百", "千", "万", "億", "兆"];
const DATES = ["月"];
const ORDINAL = ["第"]

class SourceParser {

  constructor(string) {
    this.rawString = string;
    this.rawNumbers;
    this.processedNumbers = [];
    this.relevantNumericalInfo = NUMBERS.concat(UNITS, DATES, ORDINAL);
  }

  extractNumbers = () => {
    return this.rawNumbers = this.rawString.replace(/\D/g,' ').split(" ").filter(word => word !== "")
  }

  extractNumericalInformation = () => {
    for (const number of this.rawNumbers) {
      let indexOfNumber = this.rawString.indexOf(number);
      let numericalInformation = this.rawString.substr(indexOfNumber-1, 3);
      this.rawString = this.rawString.replace(number, "")
      numericalInformation = numericalInformation.split("");
      numericalInformation = numericalInformation.filter(character => this.relevantNumericalInfo.includes(character)).join("");
      this.processedNumbers.push(numericalInformation);
    }

    return this.processedNumbers;
  }

}

module.exports = SourceParser;