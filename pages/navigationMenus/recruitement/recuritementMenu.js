export class RecruitmentMenu {
    constructor(page){
        this.page=page;
        this.candidateMenu = page.locator('(//nav[@role="navigation"])[2]/ul/li[1]')
        this.vacancyMenu = page.locator('(//nav[@role="navigation"])[2]/ul/li[2]');

    }

    async clickCandidateMenu(){
        await this.candidateMenu.click();
    }

    async clickVacancyMenu(){
        await this.vacancyMenu.click();
    }
}