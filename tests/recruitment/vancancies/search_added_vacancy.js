import { VacanciesPage } from "../../../pages/recruitment/vancancies/vacancies";
import { addNewVacancyFunc } from "./add_vacancy";

export const searchJobVacancyFunc = async(page)=>{

   const addedJobTitle =  await addNewVacancyFunc(page)

    const VacancyObj = new VacanciesPage(page);
    await VacancyObj.searchAddedVacancy(addedJobTitle);
}