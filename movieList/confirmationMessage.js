const {By} = require('selenium-webdriver')

module.exports = {
    confirmationMessage: async (driver) =>{
        const message = await driver.findElement(By.css('#message'))

        const displayed = message.isDisplayed()

        expect(displayed).toBeTruthy()
    }
}