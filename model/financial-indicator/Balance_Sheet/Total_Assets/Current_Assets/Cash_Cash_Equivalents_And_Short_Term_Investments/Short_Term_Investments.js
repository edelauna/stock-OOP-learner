const Financials = require('./Financials');

class Short_Term_Investments extends Financials {
  constructor(date, sum, opts){
    super(date, sum);
  }
}

module.exports = Short_Term_Investments;