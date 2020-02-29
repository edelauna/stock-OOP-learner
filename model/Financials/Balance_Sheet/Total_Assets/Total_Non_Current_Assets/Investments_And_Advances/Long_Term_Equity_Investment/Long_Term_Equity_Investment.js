const Financials = require('../../../../../Financials');
const Investments_In_Associates_At_Cost = require('./Investments_In_Associates_At_Cost');
const Investments_In_Joint_Ventures_At_Cost = require('./Investments_In_Joint_Ventures_At_Cost');
const Investments_In_Other_Ventures_Under_Equity_Method = require('./Investments_In_Other_Ventures_Under_Equity_Method')
const Investments_In_Subsidiaries_At_Cost = require('./Investments_In_Subsidiaries_At_Cost');

class Long_Term_Equity_Investment extends Financials{
  constructor(data){
    super(data);

    this.Investments_In_Associates_At_Cost = new Investments_In_Associates_At_Cost(data);
    this.Investments_In_Joint_Ventures_At_Cost = new Investments_In_Joint_Ventures_At_Cost(data);
    this.Investments_In_Other_Ventures_Under_Equity_Method = new Investments_In_Other_Ventures_Under_Equity_Method(data);
    this.Investments_In_Subsidiaries_At_Cost = new Investments_In_Subsidiaries_At_Cost(data);
  }
}

module.exports = Long_Term_Equity_Investment;