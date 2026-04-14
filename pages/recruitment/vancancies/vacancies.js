import { expect } from "@playwright/test";
export class VacanciesPage{
    constructor(page){
        this.page= page;
        this.addVacancyButton = page.locator('//div[@class="orangehrm-header-container"]/button');
        
        // Vacancy Name 
        this.vacancyNameInputField = page.locator('//form[@class="oxd-form"]/div[1]/div[1]/div/div[2]/input');

        //Job Title
        this.jobTitleOption = page.locator('//div[@class="oxd-select-wrapper"]');
        this.jobList = page.locator('//div[@role="option"]');  

        //Description
        this.descriptionInputField = page.locator('//form[@class="oxd-form"]/div[2]/div/div/div[2]/textarea');

        //Hiring Manager Input Field
        this.hiringManagerInpurField = page.locator('//form[@class="oxd-form"]/div[3]/div[1]/div/div[2]//div/div[1]/input');
        this.hiringMangerHintList = page.locator('//div[@role="option"]');

        //Number of Positions
        this.numberOfPositonsInputField = page.locator('//form[@class="oxd-form"]/div[3]/div[2]/div/div/div/div[2]/input');

        //Save button
        this.saveButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');
        
        this.saveSuccessToastMessage = page.locator('(//div[@class="oxd-toast-start"])/div[2]/p[2]');

        //search the Added Vacancy using the Job Title
        this.jobTitleSearchButton = page.locator('(//div[@class="oxd-select-wrapper"])[1]');
        this.jobTitlesOptions = page.locator('//div[@role="option"]');

        //search button
        this.searchBarButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');

        //vacancy table columns
        this.vacancyTableColoumns = page.locator('//div[@role="cell"]');
    
    }


    async clickAddVacancyBtn(){
        await this.addVacancyButton.click();
    }

    async enterVacancyName(vacancyName){
        await this.vacancyNameInputField.fill(vacancyName);
    }

    async selectJobTitle(jobTitle){
        console.log(jobTitle)
        await this.jobTitleOption.click();
        await this.page.waitForTimeout(2000);

        const jobListCount = await this.jobList.count();

        for(let x=0; x<jobListCount; x++){
    
            const jobText = await this.jobList.nth(x).innerText();
            if(jobText===jobTitle){
                await this.jobList.nth(x).click();
                break;
            }
        }
    
    }

    async enterJobDescription(description){
        await this.descriptionInputField.fill(description)
    }

    async enterHiringManagerDetails(hmDetails){
        await this.hiringManagerInpurField.fill(hmDetails);
        await this.page.waitForTimeout(2000);

        const hintCount = await this.hiringMangerHintList.count();

        for(let x =0; x<hintCount;x++){
            const hintText = await this.hiringMangerHintList.nth(x).innerText();
            if(hintText== hmDetails){
                await this.hiringMangerHintList.nth(x).click();
                break;
            }
        }


    }

    async enterPostionNumber(positionCount){
        await this.numberOfPositonsInputField.fill(positionCount);
    }

    async saveVacancyBtn(){
        await this.saveButton.click();
        await this.page.waitForTimeout(2000);
        // console.log(await this.saveSuccessToastMessage.innerText());
        //  await expect(this.saveSuccessToastMessage).toHaveText('Successfully Saved');   
    }


    async addNewVacancy(vacancyName,jobTitle,jobDescription,hmDetails,positionCount){
        await this.clickAddVacancyBtn();
        await this.enterVacancyName(vacancyName);
        await this.selectJobTitle(jobTitle);
        await this.enterJobDescription(jobDescription);
        await this.enterHiringManagerDetails(hmDetails);
        await this.enterPostionNumber(positionCount);
        await this.saveVacancyBtn();

    }

    async searchAddedVacancy(jobTitle){
        await this.jobTitleSearchButton.click();
        await this.page.waitForTimeout(4000);
        const jobTitlesCount = await this.jobTitlesOptions.count();

        for(let x =0; x<jobTitlesCount; x++){
            const jobTitleText = await this.jobTitlesOptions.nth(x).innerText();
            if(jobTitleText ==jobTitle){
                await this.jobTitlesOptions.nth(x).click();
                break;
            }
        }

        await this.searchBarButton.click();

        const correctJobColumn = await this.vacancyTableColoumns.filter({
            hasText: jobTitle,
        }).first();


        const jobName = await correctJobColumn.innerText();
        console.log("Searched Job Title Name is "+ jobName);
    }
}