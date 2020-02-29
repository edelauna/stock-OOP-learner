const Financials = require('../../../../../Financials');
const Accounts_Payable = require('./Accounts_Payable');
const Dividends_Payable = require('./Dividends_Payable');
const Due_To_Related_Parties_Current = require('./Due_To_Related_Parties_Current');
const Other_Payable = require('./Other_Payable');
const Total_Tax_Payable = require('./Total_Tax_Payable/Total_Tax_Payable');

class Payables extends Financials {
  constructor(data){
    super(data);

    this.Accounts_Payable = new Accounts_Payable(data);
    this.Dividends_Payable = new Dividends_Payable(data);
    this.Due_To_Related_Parties_Current = new Due_To_Related_Parties_Current(data);
    this.Other_Payable = new Other_Payable(data);
    this.Total_Tax_Payable = new Total_Tax_Payable(data);
  }
}

module.exports = Payables;