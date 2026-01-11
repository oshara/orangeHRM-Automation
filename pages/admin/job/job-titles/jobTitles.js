import {expect} from '@playwright/test';
export class JobTitlePage {
    constructor(page) {
        this.page = page;
        this.addJobTitleButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.jobTitleInputField = page.locator('(//div[@class="oxd-form-row"])[1]/div/div[2]/input');
        this.jobDescriptionInputField = page.locator('(//div[@class="oxd-form-row"])[2]/div/div[2]/textarea');
        this.jobSpecificationUploadField = page.locator('(//div[@class="oxd-form-row"])[3]/div/div[2]/input[@type="file"]');
        this.addNoteInputField = page.locator('(//div[@class="oxd-form-row"])[4]/div/div[2]/textarea');
        this.jobTitleSaveButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');
        this.jobTitleSuccessToast= page.locator('//div[@class="oxd-toast-container oxd-toast-container--bottom"]/div/div[1]/div[2]/p[2]');

        //job table elements
        this.jobTableRows = page.locator('(//div[@class="oxd-table"])/div[2]/div');
        this.jobTableColumns = page.locator('//div[@role="columnheader"]');
        this.JobTableCell = page.locator('//div[@class="oxd-table-cell oxd-padding-cell"]');
        this.JobTableCheckbox = page.locator('//div[@class="oxd-checkbox-wrapper"]/label/input')
    }

 async addJobTitleBtn(){
    await this.addJobTitleButton.click();
 }

 async fillJobTitle(jobTitleName){
    await this.jobTitleInputField.fill(jobTitleName);

}

async fillJobDescription(jobDescriptionName){
    await this.jobDescriptionInputField.fill(jobDescriptionName)

}

async uploadJobSpecification(jobSpecFilePath){
    await this.jobSpecificationUploadField.setInputFiles(jobSpecFilePath)
}

async fillAddNote(addNoteText){
    await this.addNoteInputField.fill(addNoteText);
}


async savejobTilteBtn(){
    await this.jobTitleSaveButton.click();
    await this.page.waitForTimeout(2000);
}

async getSuccessToastMessage(SuccessMessage){
    await expect(this.jobTitleSuccessToast).toHaveText(SuccessMessage);
    const SuccessMessageText =await this.jobTitleSuccessToast.textContent();
    console.log(SuccessMessageText)
}

async jobTableFunc(){

    await this.jobTableRows.first().waitFor();
    const rowCount = await this.jobTableRows.count();
    const columnCount = await this.jobTableColumns.count()

    console.log("Number of rows in the Job Table is "+ rowCount);
    console.log("Number of coumns in the Job Table is "+ columnCount);
}

async searchJobInTable(JobTitleName){
    
    await this.jobTableRows.first().waitFor();
    const matchingRow =await this.JobTableCell.filter({
        hasText: JobTitleName,

    })
     await this.page.waitForTimeout(2000);

    const matchingCheckBox = await matchingRow.locator(this.JobTableCell);
    await matchingCheckBox.click();  

}

async printJobTable(){

    const rowCount = await this.jobTableRows.count();
    const columnCount = await this.jobTableColumns.count()/rowCount;
    console.log("aaaaaaaaaaaaaaaaaa");

   
   console.log("bbbbbbbbbbbbbbbb");
    await this.page.pause();

}
}