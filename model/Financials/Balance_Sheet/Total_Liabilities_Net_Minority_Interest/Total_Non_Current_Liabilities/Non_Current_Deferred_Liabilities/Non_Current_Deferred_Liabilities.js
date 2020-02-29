const Financials = require('../../../../Financials');
const Non_Current_Deferred_Revenue = require('./Non_Current_Deferred_Revenue');
const Non_Current_Deferred_Taxes_Liabilities = require('./Non_Current_Deferred_Taxes_Liabilities');

class Non_Current_Deferred_Liabilities extends Financials {
  constructor(data){
    super(data);

    this.Non_Current_Deferred_Revenue = new Non_Current_Deferred_Revenue(data);
    this.Non_Current_Deferred_Taxes_Liabilities = new Non_Current_Deferred_Taxes_Liabilities(data);
  }
}

module.exports = Non_Current_Deferred_Liabilities;