var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var sd = require('silly-datetime');

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let By = webdriver.By
let assert = require('assert')


const login = function (driver, username, password) {
  driver.findElement(By.xpath('//*[@id="login-box"]/form/div[1]/div/div/input')).sendKeys(username).then(
    () => {
      driver.findElement(By.id('ps')).sendKeys(password).then(
        () => {
          driver.findElement(By.xpath('//*[@id="login-box"]/div[1]/button')).click()
        }
      )
    }
  )
}

module.exports = login