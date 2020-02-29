const Financials = require('../../Financials');
const Current_Assets = require('./Current_Assets/Current_Assets');
const Total_Non_Current_Assets = require('./Total_Non_Current_Assets/Total_Non_Current_Assets');

class Total_Assets extends Financials{
  constructor(data){
    super(data)

    this.Current_Assets = new Current_Assets(data);

    this.Total_Non_Current_Assets = new Total_Non_Current_Assets(data);
  }
}

module.exports = Total_Assets;