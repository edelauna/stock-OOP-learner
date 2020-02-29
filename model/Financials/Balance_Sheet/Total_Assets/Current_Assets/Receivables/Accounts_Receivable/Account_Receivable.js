const Financials = require('../../../../../Financials');
const Allowance_For_Doubtful_Accounts_Receivable = require('./Allowance_For_Doubtful_Accounts_Receivable');
const Gross_Accounts_Receivable = require('./Gross_Accounts_Receivable');

class Account_Receivable extends Financials{
  constructor(data){
    super(data);
    
    this.Allowance_For_Doubtful_Accounts_Receivable = new Allowance_For_Doubtful_Accounts_Receivable(data);

    this.Gross_Accounts_Receivable = new Gross_Accounts_Receivable(data);
  }
}

module.exports = Account_Receivable;