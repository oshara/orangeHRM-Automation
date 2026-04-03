import { expect } from "@playwright/test";

export class ContactDetailsPage {
    constructor(page){
        this.page=page;

        //Addres Details Section
        this.addressHeading = page.locator('//form[@class="oxd-form"]/h6[1]');
        this.street1InputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[1]/div/div[2]/input');
        this.street2InputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/div/div[2]/input');
        this.cityInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[3]/div/div[2]/input');
        this.state = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[4]/div/div[2]/input');
        this.zipCode = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[5]/div/div[2]/input');
        
        this.countryDropDown = page.locator('(//div[@class="oxd-select-wrapper"])');
        this.countryList = page.locator('//div[@role="listbox"]/div');

        //Telephone
        this.homeNumber = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[1]/div/div[2]/input');
        this.mobileNumber = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/div/div[2]/input');
        this.workNumber = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[3]/div/div[2]/input');

        //Email
        this.workEmail = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[1]/div/div[2]/input');
        this.otherEmail = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[2]/div/div[2]/input');


        this.saveContactDeatilsButton = page.locator('(//div[@class="oxd-form-actions"])[1]/button');
        this.saveSuccessToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');

        //Add Attachment
        this.addAttachmentButton = page.locator('(//div[@class="orangehrm-action-header"])/button');
        this.uploadAttachmentButton = page.locator('//input[@type="file"]');

        this.commentInputField = page.locator('//textarea[@placeholder="Type comment here"]');
        this.saveAttachmentButton = page.locator('(//div[@class="oxd-form-actions"])[2]/button[2]');


    }


       async saveContactDetails(){
        await this.saveContactDeatilsButton.click();
        await expect(this.saveSuccessToastMessage).toHaveText('Successfully Updated');

       }
       async fillAddressDetails(address1,address2,city,state,zipCode,country){
            await this.addressHeading.click();
            await this.street1InputField.fill(address1);
            await this.page.waitForTimeout(2000);
            await this.street2InputField.fill(address2);
            await this.page.waitForTimeout(2000);
            await this.cityInputField.fill(city);
            await this.page.waitForTimeout(2000);
            await this.state.fill(state);
           
            await this.zipCode.fill(zipCode);
         

            await this.countryDropDown.click();

            const countryListCount = await this.countryList.count();

            for(let x=0; x<countryListCount;x++){
                const countryName = await this.countryList.nth(x).innerText();
                if( countryName == country){
                    await this.countryList.nth(x).click();
                    break;
                }
            }

            await this.saveContactDetails();
        }

        async fillTelephoneDetails(homeTelephoneNumber,mobileNumber,workMobileNumber){
            await this.addressHeading.click();
            await this.homeNumber.fill(homeTelephoneNumber);
            await this.page.waitForTimeout(1000);

            await this.mobileNumber.fill(mobileNumber);
            await this.page.waitForTimeout(1000);

            await this.workNumber.fill(workMobileNumber);
            await this.page.waitForTimeout(1000);

            await this.saveContactDetails();
        }

        async fillEmailAddress(workEmailAddress,otherEmailAddress){
            await this.addressHeading.click();
            await this.workEmail.fill(workEmailAddress);
            await this.page.waitForTimeout(1000);
            await this.otherEmail.fill(otherEmailAddress);
            await this.page.waitForTimeout(1000);
        
            await this.saveContactDetails();
            
        }

        async addAttachment(attachmentpath,comment){
            await addAttachmentButton.click();
            await uploadAttachmentButton.setInputFiles(attachmentpath);
            await this.page.waitForTimeout(5000);

            await commentInputField.fill(comment);

            await this.saveAttachmentButton.click();
             await expect(this.saveSuccessToastMessage).toHaveText('Successfully Saaved');
        }


        
}
