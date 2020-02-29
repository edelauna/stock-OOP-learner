const Financials = require('../../../../Financials');
const Current_Deferred_Taxes_Assets = require('./Current_Deferred_Taxes_Assets');

class Current_Deferred_Assets extends Financials {
  constructor(data){
    super(data);

    this.Current_Deferred_Taxes_Assets = new Current_Deferred_Taxes_Assets(data);
  }
}

module.exports = Current_Deferred_Assets;