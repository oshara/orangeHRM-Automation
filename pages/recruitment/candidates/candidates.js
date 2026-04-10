export class CandidatesPage{
    constructor(page){
        this.page= page;
        this.addCandidateButton = page.locator('//div[@class="orangehrm-header-container"]/button');

        //Name Locators
        this.firstNameInputField = page.locator('//input[@name="firstName"]');
        this.middleNameInputField = page.locator('//input[@name="middleName"]');
        this.lastNameInputField = page.locator('//input[@name="lastName"]');

        //Vacancy Drop Down
        this.vacancyDropDown = page.locator('//div[@class="oxd-select-wrapper"]');
        this.vacancyList = page.locator('//div[@role="listbox"]/div');

        //Email
        this.emailInputField = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[1]/div/div[2]/input');

        //Contact Number
        this.contactNumberInputField = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[2]/div/div[2]/input');

        //Resume
        this.resumeOption = page.locator('//input[@type="file"]');

        //Keywords
        this.keywords = page.locator('(//div[@class="oxd-form-row"])[5]/div/div[1]/div/div[2]/input');

        //Date of Application
        this.dateOfApplicationOption = page.locator('(//div[@class="oxd-date-input"])');

        //Notes
        this.notesInputField = page.locator('(//div[@class="oxd-form-row"])[6]/div/div/div/div[2]/textarea')


        //Consent button
        this.consentCheckBox = page.locator('//div[@class="oxd-checkbox-wrapper"]');


        // Save Button
        this.saveButton = page.locator('//button[@type="submit"]');

    }
    async addName(firstName,middleName,lastName){
        await this.firstNameInputField.fill(firstName);
        await 
        await this.middleNameInputField.fill(middleName);
        await this.lastNameInputField.fill(lastName);

    }

    async vacancySelector(vacancyName){
        await this.vacancyDropDown.click();
        const vacancyCount = await this.vacancyList.count();
        for(let x=0; x< vacancyCount; x++){
            const vacancyText = await this.vacancyList.nth(x).innerText();
            if(vacancyText==vacancyName){
                await this.vacancyList.nth(x).click();
                break;
            }
        }
    }


    async addNewCandidate(firstName,middleName,lastName,vacancyName){
        await this.addCandidateButton.click();
        await this.addName(firstName,middleName,lastName);
        await this.vacancySelector(vacancyName);



    }
}