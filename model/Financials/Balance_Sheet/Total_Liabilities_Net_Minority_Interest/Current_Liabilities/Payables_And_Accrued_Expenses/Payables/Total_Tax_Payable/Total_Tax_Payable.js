const Financials = require('../../../../../../Financials');
const Income_Tax_Payable = require('./Income_Tax_Payable');

class Total_Tax_Payable extends Financials {
  constructor(data){
    super(data);

    this.Income_Tax_Payable = new Income_Tax_Payable(data);
  }
}

module.exports = Total_Tax_Payable;