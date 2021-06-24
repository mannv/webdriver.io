module.exports = class Page {
    open(path) {
        browser.url(`http://192.84.10.57/admin/${path}`)
    }
}