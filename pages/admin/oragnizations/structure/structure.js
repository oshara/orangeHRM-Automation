import { expect } from "@playwright/test";
export class StructurePage {
    constructor(page){
        this.page = page;
        this.sturctureToggleButton = page.locator('(//div[@class="oxd-switch-wrapper"])/label/input[@type="checkbox"]');
        this.addStructureButton = page.locator('(//div[@class="org-root-container"])/button');
        this.unitIdInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/input');
        this.nameInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/input');
        this.descriptionInputField = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[2]/textarea');
        this.saveNewStructureButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.successToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');
        
    }

    async clickEditToggle(){
        await this.sturctureToggleButton.click();
    }

    async addNewStructure(unitId,structureName,structureDescription){
        await this.clickEditToggle();
        await this.addStructureButton.click();
        await this.unitIdInputField.fill(unitId);
        await this.nameInputField.fill(structureName);
        await this.descriptionInputField.fill(structureDescription);
        await this.saveNewStructureButton.click();
        await expect(this.successToastMessage).toHaveText('Successfully Saved');
    }

    
}