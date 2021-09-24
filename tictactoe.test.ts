import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test("Clicking a square adds an 'X' to the upper left square", async ()=>{
    let topLeft = await driver.findElement(By.id('cell-0'));
    await topLeft.click();
    let topLeftValue = await driver.findElement(By.id('cell-0')).getText()
    expect(topLeftValue).toEqual('X')
})

test("Clicking a square adds an 'X' to the upper right square", async () =>{
    let topRight = await driver.findElement(By.id('cell-2'))
    await topRight.click();
    let topRightValue = await driver.findElement(By.id('cell-2')).getText()
    expect(topRightValue).toEqual('X')
})

test("Clicking on a square adds an 'O' to the board", async ()=>{
    let topMiddleValue = await driver.findElement(By.id('cell-1')).getText()
    expect(topMiddleValue).toEqual('O')
})

