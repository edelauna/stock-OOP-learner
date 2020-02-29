const Financials = require('../../../../Financials');
const Investment_In_Financial_Assets = require('./Investment_In_Financial_Assets/Investment_In_Financial_Assets');
const Long_Term_Equity_Investment = require('./Long_Term_Equity_Investment/Long_Term_Equity_Investment');
const Other_Investments = require('./Other_Investments');

class Investments_And_Advances extends Financials{
  constructor(data){
    super(data);

    this.Investment_In_Financial_Assets = new Investment_In_Financial_Assets(data);
    this.Long_Term_Equity_Investment = new Long_Term_Equity_Investment(data);
    this.Other_Investments = new Other_Investments(data);
  }
}

module.exports = Investments_And_Advances;