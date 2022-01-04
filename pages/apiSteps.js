const fs = require('fs');
const path = require('path');

const puppeteer = require('puppeteer');
const reports = path.join('.', 'reports');

//Test Data
var apiResponse = require('../testdata/apiResponseTestData.json');


 var abc= async function getBSSrequests(page) {
    const request = await page.waitForResponse(response => response.url().includes('b/ss'));
    var info = JSON.stringify(await request.headers());
    await fs.writeFileSync(path.join(reports, 'jsonReport.txt'), info);
    expect(request._headers['content-type']).toBe(apiResponse.content_type);
}
module.exports={abc};