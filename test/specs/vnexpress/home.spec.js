const assert = require('assert')
const _ = require('lodash')
describe('Trang chu', () => {
    it('kiem tra tieu de trang', async () => {
        await browser.url('/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'VnExpress - Báo tiếng Việt nhiều người xem nhất')
    })

    it('kiem tra tieu de bai viet noi bat',async () => {
        const link = await $('body > section.section.section_topstory > div > div > div > article > h3 > a')
        const title = await link.getText()
        console.log('title', title)

        assert.strictEqual('Hai', '2')

        assert.strictEqual(title, 'Thành phố Huế mở rộng từ 1/7')
    })
})