const Financials = require('../../../../Financials');
const Goodwill = require('./Goodwill');
const Other_Intangible_Assets = require('./Other_Intangible_Assets');

class Goodwill_And_Other_Intangible_Assets extends Financials{
  constructor(data){
    super(data);

    this.Goodwill = new Goodwill(data);
    this.Other_Intangible_Assets = new Other_Intangible_Assets(data);
  }
}

module.exports = Goodwill_And_Other_Intangible_Assets;