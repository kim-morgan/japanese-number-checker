class Checker {

  extractNumbers = (string) => {
    return string.replace(/\D/g,' ').split(" ").filter(word => word !== "")
  }

}

module.exports = Checker;