import { expect } from "@playwright/test";
export class MembershipsPage {
    constructor(page){
        this.page = page;
        this.addMembershipsButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.memebershipInputField = page.locator('(//div[@class="oxd-form-row"])/div/div[2]/input');
        this.saveMembershipButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
    }


    async addNewMembership(membershipName){
        await this.addMembershipsButton.click();
        await this.memebershipInputField.fill(membershipName);
        await this.saveMembershipButton.click();
        await this.page.waitForTimeout(2000);
    }


    async searchAddedMembership(membershipName){
        await this.page.waitForTimeout(2000);
        const membershipRow = await this.page.locator('//div[@class="oxd-table-card"]',{
            hasText:membershipName
        })

        await expect(membershipRow).toHaveText(membershipName)

        await this.page.waitForTimeout(2000);
    }
}