const Financials = require('../../../../Financials');
const Gross_Ppe = require('./Gross_Ppe/Gross_Ppe');
const Accumulated_Depreciation = require('./Accumulated_Depreciation');

class Net_Ppe extends Financials{
  constructor(data){
    super(data)

    this.Gross_Ppe = new Gross_Ppe(data);
    this.Accumulated_Depreciation = new Accumulated_Depreciation(data);
  }
}

module.exports = Net_Ppe;