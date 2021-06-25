const assert = require('assert')
const _ = require('lodash')
describe('Danh muc', () => {
    it('kiem tra tieu de trang', async () => {
        await browser.url('/kinh-doanh')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Tin kinh doanh: Thị trường, tài chính, kinh tế, doanh nghiệp - VnExpress Kinh Doanh')
    })

    it('kiem tra tieu de danh muc',async () => {
        const link = await $('body > section.section.top-header.top-header-folder > div > div > div.title-folder > h1 > a')
        const title = await link.getText()
        console.log('title', title)
        assert.strictEqual(title, 'Kinh doanh')
    })
})