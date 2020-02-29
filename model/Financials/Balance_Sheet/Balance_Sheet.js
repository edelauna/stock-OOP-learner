const Total_Assets = require('./Total_Assets/Total_Assets');
const Total_Equity_Gross_Minority_Interest = require('./Total_Equity_Gross_Minority_Interest/Total_Equity_Gross_Minority_Interest');
const Total_Liabilities_Net_Minority_Interest = require('./Total_Liabilities_Net_Minority_Interest/Total_Liabilities_Net_Minority_Interest');

class Balance_Sheet {
  constructor(data){
    this.Total_Assets = new Total_Assets(data);
    this.Total_Equity_Gross_Minority_Interest = new Total_Equity_Gross_Minority_Interest(data);
    this.Total_Liabilities_Net_Minority_Interest = new Total_Liabilities_Net_Minority_Interest(data);
  }
}
module.exports = Balance_Sheet;