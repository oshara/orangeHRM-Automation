import {expect} from '@playwright/test'
import { RecruitmentMenu } from '../../navigationMenus/recruitement/recuritementMenu';
import { navigateToRecruitmentMenu } from '../../../tests/menu-navigation/navigation_menus';
import { CandidateMenuNav } from '../../../tests/menu-navigation/recruitment-menu-navigations/recruitment_menu_navigations';
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
        this.dateOfApplicationOption = page.locator('(//div[@class="oxd-date-input"])/input');

        //Notes
        this.notesInputField = page.locator('(//div[@class="oxd-form-row"])[6]/div/div/div/div[2]/textarea')


        //Consent button
        this.consentCheckBox = page.locator('//div[@class="oxd-checkbox-wrapper"]');


        // Save Button
        this.saveButton = page.locator('//button[@type="submit"]');
        this.saveSuccessToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');


        //vacancy search bar to search the added candidate
        this.vacancyDropDown1 = page.locator('(//div[@class="oxd-select-wrapper"])[2]');
        this.vacancyList = page.locator('//div[@role="option"]');

        //search button
        this.searchButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');

        //vacancy table coloumn
        this.coloumns = page.locator('//div[@role="cell"]');
    }
    async addName(firstName,middleName,lastName){
        await this.firstNameInputField.fill(firstName);
        await 
        await this.middleNameInputField.fill(middleName);
        await this.lastNameInputField.fill(lastName);

    }

    async vacancySelector(vacancyName){
        await this.vacancyDropDown.click();
        await this.page.waitForTimeout(4000);
        const vacancyCount = await this.vacancyList.count();
        for(let x=0; x< vacancyCount; x++){
            const vacancyText = await this.vacancyList.nth(x).innerText();
            if(vacancyText==vacancyName){
                await this.vacancyList.nth(x).click();
                break;
            }
        }
    }

    async enterEmail(email){
        await this.emailInputField.fill(email);
    }

    async enterContactNumber(contactNumber){
        await this.contactNumberInputField.fill(contactNumber);
    }

    async addResume(filePath){
        await this.resumeOption.setInputFiles(filePath);
    }
    async enterKeyWord(keyword){
        await this.keywords.fill(keyword);
    }

    async enterDateOfApplication(dateOfApplication){
        await this.dateOfApplicationOption.fill(dateOfApplication);
    }

    async enterNotes(notes){
        await this.notesInputField.fill(notes);
    }

    async clickConsent(){
        await this.consentCheckBox.click();
    }

    async clickSaveButton(){
        await this.saveButton.click();
        await expect(this.saveSuccessToastMessage).toHaveText('Successfully Saved');
    }

    async addNewCandidate(firstName,middleName,lastName,vacancyName,email,contactNumber,filePath,keyword,dateOfApplication,notes){
        await this.addCandidateButton.click();
        await this.addName(firstName,middleName,lastName);
        await this.vacancySelector(vacancyName);
        await this.enterEmail(email),
        await this.enterContactNumber(contactNumber),
        await this.addResume(filePath);
        await this.enterKeyWord(keyword);
        await this.enterDateOfApplication(dateOfApplication);
        await this.enterNotes(notes);
        await this.clickConsent();
        await this.clickSaveButton();
        await this.page.waitForTimeout(6000);
       

    }

    async searchAddedCandidate(vacancyName){
        await CandidateMenuNav(this.page);
        await this.vacancyDropDown1.click();
        await this.page.waitForTimeout(2000);

        const vacancyCount= await this.vacancyList.count();

        for(let x =0;x< vacancyCount; x++){
            const vacancyText = await this.vacancyList.nth(x).innerText();
            if(vacancyText == vacancyName){
                await this.vacancyList.nth(x).click();
                break;
            }
        }

        await this.searchButton.click();

        const vacancyColumn = await this.coloumns.filter({
            hasText:vacancyName
        }).first();

        const selectedVacancy = await vacancyColumn.innerText();
        console.log('Searched Vacancy Name is '+ selectedVacancy);
    }
}