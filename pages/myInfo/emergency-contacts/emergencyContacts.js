export class EmergencyContactsPage {
    constructor(page){
        this.page = page;
        this.saveEmergencyContactHeading = page.locator('//h6[normalize-space()="Save Emergency Contact"]');
        this.assignedEmergencyContactsButton = page.locator('(//button[@type="button"])[4]');
        this.nameInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[1]/div/div[2]/input');
        this.relationshipInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/div/div[2]/input');
        this.homeTelephoneInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[1]/div/div[2]/input');
        this.mobileInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/div/div[2]/input');
        this.workTelphoneInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[3]/div/div[2]/input');

        this.saveEmergencyContactButton = page.locator('//button[@type="submit"]');

        this.addAttachmentButton = page.locator('(//button[@type="button"])[6]');
        this.selectAttachmentOption = page.locator('//input[@type="file"]');

        this.commentInputField = page.locator('//textarea[@placeholder="Type comment here"]');
        this.saveAttachmentButton = page.locator('(//div[@class="oxd-form-actions"])[2]/button[2]');


    }

    async clickAddEmergencyContact(){
        await this.assignedEmergencyContactsButton.click();
    }

    async addEmergencyContact(emergencyName,relationshipName,homeTelephoneNumber,mobileNumber,workMobileNumber){
        await this.saveEmergencyContactHeading.click();
        await this.nameInputField.fill(emergencyName);
        await this.relationshipInputField.fill(relationshipName);
        await this.homeTelephoneInputField.fill(homeTelephoneNumber);
        await this.mobileInputField.fill(mobileNumber);
        await this.workTelphoneInputField.fill(workMobileNumber);

        await this.saveEmergencyContactButton.click();
        


    }
}