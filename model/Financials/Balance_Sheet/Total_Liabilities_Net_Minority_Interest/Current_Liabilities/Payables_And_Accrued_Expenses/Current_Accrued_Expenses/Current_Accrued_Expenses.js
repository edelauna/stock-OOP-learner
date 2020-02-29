const Financials = require('../../../../../Financials');
const Interest_Payable = require('./Interest_Payable');

class Current_Accrued_Expenses extends Financials {
  constructor(data){
    super(data);

    this.Interest_Payable = new Interest_Payable(data);
  }
}

module.exports = Current_Accrued_Expenses;