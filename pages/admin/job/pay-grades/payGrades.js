import {expect} from '@playwright/test';
export class PayGradePage {
    constructor(page) {
        this.page = page;
        this.addPayGradeButtn = page.locator('//div[@class="orangehrm-header-container"]/div/button');
        this.payGradeNameInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])/div/div[2]/input');
        this.payGradeSaveButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.currencyAddButton = page.locator('(//div[@class="orangehrm-action-header"])/button');
        this.currencyDropDownButton = page.locator('//div[@class="oxd-select-wrapper"]');
        this.currencyDropDownField = page.locator('//div[@class="oxd-select-dropdown --positon-bottom"]/div');
        this.minimumSalaryInputField = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"])[3]/div[2]/input');
        this.maximumSalaryInputField = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"])[4]/div[2]/input');
        this.editCurrencySaveButton = page.locator('(//div[@class="oxd-form-actions"])[2]/button[2]');

        this.payGradeTableRows = page.locator('//div[@class="oxd-table-card"]');
        this.payGradeCells = page.locator('//div[@class="oxd-table-card"]/div/div/div');
        this.deleteJobButton = page.locator('//div[@class="oxd-table-cell oxd-padding-cell"]/div/button');

        this.deletePayGradeButton = page.locator('//div[@class="orangehrm-modal-footer"]/button[2]');
        this.deleteSuccessToastMessage = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]');
    }


    async addPayGrade(payGradeName) {
        await this.addPayGradeButtn.waitFor();
        await this.addPayGradeButtn.click();
        await this.payGradeNameInputField.fill(payGradeName);
        await this.payGradeSaveButton.click();
        // await this.page.waitForTimeout(5000);

    }

    async addCurrencyToGrade(currencyValue) {

        await this.currencyAddButton.click();
        await this.page.waitForTimeout(2000);
        await this.currencyDropDownButton.click();
        await this.page.waitForTimeout(2000);
        await this.currencyDropDownField.first().waitFor();
        const currencyCount = await this.currencyDropDownField.count();
        console.log(currencyCount);
        for (let x = 0; x < currencyCount; x++) {
            const currencyName = await this.currencyDropDownField.nth(x).textContent();
            if (currencyName.includes(currencyValue)) {
                await this.currencyDropDownField.nth(x).click();
                break;
            }
        }

    }

    async fillMinimumSalary(minSalary) {
        await this.minimumSalaryInputField.fill(minSalary);
    }

    async fillMaximumSalary(maxSalary) {
        await this.maximumSalaryInputField.fill(maxSalary);
    }

    async saveCurrencyButton() {
        await this.editCurrencySaveButton.click();
    }

    async findAddedPayGrade(payGradeName) {
    
        const matchedRow = this.payGradeTableRows.filter({
            //has:this.page.locator('//div[@class="oxd-table-card"]/div/div'),
            hasText: payGradeName

        })

    

    }

    async deleteCreatedPayGrade(payGradeName) {

        const matchedRowforJob = this.payGradeTableRows.filter({
            hasText: payGradeName
            
        })

        await matchedRowforJob.locator('//button[1]').click();


        await this.deletePayGradeButton.click();
     

        await expect(this.deleteSuccessToastMessage).toHaveText('Successfully Deleted');

    }
  
}