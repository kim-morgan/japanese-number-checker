class SourceParser {

  constructor(string) {
    this.rawString = string;
    this.rawNumbers;
  }

  extractNumbers = () => {
    return this.rawNumbers = this.rawString.replace(/\D/g,' ').split(" ").filter(word => word !== "")
  }

  extractNumericalInformation = () => {

  }

}

module.exports = SourceParser;