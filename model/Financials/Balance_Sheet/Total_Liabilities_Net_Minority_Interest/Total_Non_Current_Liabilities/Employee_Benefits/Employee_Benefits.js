const Financials = require('../../../../Financials');
const Non_Current_Pension_And_Other_Postretirement_Benefit_Plans = require('./Non_Current_Pension_And_Other_Postretirement_Benefit_Plans');

class Employee_Benefits extends Financials {
  constructor(data){
    super(data);

    this.Non_Current_Pension_And_Other_Postretirement_Benefit_Plans = new Non_Current_Pension_And_Other_Postretirement_Benefit_Plans(data);
  }
}

module.exports = Employee_Benefits;