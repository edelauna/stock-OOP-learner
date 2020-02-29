const Financials = require('../../../../Financials');
const Long_Term_Capital_Lease_Obligation = require('./Long_Term_Capital_Lease_Obligation');
const Long_Term_Debt = require('./Long_Term_Debt');

class Long_Term_Debt_And_Capital_Lease_Obligation extends Financials {
  constructor(data){
    super(data);

    this.Long_Term_Capital_Lease_Obligation = new Long_Term_Capital_Lease_Obligation(data);
    this.Long_Term_Debt = new Long_Term_Debt(data);
  }
}

module.exports = Long_Term_Debt_And_Capital_Lease_Obligation;