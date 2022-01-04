const puppeteer = require('puppeteer');
const apiStep = require('../pages/apiSteps.js');

//Test Data
var envProperty = require('../testdata/envProp.json');
describe('Get API Response', () => {
    let page;
    const timeout = 150000;
    beforeAll(async () => {

        // get existing tab/page (first item in the array)
        [page] = await global.__BROWSER__.pages();
        await page.goto(envProperty.url);
    });
    it('get API header with b/ss string in URL', async function () {
        await apiStep.abc(page);
    }, timeout);
});