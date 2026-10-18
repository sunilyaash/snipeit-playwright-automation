class AssetDetailsPage {

    constructor(page) {
        this.page = page;
        this.detailsSection = page.locator('#details');
        this.historyTab = page.locator("a[href='#history']");
        this.historyTitle = page.locator("#history-title");
        this.historyContent = page.locator("#history");
    }

    // Wait until the details tab is on the page
    async assetDetailsValidation() {
        await this.detailsSection.waitFor();
    }

    // Returns the value (<dd>) shown next to the given label (<dt>) in the details tab
    fieldValues(label) {
        return this.detailsSection.locator(`dt:text-is("${label}") + dd`);

    }
    // Navigate to history section
    async openHistory(page) {
        await this.historyTab.click();
        await this.historyContent.waitFor();
        
    }
     
    // Returns all data rows in the History table (excludes the header row)

    historyRows()
    {
        return this.historyContent.locator('tbody tr');

    }

    // Returns all data rows in the History table (excludes the header row)






}


module.exports = AssetDetailsPage;