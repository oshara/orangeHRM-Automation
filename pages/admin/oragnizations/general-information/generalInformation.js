export class GeneralInformationPage {
    constructor(page){
        this.page = page;
        this.editGeneralInfoButton = page.locator('//div[@class="oxd-switch-wrapper"]/label/input');
        this.organizationNameInputField = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"])[1]/div[2]/input');
        this.numberofEmployeesInputField = page.locator('//div[@class="oxd-input-group"]/div[2]/p');
        this.registrationNumberInputField = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"])[2]/div[2]/input');
        this.taxIdInputField = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"])[3]/div[2]/input');
        this.phoneInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[4]/div/div[2]/input');
        this.faxInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[5]/div/div[2]/input');
        this.emailInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[6]/div/div[2]/input');
        this.addressFieldInputField1 =page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[7]/div/div[2]/input');
        this.addressFieldInputField2 = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[8]/div/div[2]/input');
        this.cityInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[9]/div/div[2]/input');
        this.stateInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[10]/div/div[2]/input');
        this.zipCodeInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[11]/div/div[2]/input');
        this.countryDropdownButton = page.locator('//div[@class="oxd-select-wrapper"]');
        this.countryDropdownList = page.locator('//div[@role="listbox"]/div/span');
        this.notesTextAreaField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[13]/div/div[2]');
        this.saveGeneralInforButton = page.locator('(//div[@class="oxd-form-actions"])/button');
 
    }


    async editGenerationalInformation(organizationName,employeeNumber,registrationNumber,taxIdNumber,phoneNumber,faxNumber,email,address1,address2,cityName,stateName,zipCode,country){
        await this.editGeneralInfoButton.click();
        await this.organizationNameInputField.fill(organizationName);
        await this.numberofEmployeesInputField.type(employeeNumber)
        await this.registrationNumberInputField.fill(registrationNumber);
        await this.taxIdInputField.fill(taxIdNumber);
        await this.phoneInputField.fill(phoneNumber);
        await this.faxInputField.fill(faxNumber);
        await this.emailInputField.fill(email);
        await this.addressFieldInputField1.fill(address1);
        await this.addressFieldInputField2.fill(address2);
        await this.cityInputField.fill(cityName);
        await this.stateInputField.fill(stateName);
        await this.zipCodeInputField.fill(zipCode);

        await this.countryDropdownButton.click();

        const countryCount = await this.countryDropdownList.count();
        console.log('Total Country Count is ' + countryCount);



    }



}

