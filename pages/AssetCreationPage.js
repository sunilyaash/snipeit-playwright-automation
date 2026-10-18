const { test } = require('@playwright/test');

class assetCreationPage {


    constructor(page) {
        //Main details 
        this.page = page;
        this.company = page.locator("#select2-company_id_select-container");
        this.companyOptions = page.locator("#select2-company_id_select-results");
        this.assetTag = page.locator("#asset_tag");
        this.serial = page.locator("#serial_1");
        this.model = page.locator("#select2-model_select_id-container");
        this.fillModel = page.locator(".select2-search__field");
        this.modelOptions = page.locator("#select2-model_select_id-results li");
        this.status = page.locator("#select2-status_select_id-container");
        this.fillStatus = page.locator(".select2-search__field");
        this.statusOptions = page.locator("#select2-status_select_id-results");
        this.checkoutTo = page.locator("//div[@class='btn-group']");
        this.user = page.locator("#select2-assigned_user_select-container");
        this.userOptions = page.locator("#select2-assigned_user_select-results li");
        this.notes = "#notes";
        this.location = page.locator("#select2-location_id_location_select-container");
        this.locationOptions = page.locator(".select2-results__options li");
        this.defaultLocation = page.locator("#select2-rtd_location_id_location_select-container");
        this.defaultLocationOptions = page.locator(".select2-results__options li");
        this.uploadImage = "//input[@id='image']";
        //custom fields
        this.customFieldTitle = page.locator("(//legend[@class='callout callout-legend'])[1]");
        this.customFields = page.locator('.col-md-12.col-sm-12').first();
        this.sampleDateTime = page.getByRole('textbox', { name: 'Sample Datetime' });
        this.ethernetMac = page.getByLabel('Ethernet MAC');
        this.bluetoothMac = page.getByLabel('Bluetooth MAC');
        this.storageCapacity = page.getByLabel('Storage Capacity');
        this.lastCheckIn = page.getByLabel('Last Check-in');
        this.osVersion = page.getByLabel('OS Version');
        this.operatingSystem = page.getByLabel('Operating System');
        this.ipAddress = page.getByLabel('IP Address');
        this.ram = page.getByLabel('RAM');
        this.sampleDate = page.locator("#_snipeit_sample_date_10");
        this.notes = page.getByLabel('Notes');
        this.testRadio = page.locator("(//input[@name='_snipeit_test_radio_8'])");
        this.testCheckbox = page.locator("(//input[@name='_snipeit_test_checkbox_7[]'])");
        this.testEncrypted = page.getByLabel('Test Encrypted');
        this.macAddress = page.getByLabel('MAC Address');
        this.cpu = page.getByLabel('CPU');
        //Optional information 
        this.optionalInfoTitle = page.locator("#optional_info");
        this.optionalFields = page.locator("fieldset[name='optional-details']");
        this.assetName = page.locator("#name");
        this.warranty = page.locator("#warranty_months");
        this.expectedCheckin = page.locator("#expected_checkin");
        this.nextAuditDate = page.locator("#next_audit_date");
        this.byod = page.getByLabel('BYOD');
        //Order Information 
        this.orderInfoTitle = page.locator("#order_info");
        this.orderFields = page.locator("fieldset[name='order-info']");
        this.orderNumber = page.locator("#order_number");
        this.purchaseDate = page.locator("#purchase_date");
        this.eolDate = page.locator("#asset_eol_date");
        this.supplier = page.locator("#select2-supplier_id_select-container");
        this.supplierOptions = page.locator("li.select2-results__option")
        this.purchaseCost = page.locator("#purchase_cost");
        //Save button
        this.saveBtn = page.locator("#submit_button");


    }


    async assetMainDetails(assetValue,serialValue,modelType) {

        await this.company.click();
        await this.companyOptions.filter({ hasText: 'b' }).first().click({ timeout: 4000 });
        await this.assetTag.fill(assetValue);
        await this.serial.fill(serialValue);
        await this.model.click({ timeout: 3000 });
        await this.fillModel.fill(modelType);
        await this.modelOptions.filter({ hasText: 'Desktops - Apple iMac Pro' }).first().click({ timeout: 3000 });
        await this.status.click({ timeout: 3000 });
        await this.fillStatus.fill("Ready to Deploy");
        await this.statusOptions.filter({ hasText: 'Ready to Deploy' }).first().click({ timeout: 3000 });
        await this.user.click({ timeout: 3000 });
        await this.userOptions.first().click({ timeout: 3000 });
        await this.location.click({ timeout: 3000 });
        await this.locationOptions.first().click();
        await this.defaultLocation.click({ timeout: 3000 });
        await this.defaultLocationOptions.last().click({ timeout: 3000 });


    }

    async assetCustomDetails(ethernetMAC,storageCap,osVer,opSystem,ip,ramCap,macAdd) {

        await this.customFields.scrollIntoViewIfNeeded();
        await this.sampleDateTime.fill('2026-10-16 02:15:15');
        await this.sampleDateTime.press('Tab');
        await this.ethernetMac.fill(ethernetMAC);
        await this.bluetoothMac.fill("00:1A:2B:3C:4D:5F");
        await this.storageCapacity.fill(storageCap);
        await this.lastCheckIn.fill('2026-10-16 02:15:15');
        await this.lastCheckIn.press('Tab');
        await this.osVersion.fill(osVer);
        await this.operatingSystem.fill(opSystem);
        await this.ipAddress.fill(ip);
        await this.ram.fill(ramCap);
        await this.sampleDate.fill('2026-10-16');
        await this.lastCheckIn.press('Tab');
        await this.testRadio.first().check();
        await this.testCheckbox.first().check();
        await this.testEncrypted.fill("Encrypted Data");
        await this.macAddress.fill(macAdd);
        await this.cpu.fill('2.4 GHz');


    }

    async assetOptionalDetails() {

        await this.optionalFields.scrollIntoViewIfNeeded();
        await this.optionalInfoTitle.click({timeout:3000});
        await this.assetName.fill('MAC');
        await this.warranty.fill('24');
        await this.expectedCheckin.fill('2026-10-16 15:09:46');
        await this.expectedCheckin.press('Tab');
        await this.nextAuditDate.fill('2026-10-16');
        await this.nextAuditDate.press('Tab');
        await this.byod.check();


    }


    async assetOrderDetails() {

    await this.orderFields.scrollIntoViewIfNeeded();    
    await this.orderInfoTitle.click({timeout:3000});
    await this.orderNumber.fill('12345');
    await this.purchaseDate.fill('2026-10-16');
    await this.eolDate.fill('2026-10-23');
    await this.supplier.click({timeout:3000});
    await this.supplierOptions.first().click();
    await this.purchaseCost.fill('2500');
    await this.saveBtn.click();


    }


}
module.exports = assetCreationPage;