import { expect } from "@playwright/test";

export class PersonalDetailsPage {
    constructor(page){
        this.page= page;
        this.employeeFirstNameInputField = page.locator('//input[@placeholder="First Name"]');
        this.employeeMiddleNameInputField = page.locator('//input[@placeholder="Middle Name"]');
        this.employeeLastNameInputField = page.locator('//input[@placeholder="Last Name"]');
        
        this.employeeIDInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div[1]/div[1]/div/div[2]/input');
        this.otherIDInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div[1]/div[2]/div/div[2]/input');

        this.driverLisenceInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div[2]/div/div[1]/div[2]/input');
        this.lisenceExpirtyInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div[2]/div[2]/div/div[2]/div/div/input');

        this.nationalityList = page.locator('//div[@role="listbox"]/div/span');

        this.saveButton = page.locator('(//button[@type="submit"])[1]');
        this.successToastMessage = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]');

    
    }

    async editNamesFields(firstName,middleName,lastName){
            await this.employeeFirstNameInputField.click();
            await this.employeeFirstNameInputField.fill(firstName);
            await this.page.waitForTimeout(2000);
            this.employeeMiddleNameInputField.click();
            await this.employeeMiddleNameInputField.fill(middleName);
            await this.employeeLastNameInputField.click();
            await this.employeeLastNameInputField.fill(lastName);
            await this.saveButton.click();
            await this.page.waitForTimeout(2000);
            await expect(this.successToastMessage).toHaveText('Successfully Updated');
        }

        async editEmployeeID(employeeID,otherID){
            await this.employeeIDInputField.click();
            await this.employeeIDInputField.fill(employeeID);
            await this.otherIDInputField.click();
            await this.otherIDInputField.fill(otherID)
            await this.saveButton.click();
            await this.page.waitForTimeout(2000);
            await expect(this.successToastMessage).toHaveText('Successfully Updated');
        }
}