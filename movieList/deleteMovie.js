const {By} = require('selenium-webdriver')

module.exports = {
    deleteMovie: async (driver)=>{
        // const movie = "Indiana Jones"
        await driver.findElement(By.css('#IndianaJones')).click()

        const movies = await driver.findElements(By.xpath('//li'))

        expect(movies).toHaveLength(0)
    }
}