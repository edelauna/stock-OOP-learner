const Financials = require('./Financials');

class Cash extends Financials {
  constructor(data, key){
    super(data, key);
  }
}

module.exports = Cash;