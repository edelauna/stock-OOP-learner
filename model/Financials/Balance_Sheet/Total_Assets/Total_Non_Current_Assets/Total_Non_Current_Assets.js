const Financials = require('../../../Financials');
const Goodwill_And_Other_Intangible_Assets = require('./Goodwill_And_Other_Intangible_Assets/Goodwill_And_Other_Intangible_Assets');
const Investments_And_Advances = require('./Investments_And_Advances/Investments_And_Advances');
const Net_Ppe = require('./Net_Ppe/Net_Ppe');
const Non_Current_Deferred_Assets = require('./Non_Current_Deferred_Assets/Non_Current_Deferred_Assets');
const Defined_Pension_Benefit = require('./Defined_Pension_Benefit');
const Due_From_Related_Parties_Non_Current = require('./Due_From_Related_Parties_Non_Current');
const Financial_Assets = require('./Financial_Assets');
const Investment_Properties = require('./Investment_Properties');
const Non_Current_Accounts_Receivable = require('./Non_Current_Accounts_Receivable');
const Non_Current_Note_Receivables = require('./Non_Current_Note_Receivables');
const Non_Current_Prepaid_Assets = require('./Non_Current_Prepaid_Assets');
const Other_Non_Current_Assets = require('./Other_Non_Current_Assets');

class Total_Non_Current_Assets extends Financials{
  constructor(data){
    super(data)

    this.Goodwill_And_Other_Intangible_Assets = new Goodwill_And_Other_Intangible_Assets(data);
    this.Investments_And_Advances = new Investments_And_Advances(data);
    this.Net_Ppe = new Net_Ppe(data);
    this.Non_Current_Deferred_Assets = new Non_Current_Deferred_Assets(data);
    this.Defined_Pension_Benefit = new Defined_Pension_Benefit(data);
    this.Due_From_Related_Parties_Non_Current = new Due_From_Related_Parties_Non_Current(data);
    this.Financial_Assets = new Financial_Assets(data);
    this.Investment_Properties = new Investment_Properties(data);
    this.Non_Current_Accounts_Receivable = new Non_Current_Accounts_Receivable(data);
    this.Non_Current_Note_Receivables = new Non_Current_Note_Receivables(data);
    this.Non_Current_Prepaid_Assets = new Non_Current_Prepaid_Assets(data);
    this.Other_Non_Current_Assets = new Other_Non_Current_Assets(data);
  }
}

module.exports = Total_Non_Current_Assets;