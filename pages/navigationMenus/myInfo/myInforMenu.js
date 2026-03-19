export class MyInfoPage {
    constructor(page){
        this.page = page;
        this.contactDetailsMenu = page.locator('//a[contains(text(),"Contact Details")]');
        this.emergencyContactsMenu= page.locator('//a[contains(text(),"Emergency Contacts")]');
        this.dependentsMenu = page.locator('//a[contains(text(),"Dependents")] ');
        this.imigrationMenu = page.locatro('//a[contains(text(),"Immigration")]');
        this.jobMenu = page.locator('//a[contains(text(),"Job")]');
        this.salaryMenu = page.locator('//a[contains(text(),"Salary")]');
        this.reportToMenu = page.locator('//a[contains(text(),"Report-to")]');
        this.qualificationsMenu = page.locator('//a[contains(text(),"Qualifications")]');
        this.membershipsMenu = page.locator('//a[contains(text(),"Memberships")]');
    }

    async clickContactDetailsMenu(){
        await this.contactDetailsMenu.click();
    }

    async clickEmergencyContactMenu(){
        await this.emergencyContactsMenu.click();
    }

    async dependentsMenuClick(){
        await this.dependentsMenu.click();
    }

    async clickImigrationMenu(){
        await this.imigrationMenu.click();
    }

    async clickJobMenu(){
        await this.jobMenu.click();
    }

    async clickSalaryMenu(){
        await this.salaryMenu.click();
    }

    async clickReportToMenu(){
        await this.reportToMenu.click();
    }

    async clickQualificationsMenu(){
        await this.qualificationsMenu.click();
    }

    async clickMembershipsMenu(){
        await this.membershipsMenu.click();
    }


}