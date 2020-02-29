const readFromYaml = require('../../svcs/readFromYaml')
let CONF = readFromYaml('parsingreports_conf.yaml');

class Financials{
  constructor(data){
    const valueKey = this.returnKey(this.constructor.name)
    
    //hard code date
    const dateKey = this.returnKey("Date")
    
    this.date = data[dateKey];
    this.value = valueKey ? data[valueKey] : null;

    //standardize nulls
    if(this.value == CONF.null){
      this.value = null;
    }
  }

  returnKey(name){
    return CONF.keys.hasOwnProperty(name) ? CONF.keys[name] : null;
  }
}

module.exports = Financials;