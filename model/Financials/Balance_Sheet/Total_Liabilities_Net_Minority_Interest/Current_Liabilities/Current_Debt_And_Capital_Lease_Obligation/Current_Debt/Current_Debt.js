const Financials = require('../../../../../Financials');
const Commercial_Paper = require('./Commercial_Paper');
const Current_Notes_Payable = require('./Current_Notes_Payable');
const Line_Of_Credit = require('./Line_Of_Credit');
const Other_Current_Borrowings = require('./Other_Current_Borrowings');

class Current_Debt extends Financials {
  constructor(data){
    super(data);

    this.Commercial_Paper = new Commercial_Paper(data);
    this.Current_Notes_Payable = new Current_Notes_Payable(data);
    this.Line_Of_Credit = new Line_Of_Credit(data);
    this.Other_Current_Borrowings = new Other_Current_Borrowings(data);
  }
}

module.exports = Current_Debt;