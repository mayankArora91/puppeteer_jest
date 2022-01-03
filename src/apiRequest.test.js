const puppeteer = require('puppeteer');
const timeout = 150000;
const fs = require('fs');
const path = require('path');
const reports = path.join('.', 'reports');

//Test Data
var envProperty = require('../testdata/envProp.json');
var apiResponse = require('../testdata/apiResponseTestData.json');
describe('Get API Response', () => {
    let page;
      beforeAll(async () => {

        // get existing tab/page (first item in the array)
        [page] = await global.__BROWSER__.pages();
        await page.goto(envProperty.url);
    }); 
    it('get API header with b/ss string in URL', async function () {

        const request = await page.waitForResponse(response => response.url().includes('b/ss'));
        var info = JSON.stringify(await request.headers());
        await fs.writeFileSync(path.join(reports, 'jsonReport.txt'), info);
        expect(request._headers['content-type']).toBe(apiResponse.content_type);
    }, timeout);
});