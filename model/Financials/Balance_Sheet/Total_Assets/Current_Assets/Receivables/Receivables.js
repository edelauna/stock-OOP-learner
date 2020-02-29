const Financials = require('../../../../Financials');
const Account_Receivable = require('./Accounts_Receivable/Account_Receivable');
const Accrued_Interest_Receivable = require('./Accrued_Interest_Receivable');
const Due_From_Related_Parties_Current = require('./Due_From_Related_Parties_Current')
const Loans_Receivable = require('./Loans_Receivable');
const Notes_Receivable = require('./Notes_Receivable');
const Other_Receivables = require('./Other_Receivables');
const Receivables_Adjustments_Allowances = require('./Receivables_Adjustments_Allowances');
const Taxes_Receivable = require('./Taxes_Receivable')

class Receivables extends Financials{
  constructor(data){
    super(data)

    this.Account_Receivable = new Account_Receivable(data);

    this.Accrued_Interest_Receivable = new Accrued_Interest_Receivable(data);

    this.Due_From_Related_Parties_Current = new Due_From_Related_Parties_Current(data);
  
    this.Loans_Receivable = new Loans_Receivable(data);

    this.Notes_Receivable = new Notes_Receivable(data);

    this.Other_Receivables = new Other_Receivables(data);

    this.Receivables_Adjustments_Allowances = new Receivables_Adjustments_Allowances(data);

    this.Taxes_Receivable = new Taxes_Receivable(data);
  }
}

module.exports = Receivables