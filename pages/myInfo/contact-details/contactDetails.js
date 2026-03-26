export class ContactDetailsPage {
    constructor(page){
        this.page=page;

        //Addres Details Section
        this.street1InputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[1]/div/div[2]/input');
        this.street2InputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/div/div[2]/input');
        this.stree3InputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[3]/div/div[2]/input');
        this.state = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[4]/div/div[2]/input');
        this.zipCode = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[5]/div/div[2]/input');
        
        this.countryDropDown = page.locator('(//div[@class="oxd-select-wrapper"])');
        this.countryList = page.locator('//div[@role="listbox"]/div');

        //Telephone
        this.homeNumber = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[1]/div/div[2]/input');
        this.mobileNumber = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/div/div[2]/input');
        this.workNumber = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[3]/div/div[2]/input');

        //Email
        this.workEmail = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[1]/div/div[2]');
        this.otherEmail = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[2]/div/div[2]');


        this.saveContactDeatilsButton = page.locator('(//div[@class="oxd-form-actions"])[1]/button');

        //Add Attachment
        this.addAttachmentButton = page.locator('(//div[@class="orangehrm-action-header"])/button');
        this.uploadAttachmentButton = page.locator('//input[@type="file"]');

        this.commentInputField = page.locator('//textarea[@placeholder="Type comment here"]');
        this.saveButton = page.locator('(//div[@class="oxd-form-actions"])[2]/button[2]');

        

    }
}