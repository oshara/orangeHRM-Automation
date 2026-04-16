import { RecruitmentMenu } from "../../../pages/navigationMenus/recruitement/recuritementMenu";



export const CandidateMenuNav = async(page)=>{
    const RecruitmentObj = new RecruitmentMenu(page);
    await RecruitmentObj.clickCandidateMenu(page);
}
export const VacancyMenuNav =async(page)=>{

    const RecruitmentObj = new RecruitmentMenu(page)
    await RecruitmentObj.clickVacancyMenu();
}