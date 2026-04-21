export class ClaimMenuPage{

    constructor(page){
        this.page= page;
        this.myClaimMenu = page.locator('//a[normalize-space()="My Claims"]');
        this.employeeClaimMenu = page.locator('//a[normalize-space()="Employee Claims"]');
    }

    async clickMyClaimMenu(){
        await this.myClaimMenulaimMenu.click();
    }

    async clickEmployeeClaimMenu(){
        await this.employeeClaimMenu.click();
    }
}