const assert = require('assert')
const _ = require('lodash')

describe('Test Login Page Check Title', () => {
    it('check title login page is WEB-Transer', async () => {

        await browser.url('https://laravel.com/')


        const product = await $("body > div.max-w-screen-xl.px-8.mx-auto > ul")
        const services = await product.$$('li')

        console.log('Length: ' + services.length)

        const findName = 'Socialite'
        let listServices = []

        for(i = 0; i < services.length; i++) {
            const name = await (await services[i].$('.text-2xl')).getText()
            const desc = await (await services[i].$('.text-gray-600')).getText()

            listServices.push({name, desc})

            console.log('-------------------------------------------------------')
            console.log('Service %d: %s : [%s]', i, name, desc)
            console.log('-------------------------------------------------------')
        }

        console.log('listServices', listServices)

        const result = _.find(listServices, item => item.name === findName)

        if (!result) {
            assert.fail(`${findName} not found`)
        } else {
            assert.strictEqual(result.name, findName)
        }
        await browser.saveScreenshot('./login.png')
    })
})