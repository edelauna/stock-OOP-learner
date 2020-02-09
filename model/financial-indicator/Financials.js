class Financials{
  constructor(data, key){
    //hard code date
    this.date = data["date"];
    this.value = data[key];
  }

  returnValueOrNull(data, key){
    return data.hasOwnProperty(key) ? data[key] : null;
  }
}

module.exports = Financials;