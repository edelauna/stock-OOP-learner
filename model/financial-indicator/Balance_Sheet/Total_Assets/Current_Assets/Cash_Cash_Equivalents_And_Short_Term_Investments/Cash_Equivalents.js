const Financials = require('./Financials');

class Cash_Equivalents extends Financials {
  constructor(data, key){
    super(data, key);
  }
}

module.exports = Cash_Equivalents;