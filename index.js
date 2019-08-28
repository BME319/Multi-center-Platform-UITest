var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var sd = require('silly-datetime');

// 导入各个模块
var login = require('./code/login');
var singleQueue = require('./code/individualResearch/singleQueue')

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let By = webdriver.By
let assert = require('assert')

// 创建一个chrome浏览器
var driver = new webdriver.Builder().forBrowser('chrome').build()
driver.manage().window().maximize()
driver.get('http://localhost:8080/#/')
actions = driver.actions({ bridge: true })
var until = webdriver.until

// 所需参数
username = "18888888885"
password = "123456"
researchName = "新研究" + sd.format(new Date(), 'MM-DD HH:mm:ss')
researchTarget = "新目标"
researchDescripton = "新描述"
expectedResult = "预期结果~"
projectSupport = "项目支持~~"

queueName = "高血压"
queueDescription = "我是队列描述"
clusterName = "高血压集合"
conceptName = "高血压"

variableName = "高血压定量"

modelName = "高血压模型"

// 登录
login(driver, username, password)

// 个人研究
driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[1]/ul/li[2]/div'))).click()

// 单队列研究
driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/ul/li[1]'))).then(
  () => {
    driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[2]/ul/li[1]')))
  }
)

singleQueue(driver, queueName, queueDescription, clusterName, conceptName, variableName, modelName)