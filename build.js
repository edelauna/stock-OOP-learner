const path = require('path');
const xlsx = require('node-xlsx');
const fs = require('fs');

const yaml = require('js-yaml');

//models
const Cash_Cash_Equivalents_And_Short_Term_Investments = require('./model/financial-indicator/Balance_Sheet/Total_Assets/Current_Assets/Cash_Cash_Equivalents_And_Short_Term_Investments/Cash_Cash_Equivalents_And_Short_Term_Investments');

let CONF;
try {
  let fileContents = fs.readFileSync(path.join(__dirname,'./confs/parsingReports_conf.yaml'), 'utf8');
  CONF = yaml.safeLoad(fileContents);
} catch (e) {
  console.error(e);
}

let parseOnce = ((file, reportPath)=>{
  let once = false;
  return (file, reportPath) => {
    if(!once){
      once = true;
      reportPath = path.join(reportPath, file)
      const indexes = CONF.fReports.annual.indexes;
      var obj = xlsx.parse(reportPath); // parses a file
      //assuming only one sheet
      let data = obj[0].data
      let date = data[indexes.yearEndRow][indexes.yeardEndColStart];
      //building an object to eventuall parse:
      let parseObj = data.reduce((acc, cur, i) => {
          return Object.assign({ [cur[indexes.fin_indicatorName]] : cur[indexes.yeardEndColStart]}, acc);
      }, {});
      let test = new Cash_Cash_Equivalents_And_Short_Term_Investments(parseObj);
      console.log(date);
    }
  }
})();

//trying to do a test build... probably should just put this in a test class
let reportPath = path.normalize('./financial-statements');
const REPORT_TITLES = CONF.fReports
fs.readdirSync(reportPath).forEach( file => {
  if(file.indexOf(REPORT_TITLES.annual.title) > -1){
    parseOnce(file, reportPath)
  }
})

