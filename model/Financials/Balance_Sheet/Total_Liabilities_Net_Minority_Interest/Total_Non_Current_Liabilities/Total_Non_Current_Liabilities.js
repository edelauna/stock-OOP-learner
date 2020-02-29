const Financials = require('../../../Financials');
const Derivative_Product_Liabilities = require('./Derivative_Product_Liabilities');
const Due_To_Related_Parties_Non_Current = require('./Due_To_Related_Parties_Non_Current');
const Employee_Benefits = require('./Employee_Benefits/Employee_Benefits');
const Liabilities_Held_For_Sale_Non_Current = require('./Liabilities_Held_For_Sale_Non_Current');
const Long_Term_Debt_And_Capital_Lease_Obligation = require('./Long_Term_Debt_And_Capital_Lease_Obligation/Long_Term_Debt_And_Capital_Lease_Obligation');
const Long_Term_Provisions = require('./Long_Term_Provisions');
const Non_Current_Accrued_Expenses = require('./Non_Current_Accrued_Expenses');
const Non_Current_Deferred_Liabilities = require('./Non_Current_Deferred_Liabilities/Non_Current_Deferred_Liabilities');
const Other_Non_Current_Liabilities = require('./Other_Non_Current_Liabilities');
const Preferred_Securities_Outside_Stock_Equity = require('./Preferred_Securities_Outside_Stock_Equity');
const Restricted_Common_Stock = require('./Restricted_Common_Stock');
const Trade_And_Other_Payables_Non_Current = require('./Trade_And_Other_Payables_Non_Current');

class Total_Non_Current_Liabilities extends Financials {
  constructor(data){
    super(data);

    this.Derivative_Product_Liabilities = new Derivative_Product_Liabilities(data);
    this.Due_To_Related_Parties_Non_Current = new Due_To_Related_Parties_Non_Current(data);
    this.Employee_Benefits = new Employee_Benefits(data);
    this.Liabilities_Held_For_Sale_Non_Current = new Liabilities_Held_For_Sale_Non_Current(data);
    this.Long_Term_Debt_And_Capital_Lease_Obligation = new Long_Term_Debt_And_Capital_Lease_Obligation(data);
    this.Long_Term_Provisions = new Long_Term_Provisions(data);
    this.Non_Current_Accrued_Expenses = new Non_Current_Accrued_Expenses(data);
    this.Non_Current_Deferred_Liabilities = new Non_Current_Deferred_Liabilities(data);
    this.Other_Non_Current_Liabilities = new Other_Non_Current_Liabilities(data);
    this.Preferred_Securities_Outside_Stock_Equity = new Preferred_Securities_Outside_Stock_Equity(data);
    this.Restricted_Common_Stock = new Restricted_Common_Stock(data);
    this.Trade_And_Other_Payables_Non_Current = new Trade_And_Other_Payables_Non_Current(data);
  }
}

module.exports = Total_Non_Current_Liabilities;