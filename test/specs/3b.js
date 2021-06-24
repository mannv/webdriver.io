const assert = require('assert')
describe('Save cookie', () => {
  before(async () => {
    await browser.url('https://blackbestbuy.com/')
    await browser.setCookies({
      name: 'auth._token.local',
      value: 'Bear222er%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjYwZDRjMjZlMzRlYmU1LjMwMDY3MTcxIn0.eyJpc3MiOiJodHRwczpcL1wvYmxhY2tiZXN0YnV5LmNvbSIsImF1ZCI6Imh0dHBzOlwvXC9ibGFja2Jlc3RidXkuY29tIiwianRpIjoiNjBkNGMyNmUzNGViZTUuMzAwNjcxNzEiLCJpYXQiOjE2MjQ1NTYxNDIsIm5iZiI6MTYyNDU1NjE0MiwiZXhwIjoxNjI0NTU5NzQyLCJ1aWQiOjE0NywidHlwZV9hY2NvdW50IjowLCJ0eXBlX3VzZXIiOjIsImhhc19waW4iOnRydWV9.s0MT35jOc-IsRicuWzit5YGKUrCW-TDkDFzOE9jINlo',
    })
  })

  it('Test with cookie', async () => {
    await browser.url('https://blackbestbuy.com/user')

    const h1 = await $('#__layout > div > div.content-wrapper > div > div > form > div.box-header > h3')

    const h1Text = await h1.getText()
    assert.strictEqual(h1Text, 'Thông tin cá nhân')
  })
})