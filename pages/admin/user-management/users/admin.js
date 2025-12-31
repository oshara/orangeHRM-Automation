import {expect} from '@playwright/test'

export class AdminPage {
    constructor(page) {
        this.page = page;
        this.searchBar = page.locator('//div[@class="oxd-form-row"]/div/div[1]/div/div[2]/input');
        this.addUserButton = page.locator('//div[@class="orangehrm-header-container"]/button');
        this.userRolesDropdown = page.locator('(//div[@class="oxd-select-wrapper"])[1]');
        this.userDropdownRoles = page.locator('(//div[@class="oxd-select-dropdown --positon-bottom"])/div');
        this.userStatusDropdown = page.locator('(//div[@class="oxd-select-wrapper"])[2]');
        this.userStatus = page.locator('//div[@role="listbox"]/div');
        this.employeeNameInput = page.locator('(//div[@class="oxd-autocomplete-wrapper"])/div/input');
        this.employeeNameInputDropdown= page.locator('//div[@role="listbox"]/div/span');
        this.userNameInput = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"])[4]/div[2]/input');
        this.passwordInput = page.locator('(//input[@type="password"])[1]');
        this.confirmPasswordInput = page.locator('(//input[@type="password"])[2]');

        this.saveButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');

        this.searchUserByUsername= page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"][1])/div/div[2]/input')
        this.searchUserButton = page.locator('//div[@class="oxd-form-actions"]/button[2]');
        this.userNameText = page.locator('//div[@class="oxd-table-card"]/div/div[2]/div[1]');

        //delete user locators
        this.deleteUserButton = page.locator('(//div[@class="oxd-table-cell-actions"])/button[1]');
        this.confirmDeleteButton = page.locator('//div[@class="orangehrm-modal-footer"]/button[2]');
        this.deleteSuccessMessage = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]');
    }


    async searchUser(username) {
        await this.searchBar.fill(username);
    }


    async clickAddUser() {
        await this.addUserButton.click();
    }


    async selectUserRole(userRole) {
        await this.userRolesDropdown.click();

        const count = await this.userDropdownRoles.count();
        for (let i = 0; i < count; i++) {
            const role = await this.userDropdownRoles.nth(i).textContent();
            console.log(role);
            if (role.includes(userRole)) {
                await this.userDropdownRoles.nth(i).click();
                break;
            }
               }

    }

    async selectStatus(statusContent) {
        await this.userStatusDropdown.click();

        const statusCount = await this.userStatus.count();
        for (let x = 0; x < statusCount; x++) {
            const status = await this.userStatus.nth(x).textContent();
            if (status.includes(statusContent)) {
                console.log(statusContent)
                await this.userStatus.nth(x).click();
                break;
            }
        }
    }

    async enterEmployeeName(empName) {
        await this.employeeNameInput.fill(empName);
        await this.page.waitForTimeout(4000);
        const empCount = await this.employeeNameInputDropdown.count();
        for (let j = 0; j < empCount; j++) {
            const empText = await this.employeeNameInputDropdown.nth(j).textContent();
            if (empText.includes(empName)) {
                await this.employeeNameInputDropdown.nth(j).click();
                break;
            }
        }   
    }

    async enterUserName(userName) {
        await this.userNameInput.fill(userName);
    }

    async enterPassword(password, confirmPassword) {
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    async clickSaveBtn() {
        await this.saveButton.click();
        await this.page.waitForTimeout(3000);
    }

    async searchUserByUserNameFunc(username){
        await this.searchUserByUsername.fill(username);
    }

    async clickSearchUserBtn(){
        await this.searchUserButton.click();
    }

    async verifyAddedUser(username){
      
       await expect(this.userNameText).toHaveText(username);
       const textContent = await this.userNameText.textContent();
       console.log(textContent);
    }

    async deleteUserFun(){
        await this.deleteUserButton.click();
        await this.confirmDeleteButton.click();
        
        await expect(this.deleteSuccessMessage).toHaveText('Successfully Deleted');
        const deleteSuccessMess = await this.deleteSuccessMessage.textContent();
        console.log(deleteSuccessMess);
    }



}