import { expect } from "@playwright/test";
export class SkillsPage {
    constructor(page) {
        this.page = page;
        this.addNewSkillButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.addNameInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/input');
        this.addDescriptionINputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/textarea');
        this.saveSkillButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.skillAddedSuccessToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');

        this.skillNameInTheTable = page.locator('//div[@class="oxd-table-card"]/div');


    }


    async addNewSkill(skillName, description) {
        await this.page.waitForTimeout(4000);
        await this.addNewSkillButton.click();
        await this.addNameInputField.fill(skillName);
        await this.addDescriptionINputField.fill(description);
        await this.saveSkillButton.click();
        //n await this.page.waitForTimeout(4000);
        await expect(this.skillAddedSuccessToastMessage).toHaveText('Successfully Saved')
    }


    async searchAddedSkill(skillName) {
        await this.page.waitForTimeout(4000);

        const rowCount = await this.skillNameInTheTable.count();

        const skillRow = this.page.locator('//div[@class="oxd-table-card"]/div/div/div', {
            hasText: skillName

        });
        expect(skillRow).toHaveText(skillName);
        console.log(skillRow)
    }

    async deleteAddedSkill(skillName) {
        await this.page.waitForTimeout(4000);   
        const skillRow =this.page.locator('//div[@class="oxd-table-card"]/div/div/div', {
            hasText: skillName
    
          });
          expect(skillRow).toBeVisible();

          await skillRow.locator('xpath=.//button//i').click();
       
            await this.page.waitForTimeout(2000);
        }

}