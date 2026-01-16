import {expect} from '@playwright/test'
export class JobCategoriesPage {
    constructor(page){
        this.page= page;
        this.addJobCategoriesButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.addJobCategoriesNameInputField = page.locator('(//div[@class="oxd-form-row"])/div/div[2]/input');
        this.saveJobCategoriesButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.successToastMessageJobCategories = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]')

        this.jobcategoryCell= page.locator('//div[@class="oxd-table-card"]/div/div');
        this.jobCategoryCellInside = page.locator('//div[@class="oxd-table-card"]/div/div/div/button');


 
    }
    async addJobCategory(jobCategoryName){
            await this.addJobCategoriesButton.click();
            await this.addJobCategoriesNameInputField.fill(jobCategoryName);
            await this.saveJobCategoriesButton.click();
            await expect(this.successToastMessageJobCategories).toHaveText('Successfully Saved');

        }


    async searchAddedJobCategory(jobCategoryName){
        const matchedJob = await this.jobcategoryCell.filter({
            hasText: jobCategoryName
        })
        expect(matchedJob.locator('div')).toHaveText(jobCategoryName);
        console.log(matchedJob)
    }

    async deleteAddedJobCategory(jobCategoryName){
      const matchedJobToDelete = await this.jobCategoryCellInside.filter({
        hasText: jobCategoryName
      })

      await matchedJobToDelete.locator('i').click();
      await this.page.pause();
    }


}