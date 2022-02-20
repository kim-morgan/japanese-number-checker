class Checker {

  constructor(string) {
    this.rawString = string;
  }

  extractNumbers = () => {
    return this.rawString.replace(/\D/g,' ').split(" ").filter(word => word !== "")
  }

}

module.exports = Checker;