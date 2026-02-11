import { expect } from "@playwright/test";
export class StructurePage {
    constructor(page) {
        this.page = page;
        this.sturctureToggleButton = page.locator('(//div[@class="oxd-switch-wrapper"])/label/input[@type="checkbox"]');
        this.addStructureButton = page.locator('(//div[@class="org-root-container"])/button');
        this.unitIdInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/input');
        this.nameInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/input');
        this.descriptionInputField = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[2]/textarea');
        this.saveNewStructureButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.successToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');

        this.structureTableRows = page.locator('//div[@class="oxd-tree-node-content"]');
        this.structureTableRows1 = page.locator('(//div[@class="oxd-tree-node-content"])/div[1]/div[2]')
        this.structureTableDeleteButtons = page.locator('//div[@class="org-action"]/button[1]');

        this.deleteOption = page.locator('(//div[@class="orangehrm-modal-footer"])/button[2]');

    }

    async clickEditToggle() {
        await this.sturctureToggleButton.click();
    }

    async addNewStructure(unitId, structureName, structureDescription) {
        await this.clickEditToggle();
        await this.addStructureButton.click();
        await this.unitIdInputField.fill(unitId);
        await this.nameInputField.fill(structureName);
        await this.descriptionInputField.fill(structureDescription);
        await this.saveNewStructureButton.click();
        await expect(this.successToastMessage).toHaveText('Successfully Saved');
    }


    async searchAddedStructure(structureName) {

        await this.page.waitForTimeout(4000);
        const rows = await this.structureTableRows.count();
        console.log(rows)
        for (let x = 0; x < rows; x++) {
            const cellText = await this.structureTableRows.nth(x).innerText();
            if (cellText == structureName) {
                expect(cellText).toBe(structureName);
                console.log(cellText);
                break;
            }

        }

    }

    async deleteAddedStructure(structureName) {

        await this.page.waitForTimeout(4000);
         await this.clickEditToggle();
        const row = await this.structureTableRows1.count();
        for (let r = 0; r < row; r++) {
            const rowData = await this.structureTableRows1.nth(r).innerText();
            console.log("row data" + rowData);
            if (rowData == structureName) {
                const cellData = this.structureTableRows1.nth(r).locator('button').first();
                await cellData.click();
                await this.deleteOption.click();

                break;
            }

        }

    }

}