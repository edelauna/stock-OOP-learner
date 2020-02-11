const Financials = require('../../../../Financials');
const Cash_And_Cash_Equivalents = require('./Cash_And_Cash_Equivalents');
const Short_Term_Investments = require('./Short_Term_Investments'); 

class Cash_Cash_Equivalents_And_Short_Term_Investments extends Financials {
  constructor(data){
    super(data);
    
    this.Cash_And_Cash_Equivalents = new Cash_And_Cash_Equivalents(data);

    this.Short_Term_Investments = new Short_Term_Investments(data);
  }
}

module.exports = Cash_Cash_Equivalents_And_Short_Term_Investments;