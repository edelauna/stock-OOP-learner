const Financials = require('../../../../../Financials');
const Buildings_And_Improvements = require('./Buildings_And_Improvements');
const Construction_In_Progress = require('./Construction_In_Progress');
const Land_And_Improvements = require('./Land_And_Improvements');
const Leases = require('./Leases');
const Machinery_Furniture_Equipment = require('./Machinery_Furniture_Equipment');
const Other_Properties = require('./Other_Properties');
const Properties = require('./Properties');

class Gross_Ppe extends Financials{
  constructor(data){
    super(data)

    this.Buildings_And_Improvements = new Buildings_And_Improvements(data);
    this.Construction_In_Progress = new Construction_In_Progress(data);
    this.Land_And_Improvements = new Land_And_Improvements(data);
    this.Leases = new Leases(data);
    this.Machinery_Furniture_Equipment = new Machinery_Furniture_Equipment(data);
    this.Other_Properties = new Other_Properties(data);
    this.Properties = new Properties(data);
  }
}

module.exports = Gross_Ppe;