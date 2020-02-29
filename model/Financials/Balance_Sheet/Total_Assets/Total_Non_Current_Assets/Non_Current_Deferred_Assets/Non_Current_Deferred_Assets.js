const Financials = require('../../../../Financials');
const Non_Current_Deferred_Taxes_Assets = require('./Non_Current_Deferred_Taxes_Assets');

class Non_Current_Deferred_Assets extends Financials{
  constructor(data){
    super(data)

    this.Non_Current_Deferred_Taxes_Assets = new Non_Current_Deferred_Taxes_Assets(data);
  }
}

module.exports = Non_Current_Deferred_Assets;