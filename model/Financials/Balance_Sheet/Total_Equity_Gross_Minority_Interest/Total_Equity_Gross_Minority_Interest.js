const Financials = require('../../Financials');
const Stockholders_Equity = require('./Stockholders_Equity/Stockholders_Equity');
const Capital_Lease_Obligations = require('./Capital_Lease_Obligations');
const Common_Stock_Equity = require('./Common_Stock_Equity');
const Invested_Capital = require('./Invested_Capital');
const Net_Debt = require('./Net_Debt');
const Net_Tangible_Assets = require('./Net_Tangible_Assets');
const Ordinary_Shares_Number = require('./Ordinary_Shares_Number');
const Preferred_Shares_Number = require('./Preferred_Shares_Number');
const Preferred_Stock_Equity = require('./Preferred_Stock_Equity');
const Share_Issued = require('./Share_Issued');
const Tangible_Book_Value = require('./Tangible_Book_Value');
const Total_Capitalization = require('./Total_Capitalization');
const Total_Debt = require('./Total_Debt');
const Treasury_Shares_Number = require('./Treasury_Shares_Number');
const Working_Capital = require('./Working_Capital');

class Total_Equity_Gross_Minority_Interest extends Financials{
  constructor(data){
    super(data)

    this.Stockholders_Equity = new Stockholders_Equity(data);
    this.Capital_Lease_Obligations = new Capital_Lease_Obligations(data);
    this.Common_Stock_Equity = new Common_Stock_Equity(data);
    this.Invested_Capital = new Invested_Capital(data);
    this.Net_Debt = new Net_Debt(data);
    this.Net_Tangible_Assets = new Net_Tangible_Assets(data);
    this.Ordinary_Shares_Number = new Ordinary_Shares_Number(data);
    this.Preferred_Shares_Number = new Preferred_Shares_Number(data);
    this.Preferred_Stock_Equity = new Preferred_Stock_Equity(data);
    this.Share_Issued = new Share_Issued(data);
    this.Tangible_Book_Value = new Tangible_Book_Value(data);
    this.Total_Capitalization = new Total_Capitalization(data);
    this.Total_Debt = new Total_Debt(data);
    this.Treasury_Shares_Number = new Treasury_Shares_Number(data);
    this.Working_Capital = new Working_Capital(data);
  }
}

module.exports = Total_Equity_Gross_Minority_Interest;