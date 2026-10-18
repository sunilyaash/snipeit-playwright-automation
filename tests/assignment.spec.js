const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const AssertCreationPage = require('../pages/AssetCreationPage');
const AssetsPage = require('../pages/AssetsPage');
const AssetDetailsPage = require('../pages/AssetDetailsPage');
const appUrl = 'https://demo.snipeitapp.com/login';
const assetValue = `${Date.now()}`;
const serialValue = `${Date.now()}`.slice(-5);
const modelType = 'Desktops';
const ethernetMAC = '00:1A:2B:3C:4D:5E';
const storageCap = '512GB';
const osVer = '14.0';
const opSystem = 'macOS';
const ip = '192.168.1.101';
const ramCap = '16GB';
const macAdd = '00:7A:9B:4C:2D:9E';

test.beforeEach('Login To Application', async ({ page }) => {

    await page.goto(appUrl);
    const loginPage = new LoginPage(page);
    await loginPage.login('admin', 'password');

})

test('Create And Verify Asset Details', async ({ page }) => {

    //Navigate to Create New Asset from Dashboard Page
    const dashboardPage = new DashboardPage(page);
    await expect(dashboardPage.dashboard).toBeVisible();
    await dashboardPage.createNewAsset();
    await page.waitForTimeout(3000);

    //Asset creation 
    const assetCreationPage = new AssertCreationPage(page);
    await assetCreationPage.assetMainDetails(assetValue, serialValue, modelType);

    //custom fields
    await assetCreationPage.assetCustomDetails(ethernetMAC, storageCap, osVer, opSystem, ip, ramCap, macAdd);
    await expect(assetCreationPage.customFieldTitle).toBeVisible();

    //Optional fields 
    await expect(assetCreationPage.optionalInfoTitle).toBeVisible();
    await assetCreationPage.assetOptionalDetails();
    await expect(assetCreationPage.byod).toBeChecked();

    //Order fields
    await expect(assetCreationPage.orderInfoTitle).toBeVisible();
    await assetCreationPage.assetOrderDetails();
    await page.waitForTimeout(4000);

    //Asset fields
    const assetsPage = new AssetsPage(page);
    await expect(assetsPage.successMessage).toContainText('Asset with tag', { timeout: 5000 });
    const message = await assetsPage.successMessage.innerText();
    console.log(message); // Printing the success message
    await assetsPage.assetValidation(assetValue);

    //Verify created asset is displayed on the asset list
    const row = assetsPage.assetRow(assetValue);
    await expect(row).toHaveCount(1);
    await expect(row).toContainText(assetValue);
    await expect(row).toContainText(serialValue);
    await row.getByRole('link', { name: assetValue }).click();
    await page.waitForTimeout(4000);

    //Wait for the details tab
    const assetDetailsPage = new AssetDetailsPage(page);
    await assetDetailsPage.assetDetailsValidation();
    // Verify details in asset details page
    await expect(assetDetailsPage.fieldValues('Asset Tag')).toContainText(assetValue);
    await expect(assetDetailsPage.fieldValues('Ethernet MAC')).toContainText(ethernetMAC);
    await expect(assetDetailsPage.fieldValues('Storage Capacity')).toContainText(storageCap);
    await expect(assetDetailsPage.fieldValues('OS Version')).toContainText(osVer);
    await expect(assetDetailsPage.fieldValues('Operating System')).toContainText(opSystem);
    await expect(assetDetailsPage.fieldValues('IP Address')).toContainText(ip);
    await expect(assetDetailsPage.fieldValues('RAM')).toContainText(ramCap);
    await expect(assetDetailsPage.fieldValues('MAC Address')).toContainText(macAdd);
    //Navigate to history 
    await assetDetailsPage.openHistory();
    await expect(assetDetailsPage.historyTitle).toContainText('History');
    //Verify asset details in history
    const history = assetDetailsPage.historyRows();
    await expect(history).toHaveCount(2);
    await expect(history.filter({ hasText: 'create new' })).toContainText(assetValue);
    await expect(history.filter({ hasText: 'checkout' })).toContainText(assetValue);
    await expect(history.filter({ hasText: 'checkout' })).toContainText('Checked out on asset creation');


});


test.afterEach('Logout From Application', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.logout();
    await expect(page).toHaveURL(appUrl);


})