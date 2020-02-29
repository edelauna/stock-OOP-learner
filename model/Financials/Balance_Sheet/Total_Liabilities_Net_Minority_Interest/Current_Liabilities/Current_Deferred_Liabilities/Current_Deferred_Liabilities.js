const Financials = require('../../../../Financials');
const Current_Deferred_Revenue = require('./Current_Deferred_Revenue');
const Current_Deferred_Taxes_Liabilities = require('./Current_Deferred_Taxes_Liabilities');

class Current_Deferred_Liabilities extends Financials {
  constructor(data){
    super(data);

    this.Current_Deferred_Revenue = new Current_Deferred_Revenue(data);
    this.Current_Deferred_Taxes_Liabilities = new Current_Deferred_Taxes_Liabilities(data);
  }
}

module.exports = Current_Deferred_Liabilities;