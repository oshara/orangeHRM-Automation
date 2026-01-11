export class EmploymentStatusPage{

    constructor(page){
        this.page= page;
        this.addEmploymentStatusButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');
        this.employmentStatusInputField = page.locator('(//div[@class="oxd-form-row"])/div/div[2]/input');
        this.employmentStatusSaveButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.employeeTableCells = page.locator('xpath=//div[@class="oxd-table-body"]/div/div/div');
        this.employeeTableCellsInside = page.locator('xpath=//div[@class="oxd-table-body"]/div/div/div');

        this.deleteEmploymentStatusButton = page.locator('//div[@class="orangehrm-modal-footer"]/button[2]');
        this.deleteSuccessToastMessage = page.locator('//div[@class="oxd-toast-start"]/div/p[2]');

    }


    async addNewEmploymentStatus(employmentStausName){
       await this.addEmploymentStatusButton.click();
        await this.employmentStatusInputField.fill(employmentStausName);
        await this.employmentStatusSaveButton.click();
    }

    async searchAddedEmployeeStatus(employeeStatusName){
    

        const matchEmployeeTableCell = await this.employeeTableCells.filter({
            hasText: employeeStatusName
        })

        if(await matchEmployeeTableCell.locator('div').textContent().then(text => text.includes(employeeStatusName))){
            console.log("Employment Status Found: "+employeeStatusName);
            return true;
        }

       
    }


    async deleteAddedEmploymentStatus(employeeStatusName){

        const matchedCell = await this.employeeTableCells.filter({
            hasText:employeeStatusName
        })


        await matchedCell.locator('//div/button[1]').click();
    
        await this.deleteEmploymentStatusButton.click();
        await expect(this.deleteSuccessToastMessage).toHaveTextContent('Successfully Deleted');
        console.log('Successfully Deleted Employment Status: '+employeeStatusName);

    }
}