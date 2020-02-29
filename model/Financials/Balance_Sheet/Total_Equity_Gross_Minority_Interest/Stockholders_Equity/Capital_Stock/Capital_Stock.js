const Financials = require('../../../../Financials');
const Common_Stock = require('./Common_Stock');
const Other_Capital_Stock = require('./Other_Capital_Stock');
const Preferred_Stock = require('./Preferred_Stock');

class Capital_Stock extends Financials{
  constructor(data){
    super(data)

    this.Common_Stock = new Common_Stock(data);
    this.Other_Capital_Stock = new Other_Capital_Stock(data);
    this.Preferred_Stock = new Preferred_Stock(data);
  }
}

module.exports = Capital_Stock;