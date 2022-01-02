const puppeteer = require('puppeteer');
const timeout = 150000;
var envProperty = require('../testdata/envProp.json');
const fs = require('fs');
const path = require('path');
const reports = path.join('.', 'reports');

describe('Get API Response', () => {
    let page;
    //page= global.__BROWSER__.page;
      beforeAll(async () => {

        // get existing tab/page (first item in the array)
        [page] = await global.__BROWSER__.pages();
        await page.goto(envProperty.url);
    }); 
    it('get API header with b/ss string in URL', async function () {

        const request = await page.waitForResponse(response => response.url().includes('b/ss'));
        var info = JSON.stringify(await request.headers());
        await fs.writeFileSync(path.join(reports, 'jsonReport.txt'), info);

    }, timeout);
});