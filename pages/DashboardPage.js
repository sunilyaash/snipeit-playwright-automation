const { test } = require('@playwright/test');

class dashboard {

    constructor(page) {

        this.page = page;
        this.dashboard = page.locator(".pagetitle");
        this.createNewbtn = page.locator("li a.dropdown-toggle").first();
        this.assetBtn = page.locator("a[href*='hardware/create']");
        this.userMenu = page.getByRole('navigation').getByRole('link',{name: 'Admin User'});
        this.logoutLnk = page.getByRole('link',{name:'Logout'});

    }

    async createNewAsset() {
        await this.createNewbtn.click();
        await this.assetBtn.click();

    }


    async logout() {
        await this.userMenu.click({timeout:3000});
        await this.logoutLnk.click();


    }

}


module.exports = dashboard;