const puppeteer = require('puppeteer');

const utils = require('./util');
const scrape = require('./svcs/scraping');

const xlsx = require('node-xlsx');
const fs = require('fs');

async function main(){
  
  // init a browser and page for scraping
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  //grabs list of stocks - should set frequency to once a year
  await scrape.seclectSectors(page);
  const reportPath = await scrape.downloadMigReport(page);

  var obj = xlsx.parse(reportPath); // parses a file
  
  //Assuming only one sheet
  // Assuming first row is header - getting length of columns
  const data = obj[0].data;
  const columns = data[0];
  const indexOfTicker = columns.findIndex((x) =>{return x == "Ticker"});
  // want to get symbol to try and parse for stocks and financials
  
  //index of 1 since first row is header
  let i = 1;
  do {
    
    let symbol = data[i][indexOfTicker];
    await scrape.tickerFinExports(page, symbol)
    .catch( error =>{
      console.error(error)
    });
    i++;
  } while(i<= data.length);

  //parse the csv file for indicators

  await browser.close();

}
main().catch(e => {
  //somehow need to close the browser?
  console.log('Error');
  console.error(e);
});