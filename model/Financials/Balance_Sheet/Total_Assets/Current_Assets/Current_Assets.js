const Financials = require('../../../Financials');
const Cash_Cash_Equivalents_And_Short_Term_Investments = require('./Cash_Cash_Equivalents_And_Short_Term_Investments/Cash_Cash_Equivalents_And_Short_Term_Investments');
const Current_Deferred_Assets = require('./Current_Deferred_Assets/Current_Deferred_Assets');
const Receivables = require('./Receivables/Receivables');
const Assets_Held_For_Sale_Current = require('./Assets_Held_For_Sale_Current');
const Hedging_Assets_Current = require('./Hedging_Assets_Current');
const Inventory = require('./Inventory');
const Other_Current_Assets = require('./Other_Current_Assets');
const Prepaid_Assets = require('./Prepaid_Assets');
const Restricted_Cash = require('./Restricted_Cash');

class Current_Assets extends Financials {
  constructor(data){
    super(data);

    this.Cash_Cash_Equivalents_And_Short_Term_Investments = new Cash_Cash_Equivalents_And_Short_Term_Investments(data);

    this.Current_Deferred_Assets = new Current_Deferred_Assets(data);

    this.Receivables = new Receivables(data);

    this.Assets_Held_For_Sale_Current = new Assets_Held_For_Sale_Current(data);

    this.Hedging_Assets_Current = new Hedging_Assets_Current(data);

    this.Inventory = new Inventory(data);

    this.Other_Current_Assets = new Other_Current_Assets(data);

    this.Prepaid_Assets = new Prepaid_Assets(data);

    this.Restricted_Cash = new Restricted_Cash(data);
  }
}

module.exports = Current_Assets;