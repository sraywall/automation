const {Builder,Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const {addMovie} = require('./addMovie')
const {deleteMovie} = require('./deleteMovie')
const {confirmationMessage} = require('./confirmationMessage')
const {crossedOut} = require('./crossedOut')
beforeAll(async ()=>{
    await driver.get('http://127.0.0.1:5502/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

test('Add a movie', async()=>{
    await addMovie(driver)

    await driver.sleep(3000)
})

test('Crossed out check',async()=>{
    await crossedOut(driver)
    await driver.sleep(3000)
})

test('Delete a movie',async()=>{
    await deleteMovie(driver)

    await driver.sleep(3000)
})

test('Confirmation message shows',async()=>{
    await confirmationMessage(driver)
    await driver.sleep(3000)
})

