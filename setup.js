const {mkdir, writeFile} = require('fs').promises;
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = path.join('.', 'jest_puppeteer_global_setup');
var envProperty = require('./testdata/envProp.json')

module.exports = async function () {
  const browser = await puppeteer.launch({ headless: false });
  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser;
  
/*   var [page] = await browser.pages();
  await page.goto(envProperty.url); */
  // use the file system to expose the wsEndpoint for TestEnvironments
  await mkdir(DIR, {recursive: true});
  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};