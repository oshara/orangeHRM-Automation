import { expect } from "@playwright/test";
export class EmergencyContactsPage {
    constructor(page) {
        this.page = page;
        this.saveEmergencyContactHeading = page.locator('//h6[normalize-space()="Save Emergency Contact"]');
        this.assignedEmergencyContactsButton = page.locator('(//button[@type="button"])[4]');
        this.nameInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[1]/div/div[2]/input');
        this.relationshipInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/div/div[2]/input');
        this.homeTelephoneInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[1]/div/div[2]/input');
        this.mobileInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/div/div[2]/input');
        this.workTelphoneInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[3]/div/div[2]/input');

        this.saveEmergencyContactButton = page.locator('//button[@type="submit"]');
        this.toastSuccessMessage = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]');

        this.addAttachmentButton = page.locator('(//div[@class="orangehrm-action-header"])[2]/button');
        this.selectAttachmentOption = page.locator('//input[@type="file"]');

        this.commentInputField = page.locator('//textarea[@placeholder="Type comment here"]');
        this.saveAttachmentButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');



        // Emergency Contact Table
        this.emergencyTableColumns = page.locator('//div[@role="row"]/div/div');

    }

    async clickAddEmergencyContact() {
        await this.assignedEmergencyContactsButton.click();
    }

    async addEmergencyContact(emergencyName, relationshipName, homeTelephoneNumber, mobileNumber, workMobileNumber) {
        await this.assignedEmergencyContactsButton.click();
        await this.saveEmergencyContactHeading.click();
        await this.nameInputField.fill(emergencyName);
        await this.relationshipInputField.fill(relationshipName);
        await this.homeTelephoneInputField.fill(homeTelephoneNumber);
        await this.mobileInputField.fill(mobileNumber);
        await this.workTelphoneInputField.fill(workMobileNumber);



        await this.saveEmergencyContactButton.click();
        await expect(this.toastSuccessMessage).toHaveText('Successfully Saved');

    }

    async addAttachment(filePath, comment) {
        
        await this.addAttachmentButton.click();
        await this.selectAttachmentOption.setInputFiles(filePath);

        await this.commentInputField.fill(comment);

        await this.saveAttachmentButton.click();
    
        await expect(this.toastSuccessMessage).toHaveText('Successfully Saved');


    }

    async searchAddedEmergencyContact(emergencyContactName){
        const correctColumn = await this.emergencyTableColumns.filter({
            hasText:emergencyContactName
        }).first();
        const emergencyText = await correctColumn.innerText();
        console.log("Newly Added Emergency Contact Name is "+emergencyText);
        }
}