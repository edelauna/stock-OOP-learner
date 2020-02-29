const Financials = require('../../../../Financials');
const Current_Capital_Lease_Obligation = require('./Current_Capital_Lease_Obligation');
const Current_Debt = require('./Current_Debt/Current_Debt');

class Current_Debt_And_Capital_Lease_Obligation extends Financials {
  constructor(data){
    super(data);

    this.Current_Capital_Lease_Obligation = new Current_Capital_Lease_Obligation(data);
    this.Current_Debt = new Current_Debt(data);
  }
}

module.exports = Current_Debt_And_Capital_Lease_Obligation;