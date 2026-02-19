import { expect } from "@playwright/test";
export class LicensesPage {
    constructor(page) {
        this.page = page;
        this.addNewLicenseButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.addLicenseInputField = page.locator('(//div[@class="oxd-form-row"])/div/div[2]/input');
        this.saveLicenseButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');

        this.successToastMessage = page.locator('//div[@class="oxd-toast-content oxd-toast-content--success"]/p[2]');

        this.deleteConfirmButton = page.locator('(//div[@class="orangehrm-modal-footer"])/button[2]');
        this.deleteToastSuccessMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');

    }

    async addNewLicense(licenseName) {
        await this.page.waitForTimeout(4000);
        await this.addNewLicenseButton.click();
        await this.addLicenseInputField.fill(licenseName);
        await this.page.waitForTimeout(2000);
        await this.saveLicenseButton.click();

        await expect(this.successToastMessage).toHaveText('Successfully Saved');
    }


    async searchAddedLicense(licenseName) {
        await this.page.waitForTimeout(4000);
        const licenceCell = await this.page.locator('//div[@class="oxd-table-card"]/div/div/div', {
            hasText: licenseName
        })
        await expect(licenceCell).toHaveText(licenseName);
        console.log(licenceCell);
    }


    async deleteAddedLicense(licenseName){
        await this.page.waitForTimeout(4000);
        const licenseCell = await this.page.locator('.oxd-table-card', {
            hasText: licenseName
        })

        const licenseNameFromCell = await licenseCell.textContent();

        if(licenseNameFromCell==licenseName){
            await licenseCell.locator('button').first().click();

            await this.page.waitForTimeout(2000);
            await this.deleteConfirmButton.click();
            await expect(this.deleteToastSuccessMessage).toHaveText('Successfully Deleted');

        }

    }
}