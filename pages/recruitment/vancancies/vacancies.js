export class VacanciesPage{
    constructor(page){
        this.page= page;
        this.addVacancyButton = page.locator('//div[@class="orangehrm-header-container"]/button');
        
        // Vacancy Name 
        this.vacancyNameInputField = page.locator('//form[@class="oxd-form"]/div[1]/div[1]/div/div[2]/input');

        //Job Title
        this.jobTitleOption = page.locator('//div[@class="oxd-select-wrapper"]');
        this.jobList = page.locator('//div[@role="listbox"]/div');  

        //Description
        this.descriptionInputField = page.locator('//form[@class="oxd-form"]/div[2]/div/div/div[2]/textarea');

        //Hiring Manager Input Field
        this.hiringManagerInpurField = page.locator('//form[@class="oxd-form"]/div[3]/div[1]/div/div[2]//div/div[1]/input');

        //Number of Positions
        this.numberOfPositonsInputField = page.locator('//form[@class="oxd-form"]/div[3]/div[2]/div/div/div/div[2]/input');

        //Save button
        this.saveButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');

    }


    async clickAddVacancyBtn(){
        await this.addVacancyButton.click();
    }

    async enterVacancyName(vacancyName){
        await this.vacancyNameInputField.fill(vacancyName);
    }

    async selectJobTitle(jobTitle){
        await this.jobTitleOption.click();

        const jobListCount = await this.jobList.count();

        for(let x=0; x<jobListCount; x++){
            const jobText = await jobListCount.nth(x).innerText();
            if(jobText==jobTitle){
                await jobListCount.nth(x).click();
                break;
            }
        }
    
    }

    async enterJobDescription(description){
        await this.descriptionInputField.fill(description)
    }

    async enterHiringManagerDetails(hmDetails){
        await this.hiringManagerInpurField.fill(hmDetails);
    }

    async enterPostionNumber(positionCount){
        await this.numberOfPositonsInputField.fill(positionCount);
    }

    async saveVacancyBtn(){
        await this.saveButton.click();
         await expect(this.saveSuccessToastMessage).toHaveText('Successfully Saved');
    }


    async addNewVacany(vacancyName,jobTitle,jobDescription,hmDetails,positionCount){
        await this.clickAddVacancyBtn();
        await this.enterVacancyName(vacancyName);
        await this.selectJobTitle(jobTitle);
        await this.enterJobDescription(jobDescription);
        await this.enterHiringManagerDetails(hmDetails);
        await this.enterPostionNumber(positionCount);
        await this.saveVacancyBtn();

    }
}