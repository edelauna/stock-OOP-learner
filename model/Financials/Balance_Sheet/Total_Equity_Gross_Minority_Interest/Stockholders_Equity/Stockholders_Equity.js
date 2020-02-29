const Financials = require('../../../Financials');
const Additional_Paid_In_Capital = require('./Additional_Paid_In_Capital');
const Capital_Stock = require('./Capital_Stock/Capital_Stock');
const Gains_Losses_Not_Affecting_Retained_Earnings = require('./Gains_Losses_Not_Affecting_Retained_Earnings/Gains_Losses_Not_Affecting_Retained_Earnings')
const Minority_Interest = require('./Minority_Interest');
const Other_Equity_Interest = require('./Other_Equity_Interest');
const Retained_Earnings = require('./Retained_Earnings');
const Treasury_Stock = require('./Treasury_Stock');

class Stockholders_Equity extends Financials{
  constructor(data){
    super(data)

    this.Additional_Paid_In_Capital = new Additional_Paid_In_Capital(data);
    this.Capital_Stock = new Capital_Stock(data);
    this.Gains_Losses_Not_Affecting_Retained_Earnings = new Gains_Losses_Not_Affecting_Retained_Earnings(data);
    this.Minority_Interest = new Minority_Interest(data);
    this.Other_Equity_Interest = new Other_Equity_Interest(data);
    this.Retained_Earnings = new Retained_Earnings(data);
    this.Treasury_Stock = new Treasury_Stock(data);
  }
}

module.exports = Stockholders_Equity;