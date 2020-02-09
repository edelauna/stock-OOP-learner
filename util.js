/**
 * TODO: remove file - downloadBlob is helpful as a reference
 */

/**
 * @param page { import("puppeteer").Page }
 * @param {RequestInfo} input
 * @param {RequestInit=} init
 */
exports.downloadBlob = async (page, input, init) => {
  const data = await page.evaluate(async (input, init) => {
    const resp = await window.fetch(input, init);

    if (!resp.ok)
      throw new Error(`Server responded with ${resp.status} ${resp.statusText}`);

    const data = await resp.blob();
    const reader = new FileReader();
    return new Promise(resolve => {
      reader.addEventListener('loadend', () => resolve({
        url: reader.result,
        mime: resp.headers.get('Content-Type')
      }));
      reader.readAsDataURL(data);
    });
  }, input, init);
  return { buffer: Buffer.from(data.url.split(',')[1], 'base64'), mime: data.mime };
};

/**
 * @param page { import("puppeteer").Page }
 * @returns a text value of the number of shares based on a selector specified directly in this function
 */
exports.returnTotalShares = async (page, input) => {

  await page.goto(input, {waitUntil: 'load'});
  
  //find the shares - this could probably change
  const shareSelector ='#contentWrapper > div > div > div > div.tmx-panel.detailed-quote > div.tmx-panel-body > div > div:nth-child(4) > div > strong';
  const shareHandle = await page.$(shareSelector);
  const result = await page.evaluate(body => body.innerText, shareHandle);
  await shareHandle.dispose();
  return result;
};

/**
 * @param page { import("puppeteer").Page }
 */
exports.returnIncomeStatement = async (page, input) => {

  

};
