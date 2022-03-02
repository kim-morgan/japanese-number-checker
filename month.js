const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
}

class Month {

  constructor(month) {
    this.month = month;
  }

  getAcceptableOutput = () => {
    if (this.isValidMonth()) {
      return months[this.month];
    } else {
      return "";
    }
  }

  isValidMonth = () => {
    return this.month > 0 && this.month <= 12
  }

}

module.exports = Month;