const Financials = require('../../../../Financials');
const Fixed_Assets_Revaluation_Reserve = require('./Fixed_Assets_Revaluation_Reserve');
const Foreign_Currency_Translation_Adjustments = require('./Foreign_Currency_Translation_Adjustments');
const Minimum_Pension_Liabilities = require('./Minimum_Pension_Liabilities');
const Other_Equity_Adjustments = require('./Other_Equity_Adjustments');
const Unrealized_Gain_Loss = require('./Unrealized_Gain_Loss');

class Gains_Losses_Not_Affecting_Retained_Earnings extends Financials{
  constructor(data){
    super(data)

    this.Fixed_Assets_Revaluation_Reserve = new Fixed_Assets_Revaluation_Reserve(data);
    this.Foreign_Currency_Translation_Adjustments = new Foreign_Currency_Translation_Adjustments(data);
    this.Minimum_Pension_Liabilities = new Minimum_Pension_Liabilities(data);
    this.Other_Equity_Adjustments = new Other_Equity_Adjustments(data);
    this.Unrealized_Gain_Loss = new Unrealized_Gain_Loss(data);
  }
}

module.exports = Gains_Losses_Not_Affecting_Retained_Earnings;