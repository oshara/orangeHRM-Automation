export class DependentsPage{
    constructor(page){
        this.page = page;
        this.assignedDependentsButton = page.locator('(//div[@class="orangehrm-action-header"])[1]/button');

        //Add Dependent
        this.nameInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div/div/div[2]/input');
        this.relationshipDropdown = page.locator('(//div[@class="oxd-select-wrapper"])');
        this.dateOfBirthInputField = page.locator('(//div[@class="oxd-date-wrapper"])/div/input');

        this.saveButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');

        //Attachments
        this.addAttachmentButton =page.locator('(//div[@class="orangehrm-action-header"])[2]/button');

    }
}