const { Builder, By } = require('selenium-webdriver')
require('chromedriver')

async function Test() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("http://localhost:3000/create");
    await driver.findElement(By.css("#name")).sendKeys("Lucas Melnik");
    await driver.findElement(By.css("#mail")).sendKeys("lucas@mail.com");
    await driver.findElement(By.css("#phone")).sendKeys("(45) 99999-0000");
}

Test();