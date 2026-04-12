export class RecruitmentMenu {
    constructor(page){
        this.page=page;
        this.vacancyMenu = page.locator('(//nav[@role="navigation"])[2]/ul/li[2]');

    }

    async clickVacancyMenu(){
        await this.vacancyMenu.click();
    }
}