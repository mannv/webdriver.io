const assert = require('assert')
const _ = require('lodash')
const loginPage = require('../clpages/login.page')
describe('Test Login Page Check Title', () => {
    before(() => {
        console.log('before')
    })

    it('check title login page is WEB-Transer', async () => {
        // await browser.url('http://192.84.10.57/admin/login')
        // const title = await browser.getTitle()
        // await browser.saveScreenshot('./login.png')
        // console.log('title', title)
        // assert.strictEqual(title, 'WEB-Transer')

        // await loginPage.open()
        // await loginPage.fillLoginForm('admin', '12345678')
        // await loginPage.login()
        //
        // await expect((await $('.page-title-heading'))).toHaveTextContaining('トップページ')
        //
        // const perPage = await $('#__BVID__50')
        //
        // const vl = await perPage.getValue()
        // console.log('PerPage: ' + vl)
        //
        // await perPage.selectByAttribute('value', '10');
        //
        //
        // await (await $('#start_contract > div.d-flex.justify-content-center.align-items-center.my-2 > ul > li:nth-child(3) > button')).click()
        //
        // browser.pause(2000)
        //
        // await browser.saveScreenshot('./login.png')

        await browser.url('https://laravel.com/')



        // const nav = await $('body > div.max-w-screen-xl.px-8.mx-auto > ul > li:nth-child(1) > a > div.ml-4.leading-5 > div')
        //
        // console.log('nav', await nav.getText())


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

        // assert.fail('Loi roi')


        // _.each(services, async (item) => {
        //
        //     // const sv = await item.$('.text-2xl')
        //     console.log('sv', await item.getText())
        //     // const txt = await sv.getText()
        //     // const txt = sv
        //     // console.log('sv', txt)
        //     console.log('-------------------------------------------------------')
        //     // console.log('Service %d: %s', index, txt)
        //     // console.log('-------------------------------------------------------')
        // })

    })
})