import {expect} from '@playwright/test'
export class JobCategoriesPage {
    constructor(page){
        this.page= page;
        this.addJobCategoriesButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.addJobCategoriesNameInputField = page.locator('(//div[@class="oxd-form-row"])/div/div[2]/input');
        this.saveJobCategoriesButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.successToastMessageJobCategories = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]')

        this.jobCategoryRow = page.locator('//div[@class="oxd-table-card"]');
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
      // Wait for any table card to be visible first
      await this.jobcategoryCell.first().waitFor({ state: 'visible', timeout: 10000 });
      
      // Find the row containing the job category name
      const matchedRow = this.jobCategoryRow.filter({
        hasText: jobCategoryName
      });
      
      // Wait for this specific row to be visible
      await matchedRow.waitFor({ state: 'visible', timeout: 10000 });

      
      // Find and click the delete button/icon within the row
      const deleteButton = matchedRow.locator('button i').first();
      await deleteButton.click();
      await this.page.pause();

      
    }


}