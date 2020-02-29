const Financials = require('../../Financials');
const Current_Liabilities = require('./Current_Liabilities/Current_Liabilities');
const Total_Non_Current_Liabilities = require('./Total_Non_Current_Liabilities/Total_Non_Current_Liabilities');

class Total_Liabilities_Net_Minority_Interest extends Financials {
  constructor(data){
    super(data);

    this.Current_Liabilities = new Current_Liabilities(data);
    this.Total_Non_Current_Liabilities = new Total_Non_Current_Liabilities(data);
  }
}

module.exports = Total_Liabilities_Net_Minority_Interest;