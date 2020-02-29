const Balance_Sheet = require('./Financials/Balance_Sheet/Balance_Sheet');

class Security {
  //setter to add data to array
  constructor(data){
    //add symbol
    //maybe organize financials by date in array
    this.Balance_Sheet = new Balance_Sheet(data);
  }
}

module.exports = Security;