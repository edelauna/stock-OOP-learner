const Financials = require('../../../../../Financials');
const Available_For_Sale_Securities = require('./Available_For_Sale_Securities');
const Financial_Assets_Designated_As_Fair_Value_Through_Profit_Or_Loss_Total = require('./Financial_Assets_Designated_As_Fair_Value_Through_Profit_Or_Loss_Total');
const Held_To_Maturity_Securities = require('./Held_To_Maturity_Securities');
const Trading_Securities = require('./Trading_Securities');

class Investment_In_Financial_Assets extends Financials{
  constructor(data){
    super(data);

    this.Available_For_Sale_Securities = new Available_For_Sale_Securities(data);
    this.Financial_Assets_Designated_As_Fair_Value_Through_Profit_Or_Loss_Total = new Financial_Assets_Designated_As_Fair_Value_Through_Profit_Or_Loss_Total(data);
    this.Held_To_Maturity_Securities = new Held_To_Maturity_Securities(data);
    this.Trading_Securities = new Trading_Securities(data);
  }
}

module.exports = Investment_In_Financial_Assets;