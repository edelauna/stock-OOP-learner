const Financials = require('./Financials');
const Cash_And_Cash_Equivalents = require('./Cash_And_Cash_Equivalents');
const Short_Term_Investments = require('./Short_Term_Investments'); 

class Cash_Cash_Equivalents_And_Short_Term_Investments extends Financials {
  constructor(data, key){
    super(data, key);
    
    let cAndcEqKey = "cash and cash equivalents";
    this.Cash_And_Cash_Equivalents = data.hasOwnProperty(cAndcEqKey) ?
      new Cash_And_Cash_Equivalents(data, cAndcEqKey) : 
      null;
    
    let stiKey = "short term investments";
    this.Short_Term_Investments = data.hasOwnProperty(stiKey) ?
      new Short_Term_Investments(data, stiKey) :
      null;
  }
}

module.exports = Cash_Cash_Equivalents_And_Short_Term_Investments;