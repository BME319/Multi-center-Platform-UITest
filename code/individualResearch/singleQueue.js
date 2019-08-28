var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var sd = require('silly-datetime');
var until = webdriver.until

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let By = webdriver.By
let assert = require('assert')



const singleQueue = function (driver, queueName, queueDescription, clusterName, conceptName, variableName, modelName) {
  // 1.新建研究
  driver.wait(until.elementLocated(By.id('newresearch'))).then(
    () => {
      driver.findElement(By.id('newresearch')).click()
    }
  )
  // 
  driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form'))).then(
    () => {
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form/div[1]/div/div[1]/input')).sendKeys(researchName)
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form/div[2]/div/div[1]/input')).sendKeys(researchTarget)
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form/div[3]/div/div[1]/input')).sendKeys(researchDescripton)
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form/div[4]/div/div[1]/input')).sendKeys(expectedResult)
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form/div[5]/div/div[1]/input')).sendKeys(projectSupport)
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div/form/div[6]/div/button[1]/span')).click().then(
        () => {
          driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div[3]/button[2]/span'))).click()
        }
      )
    }
  )

  // driver.wait(until.elementLocated(By.xpath('//*[@id="researchlist"]/li[2]/div'))).click()

  // 2.队列生成
  driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/form/div[1]/button/span/span'))).then(
    () => {
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[1]/div/div[1]/form/div[1]/div/div[1]/input')).sendKeys(queueName)
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[1]/div/div[1]/form/div[2]/div/div/textarea')).sendKeys(queueDescription)
      // 主要条件：用药记录=>用药记录合集=>用药记录合集具体=>用药天数具体
      // 用药记录
      // driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/form/div[1]')).click()

      // ---------------------------请选择一级条件 框 经常定位不到元素-解决？--------------------------

      driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/form/div[1]/button/span/span')))
      // driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/form/div[1]/button/span/span')).click()//请选择一级条件
      driver.wait(until.elementLocated(By.xpath('/html/body/ul/li[2]'))).then(
        () => {
          driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/ul/li[2]')))
          // 用药记录合集
          driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/form/div[2]/div[1]/input'))).click()
          driver.wait(until.elementLocated(By.xpath('/html/body/div[4]/div[1]/div[1]/ul/li[1]'))).then(
            () => {
              driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[4]/div[1]/div[1]/ul/li[1]')))

              // 用药记录合集具体

              // ---------------------------点击用药记录合集框 卡住不动 不报错 无法手动点击 分步执行失败---------------------------

              driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/div[2]/div/form/div/div/div/div/input'))).then(
                () => {
                  // driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[1]/div[2]/div[2]/div/form/div/div/div/div/input')))//点击用药记录合集框
                  // console.log('选择开始')
                  // driver.wait(until.elementLocated(By.xpath('/html/body/div[5]/div/div[2]/div/div[2]/div/div/div[3]/table/tbody/tr[1]/td[4]/div/button[1]/span'))).then(
                  // () => {
                  // driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[5]/div/div[2]/div/div[2]/div/div/div[3]/table/tbody/tr[1]/td[4]/div/button[1]/span')))//点击选择
                  // console.log('选择完毕')
                  driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[3]/div[1]/button/span'))).then(
                    () => {
                      driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[3]/div[1]/button/span'))) //生成
                      driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[3]/div[3]/button/span'))).then(
                        () => {
                          driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[2]/div/div/div[3]/div[3]/button/span')))
                          driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div[3]/button[2]/span'))).click()
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  )

  // 3.变量生成
  // driver.wait(until.elementLocated(By.xpath('//*[@id="researchlist"]/li[2]/div'))).click()
  driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[1]/div[2]/button[1]/span'))).then(
    () => {
      driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[1]/div[2]/button[1]/span'))) //新增变量
      driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[1]/div/div/div/div/input'))).then(
        () => {
          driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[1]/div/div/div/div/input')).sendKeys(variableName).then(() => { //变量名称
            driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[2]/div[1]/div/div/div/div/input')).click()//变量类别
            driver.wait(until.elementLocated(By.xpath('/html/body/div[5]/div[1]/div[1]/ul/li[1]/span'))).then(
              () => {
                driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[5]/div[1]/div[1]/ul/li[1]/span'))).then(() => {
                  driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[3]/div[1]/div/div/div/div[1]/input'))) //出现阶段
                  driver.wait(until.elementLocated(By.xpath('/html/body/div[6]/div[1]/div[1]/ul/li[1]/span'))).then(
                    () => {
                      driver.findElement(By.xpath('/html/body/div[6]/div[1]/div[1]/ul/li[1]/span')).click().then(() => {
                        driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[3]/div[2]/div/div/div/div[1]/input')).click()//变量类型
                        driver.wait(until.elementLocated(By.xpath('/html/body/div[7]/div[1]/div[1]/ul/li[2]/span'))).then(
                          () => {
                            driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[7]/div[1]/div[1]/ul/li[2]/span'))).then(() => {
                              driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[2]/div[2]/div/div/div/input')).click()//概念集
                              driver.wait(until.elementLocated(By.xpath('/html/body/div[8]/div/div[2]/div/div[2]/div/div/div[3]/table/tbody/tr/td[4]/div/button[1]/span'))).then(
                                () => {
                                  driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[8]/div/div[2]/div/div[2]/div/div/div[3]/table/tbody/tr[1]/td[4]/div/button[1]/span'))).then(() => {
                                    driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/form/div[5]/div[1]/div/div/div/div[1]/input')).click()//属性
                                    driver.wait(until.elementLocated(By.xpath('/html/body/div[8]/div[1]/div[1]/ul/li[1]/span'))).then(
                                      () => {
                                        driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[8]/div[1]/div[1]/ul/li[1]/span')))

                                        driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div[2]/div/div/div/label/span[1]/span'))).then(
                                          () => {
                                            driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/div/div/label/span[1]/span')).click()//同时新增到变量库
                                            driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div[3]/span/button[2]/span'))).then(
                                              () => {
                                                driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[3]/div/div[3]/span/button[2]/span'))).then(() => { //确定

                                                  // ---------------------------弹窗新建变量成功 点击确定 卡住不动 不报错 需要手动点击-----解决？----------------------
                                                  // Failed to load resource: the server responded with a status of 404 (Not Found)
                                                  // 为了后续能够进行，不把之后的操作放在这个then里/html/body/div[7]/div/div[3]/button/span

                                                  driver.wait(until.elementLocated(By.xpath('/html/body/div[7]/div/div[3]/button/span'))).then(() => { //弹窗确定/html/body/div[7]/div/div[3]/button/span
                                                    driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[7]/div/div[3]/button/span'))).then(() => {
                                                      driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[3]/div[1]/div/button[1]/span'))).then(
                                                        () => {
                                                          driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[3]/div[1]/div/button[1]/span'))).then(() => { //变量生成
                                                            driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[3]/div[1]/div/button[2]/span'))).then(() => {

                                                              // ---------------------------下一步 卡住不动不执行 不报错 需要手动点击 分步执行成功---------------------------

                                                              driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[2]/div[3]/div[1]/div/button[2]/span'))) //下一步
                                                            })

                                                          })
                                                        }
                                                      )
                                                    })
                                                  })

                                                  // })

                                                })

                                              }
                                            )
                                          }
                                        )
                                      }
                                    )
                                  })
                                }
                              )
                            })
                          }
                        )
                      })
                    }
                  )
                })
              }
            )
          })





        }
      )

    }
  )

  // 4.模型选择
  driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[3]/div/div/button/span'))).then(
    () => {
      driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[3]/div/div/button/span')).click()//新建模型
      driver.wait(until.elementLocated(By.xpath('//*[@id="pane-a"]/div/div/div[1]/div[1]/div[1]/fieldset/div/div[3]/table/tbody/tr[3]/td[1]/div/label/span/span'))).then(
        () => {
          driver.findElement(By.xpath('//*[@id="pane-a"]/div/form/div/div/div[1]/input')).sendKeys(modelName)
          driver.findElement(By.xpath('//*[@id="pane-a"]/div/div/div[1]/div[1]/div[1]/fieldset/div/div[3]/table/tbody/tr[3]/td[1]/div/label/span/span')).click().then( //选择变量
            () => {
              driver.findElement(By.xpath('//*[@id="pane-a"]/div/div/div[1]/div[1]/div[2]/div[1]/button')).click().then( //选择变量右移
                () => {
                  driver.findElement(By.xpath('//*[@id="pane-a"]/div/div/div[2]/div[1]/button/span')).click().then( //确定
                    () => {
                      driver.wait(until.elementLocated(By.css('body > div.el-message-box__wrapper > div > div.el-message-box__btns > button > span'))).then(
                        () => {

                          // ---------------------------弹窗确定 卡住不动不执行 终止进行 分步执行成功---------------------------

                          driver.executeScript("arguments[0].click();", driver.findElement(By.css('body > div.el-message-box__wrapper > div > div.el-message-box__btns > button > span'))).then(() => { //弹窗确定/html/body/div[2]/div/div[3]/button/span
                            driver.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[5]/div/div[3]/div[4]/div[3]/table/tbody/tr/td[1]/div/label/span/span'))).then(() => {
                              driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[5]/div/div[3]/div[4]/div[3]/table/tbody/tr/td[1]/div/label/span/span'))).click().then( //选择变量
                                () => {
                                  driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[5]/div/div[3]/div[3]/button/span'))).click().then( //批量编辑
                                    () => {
                                      driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[6]/div/div[2]/div/div/div[2]/label[2]/span[1]/span'))).click() //是否插值
                                      driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[6]/div/div[2]/div/div/div[4]/div[2]/label[1]/span[1]/span'))).click().then( //是否归一化
                                        () => {
                                          driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[6]/div/div[2]/div/div/div[4]/div[3]/div/div[1]/input'))).click().then(
                                            () => {
                                              driver.executeScript("arguments[0].click();", driver.findElement(By.xpath('/html/body/div[4]/div[1]/div[1]/ul/li[1]/span'))).then(
                                                () => {
                                                  driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[6]/div/div[3]/div/button[1]/span')).click().then( //确认
                                                    () => {
                                                      driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[5]/div/div[3]/div[6]/button/span'))).click().then( //开始预处理
                                                        () => {
                                                          driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div[3]/section/div/div[7]/div/button/span'))).click().then( //开始分析
                                                            () => {
                                                              driver.wait(until.elementLocated(By.xpath('//*[@id="iffinishAnalysis"]/span'))).click().then( //生成研究方案
                                                                () => {
                                                                  driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div/div[3]/button[2]/span'))).click() //弹窗确定
                                                                }
                                                              )
                                                            }
                                                          )
                                                        }
                                                      )
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          )
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            })

                          })

                        }
                      )
                    }
                  )
                }
              )
            }
          )

        }
      )
    }
  )
}

module.exports = singleQueue