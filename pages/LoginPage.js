class loginpage {

    constructor(page) {

        this.page = page;
        this.username = "#username";
        this.password = "[placeholder*='Password']";
        this.loginButton = "#submit";

    }

    async login(username, password) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);

    }

}

module.exports = loginpage;
