const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
const UNITS = ["百", "千", "万", "億", "兆"];
const DATES = ["月", "明治", "大正", "昭和", "平成", "令和"];
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
    console.log(this.rawNumbers)
    for (const number of this.rawNumbers) {
      let indexOfNumber = this.rawString.indexOf(number);
      let indexBefore;
      if (indexOfNumber === 0) {
        indexBefore = 0;
      } else if (indexOfNumber === 1) {
        indexBefore = 1;
      } else {
        indexBefore = 2;
      }
      let textBeforeNumber = this.rawString.substr(indexOfNumber - indexBefore, indexBefore);
      let textAfterNumber = this.rawString.substr(indexOfNumber+1, 1);
      let numericalInformation = [textBeforeNumber, number, textAfterNumber];
      this.rawString = this.rawString.replace(number, "")
      numericalInformation = numericalInformation.map(character => this.getRelevantNumber(character)).join("");
      this.processedNumbers.push(numericalInformation);
    }
    return this.processedNumbers;
  }

  getRelevantNumber = (substring) => {
    let result = "";
    for (const numericalInfo of this.relevantNumericalInfo) {
      if (substring.includes(numericalInfo)) {
        result = numericalInfo;
      }
    }
    return result;
  }

}

module.exports = SourceParser;