const Page = require('./page')

class Login extends Page {

    get userIdInput() {
        return $('#email')
    }

    get userPasswordInput() {
        return $('#exampleInput2')
    }



    open() {
        super.open('login')
    }

    async fillLoginForm(userId, password) {
        await (await this.userIdInput).setValue(userId)
        await (await this.userPasswordInput).setValue(password)
    }

    async login() {
        await (await $('button[type="submit"]')).click()
    }
}


module.exports = new Login()