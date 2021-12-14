const {By} = require("selenium-webdriver")

module.exports = {
    crossedOut : async (driver) =>{
        await driver.findElement(By.xpath("//li/span")).click()
        const checked = await driver.findElements(By.css(".checked"))
        expect(checked).toHaveLength(1)

    }
}