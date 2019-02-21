module.paths.push('/usr/local/lib/node_modules');

const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser/eb439886-ad8f-412b-ac26-a4a4495a5ccf'
  });
  const page = await browser.newPage();
  await page.goto('https://cooks.cloud.meater.com/cook/9b9b7eb0-bd79-4c29-a8f4-a218b8122371');
  await page.waitForSelector('.internal-value');
  
  while(1) {
  	const element = await page.$(".target-value");
  	const tempvalue = await page.evaluate(element => element.textContent, element);
  	console.log(tempvalue);
  	await page.mouse.click(0, 0, {delay: 1000});
  }
})();