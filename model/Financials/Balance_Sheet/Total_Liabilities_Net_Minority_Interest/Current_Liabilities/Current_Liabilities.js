const Financials = require('../../../Financials');
const Current_Debt_And_Capital_Lease_Obligation = require('./Current_Debt_And_Capital_Lease_Obligation/Current_Debt_And_Capital_Lease_Obligation');
const Current_Deferred_Liabilities = require('./Current_Deferred_Liabilities/Current_Deferred_Liabilities');
const Current_Provisions = require('./Current_Provisions');
const Other_Current_Liabilities = require('./Other_Current_Liabilities');
const Payables_And_Accrued_Expenses = require('./Payables_And_Accrued_Expenses/Payables_And_Accrued_Expenses');
const Pension_And_Other_Post_Retirement_Benefit_Plans_Current = require('./Pension_And_Other_Post_Retirement_Benefit_Plans_Current');

class Current_Liabilities extends Financials {
  constructor(data){
    super(data);

    this.Current_Debt_And_Capital_Lease_Obligation = new Current_Debt_And_Capital_Lease_Obligation(data);
    this.Current_Deferred_Liabilities = new Current_Deferred_Liabilities(data);
    this.Current_Provisions = new Current_Provisions(data);
    this.Other_Current_Liabilities = new Other_Current_Liabilities(data);
    this.Payables_And_Accrued_Expenses = new Payables_And_Accrued_Expenses(data);
    this.Pension_And_Other_Post_Retirement_Benefit_Plans_Current = new Pension_And_Other_Post_Retirement_Benefit_Plans_Current(data);
  }
}

module.exports = Current_Liabilities;