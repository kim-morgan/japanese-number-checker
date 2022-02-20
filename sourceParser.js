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
    for (const number of this.rawNumbers) {
      let indexOfNumber = this.rawString.indexOf(number);
      let indexBefore = this.indexOfPrecedingCharsToCheck(indexOfNumber);
      let textBeforeNumber = this.getTextBeforeNumber(indexOfNumber, indexBefore);
      let textAfterNumber = this.getTextAfterNumber(indexOfNumber);
      let numericalInformation = [textBeforeNumber, number, textAfterNumber];
      numericalInformation = numericalInformation.map(character => this.getRelevantNumber(character)).join("");
      this.processedNumbers.push(numericalInformation);
      this.rawString = this.rawString.replace(number, "");
    }
    return this.processedNumbers;
  }

  indexOfPrecedingCharsToCheck = (indexOfNumber) => {
    if (indexOfNumber === 0) {
      return 0;
    } else if (indexOfNumber === 1) {
      return 1;
    } else {
      return 2;
    }
  }

  getTextBeforeNumber = (indexOfNumber, indexBefore) => {
    return this.rawString.substr(indexOfNumber - indexBefore, indexBefore);
  }

  getTextAfterNumber = (indexOfNumber) => {
    return this.rawString.substr(indexOfNumber + 1, 1);
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