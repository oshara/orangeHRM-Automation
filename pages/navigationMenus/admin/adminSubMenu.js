export class AdminSubMenu {

    constructor(page) { 
        this.page= page;

        // Admin Sub Menu Locators
        this.jobMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[2]');
        this.organizationMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[3]');
        this.qualificationsMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[4]');


        // Job Sub Menu Locators
        this.jobTitleMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[2]/ul/li[1]/a');
        this.payGradesMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[2]/ul/li[2]/a');
        this.employmentStatusMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[2]/ul/li[3]');
        this.jobCategoriesMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[2]/ul/li[4]/a');
        this.workShiftsMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[2]/ul/li[5]/a');

        // Organization Sub Menu Locators
        this.generalInformationMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[3]/ul/li[1]/a');
        this.locationsMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[3]/ul/li[2]/a');
        this.structurMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[3]/ul/li[3]/a');

        // Qualifications Sub Menu Locators
        this.skillsMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[4]/ul/li[1]/a');
        this.eductionMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[4]/ul/li[2]/a');
        this.licensesMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[4]/ul/li[3]/a');
        this.languagesMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[4]/ul/li[4]/a');
        this.membershipsMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[4]/ul/li[5]/a');

        // Nationalities Sub Menu Locators
        this.nationalitiesMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[5]');

        //Corporate Branding Sub Menu Locators
        this.corporateBrandingMenu = page.locator('//div[@class="oxd-topbar-body"]/nav/ul/li[6]');

        //Configuration Sub Menu Locators
        

        
    }

    async clickJobMenu(){
        await this.jobMenu.click();
    }

    async clickJobTitleMenu(){
        await this.clickJobMenu();
        await this.jobTitleMenu.click();
    }   

    async clickPayGradeMenu(){
        await this.clickJobMenu();
        await this.payGradesMenu.click();
    }

    async clickEmploymentStatusMenu(){
        await this.clickJobMenu();
        await this.employmentStatusMenu.click();
    }

    async clickJobCategoriesMenu(){
        await this.clickJobMenu();
        await this.jobCategoriesMenu.click();
    }

    async clickWorkShiftsMenu(){
        await this.clickJobMenu();
        await this.workShiftsMenu.click();
    }

    // Organization Menu Methods
    async clickOrganizationMenu(){
        await this.organizationMenu.click();
    }

    async clickGeneralInformationMenu(){
        await this.clickOrganizationMenu();
        await this.generalInformationMenu.click();
    }

    async clickLocationsMenu(){
        await this.clickOrganizationMenu();
        await this.locationsMenu.click();
    }
    async clickStructureMenu(){
        await this.clickOrganizationMenu()  
        await this.structurMenu.click();
    }

    //Qualification Sub Menus

    async clickQualificationsMenu(){
        await this.qualificationsMenu.click();
    }
    async clickSkillsMenu(){
        await this.clickQualificationsMenu();
        await this.skillsMenu.click();
    }

    async clickEducationMenu(){
        await this.clickQualificationsMenu();
        await this.eductionMenu.click();

    }


    async clickLisencesmenu(){
        await this.clickQualificationsMenu();
        await this.licensesMenu.click();
    }

    async clickLanguagesMenu(){
        await this.clickQualificationsMenu();
        await this.languagesMenu.click();
    }

    async clickMembershipsMenu(){
        await this.clickQualificationsMenu();
        await this.membershipsMenu.click();

    }

}