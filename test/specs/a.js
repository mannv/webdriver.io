const { remote } = require('webdriverio');

// var client = null

describe('Test Login Page Check Title', () => {
  before(async () => {
    await browser.url('https://webdriver.io')
    await browser.setCookies({
      name: 'test1',
      value: 'one',
    })
  })

  it('check title login page is WEB-Transer', async () => {

    // const testCookie = await client.getAllCookies()
    // console.log(testCookie); // outputs: [{ name: 'test', value: '123' }]



    // console.log('--------------------it', browser.capabilities)
    // const client = await remote({
    //   capabilities: {
    //     browserName: 'chrome',
    //     capabilities: {
    //       'goog:chromeOptions': {
    //         args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1366,720"]
    //       }
    //     }
    //   }
    // })


    // await browser.setCookies([
    //   {name: 'test2', value: 'two'},
    //   {name: 'test3', value: 'three'}
    // ])

    const cookies = await browser.getCookies()
    console.log('cookies', cookies);

    const apiLink = await browser.$('=API')
    await apiLink.click()

    // await client.saveScreenshot('./screenshot.png')
  })
})