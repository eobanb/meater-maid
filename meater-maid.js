// meter maid 0.1

module.paths.push('/usr/local/lib/node_modules'); // needed on macOS; your node_modules path may differ

const puppeteer = require('puppeteer-core'); // optionally change to 'puppeteer' instead of puppeteer-core

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
  });
  const page = await browser.newPage();
  await page.goto('https://cooks.cloud.meater.com/cook/9b9b7eb0-bd79-4c29-a8f4-a218b8122371'); // set this to your own URL
  await page.waitForSelector('.internal-value'); // wait for page javascript to finish running
  
  while(1) { // start loop
  	const element = await page.$(".target-value"); // get the element from the DOM
  	const tempvalue = await page.evaluate(element => element.textContent, element); // get the element text
  	console.log(tempvalue); // output temp value to console
  	await page.mouse.click(0, 0, {delay: 1000}); // wait 1 second
  } // end loop
})();
