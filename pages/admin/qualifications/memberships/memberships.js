import { expect } from "@playwright/test";
export class MembershipsPage {
    constructor(page){
        this.page = page;
        this.addMembershipsButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.memebershipInputField = page.locator('(//div[@class="oxd-form-row"])/div/div[2]/input');
        this.saveMembershipButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');

        this.deleteConfirmButton = page.locator('(//div[@class="orangehrm-modal-footer"])/button[2]');
        this.deleteSuccessToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]')
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
    async deleteMembership(membershipName){

        await this.page.waitForTimeout(2000);
        const membershipRow = await this.page.locator('//div[@class="oxd-table-card"]',{
            hasText:membershipName
        })

          const membershipRowName = await membershipRow.textContent();

          if(membershipRowName==membershipName){
           await membershipRow.locator('button').first().click();


           await this.deleteConfirmButton.click();
           await this.page.waitForTimeout(2000);
           await expect(this.deleteSuccessToastMessage).toHaveText('Successfully Deleted');

          }

    }


}