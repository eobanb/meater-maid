# meater-maid
meater-maid takes the cloud web page of a Meater smart thermometer and outputs it in a machine-readable format.

## setup
meater-maid has been tested with:

* macOS Mojave
* node.js 11.10
* Google Chrome 72.0.3626.109
* puppeteer-core 1.12.2.

meater-maid is written to use puppeteer-core (to install, run `sudo npm -g install puppeteer-core` ). Alternatively, meater-maid can be modified to run with puppeteer (which bundles chromium).

## usage

Specify your Meater cloud URL on line 12:

` await page.goto('https://cooks.cloud.meater.com/cook/9b9b7eb0-bd79-4c29-a8f4-a218b8122371');`

Then, run meater-maid:

`node meater-maid.js`

The program should output the target temperature (`target-value`) every second. You can also change this to `internal-value` or `ambient-value` as needed.
