const { test } = require('@playwright/test');


class assetsPage {

    constructor(page) {

        this.page = page;
        this.assetBody = page.locator(".box-body");
        this.successMessage = page.locator("#success-notification .alert-success");
        this.assetSearch = page.getByRole('searchbox', { name: 'Search' });


    }

    async assetValidation(assetValue) {

        await this.assetBody.waitFor();
        await this.assetSearch.pressSequentially(assetValue);

    }

    assetRow(actualAssetValue) {
        return this.page.getByRole('row').filter({ hasText: actualAssetValue });
    }



}

module.exports = assetsPage;