const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

let CONF;
try {
  let fileContents = fs.readFileSync(path.join(__dirname,'scraping_conf.yaml'), 'utf8');
  CONF = yaml.safeLoad(fileContents);
} catch (e) {
  console.error(e);
}

/**
 * @param page { import("puppeteer").Page }
 * @param {String} symbol Ticker symbol
 * @param {RequestInit=} init
 */
exports.tickerFinExports = async (page, symbol) => {
  //grabbing financials
  const tickerCONF = CONF.ticker;
  const urlToGoto = tickerCONF.URLbase + symbol;
  await page.goto(urlToGoto, {waitUntil: 'load'});
  
  //Confirms page navigation worked
  if(page.url() != urlToGoto){
    throw "Couldn't find symbol:" + symbol + " at " + urlToGoto;
  }
  //sets download path
  const downloadPath = path.normalize(tickerCONF.downloadPath);
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: downloadPath});
  
  //set selectors
  const selectors = [
    tickerCONF.incomeSelector,
    tickerCONF.balSheetSelector,
    tickerCONF.cashflSelector
  ];

  //find the export button
  const exportSelector = tickerCONF.exportSelector;
  //seems to load after some network activity
  let exportHandle = null;
  do{
    exportHandle = await page.$(exportSelector);
  } while(exportHandle == null);
  //should catch this...

  
  /** no validation or filename confirmation occuring,
   *  click is not creating a network request
   * TODO: figure out how to capture filename must just be
   * saving a resource already loaded.
   */
  const promises = selectors.map( async (selector) => {
    let selectorHandle = await page.$(selector)
    return await Promise.all([
      page.evaluate(body => body.click(), selectorHandle),
      page.evaluate(body => body.click(), exportHandle),
      page.waitFor(3000)
    ]).catch(err =>{
      console.log("Error at Symbol:", symbol);
      console.log("Navigating to:", urlToGoto);
      console.error(err);
      throw "Nothing downloaded";
    });
  });
  await Promise.all(promises);
  console.log("3 promises resolved for ", symbol);
}

/**
 * @param page { import("puppeteer").Page }
 * @param {RequestInfo} input
 * @param {RequestInit=} init
 */
exports.seclectSectors = async (page) => {

  const migreportForm = CONF.migreport.form;
  await page.goto(migreportForm.URL, {waitUntil: 'load'});
  
  //find the form
  const form = await page.$(migreportForm.main);

  await page.select(migreportForm.select, migreportForm.value);
  
  //submit the form
  await form.evaluate(form => form.submit());
  
  // Wait for search results page to load
  await page.waitForNavigation({waitUntil: 'load'});

};

/**
 * @param page { import("puppeteer").Page }
 * @returns {String} download path of report
 * @throws Error if no file is downloaded
 */
exports.downloadMigReport = async (page) => {
  migreportDownload = CONF.migreport.download;
  downloadPath = path.normalize(migreportDownload.path);
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: downloadPath});
  const form = await page.$(migreportDownload.select);
  
  //attaches a listener for file name - should remove it afterwards
  const [filename] = await Promise.all([
    getFileNamePromise(page),
    form.evaluate(form => form.submit()),
    page.waitFor(3000)
  ]).catch(err =>{
    console.error(err);
    throw "Nothing downloaded";
  });

  //should downlod the file to the path specified - windows specific
  return path.join(downloadPath, filename);
};

/**
 * @param page { import("puppeteer").Page }
 */
function getFileNamePromise(page) {
  return new Promise (resolve => {
    page.on('response', function getFileNameFromRequest(response) {
      //check for "Content-Disposition" ?
      const disposition = response.headers()['content-disposition'];
    
      if (disposition && disposition.indexOf('attachment') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) { 
          resolve(matches[1].replace(/['"]/g, ''));
          page.removeListener("response", getFileNameFromRequest);
        }
      }
    });
  });
}

/**
 * Delays a promise by an amount - need this to be able to attach an event to listen for a response
 * when trying to confirm if a download is being down as sometimes the download is happening before event is
 * registered... doesn't seem to work?
 * @param {Promise} myPromise : promise to be delayed
 * @param {integer} myDelay : amount to be delayed default is 500ms
 * @returns {Promise} : once setTimeout has been completed returns the promise
 */
function delayMyPromise(myPromise, myDelay = 10000) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      return resolve(myPromise);
    }, myDelay);
  });
}