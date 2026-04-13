import { QA_ENV } from "../../../configs/qa.env";
import { VacanciesPage } from "../../../pages/recruitment/vancancies/vacancies";
import { loginValid } from "../../login/login_valid"
import { navigateToRecruitmentMenu } from "../../menu-navigation/navigation_menus";
import { VacancyMenuNav } from "../../menu-navigation/recruitment-menu-navigations/recruitment_menu_navigations";

export const addNewVacancyFunc = async(page)=>{

    await loginValid(page);
    await navigateToRecruitmentMenu(page);
    await VacancyMenuNav(page);

    const VacancyObj = new VacanciesPage(page);
    await VacancyObj.addNewVacancy(QA_ENV.recruitment.vancancies.vacancyName,QA_ENV.recruitment.vancancies.jobTitle,QA_ENV.recruitment.vancancies.description,QA_ENV.recruitment.vancancies.hrDetatils,QA_ENV.recruitment.vancancies.positionCount);
    
  

}