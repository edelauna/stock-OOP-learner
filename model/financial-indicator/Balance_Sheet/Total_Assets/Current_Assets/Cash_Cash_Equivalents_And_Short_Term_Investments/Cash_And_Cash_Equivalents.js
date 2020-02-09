const Financials = require('./Financials');
const Cash = require('./Cash');
const Cash_Equivalents = require('./Cash_Equivalents');

class Cash_And_Cash_Equivalents extends Financials {
  
  //Model for obj
  constructor(data, key){
    super(date,sum);
    let cashKey = "Cash" 
    this.Cash = this.returnValueOrNull(new Cash(data, cashKey), cashKey);

    let cashEqKey = "cash equivalents";
    this.Cash_Equivalents = this.returnValueOrNull(data, cashEqKey) ? new Cash_Equivalents(data, cashEqKey) : null;
  }
}

module.exports = Cash_And_Cash_Equivalents;