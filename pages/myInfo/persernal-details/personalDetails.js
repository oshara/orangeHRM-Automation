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

    
    }

    async editNamesFields(firstName,middleName,lastName){
            await this.employeeFirstNameInputField.fill(firstName);
            await this.employeeMiddleNameInputField.fill(middleName);
            await this.employeeLastNameInputField.fill(lastName);
            await this.saveButton.click();
        }
}