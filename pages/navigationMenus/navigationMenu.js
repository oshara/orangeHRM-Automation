export class NavigationMenuPage {

    constructor(page) {
        this.page = page;
        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]');
        this.pimMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
        this.leaveMenu = page.locator('//a[@href="/web/index.php/leave/viewLeaveModule"]');
        this.timeMenu = page.locator('//a[@href="/web/index.php/time/viewTimeModule"]');
        this.recruitementMenu = page.locator('//a[@href="/web/index.php/recruitment/viewRecruitmentModule"]');
        this.myInforMenu = page.locator('//a[@href="/web/index.php/recruitment/viewRecruitmentModule"]');
        this.performanceMenu = page.locator('//a[@href="/web/index.php/performance/viewPerformanceModule"]');
        this.dashboardMenu = page.locator('//a[@href="/web/index.php/dashboard/index"]');
        
    }

    async clickAdminMenu(){
        await this.adminMenu.click();
    }

    async clickPimMenu(){
        await this.pimMenu.click();
    }

    async clickLeaveMenu(){
        await this.leaveMenu.click();
    }

    async clickTimeMenu(){
        await this.timeMenu.click();
    }

    async clickRecruitementMenu(){
            await this.recruitementMenu.click();
    }

    async clickMyInforMenu(){
        await this.myInforMenu.click();
    }

    async clickPerformanceMenu(){
        await this.performanceMenu.click()
    }

    async clickDashboardMenu(){
        await this.dashboardMenu.click();
    }
}