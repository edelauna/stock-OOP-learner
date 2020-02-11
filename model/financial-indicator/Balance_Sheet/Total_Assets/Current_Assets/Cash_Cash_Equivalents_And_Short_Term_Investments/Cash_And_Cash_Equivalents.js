const Financials = require('../../../../Financials');
const Cash = require('./Cash');
const Cash_Equivalents = require('./Cash_Equivalents');

class Cash_And_Cash_Equivalents extends Financials {
  
  //Model for obj
  constructor(data){
    super(data);
    
    this.Cash = new Cash(data);

    this.Cash_Equivalents = new Cash_Equivalents(data);
  }
}

module.exports = Cash_And_Cash_Equivalents;