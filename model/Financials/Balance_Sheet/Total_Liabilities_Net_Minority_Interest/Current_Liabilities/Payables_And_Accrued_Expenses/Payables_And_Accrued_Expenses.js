const Financials = require('../../../../Financials');
const Current_Accrued_Expenses = require('./Current_Accrued_Expenses/Current_Accrued_Expenses');
const Payables = require('./Payables/Payables');

class Payables_And_Accrued_Expenses extends Financials {
  constructor(data){
    super(data);

    this.Current_Accrued_Expenses = new Current_Accrued_Expenses(data);
    this.Payables = new Payables(data);
  }
}

module.exports = Payables_And_Accrued_Expenses;